import {types} from 'mobx-state-tree'

export const SelectBox = types.model('MSelectBox', {
  // 负责地区
  authPlace: types.optional(types.string),
})