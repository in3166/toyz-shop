import Card from 'components/_shared/Card'
import { VictoryTheme, VictoryChart, VictoryLine, VictoryScatter, VictoryTooltip, VictoryLegend } from 'victory'

const data = [
  { x: '22-06-06', y: 150 },
  { x: '22-06-07', y: 100 },
  { x: '22-06-08', y: 250 },
  { x: '22-06-09', y: 390 },
  { x: '22-06-10', y: 295 },
  { x: '22-06-11', y: 450 },
]

const TradeChart = () => {
  return (
    <Card>
      <VictoryChart theme={VictoryTheme.grayscale}>
        <VictoryLine
          style={{
            data: { stroke: '#c43a31' },
            parent: { border: '1px solid #ccc' },
          }}
          data={data}
        />
        <VictoryScatter
          data={data}
          size={3}
          labels={({ datum }) => datum.y}
          labelComponent={<VictoryTooltip />}
          style={{ data: { fill: '#c43a31' } }}
        />
        <VictoryLegend
          orientation='horizontal'
          gutter={10}
          data={[
            { name: 'x: (날짜)', symbol: { fill: 'none' } },
            { name: 'y: (만원)', symbol: { fill: 'none' } },
          ]}
        />
      </VictoryChart>
    </Card>
  )
}

export default TradeChart
