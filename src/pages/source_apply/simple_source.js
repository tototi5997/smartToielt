import React from 'react'
import { Form,Input,Select,InputNumber } from 'antd'

const { Option } = Select;

const SimpleSource=({id, people, onIdChange = () => {}, onPeopleChange = () => {}})=>{
    const itemValue = ['厕纸','洗手剂','空气清新剂','干手纸'];
    //渲染申请项
    const renderItem=()=>{
        let renderitem = [];
        renderitem = itemValue.map((item,index)=>{
            return <Option key={index} value={item}>{item}</Option>;
        })
        return renderitem;
    }
    //表格布局配置项
    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
      };
    return(
        <Form {...layout}>
            <Form.Item label='ToieltID'>
              <Input
              value={id}
              onChange={e => onIdChange(e)}
              />
            </Form.Item>
            <Form.Item label='申请人'>
              <Input
              value={people}
              onChange={e => onPeopleChange(e)}
              />
            </Form.Item>
            <Form.Item label='申请项'>
            <Select
            mode="multiple"
            placeholder="select one item"
            >
                {renderItem()}
            </Select>
            </Form.Item>
            <Form.Item label='数量'>
                <InputNumber min={1} max={10} defaultValue={1}/>
            </Form.Item>
        </Form>
    );
}
export default  SimpleSource