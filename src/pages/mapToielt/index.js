import React,{Component} from 'react'
import {Card} from 'antd'
import './index.less'

export default class MapToielt extends Component{
  render(){
    return(
      <div className='map_card'>
        <Card title='公厕地图分布'>
          <div className='map'>this is map content</div>
        </Card>
        
      </div>
    );
  }
}