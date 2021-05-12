import React from 'react'
import c from 'classnames'
import './enviroment-statistic.less'
import '../../common/common.less'
import {Card} from 'antd'
import * as echarts from 'echarts/core'
import CardTitle from '../../components/card-title'
import { AreaChartOutlined} from '@ant-design/icons'
import ReactEChartsCore from 'echarts-for-react/lib/core'
import {BarChart, LineChart, PieChart, RadarChart} from 'echarts/charts'
import {GridComponent, TooltipComponent, TitleComponent, LegendComponent} from 'echarts/components'
import {CanvasRenderer} from 'echarts/renderers'
import {gasOption, phOption, cleanOPtion, polutionOption} from './options'

echarts.use(
  [TitleComponent, TooltipComponent, PieChart, LineChart, GridComponent, BarChart, CanvasRenderer, LegendComponent, RadarChart]
)
const EnviromentStatistic = () => {
  // 氨气含量
  const getGasOption =() => {
    return gasOption
  }
  // ph浓度
  const getPhOption =() => {
    return phOption
  }
  // 清扫次数
  const getCleanOption = () => {
    return cleanOPtion
  }
  // 空气污染指数
  const getPolutionOption = () => {
    return polutionOption
  }
  return (
    <div className={c('outerdiv')}>
      <Card
        title={<CardTitle title='环境统计'><AreaChartOutlined /></CardTitle>}
        className={c('innerCard')}>

          <div className={c('repair_card')} style={{marginBottom: 50}}>
            <Card className={c('repair_card_form')} style={{marginRight: 50}}>
              <ReactEChartsCore
                echarts={echarts}
                option={getGasOption()}
                notMerge={true}
                lazyUpdate={true}
                theme={"theme_name"}
              />
            </Card>
            <Card className={c('repair_card_form')}>
              <ReactEChartsCore
                  echarts={echarts}
                  option={getPhOption()}
                  notMerge={true}
                  lazyUpdate={true}
                  theme={"theme_name"}
                />
            </Card>
          </div>
          <Card style={{marginBottom: 50}}>
            <ReactEChartsCore
              echarts={echarts}
              option={getCleanOption()}
              notMerge={true}
              lazyUpdate={true}
              theme={"theme_name"}
            />
          </Card>
          <Card>
          <ReactEChartsCore
              echarts={echarts}
              option={getPolutionOption()}
              notMerge={true}
              lazyUpdate={true}
              theme={"theme_name"}
            />
          </Card>
      </Card>
    </div>
  )
}
export default EnviromentStatistic
