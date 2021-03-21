import React,{Component} from 'react'
import './index.less'
import { Menu } from 'antd';
import {Link} from 'react-router-dom'

const { SubMenu } = Menu;
export default class NavLeft extends Component{
    render(){
        return(
            <div>
                  <Menu
                    theme='dark'
                    style={{ width: 'auto' ,minHeight:820,overflow:"auto"}}
                    defaultOpenKeys={['sub1','sub2']}
                    mode="inline"
                  >
                    <SubMenu
                    key="sub1"
                    title='公厕状态监测'>
                      <Menu.Item key="1"><Link to={{pathname:'/home/homepage'}}>环境监测</Link></Menu.Item>
                      <Menu.Item key="2"><Link to={{pathname:'/home/map'}}>公厕地图</Link></Menu.Item>
                      <Menu.Item key="3"><Link to={{pathname:'/home/remind'}}>清扫提醒</Link></Menu.Item>
                    </SubMenu>


                    <SubMenu key="sub2" title="公厕管理">
                      <Menu.Item key="4"><Link to={{pathname:'/home/equipmentfix'}}>设备保修</Link></Menu.Item>
                      <Menu.Item key="5"><Link to={{pathname:'/home/sourceapply'}}>耗材申请</Link></Menu.Item>
                      <Menu.Item key="6"><Link to={{pathname:'/home/notice'}}>公告管理</Link></Menu.Item>
                    </SubMenu>

                    <SubMenu
                    key="sub3"
                    title='用户管理'>
                        <Menu.Item key="7"><Link to={{pathname:'/home/power'}}>权限管理</Link></Menu.Item>
                        <Menu.Item key="8"><Link to={{pathname:'/home/stuffrelation'}}>员工关联</Link></Menu.Item>
                    </SubMenu>

                    <SubMenu
                    key="sub4"
                    title='报表统计'>
                      <Menu.Item key="9"><Link to={{pathname:'/home/repairStatistic'}}>维修统计</Link></Menu.Item>
                      <Menu.Item key="10">考勤统计</Menu.Item>
                      <Menu.Item key="11">环境统计</Menu.Item>
                      <Menu.Item key="12">耗材统计</Menu.Item>
                    </SubMenu>

                </Menu>
            </div>
        );
    }
}