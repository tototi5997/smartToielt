import { types } from 'mobx-state-tree'
import { Notice } from './notice'
import { Map } from './map'
import { User } from './user'

const Root = types
  .model('Root',{
    notice: types.optional(Notice, {}),
    mapdetail: types.optional(Map,{}),
    user: types.optional(User, {}),
  })
const root = Root.create({})
export default root
