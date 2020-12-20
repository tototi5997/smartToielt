import { Card,Button,Table,message } from 'antd'
import React,{Component} from 'react'
import './index.less'
import axios from '../../utils/axios/index'
import Modal from 'antd/lib/modal/Modal'
import { WarningOutlined } from '@ant-design/icons';
import columns from './index.config'


export default class Remind extends Component{
  state = {
    // data:[],
    selectedRowKeys:[],
    selectItem:[],
    visible:false
  }
  //表格复选框
  selectRow=(record)=>{
    const selectedRowKeys = [...this.state.selectedRowKeys];    //获取当前选中row
    const selectItem = [...this.state.selectItem];
    if (selectedRowKeys.indexOf(record.key) >= 0) {     //如果已经选中了相关项，再次点击删除这一项
      selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
      selectItem.splice(selectItem,1);
    } else {
      selectedRowKeys.push(record.key);
      selectItem.push(record);
    }
    this.setState({ selectedRowKeys,selectItem });
  }
  componentDidMount(){
    this.getHugieneTable();
  }
  render(){
    const {selectedRowKeys} = this.state;
    //多选
    const rowCheckSelection = {
      type:'checkbox',
      selectedRowKeys,
      onChange:(selectedRowKeys,selectedRows)=>{
          this.setState({
              selectedRowKeys,
              selectedRows   
          })
      }
  }   
    return(
      <div className='remind_box'  >
        <Card title='清扫提醒' className='remind_card'>
          <Button type='danger' style={{marginBottom:10}} onClick={this.handleSubmit}><WarningOutlined />提醒清扫</Button>
          <Table  
          columns={columns} 
          dataSource={this.state.data} 
          rowSelection={rowCheckSelection}
          bordered 
          onRow={(record)=>{
            return{
                onClick:()=>{
                    this.selectRow(record);
                }
            }
        }}/>
        <Modal 
        title='清扫提醒'
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={()=>{this.setState({visible:false})}}
        >确定提醒当前选中公厕负责人？</Modal>  
        </Card>
      </div>
    );
  }
  //获取hyginene表格数据接口
  getHugieneTable=()=>{
      axios.ajax({
        url:'/hygiene_table'
      }).then((res,rej) => {
        if(res.code == '0'){ 
          this.setState({
            data:res.result.list.map((item,index) => {
              item.key = index;
              return item;
            })
          })
        }else{
          console.log(rej)
        }
      })
  }
  //打开Modal框
  handleSubmit=()=>{
    const select = this.state.selectItem;
    // console.log(select);
    if(select.length === 0){
      message.error('请选择需要清理的厕所！')
    }
    else{
      this.setState({
        visible:true
      })
    }
  }
  //提交事件
  handleOk=()=>{
    message.success('提醒成功！');
    this.setState({
      visible:false,
      selectedRowKeys:[],
      selectItem:[]
    })
  }
}