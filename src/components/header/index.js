import React,{Component} from 'react'
import './index.less'
import { NavLink } from "react-router-dom"
import { Badge } from 'antd'
import c from 'classnames'
import '../../common/common.less'

export default class Headertop extends Component{
    render(){
        return(
            <div className={c('wh100p header fbh fbac')}>
              <div style={{marginLeft: 20}}>
                <img className='icon' src='/icon/toielt.svg' alt='' width={50}/>
              </div>

              <div style={{width: '88%'}}>
                <div className={'fcw bold'} style={{marginLeft: 20, fontSize: 25}}>
                  智慧公厕后台管理系统
                </div>
              </div>

              <div className={c('fbh')} style={{marginLeft: 'auto', marginRight: 40}}>
                <div style={{marginRight:20}}>
                  <NavLink to='/home/user'>
                    <div className={c('iconbutton')}>
                      <img
                        style={{width:38}}
                        src='/icon/user.svg'
                        alt=''
                        />
                    </div>
                  </NavLink>
                </div>

                <div>
                  <NavLink to='/home/alertinfo'>
                    <Badge className="infoicon" dot count={1}>
                      <div className={c('iconbutton')}>
                        <img
                          style={{width:36}}
                          id="hovericon"
                          src='/icon/info.svg'
                          alt=''
                        />
                      </div>
                    </Badge>
                  </NavLink>
                </div>
              </div>
            </div>
        );
    }
}