import { Card,Form, Input,Button, Select,Tooltip, Table,Modal, message } from 'antd'
import React,{Component} from 'react'
import { SearchOutlined,BarsOutlined } from '@ant-design/icons';
import columns from './index.config'
import Axios from '../../utils/axios'
import './index.less'

const FormItem = Form.Item;
const Option = Select.Option;
class FixEquipment extends Component{
  state={
    dataSource:[],
    visible:false
  }
  render(){
    const {selectedRowKeys} = this.state;
    const rowSelection = {
      type:'radio',
      selectedRowKeys,
      onChange:(selectedRowKeys,selectedRows)=>{
        this.setState({
            selectedRowKeys,
            selectedRows   
        })
    }
    }
    return(
      <div style={{height:800,overflow:"auto"}}>
        <Card title='设备保修' style={{margin:15}}>
          <Form layout='inline' style={{marginBottom:15}}>
            <FormItem name='id_toielt' label='公厕ID' style={{width:120}}>
              <Tooltip title='Input a number!' placement='topLeft'><Input/></Tooltip>
            </FormItem>
            <FormItem name='address' label='所在片区'>
              <Select style={{width:200}} defaultValue='0'>
                <Option value='0'>全部</Option>
                <Option value='1'>武汉市江夏区关山大道</Option>
                <Option value='2'>武汉市江夏区光谷</Option>
              </Select>
            </FormItem>
            <FormItem name='respons_person' label='负责人'>
              <Input/>
            </FormItem>
            <FormItem name='search_btn'>
              <Button type='danger' onClick={this.handleGetData}><SearchOutlined /></Button>
            </FormItem>
            <FormItem name='fixSubmit_btn'>
              <Button type='primary' onClick={this.handleShowModal}><BarsOutlined />设备报修</Button>
            </FormItem>
          </Form>
          <Table
          columns={columns}
          dataSource={this.state.dataSource}
          rowSelection={rowSelection}
          onRow={(record,index)=>{
            return{               
              onClick:()=>{
                  this.setState({
                    selectedRowKeys:[index],
                    selectedRows:record
                  })
                }
              }
          }}
          />
        </Card>
        <Modal
        title='设备报修'
        visible={this.state.visible}
        onCancel={()=>{this.setState({visible:false})}}
        >test</Modal>
      </div>
    );
  }
  //获取数据
  handleGetData=()=>{
    Axios.ajax({
      url:'/equipment_fix'
    }).then((res,rej)=>{
      if(res.code == '0'){
        console.log(res)
        this.setState({
            dataSource:res.result.list.map((item,index)=>{
            item.key = index;
            return item;
          })  
        })
      }else{console.log(rej)}
    })
  }
  //设备保修显示模态框
  handleShowModal=()=>{
    if(this.state.selectedRowKeys == undefined){
      message.error('请先选择需要报修的项目！')
    }else{
      this.setState({
        visible:true
      })
    } 
  }
}
export default FixEquipment;