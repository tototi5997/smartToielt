import React from 'react'
import IRouter from './router'
import c from 'classnames'
import './common/common.less'

export default class App extends React.Component{
  render(){
    return(
      <div className={c('wh100p')}>
        <IRouter />
      </div>
    )
  }
}