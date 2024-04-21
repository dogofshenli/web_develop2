 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {

echarts_2()
echarts_3()
echarts_4()
echarts_5()
echarts_6()

function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echart2'));
var data = [756.92, 708.34, 605.38, 558.03, 352.05, 310.82, 310.5, 307.52, 235.73, 175.7, 175.11, 151.73, 149.3]
var titlename = ['云南', '贵州', '四川', '湖北', '福建', '湖南', '浙江', '安徽', '陕西', '江西', '河南', '广西', '广东'];
option = {
	grid: {
        left: '0',
		top:'0',
        right: '0',
        bottom: '0%',
       containLabel: true
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        show: true,
        data: titlename,
        inverse: true,
        axisLine: { show: false},
        splitLine:{ show: false},
        axisTick:{ show: false},
        axisLabel: {
            textStyle: {
                color:'black'
            },
        },

    }, {
        show: false,
        inverse: true,
        data: data,
        axisLabel: {textStyle: {color: 'black'}},
        axisLine: { show: false},
        splitLine:{ show: false},
        axisTick: { show: false},
    }],
    series: [{
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: data,
        barWidth: 15,
        itemStyle: {
            normal: {
               barBorderRadius: 50,
                color:'#4bedb7',
            }
        },
        label: {
           normal: {
                show: true,
                position: 'right',
                formatter: '{c}',
			   textStyle: {color: 'rgba(0,0,0,.5)'}
            }
        },
    }]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            legend: {
                data: [{
                    name: '茶叶产量',
                    icon: 'circle', 
                    textStyle: {
                        color: 'black' 
                    }
                }, {
                    name: '绿茶产量',
                    icon: 'circle', 
                    textStyle: {
                        color: 'black'
                    }
                }, {
                    name: '红茶产量',
                    icon: 'circle',
                    textStyle: {
                        color: 'black' 
                    }
                }, {
                    name: '黑茶产量',
                    icon: 'circle', 
                    textStyle: {
                        color: 'black'
                    }
                }, {
                    name: '乌龙茶产量',
                    icon: 'circle', 
                    textStyle: {
                        color: 'black' 
                    }
                }, {
                    name: '白茶产量',
                    icon: 'circle', 
                    textStyle: {
                        color: 'black' 
                    }
                }, {
                    name: '黄茶产量',
                    icon: 'circle', 
                    
                    textStyle: {
                        color: 'black' 
                    }
                }],
                top: '0',
                textStyle: {
                    color: "black"
                },
                itemGap: 20,
            },
            grid: {
                left: '0',
                right: '20',
                top: '18',
                bottom: '20',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(0,0,0,.8)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,.2)'
                    }
                },
                data: ['2019', '2020', '2021', '2022']
            }, {
    
    
            }],
            yAxis: [{
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(0,0,0,.6)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,.1)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,.1)'
                    }
                }
            }],
            series: [{
                name: '茶叶产量',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2,
                        color: 'black' 
                    }
                },

                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(24, 163, 64, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(24, 163, 64, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#fff',
                        borderColor: 'rgba(24, 163, 64, 0,0.27)',
                        borderWidth: 12
                    }
                },
                data: [334.2, 316.4, 293.2, 277.7]
            }, {
                name: '绿茶产量',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2,
                        color: 'rgba(5, 254, 18)' // 修改为绿色
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: ' rgba(5, 254, 18,0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(5, 254, 18,0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(5, 254, 18)',
                        borderColor: 'rgba(5, 254, 18,0.2)',
                        borderWidth: 12
                    }
                },
                data: [185.4, 184.9, 184.3, 177.3]
            },
            {
                name: '红茶产量',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2,
                        color: 'rgba(255, 43, 43)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(255, 43, 43, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(255, 43, 43, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(255, 43, 43)',
                        borderColor: 'rgba(255, 43, 43,0.2)',
                        borderWidth: 10
                    }
                },
                data:[48.2, 43.4, 40.4, 30.7]
            },
            {
                name: '黑茶产量',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2,
                        color: 'rgba(36, 36, 36)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(36, 36, 36, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(36, 36, 36, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(36, 36, 36)',
                        borderColor: 'rgba(36, 36, 36,0.2)',
                        borderWidth: 10
                    }
                },
                data:[42.6, 39.7, 37.3, 37.8]
            },
            {
                name: '乌龙茶产量',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2,
                        color: 'rgba(248, 174, 90)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(248, 174, 90, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(248, 174, 90, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(248, 174, 90)',
                        borderColor: 'rgba(248, 174, 90,0.2)',
                        borderWidth: 12
                    }
                },
                data:[31.1, 28.7, 27.8, 27.6]
            },
            {
                name: '黄茶产量',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2,
                        color: 'rgba(236, 255, 62)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(236, 255, 62, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(236, 255, 62, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(236, 255, 62)',
                        borderColor: 'rgba(236, 255, 62,0.2)',
                        borderWidth: 12
                    }
                },
                data:[9.4,8.2, 7.3, 5]
            },
            {
                name: '白茶产量',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2,
                        color: 'rgba(245, 252, 175)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(245, 252, 175, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(245, 252, 175, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(245, 252, 175)',
                        borderColor: 'rgba(245, 252, 175,0.2)',
                        borderWidth: 12
                    }
                },
                data:[1.3,1.3, 1.4, 1]
            }        
            ]
        };
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        var option = {
            grid: {
                left: '0',
                top: '30',
                right: '0',
                bottom: '10',
                containLabel: true
            },
            legend: {
                top: 0,
                textStyle: {
                    color: "black",
                },
                itemWidth: 10,  // 设置宽度
                itemHeight: 10, // 设置高度
                data: ['实有茶园面积', '本年采摘茶园面积']
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: {
                type: 'category',
                data: ['2019', '2020', '2021', '2022'],
                axisTick: {
                    show: true
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(0,0,0,.1)',
                        width: 1,
                        type: 'dotted',
                    }
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: 'black'
                    },
                },
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(0,0,0,.1)',
                        width: 1,
                        type: 'dotted'
                    }
                },
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        fontSize: 12,
                        color: 'black'
                    },
                },
                axisLine: {
                    show: false,
                },
            },
            series: [{
                name: '实有茶园面积',
                type: 'bar',
                data: [3104.7, 3216.6, 3307.8, 3392.7],
                barWidth: 15,
                itemStyle: {
                    normal: {
                        barBorderRadius: 50,
                        color: "#446ACF",
                    }
                },
            }, {
                name: '本年采摘茶园面积',
                type: 'bar',
                data: [2469.8, 2570.4, 2701.6, 2807.1],
                barWidth: 15,
                itemStyle: {
                    normal: {
                        barBorderRadius: 50,
                        color: "#4fb69d",
                    }
                },
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_5() {
        // 初始化图表
var myChart = echarts.init(document.getElementById('echart5'));

// 默认数据（2022年）
var data2022 = [
  { value: 58.3, name: '绿茶' },
  { value: 15.2, name: '红茶' },
  { value: 13.4, name: '黑茶' },
  { value: 9.8, name: '乌龙茶' },
  { value: 3, name: '白茶' },
  { value: 0.4, name: '黄茶' }
];

// 切换数据函数
function updateData(year) {
  var data = [];
  if (year === '2021') {
    data = [
      { value: 60.4, name: '绿茶' },
      { value: 14.2, name: '红茶' },
      { value: 13.3, name: '黑茶' },
      { value: 9.1, name: '乌龙茶' },
      { value: 2.7, name: '白茶' },
      { value: 0.4, name: '黄茶' }
    ];
  } else if (year === '2020') {
    data = [
      { value: 61.7, name: '绿茶' },
      { value: 13.5, name: '红茶' },
      { value: 12.5, name: '黑茶' },
      { value: 9.3, name: '乌龙茶' },
      { value: 2.5, name: '白茶' },
      { value: 0.5, name: '黄茶' }
    ];
  } else if (year === '2019') {
    data = [
      { value: 63.5, name: '绿茶' },
      { value: 11, name: '红茶' },
      { value: 13.5, name: '黑茶' },
      { value: 9.9, name: '乌龙茶' },
      { value: 1.8, name: '白茶' },
      { value: 0.3, name: '黄茶' }
    ];
  } else {
    // 默认数据（2022年）
    data = data2022;
  }
  return data;
}

// 更新图表函数
function updateChart(year) {
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: "{b} : {c} ({d}%)"
    },
    legend: {
      right: 10,
      top: 30,
      height: 160,
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 10,
      textStyle: {
        color: 'rgba(255,255,255,.6)',
        fontSize: 12
      },
      orient: 'vertical',
      data: ['绿茶', '红茶', '黑茶', '乌龙茶', '黄茶', '白茶']
    },
    calculable: true,
    series: [{
      name: ' ',
      color: ['#05fe12', '#ff2b2b', '#242424', '#f8ae5a', '#ecff3e', '#f5fcaf'],
      type: 'pie',
      radius: [30, 70],
      center: ['35%', '50%'],
      roseType: 'radius',
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: true
        }
      },
      lableLine: {
        normal: {
          show: false
        },
        emphasis: {
          show: true
        }
      },
      data: updateData(year)
    }]
  };

  myChart.setOption(option);
}

// 初始加载图表
updateChart('2022');

// 监听年份选择变化
document.getElementById('year-select').addEventListener('change', function () {
  var selectedYear = this.value;
  updateChart(selectedYear);
});
    }
})



		
		
		


		









