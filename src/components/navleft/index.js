import React,{Component} from 'react'
import './index.less'
import { Menu } from 'antd';

const { SubMenu } = Menu;
export default class NavLeft extends Component{
    render(){
        return(
            <div >
                  <Menu
                    theme='dark'
                    style={{ width: 'auto' ,minHeight:820,overflow:"auto"}}
                    defaultSelectedKeys={['1']}  
                    defaultOpenKeys={['sub1','sub2']}
                    mode="inline"
                >
                    <SubMenu
                    key="sub1"
                    title='公厕状态监测'>
                    <Menu.Item key="1">环境监测</Menu.Item>
                    <Menu.Item key="2">公厕地图</Menu.Item>
                    <Menu.Item key="3">清扫提醒</Menu.Item>
                    </SubMenu>


                    <SubMenu key="sub2" title="公厕管理">
                    <Menu.Item key="4">设备保修</Menu.Item>
                    <Menu.Item key="5">耗材申请</Menu.Item>
                    <Menu.Item key="6">公告管理</Menu.Item>
                    </SubMenu>

                    <SubMenu
                    key="sub3"
                    title={<span>用户管理</span>}>
                        <Menu.Item key="7">权限管理</Menu.Item>
                        <Menu.Item key="8">员工关联</Menu.Item>
                    </SubMenu>

                    <SubMenu
                    key="sub4"
                    title='报表统计'>
                    <Menu.Item key="9">维修统计</Menu.Item>
                    <Menu.Item key="10">考勤统计</Menu.Item>
                    <Menu.Item key="11">环境统计</Menu.Item>
                    <Menu.Item key="12">耗材统计</Menu.Item>
                    </SubMenu>

                </Menu>
            </div>
        );
    }
}