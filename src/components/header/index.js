import React,{Component} from 'react'
import './index.less'
import { NavLink } from "react-router-dom";

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
                </div>
            </div>
        );
    }
}