var imf = function () {
    var lf = 0;
    var instances = [];
    function getElementsByClass(object, tag, className) {
        var o = object.getElementsByTagName(tag);
        for (var i = 0, n = o.length, ret = []; i < n; i++)
            if (o[i].className == className) ret.push(o[i]);
        if (ret.length == 1) ret = ret[0];
        return ret;
    }
    function addEvent(o, e, f) {
        if (window.addEventListener) o.addEventListener(e, f, false);
        else if (window.attachEvent) r = o.attachEvent('on' + e, f);
    }

    function createReflexion(cont, img) {
        var flx = false;
        if (document.createElement("canvas").getContext) {
            flx = document.createElement("canvas");
            flx.width = img.width;
            flx.height = img.height;
            var context = flx.getContext("2d");
            context.translate(0, img.height);
            context.scale(1, -1);
            context.drawImage(img, 0, 0, img.width, img.height);
            context.globalCompositeOperation = "destination-out";
            var gradient = context.createLinearGradient(0, 0, 0, img.height * 2);
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
            gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
            context.fillStyle = gradient;
            context.fillRect(0, 0, img.width, img.height * 2);
        } else {
            flx = document.createElement('img');
            flx.src = img.src;
            flx.style.filter = 'flipv progid:DXImageTransform.Microsoft.Alpha(' +
                'opacity=50, style=1, finishOpacity=0, startx=0, starty=0, finishx=0, finishy=' +
                (img.height * .25) + ')';
        }
        flx.style.position = 'absolute';
        flx.style.left = '-1000px';
        cont.appendChild(flx);
        return flx;
    }
    function showPopup(imageInfo) {
        var popupContainer = document.getElementById("popupContainer");
        popupContainer.innerHTML = "";
        var popupContent = document.createElement("div");
        popupContent.className = "popup-content";
        var popupImage = document.createElement("img");
        popupImage.src = imageInfo.src;
        popupImage.alt = imageInfo.alt;
        popupImage.className = "popup-image";
        var popupText = document.createElement("div");
        popupText.textContent = imageInfo.description;
        popupText.className = "popup-text";
        // 添加关闭按钮
        var closeButton = document.createElement("span");
        closeButton.className = "popup-close";
        closeButton.innerHTML = "&times;";
        closeButton.onclick = function () {
            popupContainer.style.display = "none";
        };
        popupContent.appendChild(popupImage);
        popupContent.appendChild(popupText);
        popupContainer.appendChild(closeButton);
        popupContainer.appendChild(popupContent);
        popupContainer.style.display = "block";
    }

    function ImageFlow(oCont, size, zoom, border) {
        this.diapos = [];
        this.scr = false;
        this.size = size;
        this.zoom = zoom;
        this.bdw = border;
        this.oCont = oCont;
        this.oc = document.getElementById(oCont);
        this.scrollbar = getElementsByClass(this.oc, 'div', 'scrollbar');
        this.text = getElementsByClass(this.oc, 'div', 'text');
        this.title = getElementsByClass(this.text, 'div', 'title');
        this.legend = getElementsByClass(this.text, 'div', 'legend');
        this.bar = getElementsByClass(this.oc, 'img', 'bar');
        this.arL = getElementsByClass(this.oc, 'img', 'arrow-left');
        this.arR = getElementsByClass(this.oc, 'img', 'arrow-right');
        this.bw = this.bar.width;
        this.alw = this.arL.width - 5;
        this.arw = this.arR.width - 5;
        this.bar.parent = this.oc.parent = this;
        this.arL.parent = this.arR.parent = this;
        this.view = this.back = -1;
        this.resize();
        this.oc.onselectstart = function () { return false; }
        var img = getElementsByClass(this.oc, 'div', 'bank').getElementsByTagName('a');
        this.NF = img.length;
        for (var i = 0, o; o = img[i]; i++) {
            this.diapos[i] = new Diapo(this, i,
                o.rel,
                o.title || '- ' + i + ' -',
                o.innerHTML || o.rel,
                o.href || '',
                o.target || '_self'
            );
        }
        if (window.addEventListener)
            this.oc.addEventListener('DOMMouseScroll', function (e) {
                this.parent.scroll(-e.detail);
            }, false);
        else this.oc.onmousewheel = function () {
            this.parent.scroll(event.wheelDelta);
        }
        this.bar.onmousedown = function (e) {
            if (!e) e = window.event;
            var scl = e.screenX - this.offsetLeft;
            var self = this.parent;
            this.parent.oc.onmousemove = function (e) {
                if (!e) e = window.event;
                self.bar.style.left = Math.round(Math.min((self.ws - self.arw - self.bw), Math.max(self.alw, e.screenX - scl))) + 'px';
                self.view = Math.round(((e.screenX - scl)) / (self.ws - self.alw - self.arw - self.bw) * self.NF);
                if (self.view != self.back) self.calc();
                return false;
            }
            this.parent.oc.onmouseup = function (e) {
                self.oc.onmousemove = null;
                return false;
            }
            return false;
        }
        this.arR.onclick = this.arR.ondblclick = function () {
            if (this.parent.view < this.parent.NF - 1)
                this.parent.calc(1);
        }
        this.arL.onclick = this.arL.ondblclick = function () {
            if (this.parent.view > 0)
                this.parent.calc(-1);
        }
    }

    ImageFlow.prototype = {
        calc: function (inc) {
            if (inc) this.view += inc;
            var tw = 0;
            var lw = 0;
            var o = this.diapos[this.view];
            if (o && o.loaded) {
                var ob = this.diapos[this.back];
                if (ob && ob != o) {
                    ob.img.className = 'diapo';
                    ob.z1 = 1;
                }
                this.title.replaceChild(document.createTextNode(o.title), this.title.firstChild);
                this.legend.replaceChild(document.createTextNode(o.text), this.legend.firstChild);
                if (o.url) {
                    o.img.className = 'diapo link';
                    window.status = 'hyperlink: ' + o.url;
                } else {
                    o.img.className = 'diapo';
                    window.status = '';
                }
                o.w1 = Math.min(o.iw, this.wh * .5) * o.z1;
                var x0 = o.x1 = (this.wh * .5) - (o.w1 * .5);
                var x = x0 + o.w1 + this.bdw;
                for (var i = this.view + 1, o; o = this.diapos[i]; i++) {
                    if (o.loaded) {
                        o.x1 = x;
                        o.w1 = (this.ht / o.r) * this.size;
                        x += o.w1 + this.bdw;
                        tw += o.w1 + this.bdw;
                    }
                }
                x = x0 - this.bdw;
                for (var i = this.view - 1, o; o = this.diapos[i]; i--) {
                    if (o.loaded) {
                        o.w1 = (this.ht / o.r) * this.size;
                        o.x1 = x - o.w1;
                        x -= o.w1 + this.bdw;
                        tw += o.w1 + this.bdw;
                        lw += o.w1 + this.bdw;
                    }
                }
                if (!this.scr && tw) {
                    var r = (this.ws - this.alw - this.arw - this.bw) / tw;
                    this.bar.style.left = Math.round(this.alw + lw * r) + 'px';
                }
                this.back = this.view;
            }
        },
        scroll: function (sc) {
            if (sc < 0) {
                if (this.view < this.NF - 1) this.calc(1);
            } else {
                if (this.view > 0) this.calc(-1);
            }
        },
        resize: function () {
            this.wh = this.oc.clientWidth;
            this.ht = this.oc.clientHeight;
            this.ws = this.scrollbar.offsetWidth;
            this.calc();
            this.run(true);
        },
        run: function (res) {
            var i = this.NF;
            while (i--) this.diapos[i].move(res);
        }
    }

    Diapo = function (parent, N, src, title, text, url, target) {
        this.parent = parent;
        this.loaded = false;
        this.title = title;
        this.text = text;
        this.url = url;
        this.target = target;
        this.N = N;
        this.img = document.createElement('img');
        this.img.src = src;
        this.img.parent = this;
        this.img.className = 'diapo';
        this.x0 = this.parent.oc.clientWidth;
        this.x1 = this.x0;
        this.w0 = 0;
        this.w1 = 0;
        this.z1 = 1;
        this.img.parent = this;
        this.img.onclick = function () { this.parent.click(); }
        this.parent.oc.appendChild(this.img);
        if (url) {
            this.img.onmouseover = function () { this.className = 'diapo link'; }
            this.img.onmouseout = function () { this.className = 'diapo'; }
        }
    }

    Diapo.prototype = {
        move: function (res) {
            if (this.loaded) {
                var sx = this.x1 - this.x0;
                var sw = this.w1 - this.w0;
                if (Math.abs(sx) > 2 || Math.abs(sw) > 2 || res) {
                    this.x0 += sx * .1;
                    this.w0 += sw * .1;
                    if (this.x0 < this.parent.wh && this.x0 + this.w0 > 0) {
                        this.visible = true;
                        var o = this.img.style;
                        var h = this.w0 * this.r;
                        o.left = Math.round(this.x0) + 'px';
                        o.bottom = Math.floor(this.parent.ht * .25) + 'px';
                        o.width = Math.round(this.w0) + 'px';
                        o.height = Math.round(h) + 'px';
                        if (this.flx) {
                            var o = this.flx.style;
                            o.left = Math.round(this.x0) + 'px';
                            o.top = Math.ceil(this.parent.ht * .75 + 1) + 'px';
                            o.width = Math.round(this.w0) + 'px';
                            o.height = Math.round(h) + 'px';
                        }
                    } else {
                        if (this.visible) {
                            this.visible = false;
                            this.img.style.width = '0px';
                            if (this.flx) this.flx.style.width = '0px';
                        }
                    }
                }
            } else {
                if (this.img.complete && this.img.width) {
                    this.iw = this.img.width;
                    this.ih = this.img.height;
                    this.r = this.ih / this.iw;
                    this.loaded = true;
                    this.flx = createReflexion(this.parent.oc, this.img);
                    if (this.parent.view < 0) this.parent.view = this.N;
                    this.parent.calc();
                }
            }
        },
        click: function () {
            if (this.parent.view == this.N) {
                var imageInfo;
                if (this.img.src.endsWith("tea1.jpg")) {
                    imageInfo = {
                        src: "images/tea1-1.jpg",
                        alt: "茶的起源",
                        description: "关于茶的确切起源，众说纷纭，无从查考，不过大多数看法倾向于神农氏。据《神农本草经》记载，'神农尝百草，日遇七十二毒，得荼（茶）而解之'，可见，茶最早是作为一种药材出现的。"
                    };
                } else if (this.img.src.endsWith("tea2.jpg")) {
                    imageInfo = {
                        src: "images/tea2-2.jpg",
                        alt: "Image 2",
                        description: "在东西周时期，人们已经开始人工种植茶树。那时的茶叶并非如今所知的饮料，而是一种食物。有些人会直接嚼食茶叶，品尝它的清香和滋味；有些人则将茶叶放入热汤中，让汤汁充满茶的芳香。随着岁月的流逝，这些古老的传统方法虽有所变迁，但却留下了一些独特的烹饪方式，如今仍在我们的生活中延续着。你或许听说过煮茶叶蛋，在茶香中煮出的鸡蛋，充满了淡淡的茶香。虽然如今我们不再直接食用茶叶，但这些古老的烹饪方式仍在我们的餐桌上绽放着独特的美味，将古老的文化传承下去。"
                    };
                } else if (this.img.src.endsWith("tea3.jpg")) {
                    imageInfo = {
                        src: "images/tea3-3.jpg",
                        alt: "Image 3",
                        description: "秦汉时期，茶叶已经有了简单的加工过程。人们用木棒将新鲜的茶叶捣成饼状茶团，然后晾晒或烘干，以便日后保存。饮茶的方式也有所创新：人们将茶团捣碎后放入壶中，注入热水，再加入一些葱姜和桔子来调味。茶叶不仅是解毒的良药，更成为了待客之间的美味佳酿。随着秦统一了巴蜀地区，饮茶文化向东方传播。到了三国时期，饮茶之风更盛，开始注意到茶的烹煮方法。"
                    };
                } else if (this.img.src.endsWith("tea4.jpg")) {
                    imageInfo = {
                        src: "images/tea4-4.jpg",
                        alt: "Image 3",
                        description: "两晋、南北朝时期，茶叶的地位发生了翻天覆地的变化。曾经被视为珍贵奢侈品的茶叶，渐渐地变成了人们日常生活中的普通饮料。饮茶文化的蔓延之势也在这个时代愈发显现，仿佛是一股清风，吹到全国各地。"
                    };
                } else if (this.img.src.endsWith("tea5.jpg")) {
                    imageInfo = {
                        src: "images/tea5-5.jpg",
                        alt: "Image 3",
                        description: "到了唐代，饮茶蔚然成风，饮茶方式有较大之进步。此时，为改善茶叶苦涩味，开始加入薄荷、盐、红枣调味。此外，已使用专门烹茶器具，论茶之专著已出现。陆羽《茶经》三篇，备言茶事，更对茶之饮之煮有详细的论述。此时，对茶和水的选择、烹煮方式以及饮茶环境和茶的质量也越来越讲究，逐渐形成了茶道。由唐前之“吃茗粥”到唐时人视茶为“越众而独高”，是我国茶叶文化的一大飞跃。“茶兴于唐而盛于宋”，在宋代，制茶方法出现改变，给饮茶方式带来深远的影响。宋初茶叶多制成团茶、饼茶，饮用时碾碎，加调味品烹煮，也有不加的。随茶品的日益丰富与品茶的日益考究，逐渐重视茶叶原有的色香味，调味品逐渐减少。同时，出现了用蒸青法制成的散茶，且不断增多，茶类生产由团饼为主趋向以散茶为主。此时烹饮手续逐渐简化，传统的烹饮习惯，正是由宋开始而至明清，出现了巨大变更。"
                    };
                } else if (this.img.src.endsWith("tea6.jpg")) {
                    imageInfo = {
                        src: "images/tea6-6.png",
                        alt: "Image 3",
                        description: "明朝时朱元璋废团茶改散茶，散茶逐渐成为主流，如今我们熟悉的绿茶、黄茶、红茶、乌龙茶，都是因为废团改散，制茶工艺改良之后，才逐渐出现的。茶叶生产也有了许多发明创造，在绿茶生产上除了改进蒸青技术外，还产生了炒青技术，即采摘后的茶叶不须经过蒸熟，而是用热锅手炒杀青。清代出现了如今我们喝到的大多数茶类，同时，茶具也进行了简化，这样也更利于茶文化的传播。清朝盖碗的流行，就和爱茶的乾隆皇帝密不可分。同时中国茶风靡世界，独步世界茶市，当时出口茶叶的只有中国"
                    };
                } else if (this.img.src.endsWith("tea7.jpg")) {
                    imageInfo = {
                        src: "images/tea7-7.jpg",
                        alt: "Image 3",
                        description: "鸦片战争后，中国坠入半殖民地、半封建社会的深渊，中国近代茶业也一蹶不振，处于衰落时期。大批茶园荒芜，茶业逐渐陷入低谷，这种衰落局面，一直延续到新中国成立为止。新中国成立后，茶业也再次蓬勃发展起来。比如改造老茶园，改良茶园土壤，改善茶园管理，提高品质和劳动生产率。"
                    };
                }

                showPopup(imageInfo);
            } else {
                this.parent.view = this.N;
                this.parent.calc();
            }
            return false;
        }
    }

    return {

        create: function (div, size, zoom, border) {
            var load = function () {
                var loaded = false;
                var i = instances.length;
                while (i--) if (instances[i].oCont == div) loaded = true;
                if (!loaded) {
                    instances.push(
                        new ImageFlow(div, size, zoom, border)
                    );
                    if (!imf.initialized) {
                        imf.initialized = true;
                        addEvent(window, 'resize', function () {
                            var i = instances.length;
                            while (i--) instances[i].resize();
                        });
                        addEvent(document.getElementById(div), 'mouseout', function (e) {
                            if (!e) e = window.event;
                            var tg = e.relatedTarget || e.toElement;
                            if (tg && tg.tagName == 'HTML') {
                                var i = instances.length;
                                while (i--) instances[i].oc.onmousemove = null;
                            }
                            return false;
                        });
                        setInterval(function () {
                            var i = instances.length;
                            while (i--) instances[i].run();
                        }, 16);
                    }
                }
            }
            addEvent(window, 'load', function () { load(); });
        }
    }
}();

imf.create("imageFlow", 0.15, 1.5, 10);

