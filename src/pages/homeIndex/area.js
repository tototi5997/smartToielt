const radarOption = {
  title: {
      text: '耗材表'
  },
  tooltip: {},
  radar: {
      // shape: 'circle',
      name: {
          textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
          }
      },
      indicator: [
          { name: '厕纸', max: 6500},
          { name: '干手纸', max: 16000},
          { name: '洗手液', max: 30000},
          { name: '空气清新剂', max: 38000},
          { name: '洁厕灵', max: 52000},
          { name: '市场', max: 25000}
      ]
  },
  series: [{
      name: '预算 vs 开销',
      type: 'radar',
      // areaStyle: {normal: {}},
      data: [
          {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: '预算分配'
          },
          {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: '实际开销'
          }
      ]
  }]
}
export default radarOption