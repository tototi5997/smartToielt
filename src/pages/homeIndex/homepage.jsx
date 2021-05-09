import React, {useEffect, useRef} from 'react'
import * as echarts from 'echarts/core'
import c from 'classnames'
import './homepage.less'
import '../../common/common.less'
import {Card,Row,Col,Progress,Descriptions,Tooltip  } from 'antd'
import ReactEChartsCore from 'echarts-for-react/lib/core'
import {BarChart, LineChart, PieChart, RadarChart} from 'echarts/charts'
import {GridComponent, TooltipComponent, TitleComponent, LegendComponent} from 'echarts/components'
import {CanvasRenderer} from 'echarts/renderers'
import baroption from './baroption'
import lineoption from './lineoption'
import pieCenterOption from './pie-center'
import pieOption from './pie'
import radarOption from './area'
import Axios from '../../utils/axios'

echarts.use(
  [TitleComponent, TooltipComponent, PieChart, LineChart, GridComponent, BarChart, CanvasRenderer, LegendComponent, RadarChart]
)
const HomePage = () => {
  useEffect(() => {
    Axios.ajax({url:'/homepage/state'}).then(res => {
      if(res) {
        console.log('Reciew Success')
        console.log(res, 'res')
      }
    })
  })
    // barOption
    const getBarOption = () => {
      return baroption
    }
    // lineOption
    const getLineOption = () => {
      return lineoption
    }
    // pieCenter
    const getPieCenterOption = () => {
      return pieCenterOption
    }
    // pieOption
    const getPieOption = () => {
      return pieOption
    }
    // radarOption
    const getRadarOption = () => {
      return radarOption
    }

  return (
      <div className={c('outerdiv')}>
                <Card title='当日数据' className={c('innerCard')}>
                  <div className={c('progress_warp')}>
                    <div className={c('progress_box')}>
                        <Tooltip title="厕纸总存量当前为95%，低于30%请及时更换">
                        <Progress className={c('progress_margin')}
                        type="circle"
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={95}
                        /></Tooltip>
                        <Descriptions title="厕纸总余量" className={c('description_style')}  />
                    </div>

                    <div className={c('progress_box')}>
                        <Tooltip title='洗手剂当前存量为90%，低于百分之20请及时补充'>
                        <Progress className={c('progress_margin')}
                        type="circle"
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={90}
                        /></Tooltip>
                        <Descriptions title="洗手剂余量"  className={c('description_style')}/>
                    </div>

                    <div className={c('progress_box')}>
                        <Tooltip title='空气清新剂当前余量60%，低于10%请及时补充'>
                        <Progress className={c('progress_margin')}
                        type="circle"
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={60}
                        /></Tooltip>
                        <Descriptions title="空气清新剂"  className={c('description_style')} />
                    </div>

                    <div className={c('progress_box')}>
                        <Tooltip title='干手纸库存当前70%，低于15%请及时补充'>
                        <Progress className={c('progress_margin')}
                        type="circle"
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={70}
                        /></Tooltip>
                        <Descriptions title="干手纸库存"  className={c('description_style')} />
                    </div>
                  </div>
                </Card>

                <div className={c('innerCard')}>
                    <Row gutter={16}>
                      <Col span={12}>
                          <Card  bordered={false}>
                            <ReactEChartsCore
                              echarts={echarts}
                              option={getBarOption()}
                              notMerge={true}
                              lazyUpdate={true}
                              theme={"theme_name"}
                            />
                          </Card>
                      </Col>
                      <Col span={12}>
                          <Card  bordered={false}>
                          <ReactEChartsCore
                              echarts={echarts}
                              option={getLineOption()}
                              notMerge={true}
                              lazyUpdate={true}
                              theme={"theme_name"}
                            />
                          </Card>
                      </Col>
                    </Row>
                </div>

                <div className={c('innerCard')}>
                    <Row gutter={16}>
                    <Col span={8}>
                        <Card bordered={false}>
                        <ReactEChartsCore
                            echarts={echarts}
                            option={getPieCenterOption()}
                            notMerge={true}
                            lazyUpdate={true}
                            theme={"theme_name"}
                          />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card  bordered={false}>
                        <ReactEChartsCore
                            echarts={echarts}
                            option={getPieOption()}
                            notMerge={true}
                            lazyUpdate={true}
                            theme={"theme_name"}
                          />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card  bordered={false}>
                        <ReactEChartsCore
                            echarts={echarts}
                            option={getRadarOption()}
                            notMerge={true}
                            lazyUpdate={true}
                            theme={"theme_name"}
                          />
                        </Card>
                    </Col>
                    </Row>
                </div>

    </div>
  )
}
export default HomePage