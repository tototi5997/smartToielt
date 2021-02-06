import React from 'react'
import { SafetyOutlined, StarOutlined, EyeOutlined } from '@ant-design/icons'
import './item.less'

const AlertInfoItem = (data) => {
  const alertInfo = data.info
  return (
    <div className="itemWarp">
      <label>{alertInfo}</label>
      <div className='buttonGroup'>
        <SafetyOutlined className='buttonItem'/>
        <StarOutlined className='buttonItem'/>
        <EyeOutlined className='buttonItem'/>
      </div>
    </div>
  )
}

export default AlertInfoItem