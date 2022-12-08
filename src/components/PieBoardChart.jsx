/* eslint-disable react/prop-types */
import { PieChart, Pie, Cell } from 'recharts';

export default function PieBoardChart({ boardRate }) {
  const data = [
    { name: 'EPL', value: boardRate.eplBoardValue },
    { name: 'LaLiga', value: boardRate.laligaBoardValue },
    { name: 'SerieA', value: boardRate.serieaBoardValue },
    { name: 'Bundesliga', value: boardRate.bundesligaBoardValue },
  ];

  const COLORS = ['#921e7f', '#fbec21', '#008ED6', '#e00c1a'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <p />
    </PieChart>
  );
}