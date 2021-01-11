import React from 'react'
import { Button, Card, Modal, List  } from 'antd'
import  SimpleSource  from './simple_source'
import EleseSource from "./else_source";

class SourceApply extends React.Component{
    state={
      // 基础申请modal可见性
      visible: false,
      modelTitle: '',
      // item modal可见性
      detailVisbale: false,
    }
    render(){
        const {visible,modelTitle} =this.state
        const data = ['this','is','test','item']
        return(
            <div style={{height:800,overflow:"auto"}}>
                <Card title='耗材申请' style={{margin:15}}>
                    <Button onClick={this.simpleApply}>普通耗材申请</Button>
                    <Button onClick={this.elseApply}>其他耗材申请</Button>
                </Card>
                <List
                  style={{margin:15}}
                  header={<div>耗材申请记录</div>}
                  bordered
                  dataSource={data}
                  renderItem={item => <List.Item onClick={this.handleGetItemDetail}>{item}</List.Item>}
                />
                <Modal
                title={modelTitle}
                visible={visible}
                onCancel={()=>{this.setState({visible:false})}}
                >
                    {modelTitle === '普通耗材申请'?<SimpleSource />:<EleseSource/>}
                </Modal>
            </div>
        );
    }
    //普通耗材申请
    simpleApply=()=>{
        this.setState({modelTitle:'普通耗材申请',visible:true})
    }
    //其他耗材申请
    elseApply=()=>{
        this.setState({modelTitle:'其他耗材申请',visible:true})
    }
    // 获取item详情
    handleGetItemDetail = () => {
        this.setState({detailVisbale: true })
    }
}
export default SourceApply