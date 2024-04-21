$(window).load(function(){  
$(".loading").fadeOut()})  

$(document).ready(function(){
	var whei=$(window).width()
	$("html").css({fontSize:whei/20})
	$(window).resize(function(){
		var whei=$(window).width()
	$("html").css({fontSize:whei/20})
});
	});


$(window).load(function(){$(".loading").fadeOut()})  
$(function () {
    echarts_1()
    echarts_2()
    echarts_3()
    echarts_4()


function echarts_1() {
      var myChart = echarts.init(document.getElementById('echarts1'));
  
      option = {
          tooltip: {
              trigger: 'axis',
              axisPointer: {type: 'shadow'},
          },
          "grid": {
              "top": "20%",
              "right":"50",
              "bottom":"20",
              "left":"30",
          },
          legend: {
              data: ['出口数量(单位:千吨)'],
              right: 'center',
              width: '100%',
              textStyle: {
                  color: "black"
              },
              itemWidth: 12,
              itemHeight: 10,
          },
          "xAxis": [
              {
                  "type": "category",
                  data: ['摩洛哥','乌兹别克斯坦','加纳', '俄罗斯联邦', '毛里塔尼亚', '塞内加尔' ],
                  axisLine: { lineStyle: {color: "rgba(0,0,0,.1)"}},
                  axisLabel:  { 
                    textStyle: {color: "rgba(0,0,0,.7)", fontSize: '14'},
                     
                },
              },
          ],
          "yAxis": [
              {
                  "type": "value",
                  axisTick: {show: false},
                  splitLine: {
                      show: false,
                  },
                  "axisLabel": {
                      "show": true,
                      fontSize:14,
                      color: "rgba(0,0,0,.6)"
                  },
                  axisLine: {
                      min:0,
                      max:80,
                      lineStyle: {color: 'rgba(0,0,0,.1)'}
                  },
              },
          ],
          "series": [
              {
                  "name": "出口数量(单位:千吨)",
                  "type": "bar",
                  "data": [74.61,28.66, 22.83, 18.16, 17.56,16.34],
                  "barWidth": "15%",
                  "itemStyle": {
                      "normal": {
                          barBorderRadius: 15,
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                              offset: 0,
                              color: '#8bd46e'
                          }, {
                              offset: 1,
                              color: '#09bcb7'
                          }]),
                      }
                  },
                  "barGap": "0.2"
              }
          ]
      };
  
      myChart.setOption(option);
      window.addEventListener("resize",function(){
          myChart.resize();
      });
}
function echarts_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echarts2'));

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
        },
        grid: {
            left: '0',
            top: '30',
            right: '10',
            bottom: '-20',
            containLabel: true
        },
        legend: {
            data: ['出口量(单位:千吨)'],
            right: 'center',
            top: 0,
            textStyle: {
                color: "black"
            },
            itemWidth: 12,
            itemHeight: 10,
        },

        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                rotate: -45,
                textStyle: {
                    color: "rgba(0,0,0,.6)",
                    fontSize: 14,
                },
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0,0,0,.1)'
                }

            },

            data: ['浙江     ', '安徽', '湖南', '福建', '湖北', '江西', '河南', '四川', '贵州', '广东','']

        }, {

            axisPointer: {
                show: false
            },
            axisLine: {
                show: false
            },
            position: 'bottom',
            offset: 20,



        }],

        yAxis: [{
            type: 'value',
            axisTick: {
                show: false
            },
            // splitNumber: 6,
            axisLine: {
                lineStyle: {
                    color: 'rgba(0,0,0,.1)'
                }
            },
            axisLabel: {
                formatter: "{value} ",
                textStyle: {
                    color: "rgba(0,0,0,.6)",
                    fontSize: 14,
                },
            },

            splitLine: {
                lineStyle: {
                    color: 'rgba(0,0,0,.1)'
                }
            }
        }],
        series: [{
            name: '出口量(单位:千吨)',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    color: 'rgba(228, 228, 126, 1)',
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(228, 228, 126, .2)'
                    }, {
                        offset: 1,
                        color: 'rgba(228, 228, 126, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(228, 228, 126, 1)',
                    borderColor: 'rgba(228, 228, 126, .1)',
                    borderWidth: 12
                }
            },
            data: [150.81, 67.74, 41.56, 26.15, 23.52, 14.13, 9.10, 7.65, 5.94, 5.23,]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}
