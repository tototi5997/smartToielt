import React,{Component} from 'react'
import './index.less'

export default class Headertop extends Component{
    render(){
        return(
            <div className='header'>
                <div className='head_left'>
                    <img className='icon' src='/icon/toilet.png' alt='' />
                    <span>智能公厕后台管理系统</span>
                </div>
            </div>
        );
    }
}