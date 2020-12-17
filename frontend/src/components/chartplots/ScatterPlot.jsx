import React, { PureComponent } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

export default function ScatterPlot({ data }) {
  console.log('scatterplot data: ' + JSON.stringify(data));

  const { good, bad } = data;

  const dataInput = [
    {
      name: 'question',
      positivity: good,
      negative: bad,
    },
  ];

  //   let { bad, good, b = +bad, g = +good } = data;
  //   console.log('good: ' + g);
  //   console.log('good: ' + good);
  //   console.log('bad: ' + b);
  //   data01 = [{ x: good, y: 1, z: 200 }];
  //   data02 = [{ x: 1, y: bad, z: 200 }];

  return (
    <AreaChart
      width={200}
      height={200}
      data={dataInput}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="positivity"
        stroke="#2E9CCA"
        fill="#2E9CCA"
      />
    </AreaChart>
  );
}
