import {types} from 'mobx-state-tree'

// 权限树
export const Power = types.model('Power',{
  // 当前登录角色
  role:types.optional(types.enumeration('role', ['operator', 'manager']), 'operator')
})