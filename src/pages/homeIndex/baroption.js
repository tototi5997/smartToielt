const option = {
  title:{
    text:'本周用水量'
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
          type:'bar',
          showBackground: true,
          data:[1000,2000,1520,1200,3522,1400,5200],
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
        }
      }
  ]
}
export default option