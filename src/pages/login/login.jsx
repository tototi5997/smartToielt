import React,{useEffect} from 'react'
import {Button,Input,Form,message} from 'antd'
import {
  UserOutlined,
  LockOutlined
} from '@ant-design/icons'
import {observer} from 'mobx-react-lite' 
import './index.less'
import w from '../../models/root'
import { useHistory } from 'react-router-dom'
import cookie from 'react-cookies'

// 注入user
const {user} = w
const Login =()=>{

    // history用来做跳转
    let history = useHistory()
      const layout = {
        labelCol: {
          span:5,
        },
        wrapperCol: {
          span: 16,
        },
      }
      const tailLayout = {
        wrapperCol:{
          sapn:16
        }
      }
      // 登录校验
      const checkUser =(value) => {
        const username = value.userName
        if(value.userName === 'zhangqian'){
          if(value.passWord === '1'){
            message.success('登录成功！')
            cookie.save('user', username, {path: '/'})
            user.userLogin(username)
            history.push('/home/homepage')
          }
        }
        else message.error('登录信息错误！')
      }
      
      return(
        <div className='content' 
        style={{background:`url('/images/back-login.jpg')`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
          <div className='login-box'>
            <p>SmartToilet后台管理系统登录</p>
            <div className='inputcontent'>
              <Form 
              {...layout} 
              style={{marginTop:30}}
              onFinish={checkUser}
              >
                <Form.Item
                label={<UserOutlined/>}
                name='userName'
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
                >
                  <Input/>
                </Form.Item>
                <Form.Item
                label={<LockOutlined/>}
                name='passWord'
                rules={[
                  {
                    required: true,
                    message: 'Please input your passWord!',
                  },
                ]}
                >
                  <Input.Password/>
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <Button 
                  type="primary" 
                  htmlType="submit" 
                  style={{width:150,marginTop:20}}
                  >
                    Submit
                  </Button>
              </Form.Item>
              </Form>
          </div>
          </div>
        </div>
      );  
}

export default observer(Login)