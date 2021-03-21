const pieCenterOption = {
  title:{
    text:'今日空气成分'
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
          name: '空气成分',
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
              {value: 24, name: 'O2'},
              {value: 12, name: 'CO2'},
              {value: 4, name: 'SO2'},
              {value: 13, name: 'NOx'},
              {value: 23, name: 'NH3'}
          ]
      }
  ]
}
export default pieCenterOption