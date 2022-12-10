/* eslint-disable react/prop-types */
import { ResponsivePie } from '@nivo/pie';

export default function PieBoardChart({ boardRate }) {
  return (
    <div style={{ width: '400px', height: '400px', margin: '0 auto' }}>
      <ResponsivePie
        data={[
          { id: 'EPL', value: boardRate.eplBoardValue },
          { id: 'LaLiga', value: boardRate.laligaBoardValue },
          { id: 'SerieA', value: boardRate.serieaBoardValue },
          { id: 'Bundesliga', value: boardRate.bundesligaBoardValue },
        ]}
        margin={{
          top: 40, right: 80, bottom: 80, left: 80,
        }}
        innerRadius={0.5}
        padAngle={1.8}
        cornerRadius={8}
        colors={['#921e7f', '#fbec21', '#008ED6', '#e00c1a']} // 커스터하여 사용할 때
        borderWidth={2}
        arcLinkLabelsSkipAngle={0}
        arcLinkLabelsTextColor="#000000"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        theme={{
          labels: {
            text: {
              fontSize: 14,
              fill: '#000000',
            },
          },
          legends: {
            text: {
              fontSize: 12,
              fill: '#000000',
            },
          },
        }}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: 'olive',
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}