function echarts_3() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echarts3'));
  
      option = {
          tooltip: {
              trigger: 'axis',
              axisPointer: { 
                  type: 'shadow' 
              }
          },
          legend: {
              data: ['出口额(单位:千万美元)'],
              right: 'center',
              top: 0,
              textStyle: {
                  color: "#fff"
              },
              itemWidth: 12,
              itemHeight: 10,
          },
          grid: {
              left: '0',
              right: '20',
              bottom: '0',
              top: '15%',
              containLabel: true
          },
          xAxis: {
              type: 'category',
              data: ['马来西亚', '摩洛哥', '越南', '加纳', '毛里塔尼亚', '塞内加尔'],
              axisLine: {
                  lineStyle: {
                      color: 'white'
                  }
              },
              axisLabel: {
                  textStyle: {
                      color: "rgba(255,255,255,.6)",
                      fontSize: 14,
                  }
              },
              axisLine: {
                  lineStyle: {
                      color: 'rgba(255,255,255,0.3)'
                  }
              },
          },
          yAxis: {
              type: 'value',
              splitNumber: 4,
              axisTick: { show: false },
              splitLine: {
                  show: true,
                  lineStyle: {
                      color: 'rgba(255,255,255,0.1)'
                  }
              },
              axisLabel: {
                  textStyle: {
                      color: "rgba(255,255,255,.6)",
                      fontSize: 14,
                  }
              },
              axisLine: { show: false },
          },
          series: [{
                  name: '出口额(单位:千万美元)',
                  type: 'bar',
                  stack: 'a',
                  barWidth: '30',
                  barGap: 0,
                  itemStyle: {
                      normal: {
                          color: '#248ff7',
                      }
                  },
                  data: [25.66, 22.83, 12.84, 10.33, 7.60, 6.99]
              }
          ]
      };
  
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", function() {
          myChart.resize();
      });
}
function echarts_4() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echarts4'));

  option = {
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          }
      },
      legend: {
          data: ['出口额(单位:千万美元)'],
          right: 'center',
          top: 0,
          textStyle: {
              color: "#fff"
          },
          itemWidth: 12,
          itemHeight: 10,
      },
      grid: {
          left: '0',
          right: '20',
          bottom: '0',
          top: '15%',
          containLabel: true
      },
      xAxis: {
          type: 'category',
          data: ['福建', '浙江', '安徽', '贵州', '湖北', '湖南', '江西', '云南', '广东', '广西'],
          axisLine: {
              lineStyle: {
                  color: 'white'
              }
          },
          axisLabel: {
              textStyle: {
                  color: "rgba(255,255,255,.6)",
                  fontSize: 14,
              }
          },
          axisLine: {
              lineStyle: {
                  color: 'rgba(255,255,255,0.3)'
              }
          },
      },
      yAxis: {
          type: 'value',
          splitNumber: 4,
          axisTick: {
              show: false
          },
          splitLine: {
              show: true,
              lineStyle: {
                  color: 'rgba(255,255,255,0.1)'
              }
          },
          axisLabel: {
              textStyle: {
                  color: "rgba(255,255,255,.6)",
                  fontSize: 14,
              }
          },
          axisLine: {
              show: false
          },
      },
      series: [{
          name: '出口额(单位:千万美元)',
          type: 'bar',
          stack: 'a',
          barWidth: '30',
          barGap: 0,
          itemStyle: {
              normal: {
                  color: '#8bd46e',
              }
          },
          data: [51.31, 48.59, 28.74, 22.22, 18.96, 12.42, 12.13, 10.85, 6.54, 5.10]
      }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
      myChart.resize();
  });
}

})