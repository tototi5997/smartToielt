import React,{Component} from 'react'
import {Row,Col} from 'antd'
import NavLeft from './../../components/navleft/index'
import Header from './../../components/header/index'
import Footer from './../../components/footer/index'
import './index.less'
import '../../common/common.less'
import c from 'classnames'

export default class Home extends Component{
    render(){
        return(
            <div className={c('wh100p fbv usn')}>
                  <div className={'h10p'}>
                    <Header/>
                  </div>
                  <div style={{height: '85%', display:'flex'}}>
                    <div className={c('scroll')} style={{width: '20%'}}>
                      <NavLeft/>
                    </div>
                    <div className={c('scroll')} style={{width: '80%'}}>
                      {this.props.children}
                    </div>
                  </div>
                  <div className={'h5p'}>
                    <Footer/>
                  </div>
            </div>
        );
    }
}