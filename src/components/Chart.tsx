import React, { PureComponent } from 'react';
import { LineChart,AreaChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,Label } from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 3,
    
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 6,
    
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 9,
    
    amt: 100,
  },
  {
    name: 'Apr',
    uv: 3,
    
    amt: 2000,
  },
  {
    name: 'May',
    uv: 6,
    
    amt: 2181,
  },
  {
    name: 'June',
    uv: 9,
   
    amt: 2500,
  },
  {
    name: 'July',
    uv: 3,
   
    amt: 2100,
  },
];

function Chart(){

 
    return (
        <AreaChart width={500} height={250} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          
        </defs>
        <XAxis dataKey="name" />
        <YAxis unit="days" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
    );
  
}

export default Chart