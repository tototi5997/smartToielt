import React from 'react'
import Switch from '../../common/switch/switch'


const AuthList = ({item}) => {
  return(
    <div className='authlist_warp'>
      <div className='authlist_header'>
        {item.name}|{item.role},拥有的权限如下：
      </div>
      <div className='authlist_inner'>
        <div className='authlist_item'>
          <label>权限:</label>公厕状态检测
          <Switch left={20} info={item.auth[0]}/>
        </div>
        <div className='authlist_item'>
          <label>权限:</label>公厕管理
          <Switch left={20} info={item.auth[1]}/>
        </div>
        <div className='authlist_item'>
          <label>权限:</label>用户管理
          <Switch left={20} info={item.auth[2]}/>
        </div>
        <div className='authlist_item'>
          <label>权限:</label>报表统计
          <Switch left={20} info={item.auth[3]}/>
        </div>
      </div>
    </div>
  )
}
export default AuthList
