import React from 'react'
import {Card, Avatar} from 'antd'
import w from '../../models/root'
import { observer } from 'mobx-react-lite'
import { EditOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons'
import cookie from 'react-cookies'
import LogoutModal from './logout'

const {user} = w
const { Meta } = Card


const UserInfo = () => {  
  const cookieuser = cookie.load('user')
  // 登出
  const asyncLogout = () => {
    user.showLogoutModal()
    return new Promise(resolve => {
      cookie.remove('user')
      const cookiestate = cookie.load('user')
      resolve(cookiestate)
    })
  }
  const userLogout = async () => {
    cookie.loadAll()
    await asyncLogout()
    user.userLogout()
  }
  return (
    <div style={{height:800,overflow:"auto"}}>
      <Card style={{margin:15}}>
        <Card
          style={{ width:'100%'}}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <LogoutOutlined key="logout" onClick={userLogout}/>,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={user.username || cookieuser}
            description="This is the description"
          />
        </Card>
      </Card>
      <LogoutModal />
    </div>
  )
}
export default observer(UserInfo)