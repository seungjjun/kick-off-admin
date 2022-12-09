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

// const data = [
//   { name: 'EPL', value: boardRate.eplBoardValue },
//   { name: 'LaLiga', value: boardRate.laligaBoardValue },
//   { name: 'SerieA', value: boardRate.serieaBoardValue },
//   { name: 'Bundesliga', value: boardRate.bundesligaBoardValue },
// ];

// const COLORS = ['#921e7f', '#fbec21', '#008ED6', '#e00c1a'];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//   cx, cy, midAngle, innerRadius, outerRadius, percent,
// }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

// return (
//   <PieChart width={400} height={400}>
//     <Pie
//       data={data}
//       cx="50%"
//       cy="50%"
//       labelLine={false}
//       label={renderCustomizedLabel}
//       outerRadius={80}
//       fill="#8884d8"
//       dataKey="value"
//     >
//       {data.map((entry, index) => (
//         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//       ))}
//     </Pie>
//     <p />
//   </PieChart>
// );
