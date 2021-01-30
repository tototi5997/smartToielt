import React from 'react'
import './index.less'

const NoDynamic = () => {
  return(
    <div className="dynamic_warp">
      <div className="dynamic_inner">
        <img className="dynamic_icon" src='/icon/empty.svg' alt=''/>
        <p>暂无公开动态</p>
      </div>
    </div>
  )
}
export default NoDynamic