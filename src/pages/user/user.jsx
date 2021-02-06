import React,{useEffect} from 'react'
import {Card, Avatar, Statistic} from 'antd'
import w from '../../models/root'
import { observer } from 'mobx-react-lite'
import { EditOutlined, LogoutOutlined, SettingOutlined, LikeOutlined } from '@ant-design/icons'
import cookie from 'react-cookies'
import LogoutModal from './logout'
import  './index.less'
import NoDynamic from './noDynamic'

const {user} = w
const { Meta } = Card


const UserInfo = () => {  

  useEffect(()=>{
    window.addEventListener('popstate',function(){
      // eslint-disable-next-line no-restricted-globals
      history.pushState(null,null,document.URL)
    })
  })
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
  // 渲染动态面板
  const checkUserDynamic = () => { 
    let userDynamic = user.userDynamic
    userDynamic = ' ' ? <NoDynamic/> : userDynamic
    return userDynamic
  }
  return (
    <div className="warp_div" >
      <Card className="warp_card">
        <Card
          className="user_left"
          cover={
            <img
              alt="example"
              src="/images/userBackg.png"
              className="user_img"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <LogoutOutlined key="logout" onClick={userLogout}/>,
          ]}
        >
          <Meta
            avatar={<Avatar src="/images/userLogo.png" />}
            title={user.username || cookieuser}
            description="This is the description"
          />
        </Card>

        <Card 
        className="user_right"
        title="动态"
        extra={<Statistic valueStyle={{fontSize:14}} value={1128} prefix={<LikeOutlined />} />}
        >{checkUserDynamic()}</Card>
      </Card>
      <LogoutModal />
    </div>
  )
}
export default observer(UserInfo)