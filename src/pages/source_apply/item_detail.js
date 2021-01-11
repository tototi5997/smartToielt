import React from 'react'
import { Modal } from 'antd'


// todo ,点击item显示申请列表详情
class ItemDetailModal extends React.Component{
  render(){
    return (
      <>
        <Modal
          title='申请详情'
          visible='false'
          onCancel={() => {}}
        />
      </>
    );
  }
}
export default ItemDetailModal
