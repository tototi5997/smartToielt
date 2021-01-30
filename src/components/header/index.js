import React,{Component} from 'react'
import './index.less'
import { NavLink } from "react-router-dom"
import { Badge } from 'antd'

export default class Headertop extends Component{
    render(){
        return(
            <div className='header'>
                <div className='head_left'>
                    <img className='icon' src='/icon/toilet.png' alt='' />
                    <span>智能公厕后台管理系统</span>
                    <NavLink to='/home/user'>
                      <img 
                      className='usericon' 
                      src='/icon/user.svg' 
                      alt=''
                      />
                    </NavLink>
                    <Badge className="infoicon" dot count={1}>
                    <img 
                      className="infoicon"
                      id="hovericon"
                      src='/icon/info.svg'
                      alt=''
                      />  
                    </Badge>
                                    
                </div>
            </div>
        );
    }
}