import React from 'react'
import './index.less'
import {Card,Row,Col,Progress,Descriptions,Tooltip  } from 'antd'
import echarts from 'echarts/lib/echarts'
import ReactEcharts from 'echarts-for-react'
import echartsThema from '../../public/echartsThema'
import '../../common/common.less'

import 'echarts/lib/chart/line'          //导入折线图
import 'echarts/lib/chart/bar'          //导入柱形图
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'

export default class HomePage extends React.Component{

    componentWillMount(){
        echarts.registerTheme('ECHARTS',echartsThema);
    }
    //折线图（用水量）渲染
    getOption=()=>{
        let option={
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
                    type:'line',
                    data:[1000,2000,1520,1200,3522,1400,5200]
                }
            ]
        }
        return option;
    }
    //柱形图渲染（客流量）渲染
    getOption1=()=>{
        let option={
            title:{
                text:'本周客流量'
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
                    name:'客流量',
                    type:'bar',
                    data:[1000,2000,1520,1200,3522,1400,5200]
                }
            ]

        }
        return option;
    }
    //饼图（空气成分表）渲染
    getOption2=()=>{
        let option ={
            title:{
                text:'今日空气质量'
            },
            //小标题
            legend:{
                orient:'vertical',  //小标题垂直排列
                right:-30,
                data:['氖气','氦气','甲烷','氢气','氪气']
            },
            //数据源
            series:[
                {
                    name:'含量',
                    type:'pie',
                    data:[ 
                        {
                            name:'氖气',
                            value:0.0018
                        },
                        {
                            name:'氦气',
                            value:0.00052
                        },
                        {
                            name:'甲烷',
                            value:0.00015
                        },
                        {
                            name:'氢气',
                            value:0.0005
                        },
                        {
                            name:'氪气',
                            value:0.00023
                        },
                    ]  
                }
            ],
            //鼠标移上去显示信息
            tooltip:{
                // trigger:'item',
                formatter:'{a}<br/>{b} :  ({d}%)'
            }
        } 
        return option;
    }

    render(){
        return(
            <div className='warp_content outerdiv'>
                <Card title='当日数据' className='inner-card'>
                  <div className='progress_warp'>
                    <div className='progress_box'>
                        <Tooltip title="厕纸总存量当前为95%，低于30%请及时更换">
                        <Progress className='progress_margin'
                        type="circle"
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={95}
                        /></Tooltip>
                        <Descriptions title="厕纸总余量" className='description_style'  />
                    </div>

                    <div className='progress_box'>
                        <Tooltip title='洗手剂当前存量为90%，低于百分之20请及时补充'>
                        <Progress className='progress_margin'
                        type="circle"
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={90}
                        /></Tooltip>
                        <Descriptions title="洗手剂余量"  className='description_style'/>
                    </div>

                    <div className='progress_box'>
                        <Tooltip title='空气清新剂当前余量60%，低于10%请及时补充'>
                        <Progress className='progress_margin'
                        type="circle"
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={60}
                        /></Tooltip>
                        <Descriptions title="空气清新剂"  className='description_style' />
                    </div>

                    <div className='progress_box'>
                        <Tooltip title='干手纸库存当前70%，低于15%请及时补充'>
                        <Progress className='progress_margin'
                        type="circle"
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={70}
                        /></Tooltip>
                        <Descriptions title="干手纸库存"  className='description_style' />
                    </div>
                  </div> 
                </Card>
                
                <div className="inner-card">
                    <Row gutter={16}>
                    <Col span={12}>
                        <Card  bordered={false}>
                        <ReactEcharts option={this.getOption()} theme='ECHARTS'></ReactEcharts>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card  bordered={false}>
                        <ReactEcharts option={this.getOption1()} theme='ECHARTS'></ReactEcharts>
                        </Card>
                    </Col>
                    </Row>
                </div>

                <div className="inner-card">
                    <Row gutter={16}>
                    <Col span={8}>
                        <Card bordered={false}>
                            <ReactEcharts option={this.getOption2()} theme='ECHARTS' ></ReactEcharts>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card  bordered={false}>
                        <ReactEcharts option={this.getOption2()} theme='ECHARTS' ></ReactEcharts>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card  bordered={false}>
                        <ReactEcharts option={this.getOption2()} theme='ECHARTS' ></ReactEcharts>
                        </Card>
                    </Col>
                    </Row>                   
                </div>
            </div>
        );
    }
}