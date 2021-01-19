import React from 'react'
import { Modal } from 'antd'
import w from '../../models/root'

const {user} = w
const LogoutModal = () => {
  return (
    <div>
      <Modal
      visible={user.isLogoutModalVisable }
      onOk={()=>{window.location.reload()}}
      onCancel={()=>{window.location.reload()}}
      >
        您已成功登出，用户信息失效！
      </Modal>
    </div>
  )
}
export default LogoutModal