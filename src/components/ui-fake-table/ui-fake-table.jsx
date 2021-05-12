import React, { Children, useState } from 'react'
import './index.less'
import '../../common/common.less'
import c from 'classnames'

const UiFakeTable = ({tableColumns = [],data = [], sizeList = [5, 20, 15, 25, 15, 15, 5]}) => {
    const [hoverIndex, setHoverState] = useState(999)
    // 绘制表头
    const drawTableHeader = () => {
        const headerData = [...tableColumns]
        return headerData.map((item, index) => Children.toArray(
            <div
                style={{width: `${sizeList[index]}%`}}
                onClick={() => {}}
            >
                {item.title}
            </div>
        ))
    }
    // 绘制表格主体
    const drawTableBody = () => {
        const tableData = [...data]
        const keyList = tableColumns.map(i => i.key)
        if (tableData.length > 1) {
            return tableData.map((item, index) => {
                return Children.toArray(
                    <div
                        className={c('fbh fs12 p2 fbjc tableTr', {
                            trBackground:index % 2 ===0,
                            hoverStyle: hoverIndex === index,
                        })}
                        onMouseEnter={() => {
                            setHoverState(index)
                        }}
                        onMouseLeave={() =>{
                            setHoverState(999)
                        }}
                    >
                        {
                            keyList.map((key, itemIndex) => Children.toArray(
                                <div style={{width: `${sizeList[itemIndex]}%`}}
                                    className={c('bold tableBodyWorld')}
                                >
                                    {item[key]}
                                </div>
                            ))
                        }
                    </div>
                )
            })
        }
        return (
            <div style={{height:200}} className={c('fbv fbjc fbac')}>
                <div className={c('fs12 bold')}>暂无数据</div>
            </div>
        )
    }
    return (
        <div className={c('wh100p blueBold')}>
            {/* 表头区域 */}
            <div className={c('w100p fbh fs12 p2 fbsr tableHeader fbac')}>
                {drawTableHeader()}
            </div>
            {/* 表格内容 */}
            <div className={c('fbv scroller pr')}>
                {drawTableBody()}
            </div>
        </div>
    )
}
export default UiFakeTable
