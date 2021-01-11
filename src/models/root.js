import { types } from 'mobx-state-tree'
import { Notice } from './notice'
import { Map } from './map'

const Root = types
  .model('Root',{
    notice: types.optional(Notice, {}),
    mapdetail: types.optional(Map,{}),
  })
const root = Root.create({})
export default root
