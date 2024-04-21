 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {

echarts_2()
            function echarts_2() {
                var myChart = echarts.init(document.getElementById('echart2'));
                var GreenTeaData=[0, 11296.0, 166169.0, 104423.0, 129962.0, 46988.0, 21648.0, 63567.0, 212117.0,  78383.7,33471.0, 43432.0, 421.1,31939.8,223804.0 ,116237.0,244613.0,2.8,58204.0,1327.0];
                var AllTeaData = [8.3, 13951.0, 172185.0, 112141.0, 426834.0, 57528.0, 21648.0, 68571.0, 296097.0, 186049.3, 86797.0, 68065.0, 974.9, 37036.2, 267741.0, 141285.0, 384480.0, 92.3, 62136.0, 1327.0];
                var OolongData = [0, 0, 0, 31, 228256.0, 787, 0, 0, 1533.0, 3309.8, 39989.0, 315, 0, 49, 5438.0, 769, 5122.1, 0, 0, 0];
                var BlackTeaData = [0, 2499.6, 1349.3, 5986.0, 49947.0, 5837.0, 0, 5004.0, 31177.0, 21347.6, 5707.0, 16470.0, 388, 3718.5, 4419.0, 7146.0, 54283.9, 0, 3082.0, 0];
                var DarkTeaData = [0, 150, 3111.5, 0, 0, 30, 0, 0, 43454.0, 75401.6, 0, 1587.0, 0, 0, 17067.0, 6090.0, 0, 0, 850, 0];
                var YellowTeaData = [0, 0, 0, 0, 0, 42, 0, 0, 410, 36, 0, 0, 0, 0, 106, 62, 0, 0, 0, 0];
                var WhiteTeaData = [0, 3.5, 0, 144, 17483.0, 955, 0, 0, 1315.0, 32, 0, 2, 0, 15.5, 473, 1268.0, 3.2, 0, 0, 0];
                var OtherTeaData = [8.3, 2, 1555.2, 1557.0, 1186.0, 2889.0, 0, 0, 6091.0, 7538.7, 7621.0, 6259.0, 165.8, 1313.4, 16434.0, 9713.0, 80457.6, 88.4, 0, 0];
                var titlename = ['山西省', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省','重庆市','四川省','贵州省','云南省','西藏自治区','陕西省','甘肃省'];
                
                var teaType = $('#teaType').val();
                var data;

                switch (teaType) {
                    case 'AllTea':
                        data = AllTeaData;
                        break;
                    case 'GreenTea':
                        data = GreenTeaData;
                        break;
                    case 'OolongTea':
                        data = OolongData;
                        break;
                    case 'BlackTea':
                        data = BlackTeaData;
                        break;
                    case 'DarkTea':
                        data = DarkTeaData;
                        break;
                    case 'YellowTea':
                        data = YellowTeaData;
                        break;
                    case 'WhiteTea':
                        data = WhiteTeaData;
                        break;
                    case 'OtherTea':
                        data = OtherTeaData;
                        break;
                }

                var option = {
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

                myChart.setOption(option);

                $('#teaType').on('change', function() {
                    var teaType = $(this).val();
    var titlename = ['山西省', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省','重庆市','四川省','贵州省','云南省','西藏自治区','陕西省','甘肃省'];
    var data;

                    switch (teaType) {
                        case 'AllTea':
                            data = AllTeaData;
                            break;
                        case 'GreenTea':
                            data = GreenTeaData;
                            break;
                        case 'OolongTea':
                            data = OolongData;
                            break;
                        case 'BlackTea':
                            data = BlackTeaData;
                            break;
                        case 'DarkTea':
                            data = DarkTeaData;
                            break;
                        case 'YellowTea':
                            data = YellowTeaData;
                            break;
                        case 'WhiteTea':
                            data = WhiteTeaData;
                            break;
                        case 'OtherTea':
                            data = OtherTeaData;
                            break;
                    }
                    var newOption = {
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
                            // ... 其他 yAxis 配置
                        }, {
                            show: false,
                            inverse: true,
                            data: data,
                            // ... 其他 yAxis 配置
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
                        }]};

                        myChart.setOption(newOption);
                });

               }

})