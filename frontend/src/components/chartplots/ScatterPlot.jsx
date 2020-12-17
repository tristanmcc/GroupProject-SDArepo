import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  ResponsiveContainer,
} from 'recharts';
import moment from 'moment';

export default function ScatterPlot({ data }) {
  const dateFormat = (time) => {
    return moment.unix(time).format('YYYY-MM-DD HH:mm');
  };
  const valueFormatter = (value) => {
    return Math.round(value * 100) + '%';
  };

  const renderTooltipContent = (o) => {
    console.log('the data', o);
    const { payload } = o;
    if (!payload) {
      return null;
    }
    return (
      <div className="customized-tooltip-content">
        {payload.map((entry, index) => (
          <dl key={index}>({valueFormatter(entry.value)})</dl>
        ))}
      </div>
    );
  };

  return (
    <ResponsiveContainer height={300} width="100%">
      <AreaChart
        width={800}
        height={600}
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis domain={[0, 100]}>
          <Label value="Questions" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis domain={[0, 1]}>
          <Label value="Sentiment" angle={-90} position="insideLeft" />
        </YAxis>
        {/* <Tooltip content={renderTooltipContent}/> */}
        <Tooltip />
        <Area
          type="monotone"
          dataKey="good"
          stroke="#8884d8"
          fill="#6AD1FA"
          fillOpacity={0.3}
          isAnimationActive={false}
          dot={true}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
