import { message } from 'antd'
import { types } from 'mobx-state-tree'

export const Notice = types.model("Notice",{
  // 公告的id
  id: types.optional(types.number, 0),
  // 公告的内容
  notice_detail: types.optional(types.string, '请输入公告屏内容！'),
  // 公告编辑区内容
  noticefix_detail: types.optional(types.string,''),
  // 历史记录
  history: types.array(types.string,'')
})
.views( self => ({
}))
.actions( self => {
  // 添加一条公告
  const addNotice = () => {
    self.id++
    // todo
  }
  // 编辑修改框
  const editCheckBox = (v) =>  {
    self.noticefix_detail = v
  }
  // 双击获取当前公告详情到编辑区
  const doubleClickCheck = () => {
    try {
      self.noticefix_detail = self.notice_detail
    }catch{}
  }
  // 发布公告
  const outputNotice =() => {
    let info = self.noticefix_detail
    self.notice_detail = info
    self.noticefix_detail = ''
    message.success('发布成功！')
  }
  // 取消发布公告
  const clearNotice =() => {
    self.notice_detail = ''
  }

  return {addNotice, editCheckBox, doubleClickCheck, outputNotice, clearNotice}
})
