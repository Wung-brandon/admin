import React from 'react'
import './chart.scss'
import {
  AreaChart,
  Area,
  XAxis,
  // YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const months = [

  {name:"january", total:1200},
  {name:"february", total:2100},
  {name:"march", total:800},
  {name:"april", total:1600},
  {name:"may", total:900},
  {name:"june", total:1700},

]

function Chart({ aspect, title }) {
  return (
    <div className='chart'>
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={ aspect }>
        <AreaChart
          width={500}
          height={400}
          data={months}
          style={{textTransform:"capitalize"}}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id='total' x1="0" y1='0' x2='0' y2='1'>
                <stop offset="5%" stopColor='#8884d8' stopOpacity={0.8} />
                <stop offset="95%" stopColor='#8884d8' stopOpacity={0} />
            </linearGradient>
            {/* <linearGradient id='colorPv' x1="0" y1='0' x2='0' y2='1'>
                <stop offset="5%" stopColor='#82ca9d' stopOpacity={0.8} />
                <stop offset="95%" stopColor='#82ca9d' stopOpacity={0} />
            </linearGradient> */}
          </defs>
          <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
          <XAxis dataKey="name" stroke='gray'/>
          {/* <YAxis /> */}
          <Tooltip 
            itemStyle={{textTransform:"capitalize"}} 
            labelStyle={{textTransform:"capitalize"}}
          />
          <Area 
            type="monotone" 
            dataKey="total" 
            stroke="#8884d8" 
            fill="url(#total)"
            fillOpacity={1} 
          />
          {/* <Area 
            type="monotone" 
            dataKey="pv" 
            stroke="#82ca9d" 
            fill="url(#colorPv)"
            fillOpacity={1} 
          /> */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart