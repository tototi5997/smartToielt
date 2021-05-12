// 氨气含量数据
export const gasOption = {
    title: {
        text: '氨气含量表',
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
            name: '氨气占比',
            type: 'pie',
            radius: '50%',
            data: [
                {value: 231, name: '周一'},
                {value: 134, name: '周二'},
                {value: 231, name: '周三'},
                {value: 213, name: '周四'},
                {value: 300, name: '周五'},
                {value: 300, name: '周六'},
                {value: 300, name: '周天'},
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
// ph值
export const phOption = {
    title:{
      text:'空气PH值'
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
            name:'PH',
            type:'bar',
            showBackground: true,
            data:[7.2,7.1,7.5,7.3,7.1,7.6,7.3],
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
          }
        }
    ]
  }

// 清扫次数
export const cleanOPtion = {
    title:{
      text:'清扫次数'
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
            name:'清扫次数',
            type:'line',
            data:[5,6,10,2,15,8,13]
        }
    ]
  }
  // 污染指数
  export const polutionOption = {
    title:{
      text:'空气污染指数'
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
            name:'PH',
            type:'bar',
            showBackground: true,
            data:[45,52,32,40,50,45,36],
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
          }
        }
    ]
  }