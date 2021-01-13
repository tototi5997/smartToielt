import { flow, types } from 'mobx-state-tree'

// user状态模型
export const User = types.model('User',{
  // 用户名
  username:types.optional(types.string, ''),
  // 用户状态:默认logout
  userstate:types.optional(types.enumeration('userState', ['login', 'logout']), 'logout'),

})
.actions(self => {
  // 用户登录
  const userLogin = (logname) => {
    self.username = logname
    self.userstate = 'login'
  }
  // 用户登出
  const userLogout = () => {
    self.username = ''
    self.userstate = 'logout'
  }
  return{
    userLogin,
    userLogout
  }
})