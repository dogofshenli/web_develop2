
$(function () {
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例

        var dom = document.getElementById('map');
        var myChart = echarts.init(dom, null, {
          renderer: 'canvas',
          useDirtyRect: false
        });
        var app = {};
        var ROOT_PATH = 'https://echarts.apache.org/examples';
        var option;
        
        var TeaData = {
          "GreenTea": [
            { name: '甘肃省', value: 1, itemStyle: { color: 'mediumaquamarine' } },
            { name: '四川省', value: 1 , itemStyle: { color: 'mediumaquamarine' }},
            { name: '云南省', value: 1, itemStyle: { color: 'mediumaquamarine' } },
            { name: '广西壮族自治区', value: 1 , itemStyle: { color: 'mediumaquamarine' }},
            { name: '广东省', value: 1 , itemStyle: { color: 'mediumaquamarine' }},
            { name: '海南省', value: 1 , itemStyle: { color: 'mediumaquamarine' }},
            { name: '陕西省', value: 1 , itemStyle: { color: 'mediumaquamarine' }},
            { name: '重庆市', value: 1, itemStyle: { color: 'mediumaquamarine' } },
            { name: '贵州省', value: 1, itemStyle: { color: 'mediumaquamarine' } },
            { name: '湖北省', value: 1, itemStyle: { color: 'mediumaquamarine' } },
            { name: '湖南省', value: 1 , itemStyle: { color: 'mediumaquamarine' }},
            { name: '河南省', value: 1 , itemStyle: { color: 'mediumaquamarine' }},
            { name: '山东省', value: 1, itemStyle: { color: 'mediumaquamarine' } },
            { name: '安徽省', value: 1, itemStyle: { color: 'mediumaquamarine' } },
            { name: '江苏省', value: 1, itemStyle: { color: 'mediumaquamarine' } },
            { name: '江西省', value: 1, itemStyle: { color: 'mediumaquamarine' } },
            { name: '浙江省', value: 1, itemStyle: { color: 'mediumaquamarine' } },
            { name: '福建省', value: 1, itemStyle: { color: 'mediumaquamarine' } }
          ],
          "WhiteTea": [
            { name: '四川省', value: 1 },
            { name: '福建省', value: 1 }
          ],
          "YellowTea": [
            { name: '四川省', value: 1 },
            { name: '贵州省', value: 1 },
            { name: '湖南省', value: 1 },
            { name: '广东省', value: 1 },
            { name: '湖北省', value: 1 },
            { name: '安徽省', value: 1 },
            { name: '浙江省', value: 1 }
          ],
          "BlackTea": [
            { name: '四川省', value: 1 },
            { name: '云南省', value: 1 },
            { name: '湖南省', value: 1 },
            { name: '广东省', value: 1 },
            { name: '湖北省', value: 1 },
            { name: '福建省', value: 1 },
            { name: '江西省', value: 1 },
            { name: '安徽省', value: 1 },
            { name: '江苏省', value: 1 },
            { name: '浙江省', value: 1 },
            { name: '台湾省', value: 1 }
          ],
          "DarkTea": [
            { name: '四川省', value: 1 },
            { name: '云南省', value: 1 },
            { name: '湖南省', value: 1 },
            { name: '陕西省', value: 1 },
            { name: '湖北省', value: 1 },
            { name: '广西壮族自治区', value: 1 },
            { name: '安徽省', value: 1 }
          ],
          "Oolong": [
            { name: '广东省', value: 1 },
            { name: '福建省', value: 1 },
            { name: '台湾省', value: 1 }
          ]
        };
        
        var visualMaps = {
          "GreenTea": {
            min: 0,
            max: 1,
            realtime: false,
            calculable: false,
            inRange: {
              color: ['lightskyblue', 'mediumaquamarine']
            }
          },
          "WhiteTea": {
            min: 0,
            max: 1,
            realtime: false,
            calculable: false,
            inRange: {
              color: ['lightcoral', '#B5A642']
            }
          },
          "YellowTea": {
            min: 0,
            max: 1,
            realtime: false,
            calculable: false,
            inRange: {
              color: ['lightcoral', 'yellow']
            }
          },
          "BlackTea": {
            min: 0,
            max: 1,
            realtime: false,
            calculable: false,
            inRange: {
              color: ['lightcoral', 'tomato']
            }
          },
          "DarkTea": {
            min: 0,
            max: 1,
            realtime: false,
            calculable: false,
            inRange: {
              color: ['lightcoral', 'black']
            }
          },
          "Oolong": {
            min: 0,
            max: 1,
            realtime: false,
            calculable: false,
            inRange: {
              color: ['lightcoral', '#97694F']
            }
          }
        };
        document.getElementById('dataSelector').addEventListener('change', function () {
          // 调用 changeData() 函数来更新图表数据
          changeData();
      });        
        function changeData() {
            var selectedValue = document.getElementById('dataSelector').value;
            var selectedData = TeaData[selectedValue];
            var selectedVisualMap = visualMaps[selectedValue];
            var selectedTitle = getSelectedTitle(selectedValue);
            var selectedTooltipContent = getSelectedTooltipContent(selectedValue);
          
            myChart.setOption({
              title: {
                text: selectedTitle
              },
              tooltip: {
                trigger: 'item',
                formatter: function (params) {
                  if (selectedValue === 'GreenTea') {
                    if (params.name === '湖南省') {
                      return '安华松针';
                    }
                    if (params.name === '甘肃省') {
                      return '陇南绿茶';
                    }
                    if (params.name === '四川省') {
                      return '竹叶青' + '<br/>' + '蒙顶甘露' + '<br/>' + '巴山雀舌';
                    }
                    if (params.name === '云南省') {
                      return '南糯白毫' + '<br/>' + '昆明十里香';
                    }
                    if (params.name === '广西壮族自治区') {
                      return '桂林毛尖' + '<br/>' + '凌云白毫';
                    }
                    if (params.name === '海南省') {
                      return '水满茶';
                    }
                    if (params.name === '贵州省') {
                      return '都匀毛尖' + '<br/>' + '湄潭翠芽';
                    }
                    if (params.name === '重庆市') {
                      return '永川秀芽';
                    }
                    if (params.name === '陕西省') {
                      return '午子仙豪';
                    }
                    if (params.name === '河南省') {
                      return '信阳毛尖';
                    }
                    if (params.name === '湖北省') {
                      return '恩施玉露';
                    }
                    if (params.name === '广东省') {
                      return '古劳茶';
                    }
                    if (params.name === '福建省') {
                      return '天山绿' + '<br/>' + '石亭绿';
                    }
                    if (params.name === '江西省') {
                      return '庐山云雾';
                    }
                    if (params.name === '安徽省') {
                      return '黄山毛尖' + '<br/>' + '太平猴魁' + '<br/>' + '六安瓜片';
                    }
                    if (params.name === '山东省') {
                      return '日照绿茶';
                    }
                    if (params.name === '江苏省') {
                      return '碧螺春';
                    }
                    if (params.name === '浙江省') {
                      return '西湖龙井' + '<br/>' + '安吉白茶';
                    }
                    else {
                      return params.name + '<br/>';
                    }
                  }
                  if (selectedValue === 'WhiteTea') {
                    if (params.name === '四川省') {
                      return '白毫银针';
                    }
                    if (params.name === '福建省') {
                      return '福鼎白茶' + '<br/>' + '孜和白茶';
                    }
                    else {
                      return params.name + '<br/>';
                    }
                  }
                  if (selectedValue === 'YellowTea') {
                    if (params.name === '四川省') {
                      return '蒙顶黄芽';
                    }
                    if (params.name === '贵州省') {
                      return '海马宫茶';
                    }
                    if (params.name === '湖南省') {
                      return '君山银针';
                    }
                    if (params.name === '广东省') {
                      return '大叶青';
                    }
                    if (params.name === '湖北省') {
                      return '远安黄茶';
                    }
                    if (params.name === '安徽省') {
                      return '霍山黄芽';
                    }
                    if (params.name === '浙江省') {
                      return '莫干黄芽';
                    }
                    else {
                      return params.name + '<br/>';
                    }
                  }
                  if (selectedValue === 'BlackTea') {
                    if (params.name === '四川省') {
                      return '川红';
                    }
                    if (params.name === '云南省') {
                      return '滇红';
                    }
                    if (params.name === '广东省') {
                      return '英德红茶';
                    }
                    if (params.name === '湖南省') {
                      return '湘红';
                    }
                    if (params.name === '湖北省') {
                      return '宜红';
                    }
                    if (params.name === '安徽省') {
                      return '祁门红茶';
                    }
                    if (params.name === '江西省') {
                      return '宁红';
                    }
                    if (params.name === '福建省') {
                      return '小种红茶';
                    }
                    if (params.name === '台湾省') {
                      return '日月潭红茶';
                    }
                    if (params.name === '江苏省') {
                      return '宜兴红茶';
                    }
                    if (params.name === '浙江省') {
                      return '越红';
                    }
                    else {
                      return params.name + '<br/>';
                    }
                  }
                  if (selectedValue === 'DarkTea') {
                    if (params.name === '四川省') {
                      return '四川边茶';
                    }
                    if (params.name === '云南省') {
                      return '普洱茶';
                    }
                    if (params.name === '湖南省') {
                      return '安化黑茶';
                    }
                    if (params.name === '广西壮族自治区') {
                      return '六堡茶';
                    }
                    if (params.name === '湖北省') {
                      return '湖北老青茶';
                    }
                    if (params.name === '安徽省') {
                      return '古黔黑茶';
                    }
                    if (params.name === '山西省') {
                      return '陕西茯苓茶';
                    }
                    else {
                      return params.name + '<br/>';
                    }
                  }
                  if (selectedValue === 'Oolong') {
                    if (params.name === '广东省') {
                      return '凤凰单丛';
                    }
                    if (params.name === '福建省') {
                      return '武夷岩茶' + '<br/>' + '铁观音';
                    }
                    if (params.name === '台湾省') {
                      return '阿里山乌龙茶';
                    }
                    else {
                      return params.name + '<br/>';
                    }
                  }
                }
              },
              series: [{
                data: selectedData
              }],
              visualMap: selectedVisualMap
            });
          }
        
        function getSelectedTitle(selectedValue) {
          var titles = {
            "GreenTea": '绿茶产地（Green Tea）',
            "WhiteTea": '白茶产地（White Tea）',
            "YellowTea": '黄茶产地（Yellow Tea）',
            "BlackTea": '红茶产地（Black Tea）',
            "DarkTea": '黑茶产地（Dark Tea）',
            "Oolong": '乌龙茶产地（Oolong）'
          };
          return titles[selectedValue];
        }
        
        function getSelectedTooltipContent(selectedValue) {
          var tooltipContents = {
            "GreenTea": {
              '湖南省': '安华松针',
              '甘肃省': '陇南绿茶',
              '四川省': '竹叶青<br/>蒙顶甘露<br/>巴山雀舌',
              '云南省': '南糯白毫<br/>昆明十里香',
              '广西壮族自治区': '桂林毛尖<br/>凌云白毫',
              '海南省': '水满茶',
              '贵州省': '都匀毛尖<br/>湄潭翠芽',
              '重庆市': '永川秀芽',
              '陕西省': '午子仙豪',
              '河南省': '信阳毛尖',
              '湖北省': '恩施玉露',
              '广东省': '古劳茶',
              '福建省': '天山绿<br/>石亭绿',
              '江西省': '庐山云雾',
              '安徽省': '黄山毛尖<br/>太平猴魁<br/>六安瓜片',
              '山东省': '日照绿茶',
              '江苏省': '碧螺春',
              '浙江省': '西湖龙井<br/>安吉白茶'
            },
            "WhiteTea": {
              '四川省': '白毫银针',
              '福建省': '福鼎白茶<br/>孜和白茶'
            },
            "YellowTea": {
              '四川省': '蒙顶黄芽',
              '贵州省': '海马宫茶',
              '湖南省': '君山银针',
              '广东省': '大叶青',
              '湖北省': '远安黄茶',
              '安徽省': '霍山黄芽',
              '浙江省': '莫干黄芽'
            },
            "BlackTea": {
              '四川省': '川红',
              '云南省': '滇红',
              '广东省': '英德红茶',
              '湖南省': '湘红',
              '湖北省': '宜红',
              '安徽省': '祁门红茶',
              '江西省': '宁红',
              '福建省': '小种红茶',
              '台湾省': '日月潭红茶',
              '江苏省': '宜兴红茶',
              '浙江省': '越红'
            },
            "DarkTea": {
              '四川省': '四川边茶',
              '云南省': '普洱茶',
              '湖南省': '安化黑茶',
              '广西壮族自治区': '六堡茶',
              '湖北省': '湖北老青茶',
              '安徽省': '古黔黑茶',
              '山西省': '陕西茯苓茶'
            },
            "Oolong": {
              '广东省': '凤凰单丛',
              '福建省': '武夷岩茶<br/>铁观音',
              '台湾省': '阿里山乌龙茶'
            }
          };
          return tooltipContents[selectedValue];
        }
        
        myChart.showLoading();
        $.get('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json', function (geoJson) {
          myChart.hideLoading();
          echarts.registerMap('HK', geoJson);
          myChart.setOption({
            title: {
              text: '绿茶产地（Green Tea）', 
            },
            tooltip: {
              trigger: 'item',
              formatter: function (params) {
                if (params.name === '湖南省') {
                  return '安华松针';
                }
                if (params.name === '甘肃省') {
                  return '陇南绿茶';
                }
                if (params.name === '四川省') {
                  return '竹叶青' + '<br/>' + '蒙顶甘露' + '<br/>' + '巴山雀舌';
                }
                if (params.name === '云南省') {
                  return '南糯白毫' + '<br/>' + '昆明十里香';
                }
                if (params.name === '广西壮族自治区') {
                  return '桂林毛尖' + '<br/>' + '凌云白毫';
                }
                if (params.name === '海南省') {
                  return '水满茶';
                }
                if (params.name === '贵州省') {
                  return '都匀毛尖' + '<br/>' + '湄潭翠芽';
                }
                if (params.name === '重庆市') {
                  return '永川秀芽';
                }
                if (params.name === '陕西省') {
                  return '午子仙豪';
                }
                if (params.name === '河南省') {
                  return '信阳毛尖';
                }
                if (params.name === '湖北省') {
                  return '恩施玉露';
                }
                if (params.name === '广东省') {
                  return '古劳茶';
                }
                if (params.name === '福建省') {
                  return '天山绿' + '<br/>' + '石亭绿';
                }
                if (params.name === '江西省') {
                  return '庐山云雾';
                }
                if (params.name === '安徽省') {
                  return '黄山毛尖' + '<br/>' + '太平猴魁' + '<br/>' + '六安瓜片';
                }
                if (params.name === '山东省') {
                  return '日照绿茶';
                }
                if (params.name === '江苏省') {
                  return '碧螺春';
                }
                if (params.name === '浙江省') {
                  return '西湖龙井' + '<br/>' + '安吉白茶';
                }
                else {
                  return params.name + '<br/>';
                }
              }
            },
            toolbox: {
              show: true,
              orient: 'vertical',
              left: 'right',
              top: 'center',
              feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
              }
            },
            series: [{
              name: '绿茶产地',
              type: 'map',
              map: 'HK',
              label: {
                show: false
              },
              data: TeaData["GreenTea"], 
              visualMap: visualMaps["GreenTea"] 
            }]
          });
        });
        
        window.addEventListener('resize', myChart.resize);
		

       
    }

})

