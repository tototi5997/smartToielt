const option = {
  title:{
    text:'客流量'
  },
  //鼠标悬浮展示数据
  tooltip:{
      trigger:'axis'
  },
  //x轴
  xAxis:{
      data:['周一','周二','周三','周四','周五','周六','周天']
  },
  //y轴,y轴是自己去计算渲染出来的，所以不需要定义什么
  yAxis:{
      type:'value'
  },
  series:[
      {
          name:'用水量',
          type:'line',
          data:[243,214,132,244,123,454,567]
      }
  ]
}
export default option