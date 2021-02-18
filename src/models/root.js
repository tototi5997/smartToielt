import { types } from 'mobx-state-tree'
import { Notice } from './notice'
import { Map } from './map'
import { User } from './user'
import {Power} from './power'

const Root = types
  .model('Root',{
    notice: types.optional(Notice, {}),
    mapdetail: types.optional(Map,{}),
    user: types.optional(User, {}),
    power: types.optional(Power, {}),
  })
const root = Root.create({})
export default root
