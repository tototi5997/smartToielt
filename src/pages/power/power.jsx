import React,{useState, useEffect, Children} from 'react'
import { observer } from 'mobx-react-lite'
import {Button, Card, Radio} from 'antd'
import  '../../common/common.less'
import './index.less'
import { TeamOutlined, NodeIndexOutlined, SearchOutlined} from '@ant-design/icons'
import Axios from '../../utils/axios'
import List from './list'
import AuthList from './auth-list'
import CardTitle from '../../components/card-title'


// 筛选条件组件
const Department = () => {
  // radio change
  const radioChange = e => {
    // console.log(e.target.value)
  }
  return (
    <div className='depart_warp'>
      <Radio.Group onChange={radioChange}>
      <Radio value={0}>管理员</Radio>
      <Radio value={1}>员工</Radio>
      </Radio.Group>
      <Button className='depart_button' type='primary'>
        <SearchOutlined />
      </Button>
    </div>
  )
}

const Power = () => {
  let [adminList, setAdminList] = useState()
  let [simList, setSimList] = useState()
  let [authList, setAuthList] = useState([])

  // useeffect 获取用户列表
  useEffect(() => {
    Axios.ajax({url:'/usrlist'}).then(res => {
      if (res.code === 0 ){
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setAdminList(adminList = res.result.adminlist)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setSimList(simList = res.result.simlist)
      }
    })
  },[])

  // testclick
  const itemClick = item => {
    let list = [<AuthList item={item}/>]
    setAuthList(authList = list)
    return authList
  }
  // 渲染列表的方法
  const draw = () => {
    let itemlist = []
    if(adminList){
       itemlist = adminList.map(item =>
         Children.toArray(<List info={item} onItemClick={()=>{itemClick(item)}}/>)
        )
        // return itemlist
    }
    if(simList){
      itemlist.push(simList.map(item =>
        Children.toArray(<List info={item} onItemClick={()=>{itemClick(item)}}/>)
        ))
      return itemlist
    }
  }
  return (
    <div className="outerdiv warpdiv">
      <Card
      title={
        <CardTitle
        title='员工管理'>
          <TeamOutlined />
        </CardTitle>
      }
      className="innerCard powercard">
        <Department/>
        <div className='itemdiv'>
          {draw()}
        </div>
      </Card>

      <Card
      title={
        <CardTitle
        title='权限分配'>
          <NodeIndexOutlined />
        </CardTitle>
      }
      className='innerCard powerdetail'>
        {authList}
      </Card>
    </div>
  )
}
export default observer(Power)
