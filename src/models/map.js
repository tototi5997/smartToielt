import { flow, types } from 'mobx-state-tree'
import Axios from '../utils/axios/index'


export const Map = types.model('Map',{
  // 中心区域
  center:types.optional(types.array(types.number),[114.412778,30.46553]),
  // 缩放级别
  zoom:types.optional(types.number, 14),
  // 标记坐标
  markerpath:types.optional(types.array(types.array(types.number)),[]),
  // 标记区域
  polygonpath:types.optional(types.array(types.array(types.number)),[]),
  // 地区
  place: types.optional(types.string, '江夏区'),
  // 标记区是否可见
  isPolygonVisable: types.optional(types.boolean, false), 
  // 地区组
  placeArray: types.optional(types.array(types.string), []),
  // marker是否可见
  isMarkerVisable: types.optional(types.boolean, false),
})
.actions(self => {
  // 获取区域坐标(测试版)
  const getPolygonArea = flow(function* getPolygonArea(){
    const res = yield Axios.ajax({url:'/map/polygonn'})
    self.polygonpath = [].concat(res.area)
    // return self.polygonpath.toJSON()
    console.log(self.polygonpath.toJSON())
  })
  // 改变中心
  const changeCenter = (place) => {
    switch(place){
      case '江夏区':
        self.center = [114.411774,30.466808]
        break;
      case '洪山区':
        self.center = [114.356769,30.474852]
        break;
      default :
      self.center = [114.211244,30.52324]
        break;
    }
    self.isPolygonVisable = true
    self.isMarkerVisable = true
    self.zoom = 15
    return self.center
  }
  // 显示标记区
  const showPoly = () => {
    self.isPolygonVisable = true
  }
  // 获取下拉框值
  const changePlace = (value) => {
    self.zoom = 14
    self.isPolygonVisable = false
    self.isMarkerVisable = false
    self.place = value
  }
  return{
    getPolygonArea,
    changeCenter,
    showPoly,
    changePlace,
  }
})
