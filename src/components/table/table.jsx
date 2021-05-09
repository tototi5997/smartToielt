import React,{Children} from 'react'
import c from 'classnames'
import './table.less'

// 需要传入表头，以及data，按照相应的格式
const DesignTable = ({width,dataSource,columns}) => {
  // 渲染表头
  const renderTh =() => {
    return columns.map(item => Children.toArray(
      <th className={c('htr')}>{item.title}</th>
    ))
  }
  // 渲染表格主体
  const renderBody = () => {
    // 获取数据项key值数组
    let itemarr = columns.map(item => item.key)
    if (dataSource === undefined) {
      return <tr
        align="center"
        className={c('nodata')}
        style={{width:width}}>
          暂无数据
        </tr>
    }
    else {
      return dataSource.map((item,index) => {
        // 做奇偶行不同颜色处理
        if (index % 2 === 0) {
          return Children.toArray(
            <tr
                className={c('singletr')}
                align="center"
                >
                {
                   itemarr.map(data => Children.toArray(
                    <td>{item[data]}</td>
                  ))
                }
              </tr>
          )
        } else {
          return Children.toArray(
            <tr
                className={c('doubletr')}
                align="center"
                >
                {
                   itemarr.map(data => Children.toArray(
                    <td>{item[data]}</td>
                  ))
                }
              </tr>
          )
        }
      })
    }
  }

  return (
    <div>
      <table
        style={{width:width}}
        className={c('table')}
        cellPadding="3"
        align="left"
      >
        <tbody>
          <tr align="center">
            {renderTh()}
          </tr>
          {renderBody()}
        </tbody>
      </table>
    </div>
  )

}
export default DesignTable
