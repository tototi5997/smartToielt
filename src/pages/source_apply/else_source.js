import React from 'react'
import { Form,Input,InputNumber } from 'antd'

const EleseSource =()=>{
    //表格布局配置项
    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
      };
    return(
        <Form {...layout}>
            <Form.Item label='ToieltID'><Input/></Form.Item>
            <Form.Item label='申请人'><Input/></Form.Item>
            <Form.Item label='申请项'><Input/></Form.Item>
            <Form.Item label='数量'>
                <InputNumber min={1} max={10} defaultValue={1}/>
            </Form.Item>
            <Form.Item label='备注'><Input/></Form.Item>
        </Form>
    );
}
export default EleseSource