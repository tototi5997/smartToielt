const pieCenterOption = {
  title:{
    text:'出勤率'
  },
  tooltip: {
    formatter:'{b} :  {d}%'
  },
  legend: {
      show: 'true',
      orient: "vertical",
      right: 0,
      itemWidth: 10,
      textStyle: {
        fontSize: 10
      }
  },
  series: [
      {
          name: '出勤率',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
              borderRadius: 5,
              borderColor: '#fff',
              borderWidth: 2
          },
          label: {
              show: false,
              position: 'center'
          },
          emphasis: {
              label: {
                  show: true,
                  fontSize: '20',
                  fontWeight: 'bold'
              }
          },
          labelLine: {
              show: false
          },
          data: [
              {value: 24, name: '周一'},
              {value: 12, name: '周二'},
              {value: 4, name: '周三'},
              {value: 13, name: '周四'},
              {value: 23, name: '周五'},
              {value: 23, name: '周六'},
              {value: 2, name: '周天'}
          ]
      }
  ]
}
export default pieCenterOption