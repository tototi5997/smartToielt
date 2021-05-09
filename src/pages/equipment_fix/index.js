import { Card,Form, Input,Button, Select,Tooltip, Table,Modal, message,Checkbox } from 'antd'
import React,{Component} from 'react'
import {SettingOutlined,SearchOutlined,BarsOutlined,CarryOutOutlined,CheckOutlined,CloseOutlined } from '@ant-design/icons';
import columns from './index.config'
import Axios from '../../utils/axios'
import './index.less'
import '../../common/common.less'
import CardTitle from '../../components/card-title'

const FormItem = Form.Item;
const Option = Select.Option;
class FixEquipment extends Component{
  state={
    dataSource:[],
    visible:false,
    inputValue: '',
  }
  render(){
    const plainOptions = ['水龙头', '洗手池', '储水器','干手机','红外扫描仪','空气感应器'];
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
      <div className="outerdiv">
        <Card title={
          <CardTitle title="设备报修">
            <SettingOutlined />
          </CardTitle>
        } className="innerCard">
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
            {/* <FormItem>
              <Button type='primary'><CarryOutOutlined />PDF导出</Button>
            </FormItem> */}
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
        footer={[
          <Button
          onClick={() => {
            message.success('设备报修成功！')
            this.setState({visible: false})
          }}
          >
            <CheckOutlined />
            确认提交
          </Button>,
          <Button
          onClick={() => {
            this.setState({visible: false, inputValue: ''})
          }}
          >
            <CloseOutlined />
            取消提交
          </Button>
        ]}
        >
        <Form>
          <FormItem
          label='厕所ID'
          name=''
          rules={[{required:true,message:'此项为必填项！'}]}
          >
            <Input
            value={this.setState.inputValue}
            onChange={e => {
              this.setState({inputValue:e})
            }}
            />
          </FormItem>
          <FormItem label='选择报修'>
            <Checkbox.Group options={plainOptions}/>
          </FormItem>
          {/* <FormItem
          label='申请人'
          name=''
          rules={[{required:true,message:'此项为必填项！'}]}
          ><Input /></FormItem> */}
        </Form>
        </Modal>
      </div>
    );
  }
  //获取数据
  handleGetData=()=>{
    Axios.ajax({
      url:'/equipment_fix'
    }).then((res,rej)=>{
      if(res.code === 0){
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
    if(this.state.selectedRowKeys === undefined){
      message.error('请先选择需要报修的项目！')
    }else{
      this.setState({
        visible:true
      })
    }
  }
}

export default FixEquipment;