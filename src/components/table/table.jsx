import React from 'react'
import c from 'classnames'
import './table.less'

const DesignTable = ({width}) => {
  const header = ['姓名', '籍贯','职业', '电话号码','年龄','性别']
  const datalist = {
    list : [
      {
        name: '张三',
        place: '武汉',
        occupation: '厨师',
        phoneNumber: '13223423332',
        sex: '男',
        age: '34',
      },
      {
        name: '李四',
        place: '杭州',
        occupation: '个体',
        phoneNumber: '13442872882',
        sex: '女',
        age: '32',
      },
      {
        name: '王武',
        place: '南京',
        occupation: '老板',
        phoneNumber: '19228374772',
        sex: '男',
        age: '23',
      },
      {
        name: '王武',
        place: '南京',
        occupation: '老板',
        phoneNumber: '19228374772',
        sex: '男',
        age: '23',
      },
      {
        name: '王武',
        place: '南京',
        occupation: '老板',
        phoneNumber: '19228374772',
        sex: '男',
        age: '23',
      },
      {
        name: '王武',
        place: '南京',
        occupation: '老板',
        phoneNumber: '19228374772',
        sex: '男',
        age: '23',
      },
    ]
  }
  const data = {list:[]}
  // 渲染表头
  const renderTh =() => {
    return header.map(item => {
      return <th className={c('htr')}>{item}</th>
    })
  }
  // 渲染表格主体
  const renderBody = () => {
    console.log(data.list)
    if (data.list.length === 0) {
      return <div>暂无数据</div>
    }
    else {
      return data.list.map(item => {
        return (
          <tr 
              className={c('tr')}
              align="center"
              >
              <td>{item.name}</td>
              <td>{item.place}</td>
              <td>{item.occupation}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.sex}</td>
              <td>{item.age}</td>
            </tr>
        )
      })
    } 
  }
  
  return (
    <div>
      <table
        style={{width:width}} 
        className={c('table')}
        cellPadding="3"
        // border='1'
        align="left"
      >
        <tbody>
          <tr align="center">
            {
              renderTh()
            }
          </tr>
          {renderBody()}  
        </tbody>
        
      </table>
    </div>
  )

}
export default DesignTable 
