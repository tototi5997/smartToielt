import React from 'react'
import {Button, Card, Modal, DatePicker, message  } from 'antd'
import  SimpleSource  from './simple_source'
import EleseSource from "./else_source";
import c from 'camelcase'
import '../../common/common.less'
import './apply.less'
import CardTitle from '../../components/card-title'
import {ToolOutlined, FileMarkdownOutlined, SearchOutlined} from '@ant-design/icons'
import DesignTable from '../../components/table'
import data from '../../components/table/data'
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
      id: '',
      people: '',
      note:'',
      // 表格数据
      dataSource: [],
    }
    render(){
        const {visible,modelTitle} =this.state
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
                onOk={() => {
                  this.setState({visible:false, people: '', id: '', note: ''})
                  message.success('申请提交成功！')
                }}
                onCancel={()=>{
                  this.setState({visible:false, people: '', id: '', note: ''})
                  message.info('取消提交！')
                }}
                >
                    {modelTitle === '普通耗材申请'
                    ?<SimpleSource
                      id={this.state.id}
                      onIdChange={e => {
                        this.setState({id: e.target.value})
                      }}
                      people={this.state.people}
                      onPeopleChange={e => {
                        this.setState({people: e.target.value})
                      }}
                    />
                    :<EleseSource
                      id={this.state.id}
                      onIdChange={e => {
                        this.setState({id: e.target.value})
                      }}
                      people={this.state.people}
                      onPeopleChange={e => {
                        this.setState({people: e.target.value})
                      }}
                      note={this.state.note}
                      onNoteChange={e => {
                        this.setState({note: e.target.value})
                      }}
                    />}
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
                            isOpen: true,
                            dataSource: data,
                          })

                        }
                      }
                      >
                      <SearchOutlined />
                    </Button>
                    <div className={c('infoform')}>
                      <DesignTable
                        columns={columns}
                        dataSource={this.state.dataSource}
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