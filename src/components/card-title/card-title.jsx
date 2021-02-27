import React from 'react'
import c from 'classnames'
import './card-title.less'

const CardTitle = ({title, children}) => {
  return (
    <div className={c('ctw')}>
      <div>{children}</div>
      <div className={c('ct')}>{title}</div>
    </div>
  )
}
export default CardTitle