const pieMoneyOption = {
  title: {
      text: '维修费用表',
  },
  tooltip: {
      trigger: 'item'
  },
  legend: {
      orient: 'vertical',
      right: 0,
      itemWidth: 10,
      textStyle: {
        fontSize: 10
      }
  },
  series: [
      {
          name: '费用统计',
          type: 'pie',
          radius: '50%',
          data: [
              {value: 231, name: '水龙头'},
              {value: 134, name: '洗手池'},
              {value: 231, name: '储水器'},
              {value: 213, name: '干手机'},
              {value: 300, name: '红外扫描仪'}
          ],
          emphasis: {
              itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
          }
      }
  ]
}
export default pieMoneyOption