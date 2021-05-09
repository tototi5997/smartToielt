import React,{useEffect, useState} from 'react'
import c from 'classnames'
import './stuff-relation.less'
import { message } from 'antd'


const SelectGroup = ({info}) => {
  const [authPlace,getAuthPlace] = useState(info.authplace)
  const [toieltID,getToieltID] = useState(info.toleitid)
  const [state, getState] = useState(info.state)
  // 创建一个包含信息保存所有的信息
  let [config, getConfig] = useState()
  useEffect(()=>{
  })
  return (
    <div>
      <ul className={c('sg')}>
        <li className={c('liitem')}>负责区域：<input
          className={c('sg_in')}
          value={authPlace}
          onChange={e => {
            getAuthPlace(e.target.value)
          }}
        /></li>
        <li className={c('liitem')}>对应厕所ID：<input
          className={c('sg_in')}
          value={toieltID}
          onChange={e => {
            getToieltID(e.target.value)
          }}
          /></li>
        <li className={c('liitem')}>状态：<input
          className={c('sg_in')}
          value={state === 1? '执勤中':'休息中'}
          onChange={e=>{
            getState(e.target.value)
          }}
          /></li>
      </ul>
      <div
        className={c('save')}
        onClick={()=>{
          getAuthPlace('')
          getToieltID('')
          getState('')
          getConfig(
            config = {
              name: info.name,
              age: info.age,
              sex: info.sex,
              role: info.role,
              authPlace,
              toieltID,
              state,
            }
          )
          message.success('信息保存成功！')
          console.log(config,'config')
        }}
        >保存</div>
    </div>
  )
}
export default SelectGroup
