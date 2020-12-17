import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function ScatterPlot({data}) {
  /*  console.log('scatterplot data: ' + JSON.stringify(data));

  const { good, bad } = data; */

  const data1 = [
    {
      name: "1",
      uv: 0.3,
    },
    {
      name: "2",
      uv: 0.5,
    },
    {
      name: "3",
      uv: 0.4,
    },
    {
      name: "4",
      uv: 0.6,
    },
    {
      name: "5",
      uv: 0.3,
    },
    {
      name: "6",
      uv: 0.7,
    },
    {
      name: "7",
      uv: 0.9,
    },
    {
      name: "8",
      uv: 0.9,
    },
    {
      name: "9",
      uv: 0.6,
    },
    {
      name: "10",
      uv: 0.5,
    },
  ];

  /* const dataInput = [
    {
      name: 'question1',
      sentiment:'0.6',
      positivity: good,
      negative: bad,
    },
    {
      name: 'question2',
      sentiment:'0.7',
      positivity: good,
      negative: bad,
    },
    {
      name: 'question3',
      sentiment:'0.5',
      positivity: good,
      negative: bad,
    },
    {
      name: 'question4',
      sentiment:'0.4',
      positivity: good,
      negative: bad,
    }
  ]; */

  //   let { bad, good, b = +bad, g = +good } = data;
  //   console.log('good: ' + g);
  //   console.log('good: ' + good);
  //   console.log('bad: ' + b);
  //   data01 = [{ x: good, y: 1, z: 200 }];
  //   data02 = [{ x: 1, y: bad, z: 200 }];

  return (
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis domain={[0, 1]} />
      <Tooltip />
      <Area type="monotone" dataKey="good" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
  {
    /* <AreaChart
      width={200}
      height={200}
      // data={dataInput}
      data={data1}
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
    </AreaChart> */
  }
}
