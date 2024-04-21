window.onload = function () {
  echart01();
  echart02();
  echart03();
  echart04();
  echart05();


  function echart01() {
    var myChart = echarts.init(document.getElementById('left2'));
    var option = {
      baseOption: {
        timeline: {
          axisType: 'category',
          autoPlay: true,
          playInterval: 1000,
          data: ['2019', '2020', '2021', '2022'],
          label: {
            formatter: function (s) {
              return new Date(s).getFullYear();
            }
          }
        },
        tooltip: {},
        legend: {
          left: 'right',
          data: ['内销'],
          selected: {
            '内销均价': true
          }
        },
        calculable: true,
        grid: {
          top: 80,
          bottom: 100
        },
        xAxis: [
          {
            type: 'category',
            axisLabel: { interval: 0 },
            data: ['绿茶', '红茶', '乌龙茶', '黑茶', '白茶', '黄茶']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '内销均价(元/kg)'
          }
        ],
        series: [
          {
            name: '内销均价', type: 'bar',
            itemStyle: {
              normal: {
                color: function (params) {
                  // 为每个茶类指定不同的颜色
                  switch (params.dataIndex) {
                    case 0: return '#187a2f'; // 绿茶
                    case 1: return '#da1d23'; // 红茶
                    case 2: return '#c94930'; // 乌龙茶
                    case 3: return '#ad213e'; // 黑茶
                    case 4: return '#0aa3b5'; // 白茶
                    case 5: return '#ebb40f'; // 黄茶
                    default: return '#c23531';
                  }
                }
              }
            },
          }
        ]
      },
      options: [
        {
          title: { text: '2019六大茶类内销均价' },
          series: [
            {
              data: [
                { name: '绿茶', value: 131.5 },
                { name: '红茶', value: 178.98 },
                { name: '乌龙茶', value: 131.39 },
                { name: '黑茶', value: 93.73 },
                { name: '白茶', value: 149.11 },
                { name: '黄茶', value: 120.45 }
              ]
            }
          ]
        },
        {
          title: { text: '2020六大茶类内销均价' },
          series: [
            {
              data: [
                { name: '绿茶', value: 132.8 },
                { name: '红茶', value: 159.1 },
                { name: '乌龙茶', value: 128.1 },
                { name: '黑茶', value: 96.1 },
                { name: '白茶', value: 143.3 },
                { name: '黄茶', value: 138.1 }
              ]
            }
          ]
        },
        {
          title: { text: '2021六大茶类内销均价' },
          series: [
            {
              data: [
                { name: '绿茶', value: 152.3 },
                { name: '红茶', value: 146.2 },
                { name: '乌龙茶', value: 113.8 },
                { name: '黑茶', value: 76.2 },
                { name: '白茶', value: 129.8 },
                { name: '黄茶', value: 122.2 }
              ]
            }
          ]
        },
        {
          title: { text: '2022六大茶类内销均价' },
          series: [
            {
              data: [
                { name: '绿茶', value: 160.99 },
                { name: '红茶', value: 147.97 },
                { name: '乌龙茶', value: 114.56 },
                { name: '黑茶', value: 88.19 },
                { name: '白茶', value: 123.67 },
                { name: '黄茶', value: 126.40 }
              ]
            }
          ]
        }
      ]
    };

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }
  }
  function echart02() {
    var myChart = echarts.init(document.getElementById('right1'));
    var option;
    setTimeout(function () {
      option = {
        legend: {},
        tooltip: {
          trigger: 'axis',
          showContent: false
        },
        dataset: {
          source: [
            ['product', '1月1日', '2月1日', '3月1日', '4月1日', '5月1日', '6月1日', '7月1日', '8月1日'],
            ['黑茶', 1426, 1962, 1913, 1554, 1358, 1328, 1308, 1162],
            ['绿茶', 2989, 4042, 4241, 4556, 4460, 4062, 4022, 6892],
            ['黄茶', 589, 707, 808, 1031, 852, 801, 720, 606],
            ['红茶', 2270, 3426, 3647, 2894, 2083, 2196, 2145, 1929],
            ['白茶', 3355, 5148, 4607, 5080, 3946, 3779, 3417, 3145],
            ['乌龙茶', 1605, 2152, 2385, 2078, 1623, 1952, 1990, 1915]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: { gridIndex: 0 },
        grid: { top: '55%' },
        series: [
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            emphasis: {
              focus: 'self'
            },
            label: {
              formatter: '{b}: {@2012} ({d}%)'
            },
            encode: {
              itemName: 'product',
              value: '2012',
              tooltip: '2012'
            }
          }
        ]
      };
      myChart.on('updateAxisPointer', function (event) {
        const xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
          const dimension = xAxisInfo.value + 1;
          myChart.setOption({
            series: {
              id: 'pie',
              label: {
                formatter: '{b}: {@[' + dimension + ']} ({d}%)'
              },
              encode: {
                value: dimension,
                tooltip: dimension
              }
            }
          });
        }
      });
      myChart.setOption(option);
    });

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }
  }
  function echart03() {
    var myChart = echarts.init(document.getElementById('left1'));
    var option;
    var data = [
      {
        name: '红茶',
        itemStyle: {
          color: '#da1d23'
        },
        children: [
          {
            name: '祁门红茶',
            itemStyle: {
              color: '#dd4c51'
            },
            children: [
              {
                name: '442',
                value: 1,
                itemStyle: {
                  color: '#ef2d36'
                }
              }
            ]
          },
          {
            name: '正山小种',
            itemStyle: {
              color: '#c94a44'
            },
            children: [
              {
                name: '118',
                value: 1,
                itemStyle: {
                  color: '#a5446f'
                }
              }
            ]
          }
        ]
      },
      {
        name: '黄茶',
        itemStyle: {
          color: '#ebb40f'
        },
        children: [
          {
            name: '君山银针',
            itemStyle: {
              color: '#e1c315'
            },
            children: [
              {
                name: '3062',
                value: 1,
                itemStyle: {
                  color: '#faef07'
                }
              },
            ]
          },
          {
            name: '蒙顶黄芽',
            itemStyle: {
              color: '#b09733'
            },
            children: [
              {
                name: '1233',
                value: 1,
                itemStyle: {
                  color: '#ba9232'
                }
              }
            ]
          }
        ]
      },
      {
        name: '绿茶',
        itemStyle: {
          color: '#187a2f'
        },
        children: [
          {
            name: '碧螺春',
            itemStyle: {
              color: '#718933'
            },
            children: [
              {
                name: '356',
                value: 1,
                itemStyle: {
                  color: '#7ac141'
                }
              }
            ]
          },
          {
            name: '西湖龙井',
            itemStyle: {
              color: '#3aa255'
            },
            children: [
              {
                name: '320',
                value: 1,
                itemStyle: {
                  color: '#7ac141'
                }
              }
            ]
          },
          {
            name: '黄山毛尖',
            itemStyle: {
              color: '#5e9a80'
            },
            children: [
              {
                name: '352',
                value: 1,
                itemStyle: {
                  color: '#7ac141'
                }
              }
            ]
          }
        ]
      },
      {
        name: '白茶',
        itemStyle: {
          color: '#0aa3b5'
        },
        children: [
          {
            name: '白毫银针',
            itemStyle: {
              color: '#9db2b7'
            },
            children: [
              {
                name: '450',
                value: 1,
                itemStyle: {
                  color: '#8b8c90'
                }
              }
            ]
          },
          {
            name: '福鼎白茶',
            itemStyle: {
              color: '#76c0cb'
            },
            children: [
              {
                name: '138',
                value: 1,
                itemStyle: {
                  color: '#80a89d'
                }
              }
            ]
          }
        ]
      },
      {
        name: '乌龙茶',
        itemStyle: {
          color: '#c94930'
        },
        children: [
          {
            name: '铁观音',
            itemStyle: {
              color: '#be8663'
            },
            children: [
              {
                name: '180',
                value: 1,
                itemStyle: {
                  color: '#b9a449'
                }
              }
            ]
          },
          {
            name: '大红袍',
            itemStyle: {
              color: '#ddaf61'
            },
            children: [
              {
                name: '488',
                value: 1,
                itemStyle: {
                  color: '#b7906f'
                }
              }
            ]
          }
        ]
      },
      {
        name: '黑茶',
        itemStyle: {
          color: '#ad213e'
        },
        children: [
          {
            name: '安化黑茶',
            itemStyle: {
              color: '#794752'
            },
            children: [
              {
                name: '616',
                value: 1,
                itemStyle: {
                  color: '#c78936'
                }
              }
            ]
          },
          {
            name: '普洱茶',
            itemStyle: {
              color: '#b14d57'
            },
            children: [
              {
                name: '366',
                value: 1,
                itemStyle: {
                  color: '#c78936'
                }
              }
            ]
          }
        ]
      }
    ];
    option = {
      series: {
        type: 'sunburst',
        data: data,
        radius: [0, '95%'],
        sort: undefined,
        emphasis: {
          focus: 'ancestor'
        },
        levels: [
          {},
          {
            r0: '15%',
            r: '35%',
            itemStyle: {
              borderWidth: 2
            },
            label: {
              rotate: 'tangential'
            }
          },
          {
            r0: '35%',
            r: '70%',
            label: {
              align: 'right'
            }
          },
          {
            r0: '70%',
            r: '72%',
            label: {
              position: 'outside',
              padding: 3,
              silent: false
            },
            itemStyle: {
              borderWidth: 3
            }
          }
        ]
      }
    };
    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }
  }
  function echart04() {
    var myChart = echarts.init(document.getElementById('middle1'));
    var option = {
      color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],

      legend: {
        orient: 'vertical',
        right: '5%',
        top: 'middle',
        selectedMode: true,
      },
      radar: {
        indicator: [
          { text: '一线', max: 30, color: '#000000' },
          { text: '二线', max: 30, color: '#000000' },
          { text: '三线', max: 30, color: '#000000' },
          { text: '四线', max: 30, color: '#000000' },
          { text: '五线', max: 30, color: '#000000' },
          { text: '六线', max: 30, color: '#000000' }
        ],
        center: ['50%', '50%'],
        radius: 67,
        startAngle: 90,
        splitNumber: 4,
        shape: 'circle',
        axisName: {
          formatter: '[{value}]',
          color: '#428BD4'
        },
        splitArea: {
          areaStyle: {
            color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowBlur: 10
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(211, 253, 250, 0.8)'
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(211, 253, 250, 0.8)'
          }
        }
      },
      series: [
        {
          name: 'Data',
          type: 'radar',
          data: [
            {
              value: [25, 29, 20, 21, 2, 1],
              name: '2020',
              label: {
                normal: {
                  show: false, // 默认不显示标签
                  formatter: function (params) {
                    var indicator = option.radar.indicator;
                    var value = params.value;
                    return value + '%';
                  },
                  position: 'top'
                },
                emphasis: {
                  show: true // 鼠标悬停时显示标签
                }
              }
            },
            {
              value: [25, 27, 17, 18, 6, 7],
              name: '2021',
              areaStyle: {
                color: 'rgba(255, 228, 52, 0.6)'
              },
              label: {
                normal: {
                  show: false,
                  formatter: function (params) {
                    var indicator = option.radar.indicator;
                    var value = params.value;
                    return value + '%';
                  },
                  position: 'top'
                },
                emphasis: {
                  show: true
                }
              }
            }
          ]
        }
      ]
    };

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }
  }
  function echart05() {
    var myChart = echarts.init(document.getElementById('middle2'));
    option = {
      color: ['#80FFA5'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        formatter: function (params) {
          var percent = params[0].value + '%';
          return percent;
        }
      },
      legend: {
        data: ['年龄分布占比']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['15岁以下', '16-25岁', '26-35岁', '46-55岁', '56岁以上', '未知']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '年龄分布占比',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          label: {
            show: true,
            position: 'top'
          },
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(128, 255, 165)'
              },
              {
                offset: 1,
                color: 'rgb(1, 191, 236)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [0, 14, 43, 28, 6, 2]
        }
      ]
    };

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }
  }

}