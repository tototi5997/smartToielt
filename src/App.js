import React from 'react'
import './App.css'
import {Button,Input,Form} from 'antd'
import {
  UserOutlined,
  LockOutlined
} from '@ant-design/icons';

export default class Login extends React.Component{
    
    render(){
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
      return(
        <div className='content'>
          <div className='login-box'>
            <p>SmartToilet后台管理系统登录</p>
            <div className='inputcontent'>
              <Form {...layout} style={{marginTop:30}}>
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
                  <Button type="primary" htmlType="submit" style={{width:150,marginTop:20}}>
                    Submit
                  </Button>
              </Form.Item>
              </Form>
          </div>
          </div>
        </div>
      );
    }
}