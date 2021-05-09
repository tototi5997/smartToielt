import React,{useEffect, useState, Children} from 'react'
import {Card} from 'antd'
import { BellOutlined } from '@ant-design/icons'
import  '../../common/common.less'
import { observer } from 'mobx-react-lite'
import  './index.less'
import AlertInfoItem from './alert-information-item'
import Axios from '../../utils/axios'

const AlertInfo = () => {

  let [resitem, setItem] = useState([])

  useEffect(() => {
    Axios.ajax({url:'/alertinfo/information'}).then(res => {
      if (res.code === 0) {
        setItem(resitem = res.info)
      }
    })
  }, [])

  const renderItem = () => {
    let alertInfo = resitem.map(item =>
      Children.toArray(<AlertInfoItem info={item}/>)
    )
    return alertInfo
  }


  return (
    <div className="outerdiv">
      <Card title={
      <div>
        <BellOutlined />
        <label className="label">报警消息</label>
      </div>
      }
      className="innerCard">
        {renderItem()}
      </Card>
    </div>
  )
}
export default observer(AlertInfo)