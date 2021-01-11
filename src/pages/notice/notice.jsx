import React from 'react'
import { Card, Input, Form, Button, List, Avatar } from 'antd'
import { observer } from 'mobx-react-lite'
import w from '../../models/root'

// 接入notice状态
const { notice } = w
const Notice =()=>{
    // console.log(notice.history)
    return(
      <div style={{height:800,overflow:"auto"}}>
        <Card style={{margin:15}} title='公告管理'>
          <Form>
            <Form.Item label= '当前展示公告'>
              <div onDoubleClick={notice.doubleClickCheck}>
                {notice.notice_detail}
              </div>
            </Form.Item>
            <Form.Item label='公告编辑区'> 
              <Input
                value={notice.noticefix_detail}
                onChange={v => notice.editCheckBox(v.target.value)}
              />
            </Form.Item> 
            <Form.Item>
              <Button onClick={notice.outputNotice}>发布</Button>
              <Button onClick={notice.clearNotice}>取消发布</Button>
            </Form.Item>
            <Form.Item>
              {/* <List
                itemLayout='horizontal'
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta 
                      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title={'mocktitle'}
                      description={notice.notice_detail}
                    />
                  </List.Item>
                )}
              /> */}
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
}
export default observer(Notice)
