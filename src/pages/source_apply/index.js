import React from 'react'
import {Button, Card, Modal, DatePicker  } from 'antd'
import  SimpleSource  from './simple_source'
import EleseSource from "./else_source";
import c from 'camelcase'
import '../../common/common.less'
import './apply.less'
import CardTitle from '../../components/card-title'
import {ToolOutlined, FileMarkdownOutlined, SearchOutlined} from '@ant-design/icons'
import DesignTable from '../../components/table'
import dataSource from '../../components/table/data'
import columns from '../../components/table/columns';

const { RangePicker } = DatePicker
class SourceApply extends React.Component{
    state={
      // 基础申请modal可见性
      visible: false,
      modelTitle: '',
      // item modal可见性
      detailVisbale: false,
      isOpen: false,
    }
    render(){
        const {visible,modelTitle} =this.state
        const data = ['this','is','test','item']
        return(
            <div className={c('outerdiv')}>
                <Card 
                  title={
                    <CardTitle title="耗材申请"><ToolOutlined /></CardTitle>
                  } 
                  className={c('innerCard')}>
                    <div className={c('butwarp')}>
                      <div 
                        className={c('buttonsim')}
                        onClick={this.simpleApply}>
                        普通耗材申请
                      </div>
                      <div onClick={this.elseApply} className={c('buttonel')}>
                        其他耗材申请
                      </div>
                    </div>
                </Card>
                <Modal
                title={modelTitle}
                visible={visible}
                onCancel={()=>{this.setState({visible:false})}}
                >
                    {modelTitle === '普通耗材申请'?<SimpleSource />:<EleseSource/>}
                </Modal>

                <Card 
                  className={c('innerCard')}
                  title={
                    <CardTitle title="申请记录">
                      <FileMarkdownOutlined />
                    </CardTitle>}>
                    <RangePicker />
                    <Button 
                      className={c('fdb')}
                      type="primary"
                      onClick={
                        ()=>{
                          this.setState({
                            isOpen: true
                          })
                          console.log('isOpen', this.state.isOpen)
                        }
                      }
                      >
                      <SearchOutlined />
                    </Button>
                    <div className={c('infoform')}>
                      <DesignTable
                        columns={columns}
                        dataSource={dataSource} 
                        width={'100%'}/>
                    </div>
                </Card>
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