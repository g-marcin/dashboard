import React, { PureComponent } from 'react';
import { LineChart,AreaChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,Label } from 'recharts';
import moment from "moment"

const data = [
  {
    name: 'S1',
    uv: 0,
    
    amt: 2400,
  },
  {
    name: 'M2',
    uv: 0,
    
    amt: 2210,
  },
  {
    name: 'T3',
    uv: 0,
    
    amt: 100,
  },
  {
    name: 'W4',
    uv: 0,
    
    amt: 2000,
  },
  {
    name: 'T5',
    uv: 0,
    
    amt: 2181,
  },
  {
    name: 'F6',
    uv: 0,
   
    amt: 2500,
  },
  {
    name: 'S7',
    uv: 0,
   
    amt: 2100,
  },
];

function Cleanchart(){

 
    return (
        <AreaChart width={500} height={250} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
        
          
        </defs>
        <XAxis dataKey="name" />
        <YAxis  tickFormatter={timeStr => moment(timeStr).format('HH:mm')} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
    );
  
}

export default Cleanchart