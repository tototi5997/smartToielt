// 耗材组成
export const typeOption = {
    title: {
        text: '耗材统计表',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['已消耗', '库存']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['厕纸', '洗手剂', '空气清新剂', '干手纸', '脚垫', '洁厕灵']
    },
    series: [
        {
            name: '已消耗',
            type: 'bar',
            data: [56, 32, 89, 65, 32, 48]
        },
        {
            name: '库存',
            type: 'bar',
            data: [128, 86, 203, 156, 201, 155]
        }
    ]
}
// 资金消耗
export const moneyOption = {
    title: {
        text: '资金消耗表',
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: 'bottom'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    series: [
        {
            name: '资金消耗（单位：元）',
            type: 'pie',
            radius: [30, 100],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            data: [
                {value: 4000, name: '厕纸'},
                {value: 3800, name: '洗手剂'},
                {value: 3220, name: '空气清新剂'},
                {value: 3040, name: '干手纸'},
                {value: 2850, name: '脚垫'},
                {value: 2630, name: '洁厕灵'},
            ]
        }
    ]
}
// 数量统计
export const countOption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: ['当月支出', '当月预算', '平均值']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '金额',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} 元'
            }
        },
        {
            type: 'value',
            name: '单位',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} 个'
            }
        }
    ],
    series: [
        {
            name: '当月支出',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name: '当月预算',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name: '平均值',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
}