import React from 'react'
import {Card, Button, Select} from 'antd'
import { Map, Polygon, Marker } from 'react-amap'
import { observer } from 'mobx-react-lite'
import w from '../../models/root'
import './index.less'
import PaintConfig from './mapconfig'

const { Option } = Select
// 接入map状态
const { mapdetail } = w
// 接入config
const  { polygonPath }  = PaintConfig
const { markerStyle } = PaintConfig
const { markerPath } = PaintConfig 

const MapToielt = () => {
  const plugins = ['Scale', 'ToolBar']
  return (
    <div style={{height:800,overflow:"auto"}}>
      <Card title='公厕地图' style={{margin:15}}>
        <div style={{width:'100%', height:400}}>
          <Map 
          amapkey={'4ed3b5e354a82d509bde8c61c3e89ff4'}
          center={mapdetail.center.toJSON()}
          zoom={mapdetail.zoom}
          plugins={plugins}
          >
            { renderPolygon() }
            {reanderMarkers()}
          </Map>
        </div>
        <Select onChange={mapdetail.changePlace} defaultValue={'江夏区'}>{ renderOption() }</Select>
        <Button onClick={changeCenter}>click</Button>
      </Card>
    </div>
  )
}
// 渲染下拉框
const renderOption = () => {
  let arr = ['江夏区','洪山区','光谷区']
  let renderoption = []
  renderoption = arr.map((item, index) => {
    return <Option key={index} value={item}>{item}</Option>
  })
  return renderoption
}
// 改变中心位置
const changeCenter = () => {
  const place = mapdetail.place
  return mapdetail.changeCenter(place)
}
// 渲染polygon组件
const renderPolygon = () => {
  let polygonlist = []
  let polygonConfig = polygonPath
  for(let i in polygonConfig){
    polygonlist.push(
      <Polygon 
      key={polygonConfig[i]}
      path={polygonConfig[i]}
      visible={mapdetail.isPolygonVisable}
      style={{fillOpacity:0.3}}
      />
    )
  }
  return polygonlist
}
const reanderMarkers = () => {
  const markersList = []
  for(let i in markerPath){
    markerPath[i].map((item, index) => {
      markersList.push(<Marker 
        visible={mapdetail.isMarkerVisable} 
        position={item}>
          <div style={markerStyle}/>
        </Marker>)
      return markersList 
    })
  }
  return markersList
}
export default observer(MapToielt)
