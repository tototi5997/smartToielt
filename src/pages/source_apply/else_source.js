import React from 'react'
import { Form,Input,InputNumber } from 'antd'

const EleseSource =({id, people,note,onNoteChange = () => {}, onIdChange = () => {}, onPeopleChange = () => {}})=>{
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
              <Input/>
            </Form.Item>
            <Form.Item label='数量'>
                <InputNumber min={1} max={10} defaultValue={1}/>
            </Form.Item>
            <Form.Item label='备注'>
              <Input value={note} onChange={e => onNoteChange(e)}/>
            </Form.Item>
        </Form>
    );
}
export default EleseSource