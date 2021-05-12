import React from 'react'
import c from 'classnames'
import './repair-statistic.less'
import '../../common/common.less'
import {Card} from 'antd'
import * as echarts from 'echarts/core'
import CardTitle from '../../components/card-title'
import { AreaChartOutlined} from '@ant-design/icons'
import ReactEChartsCore from 'echarts-for-react/lib/core'
import {BarChart, LineChart, PieChart, RadarChart} from 'echarts/charts'
import {GridComponent, TooltipComponent, TitleComponent, LegendComponent} from 'echarts/components'
import {CanvasRenderer} from 'echarts/renderers'
import pieOption from './pie'
import lineOption from './lineoption'
import pieMonetOption from './pie-money'

echarts.use(
  [TitleComponent, TooltipComponent, PieChart, LineChart, GridComponent, BarChart, CanvasRenderer, LegendComponent, RadarChart]
)
const RepairStatistic = () => {
  // pirOption
  const getPieOption =() => {
    return pieOption
  }
  // lineOption
  const getLineOption = () => {
    return lineOption
  }
  // piemoneyoption
  const getMoneyOption = () => {
    return pieMonetOption
  }
  return (
    <div className={c('outerdiv')}>
      <Card
        title={<CardTitle title='维修统计'><AreaChartOutlined /></CardTitle>}
        className={c('innerCard')}>

          <div className={c('repair_card')} style={{marginBottom: 50}}>
            <Card className={c('repair_card_form')} style={{marginRight: 50}}>
              <ReactEChartsCore
                echarts={echarts}
                option={getPieOption()}
                notMerge={true}
                lazyUpdate={true}
                theme={"theme_name"}
              />
            </Card>

            <Card className={c('repair_card_form')}>
              <ReactEChartsCore
                  echarts={echarts}
                  option={getMoneyOption()}
                  notMerge={true}
                  lazyUpdate={true}
                  theme={"theme_name"}
                />
            </Card>
          </div>

          <Card>
            <ReactEChartsCore
              echarts={echarts}
              option={getLineOption()}
              notMerge={true}
              lazyUpdate={true}
              theme={"theme_name"}
            />
          </Card>
      </Card>
    </div>
  )
}
export default RepairStatistic