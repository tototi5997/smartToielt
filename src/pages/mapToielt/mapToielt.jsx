import React,{useState} from 'react'
import {Card, Button, Select} from 'antd'
import { Map, Polygon, Marker } from 'react-amap'
import { observer } from 'mobx-react-lite'
import w from '../../models/root'
import c from 'classnames'
import CardTitle from '../../components/card-title'
import './index.less'
import '../../common/common.less'
import PaintConfig from './mapconfig'
import {HomeOutlined} from '@ant-design/icons'
import Table from '../../components/table'
import columns from './columns'
import Axios from '../../utils/axios'

const { Option } = Select
// 接入map状态
const { mapdetail } = w
// 接入config
const  { polygonPath }  = PaintConfig
const { markerStyle } = PaintConfig
const { markerPath } = PaintConfig 

const MapToielt = () => {
  // 保存获取的表格信息
  let [placeInfo, setInfo] = useState() 
  const plugins = ['Scale', 'ToolBar']

  // ajax获取相关区域信息
  const getTableDetail = place => {
    switch(place){
      case '洪山区':
        Axios.ajax({url:'/maptable'}).then(res =>{
          setInfo(placeInfo = res.result)
        })
        break
      case '光谷区':
        Axios.ajax({url:'/maptablegg'}).then(res =>{
          setInfo(placeInfo = res.result)
        })
        break
      default:
        Axios.ajax({url:'/maptablejx'}).then(res =>{
          setInfo(placeInfo = res.result)
        })
        break
    }
  }

  return (
    <div className={c('outerdiv')}>
      <Card 
        title={
          <CardTitle title="公厕地图"> 
            <HomeOutlined />
          </CardTitle>
        }
        className={c('innerCard')}>
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

        <div className={c('bg')}> 
          <Select 
            onChange={mapdetail.changePlace} 
            defaultValue={'江夏区'}>
              { renderOption() }
          </Select>
          <Button 
            className={c('button')}
            onClick={() => {
              changeCenter()
              getTableDetail(mapdetail.place)
            }}>click</Button>
        </div>

        <div className={c('mt')}>
            <Table 
              dataSource={placeInfo}
              width={1080}
              columns={columns}
            />
        </div>    
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
        key={item.toString()} 
        position={item}>
          <div style={markerStyle}/>
        </Marker>)
      return markersList 
    })
  }
  return markersList
}
export default observer(MapToielt)
