import React from 'react'
import {Card, Avatar} from 'antd'
import w from '../../models/root'
import { observer } from 'mobx-react-lite'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'

const {user} = w
const { Meta } = Card
const UserInfo = () => {
  return (
    <div style={{height:800,overflow:"auto"}}>
      <Card style={{margin:15}}>
        <Card
          style={{ width:'100%'}}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={user.username}
            description="This is the description"
          />
        </Card>
      </Card>
    </div>
  )
}
export default observer(UserInfo)