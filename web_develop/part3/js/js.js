 $(window).load(function(){  
$(".loading").fadeOut()
            })  
			
/****/
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
    echarts_5()
    echarts_6()
    pe01()
    pe02()
    pe03()

function echarts_1() {
 var myChart = echarts.init(document.getElementById('echarts1'));

 option = {
  tooltip: {
 trigger: 'axis',
 axisPointer: {type: 'shadow'},
},"grid": {
"top": "20%",
"right":"50",
"bottom":"20",
"left":"30",
},
legend: {
  data: ['出口数量', '增长率'],
  right: 'center', width:'100%',
  textStyle: {
      color: "black"
  },
  itemWidth: 12,
  itemHeight: 10,
},



 "xAxis": [
   {
     "type": "category",
     data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
     axisLine: { lineStyle: {color: "rgba(0,0,0,.1)"}},
     axisLabel:  { textStyle: {color: "rgba(0,0,0,.7)", fontSize: '14', },
         },
 
     },
],
 "yAxis": [
   {
     "type": "value",
     "name": "单位:万吨",
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
      max:10,
       lineStyle: {color: 'rgba(0,0,0,.1)'}
      },//左线色
     
   },
   {
     "type": "value",
     "name": "增速",
     "show": true,
     "axisLabel": {
       "show": true,
       fontSize:14,
       formatter: "{value} %",
       color: "rgba(0,0,0,.6)"
     },
     axisTick: {show: false},
   axisLine: {lineStyle: {color: 'rgba(0,0,0,.1)'}},//右线色
    splitLine: {show:true,lineStyle: {color:'rgba(0,0,0,.1)'}},//x轴线
   },
 ],
 "series": [
  
   {
     "name": "出口数量",
     "type": "bar",
     "data": [32.9,35.5, 36.4, 36.7,34.9,36.9,37.5],
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
   },
   {
     "name": "增长率",
     "type": "line",
     "yAxisIndex": 1,
 
     "data": [1.15, 8.08, 2.67,0.50,-4.84,5.89,1.5],
   lineStyle: {
   normal: {
     width: 2
   },
 },
     "itemStyle": {
       "normal": {
         "color": "#3496f8",
    
       }
     },
     "smooth": true
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
        axisPointer: {type: 'shadow'},
       // formatter:'{c}' ,
    },
    grid: {
        left: '0',
	  	top: '30',
        right: '10',
        bottom: '-20',
        containLabel: true
    },
    legend: {
        data: ['进口数量'],
        right: 'center',
        top:0,
        textStyle: {
            color: "black"
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
          rotate: -45,
          textStyle: {
 					color: "rgba(0,0,0,.6)",
          fontSize:14,
                },
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(0,0,0,.1)'
			}

        },

   data: ['2010年   ', '2011年   ', '2012年   ', '2013年   ', '2014年  ' , '2015年  ', '2016年  ']

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,

       

    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
       // splitNumber: 6,
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,.1)'
            }
        },
       axisLabel:  {
        formatter: "{value} ",
                textStyle: {
 					color: "rgba(0,0,0,.6)",
					fontSize:14,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(0,0,0,.1)'
            }
        }
    }],
    series: [
		{
        name: '进口数量(单位:万吨)',
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
        data: [1.35, 1.49, 1.95, 2.07,2.37,2.43,2.42]
    }
		 ]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts3'));

        option = {

          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['字段1', '字段2', '字段3'],
            right: 'center',
            top:0,
            textStyle: {
                color: "#fff"
            },
            itemWidth: 12,
            itemHeight: 10,
            // itemGap: 35
        },
          grid: {
            left: '0',
            right: '20',
            bottom: '0',
            top:'15%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: ['字段1','字段2','字段3','字段3','字段4','字段5','字段6','字段7','字段8','字段9'],
            axisLine: {
              lineStyle: {
                color: 'white'
   
              }
            },
            axisLabel: {
              //rotate:-90,
              formatter:function(value){return value.split("").join("\n");},
         textStyle: {
              color: "rgba(255,255,255,.6)",
             fontSize:14,
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
            axisTick: {show: false},
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,0.1)'
              }
            },
            axisLabel: {textStyle: {
              color: "rgba(255,255,255,.6)",
             fontSize:14,
                   }},
            axisLine: {show:false},
          },
     
          series: [{
            name: '字段1',
            type: 'bar',
            stack: 'a',
            barWidth: '30',barGap: 0,
            itemStyle: {
               normal: {
                color: '#8bd46e', }
            },
            data: [331, 497, 440, 81, 163, 366, 57, 188, 172, 2295]
          },
          {
            name: '字段2',
            type: 'bar',
            stack: 'a',
            barWidth: '30',barGap: 0,
            itemStyle: {
               normal: {
                color: '#f5804d',
               barBorderRadius:0, }
            },
            data: [48, -97, 56, -59, 90, 98, 64, 61, -8, 253]
          },
          {
            name: '字段3',
            type: 'bar',
            stack: 'a',
            barWidth: '30',barGap: 0,
            itemStyle: {
               normal: {
                color: '#248ff7',
               barBorderRadius:0, }
            },
            data: [ -13, -21, -112, 5, 0, -5, 72, -3, 8, -69]
          }
        ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_5() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echarts5'));

      option = {
        tooltip: {
       trigger: 'axis',
       axisPointer: {type: 'shadow'},
      },"grid": {
        "top": "15%",
      "right":"10%",
      "bottom":"20",
      "left":"10%",
      },
       legend: {
        data: ['内销数量(单位:万吨)', '增长率'],
        right: 'center',
        top:0,
        textStyle: {
            color: "black"
        },
        itemWidth: 12,
        itemHeight: 10,
      },
       "xAxis": [
         {
           "type": "category",
       
           data: ['2016','2017','2018','2019', '2020', '2021', '2022'],
        axisLine: { lineStyle: {color: "rgba(0,0,0,.1)"}},
           axisLabel:  { textStyle: {color: "rgba(0,0,0,.7)", fontSize: '14', },
               },
       
           },
     ],
       "yAxis": [
         {
           "type": "value",
           splitLine: {show: false},
           axisTick: {show: false},
           "axisLabel": {
             "show": true,
             color: "rgba(0,0,0,.6)"
            
           },
           axisLine: {lineStyle: {color: 'rgba(0,0,0,.1)'}},//左线色
           
         },
         {
           "type": "value",
           "show": true,
           axisTick: {show: false},
           "axisLabel": {
             "show": true,
             formatter: "{value} %",
             color: "rgba(0,0,0,.6)"
           },
         axisLine: {lineStyle: {color: 'rgba(0,0,0,.1)'}},//右线色
          splitLine: {show:true,lineStyle: {color:'rgba(0,0,0,.1)'}},//x轴线
         },
       ],
       "series": [
        
         {
           "name": "内销数量(单位:万吨)",
           "type": "bar",
           "data": [
            171.06 ,181.70,191.05 ,202.56,220.16,230.19,239.75,
           ],
           "barWidth": "20%",

           "itemStyle": {
             "normal": {
              barBorderRadius: 15,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#fccb05'
            }, {
                offset: 1,
                color: '#f5804d'
            }]),
             }
           },
           "barGap": "0"
         },
         {
           "name": "增长率",
           "type": "line",
           "yAxisIndex": 1,
       
           "data": [1.88,6.22,5.15,6.02,8.69,4.56,4.15],
         lineStyle: {
         normal: {
           width: 2
         },
       },
           "itemStyle": {
             "normal": {
               "color": "#ff3300",
          
             }
           },
           "smooth": true
         }
       ]
   };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize",function(){
          myChart.resize();
      });
  }
    function echarts_4()  {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echarts4'));
var data =[4980000, 3671855.71, 3095785.52, 2640005, 2322138.82, 2172913.69, 2126474.23, 1876237.13, 1826000, 1791325.06, 1770088, 1246558, 739333.31, 714000, 460300, 327400, 31340.21, 14997.14 ]
var titlename =  ['贵州', '四川', '福建', '浙江', '云南', '湖北', '陕西', '河南', '安徽', '广东', '湖南', '广西', '山东', '江西', '重庆', '江苏', '甘肃', '海南'];
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
              color:'#1089E7',
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
  function echarts_6() {
    // Initialize echarts instance based on the prepared DOM element
    var myChart = echarts.init(document.getElementById('echarts6'));

    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
        legend: {
            top: '15%',
            data: ['黑茶+普洱',  '花茶', '乌龙茶', '红茶', '绿茶'],
            icon: 'circle',
            textStyle: {
                color: 'rgba(255,255,255,.6)',
            }
        },
        calculable: true,
        series: [{
            name: '',
            color: ['#2f89cf', '#53b666', '#4cb9cf', '#c96262', '#62c98d'],		
            type: 'pie',
            startAngle: 0,
            radius: [51, 100],
            center: ['50%', '45%'],
            roseType: 'area',
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length2: 1,
                },
                emphasis: {
                    show: true
                }
            },
            data: [
                {value: 0.24, name: '黑茶+普洱'},
                {value: 0.65, name: '花茶'},
                {value: 1.93, name: '乌龙茶'},
                {value: 3.32, name: '红茶'},
                {value: 31.39, name: '绿茶'},
                {value: 0, name: "", label: {show: false}, labelLine: {show: false}},
                {value: 0, name: "", label: {show: false}, labelLine: {show: false}},
                {value: 0, name: "", label: {show: false}, labelLine: {show: false}},
                {value: 0, name: "", label: {show: false}, labelLine: {show: false}},
                {value: 0, name: "", label: {show: false}, labelLine: {show: false}},
            ]
        }]
    };

    // Apply the configuration and display the chart with the specified data.
    myChart.setOption(option);
    window.addEventListener("resize", function(){
        myChart.resize();
    });
}


    function pe01() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pe01'));
        var txt=67
        option = {
            title: {
              text: txt+'%',
              x: 'center',
             y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: '#fff',
                fontSize: '18'
              }
            },
            color:'rgba(255,255,255,.3)',
         
            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              radius: ['65%', '80%'],
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,
              data: [{
                value: txt,
                name: '已使用',
                itemStyle: {
                  normal: {
                    color:'#eaff00',
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                name: '未使用',
                value: 100-txt
              }]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function pe02() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pe02'));
        var txt=16
        option = {
            title: {
              text: txt+'%',
              x: 'center',
             y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: '#fff',
                fontSize: '18'
              }
            },
            color:'rgba(255,255,255,.3)',
         
            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              radius: ['65%', '80%'],
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,
              data: [{
                value: txt,
                name: '已使用',
                itemStyle: {
                  normal: {
                    color:'#ea4d4d',
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                name: '未使用',
                value: 100-txt
              }]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function pe03() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pe03'));
        var txt=17
        option = {
            title: {
              text: txt+'%',
              x: 'center',
             y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: '#fff',
                fontSize: '18'
              }
            },
            color:'rgba(255,255,255,.3)',
         
            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              radius: ['65%', '80%'],
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,
              data: [{
                value: txt,
                name: '已使用',
                itemStyle: {
                  normal: {
                    color:'#395ee6',
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                name: '未使用',
                value: 100-txt
              }
            ]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
})



		
		
		


		



















