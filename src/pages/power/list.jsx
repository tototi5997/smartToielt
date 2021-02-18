import React from 'react'
import './index.less'
import {UserOutlined} from '@ant-design/icons'

const List = ({info,onItemClick}) => {
  return (
    <div className='userlist_div'>
      <div className='userlist_item' onClick={onItemClick}>
        <UserOutlined className='icon'/>
        <label>{info.role}：{info.name}</label>
      </div>
    </div>
  )
}
export default List