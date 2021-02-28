import React from 'react'
import { Card, Input, Form, Button, List, Avatar } from 'antd'
import { observer } from 'mobx-react-lite'
import w from '../../models/root'
import c from 'classnames'
import '../../common/common.less'
import './notice.less'
import CardTitle from '../../components/card-title'
import {NotificationOutlined, CloseCircleOutlined, SendOutlined} from '@ant-design/icons'

// 接入notice状态
const { notice } = w
const Notice =()=>{
    // console.log(notice.history)
    return(
      <div className={c('outerdiv')}>
        <Card 
          className={c('innerCard')} 
          title={
          <CardTitle
            title="公告管理">
            <NotificationOutlined />
          </CardTitle>
        }>
          <Form>
            <Form.Item label= '当前展示公告（双击显示屏获取当前显示内容）' />
            <Form.Item>
              <div 
                  className={c('screen')}
                  onDoubleClick={notice.doubleClickCheck}
                >
                {notice.notice_detail === ''? '请输入公告屏内容！' : notice.notice_detail}
              </div>
            </Form.Item>  
            <Form.Item label='公告编辑区'> 
              <Input
                placeholder="公告请少于30字"
                style={{width:'50%'}}
                value={notice.noticefix_detail}
                onChange={v => notice.editCheckBox(v.target.value)}
              />
            </Form.Item> 
            <Form.Item>
              <Button 
                className={c('button')} 
                onClick={notice.outputNotice}>
                  <SendOutlined />
                  发布
              </Button>
              <Button 
                onClick={notice.clearNotice}
                className={c('button')} >
                  <CloseCircleOutlined />
                  取消发布
              </Button>
            </Form.Item>
            <Form.Item>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
}
export default observer(Notice)
