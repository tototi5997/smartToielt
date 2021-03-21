import React,{useState, useRef, useEffect, Children} from 'react'
import c from 'classnames'
import anime from 'animejs'
import './stuff-relation.less'
import '../../common/common.less'
import {Card, Button, Input, Avatar} from 'antd'
import CardTitle from '../../components/card-title'
import {UserAddOutlined, RetweetOutlined,UserOutlined} from '@ant-design/icons'
import Axios from '../../utils/axios'
import List from '../power/list'
import SelectGroup from './selectGroup'

const StuffRelation = () => {
  const [isCreat, setCreatState] = useState(false)
  const creatref = useRef(null)
  let [adminList, setAdminList] = useState()
  let [simList, setSimList] = useState()
  // 详情列表数组保存
  let [detailList, getDetail] = useState({
    name:'',
    age: '',
    sex: '',
    role: '',
  })

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
  // 渲染列表的方法
  const draw = () => {
    let itemlist = []
    if(adminList){
       itemlist = adminList.map(item =>
         Children.toArray(<List info={item} onItemClick={ () => {
          getDetail(item)
         }}/>)
        )
        // return itemlist
    }
    if(simList){
      itemlist.push(simList.map(item =>
        Children.toArray(<List info={item} onItemClick={ () =>{
          getDetail(item)
        }}/>)
        ))
      return itemlist
    }
  }

  return (
    <div className={c('sw', 'outerdiv')}>
      <div className={c('si')}>
        <Card
        title={
          <CardTitle title='创建员工'>
            <UserAddOutlined />
          </CardTitle>
        }
        className={c('innerCard', 'c_c')}>
          <div>
            <Button
              type="primary"
              onClick={()=>{
                setCreatState(!isCreat)
                anime({
                  targets: creatref.current,
                  duration: 2000,
                  translateX: [-8,1]
                })
              }
              }
            >创建员工</Button>

            <Button className={c('s_button_g')}>清空表单</Button>
          </div>

          <div className={c('sl')}>
          {draw()}
          </div>

          <div
          ref={creatref}
          className={c('scl',{
            'scl_show' : isCreat === true
          })}
          >
            <ul className={c('scl_u')}>
              <li>姓名：<Input className={c('scl_u_i')}/></li>
              <li>年龄：<Input className={c('scl_u_i')}/></li>
              <li>性别：<Input className={c('scl_u_i')}/></li>
              <li>住址：<Input className={c('scl_u_i')}/></li>
            </ul>
            <Avatar
              size={120}
              icon={<UserOutlined />}
              className={c('scl_ava')}
              />
            <Button className={c('scl_b')}>
              确认
            </Button>
          </div>
        </Card>
      </div>

      <div className={c('si')}>
        <Card
        title={
          <CardTitle title='员工关联'>
            <RetweetOutlined />
          </CardTitle>
        }
        className={c('innerCard card')}>
          <div className={c('base_info')}>基本信息</div>
          <div
          className={c('scl',{
            'scl_show' : true
          })}
          >
            <ul className={c('scl_u')}>
              <li>姓名：{detailList.name}</li>
              <li>年龄：{detailList.age}</li>
              <li>性别：{detailList.sex === 1? '男':'女'}</li>
              <li>职位：{detailList.role}</li>
            </ul>
            <Avatar
              size={120}
              icon={<UserOutlined />}
              className={c('scl_ava')}
              style={{top:156}}
              />
            <div className={c('base_info')}>关联信息</div>
            <SelectGroup info={detailList}/>
          </div>
        </Card>
      </div>
    </div>
  )
}
export default StuffRelation
