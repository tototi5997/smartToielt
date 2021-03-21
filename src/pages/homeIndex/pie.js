const pieOption = {
  title: {
      text: '用户组成表',
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
          name: '用户组成',
          type: 'pie',
          radius: '50%',
          data: [
              {value: 231, name: '老人'},
              {value: 134, name: '小孩'},
              {value: 231, name: '青少年'},
              {value: 213, name: '成人男性'},
              {value: 300, name: '成人女性'}
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
export default pieOption