import React from 'react'
import './App.css'

export default class Login extends React.Component{
    render(){
      return(
        <div className='content'>
          <div className='login-box'>
            <p>SmartToilet后台管理系统登录</p>
            <div className='inputcontent'>
              <from>
                <input className='inputinner' placeholder='请输入账号' type='text'></input>
                <input className='inputinner' placeholder='请输入密码' type='password'></input>
                <button className='inputinner' >LOGIN</button>
              </from>
          </div>
          </div>
        </div>
      );
    }
}