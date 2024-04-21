
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
            { name: '山西省', value: 0 },
            { name: '江苏省', value: 11296.0 },
            { name: '浙江省', value: 166169.0 },
            { name: '安徽省', value: 104423.0 },
            { name: '福建省', value: 129962.0 },
            { name: '江西省', value: 46988.0 },
            { name: '山东省', value: 21648.0 },
            { name: '河南省', value: 63567.0 },
            { name: '湖北省', value: 212117.0 },
            { name: '湖南省', value: 78383.7 },
            { name: '广东省', value: 33471.0 },
            { name: '广西壮族自治区', value: 43432.0 },
            { name: '海南省', value: 421.1 },
            { name: '重庆市', value: 31939.8 },
            { name: '四川省', value: 223804.0 },
            { name: '贵州省', value: 116237.0 },
            { name: '云南省', value: 244613.0 },
            { name: '西藏自治区', value: 2.8 },
            { name: '陕西省', value: 58204.0 },
            { name: '甘肃省', value: 1327.0 }
          ],
          "WhiteTea": [
            { name: '山西省', value: 0 },
            { name: '江苏省', value: 3.5 },
            { name: '浙江省', value: 0 },
            { name: '安徽省', value: 144 },
            { name: '福建省', value: 17483.0 },
            { name: '江西省', value: 955 },
            { name: '山东省', value: 0 },
            { name: '河南省', value: 0 },
            { name: '湖北省', value: 1315.0 },
            { name: '湖南省', value: 32 },
            { name: '广东省', value: 0 },
            { name: '广西壮族自治区', value: 2 },
            { name: '海南省', value: 0 },
            { name: '重庆市', value: 15.5 },
            { name: '四川省', value: 473 },
            { name: '贵州省', value: 1268.0 },
            { name: '云南省', value: 3.2 },
            { name: '西藏自治区', value: 0 },
            { name: '陕西省', value: 0 },
            { name: '甘肃省', value: 0 }
          ],
          "YellowTea": [
            { name: '山西省', value: 0 },
            { name: '江苏省', value: 0 },
            { name: '浙江省', value: 0 },
            { name: '安徽省', value: 0 },
            { name: '福建省', value: 0 },
            { name: '江西省', value: 42 },
            { name: '山东省', value: 0 },
            { name: '河南省', value: 0 },
            { name: '湖北省', value: 410 },
            { name: '湖南省', value: 36 },
            { name: '广东省', value: 0 },
            { name: '广西壮族自治区', value: 0 },
            { name: '海南省', value: 0 },
            { name: '重庆市', value: 0 },
            { name: '四川省', value: 106 },
            { name: '贵州省', value: 62 },
            { name: '云南省', value: 0 },
            { name: '西藏自治区', value: 0 },
            { name: '陕西省', value: 0 },
            { name: '甘肃省', value: 0 }
          ],
          "BlackTea": [
            { name: '山西省', value: 0 },
            { name: '江苏省', value: 2499.6 },
            { name: '浙江省', value: 1349.3 },
            { name: '安徽省', value: 5986.0 },
            { name: '福建省', value: 49947.0 },
            { name: '江西省', value: 5837.0 },
            { name: '山东省', value: 0 },
            { name: '河南省', value: 5004.0 },
            { name: '湖北省', value: 31177.0 },
            { name: '湖南省', value: 21347.6 },
            { name: '广东省', value: 5707.0 },
            { name: '广西壮族自治区', value: 16470.0 },
            { name: '海南省', value: 388 },
            { name: '重庆市', value: 3718.5 },
            { name: '四川省', value: 4419.0 },
            { name: '贵州省', value: 7146.0 },
            { name: '云南省', value: 54283.9 },
            { name: '西藏自治区', value: 0 },
            { name: '陕西省', value: 3082.0 },
            { name: '甘肃省', value: 0 }
          ],
          "DarkTea": [
            { name: '山西省', value: 0 },
            { name: '江苏省', value: 150 },
            { name: '浙江省', value: 3111.5 },
            { name: '安徽省', value: 0 },
            { name: '福建省', value: 0 },
            { name: '江西省', value: 30 },
            { name: '山东省', value: 0 },
            { name: '河南省', value: 0 },
            { name: '湖北省', value: 43454.0 },
            { name: '湖南省', value: 75401.6 },
            { name: '广东省', value: 0 },
            { name: '广西壮族自治区', value: 1587.0 },
            { name: '海南省', value: 0 },
            { name: '重庆市', value: 0 },
            { name: '四川省', value: 17067.0 },
            { name: '贵州省', value: 6090.0 },
            { name: '云南省', value: 0 },
            { name: '西藏自治区', value: 0 },
            { name: '陕西省', value: 850 },
            { name: '甘肃省', value: 0 }
          ],
          "Oolong": [
            { name: '山西省', value: 0 },
            { name: '江苏省', value: 0 },
            { name: '浙江省', value: 0 },
            { name: '安徽省', value: 31 },
            { name: '福建省', value: 228256.0 },
            { name: '江西省', value: 787 },
            { name: '山东省', value: 0 },
            { name: '河南省', value: 0 },
            { name: '湖北省', value: 1533.0 },
            { name: '湖南省', value: 3309.8 },
            { name: '广东省', value: 39989.0 },
            { name: '广西壮族自治区', value: 315 },
            { name: '海南省', value: 0 },
            { name: '重庆市', value: 49 },
            { name: '四川省', value: 5438.0 },
            { name: '贵州省', value: 769 },
            { name: '云南省', value: 5122.1 },
            { name: '西藏自治区', value: 0 },
            { name: '陕西省', value: 0 },
            { name: '甘肃省', value: 0 }
          ],
          "OtherTea":[
            { name: '山西省', value: 8.3 },
            { name: '江苏省', value: 2 },
            { name: '浙江省', value: 1555.2 },
            { name: '安徽省', value: 1557.0 },
            { name: '福建省', value: 1186.0 },
            { name: '江西省', value: 2889.0 },
            { name: '山东省', value: 0 },
            { name: '河南省', value: 0 },
            { name: '湖北省', value: 6091.0 },
            { name: '湖南省', value: 7538.7 },
            { name: '广东省', value: 7621.0 },
            { name: '广西壮族自治区', value: 6259.0 },
            { name: '海南省', value: 165.8 },
            { name: '重庆市', value: 1313.4 },
            { name: '四川省', value: 16434.0 },
            { name: '贵州省', value: 9713.0 },
            { name: '云南省', value: 80457.6 },
            { name: '西藏自治区', value: 88.4 },
            { name: '陕西省', value: 0 },
            { name: '甘肃省', value: 0 }
          ],
          "AllTea":[
            { name: '山西省', value: 8.3 },
            { name: '江苏省', value: 13951.0 },
            { name: '浙江省', value: 172185.0 },
            { name: '安徽省', value: 112141.0 },
            { name: '福建省', value: 426834.0 },
            { name: '江西省', value: 57528.0 },
            { name: '山东省', value: 21648.0 },
            { name: '河南省', value: 68571.0 },
            { name: '湖北省', value: 296097.0 },
            { name: '湖南省', value: 186049.3 },
            { name: '广东省', value: 86797.0 },
            { name: '广西壮族自治区', value: 68065.0 },
            { name: '海南省', value: 974.9 },
            { name: '重庆市', value: 37036.2 },
            { name: '四川省', value: 267741.0 },
            { name: '贵州省', value: 141285.0 },
            { name: '云南省', value: 384480.0 },
            { name: '西藏自治区', value: 92.3 },
            { name: '陕西省', value: 62136.0 },
            { name: '甘肃省', value: 1327.0 }
          ]
        };
        
        var visualMaps = {
          "GreenTea": {
            min: 0,
            max: 78383.7,
            realtime: false,
            calculable: false,
            inRange: {
              color: ['#b2f7db','#8cf5cb','#65ecb6', '#07a365']
            }
          },
          "WhiteTea": {
            min: 0,
            max: 17483,
            realtime: false,
            calculable: false,
            inRange: {
              color: ['#eef9d6', '#bad383','#add656','#a2e60f']
            }
          },
          "YellowTea": {
            min: 0,
            max: 410,
            realtime: false,
            calculable: false,
            inRange: {
              color: ['#f7f8c3', '#f5f799','#f8fb68','#e6ea00']
            }
          },
          "BlackTea": {
            min: 0,
            max: 16470,
            realtime: false,
            calculable: false,
            inRange: {
              color: ['#ffd1b3', '#f7b98f','#f5985a','#f5751f']
            }
          },
          "DarkTea": {
            min: 0,
            max: 75401,
            realtime: false,
            calculable: false,
            inRange: {
              color: ['#f8e4d4','#cfbbab', '#9d8b7c','#786e65']
            }
          },
          "Oolong": {
            min: 0,
            max: 228256,
            realtime: false,
            calculable: false,
            inRange: {
              color: ['#f3c377', '#c89b52','#9b6f27','#9e6203']
            }
          },
          "AllTea": {
            min: 8.3,
            max: 86797,
            realtime: false,
            calculable: false,
            inRange: {
              color: ['#b0cdf5', '#8ab1e8','#2760ae','#0449a9']
            }
          },
          "OtherTea": {
            min: 2,
            max: 9713,
            realtime: false,
            calculable: false,
            inRange: {
              color: ['#e9c0fd', '#e0a3ff','#c877f1','#af50de']
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
                  return params.name + '<br/>'+params.value;
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
            "GreenTea": '绿茶产量(单位:t)',
            "WhiteTea": '白茶产量(单位:t)',
            "YellowTea": '黄茶产量(单位:t)',
            "BlackTea": '红茶产量(单位:t)',
            "DarkTea": '黑茶产量(单位:t)',
            "Oolong": '乌龙茶产量(单位:t)',
            "AllTea":'茶叶总产量(单位:t)',
            "OtherTea":'其余茶叶产量(单位:t)'
          };
          return titles[selectedValue];
        }
        
        function getSelectedTooltipContent(selectedValue) {
          var tooltipContents = {
            
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
                return params.name + '<br/>'+params.value;
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

