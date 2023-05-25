import React from 'react';
import { ResponsiveContainer, BarChart, XAxis,CartesianGrid, YAxis,Tooltip, Bar } from 'recharts';

const Chart = ({ chartTitle,data }) => {
  return (
      <ResponsiveContainer width='100%' height='100%' minHeight={360}>
      <BarChart width={730} height={250} data={chartTitle === 'income' ? data:data}>
      <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Bar dataKey={chartTitle === 'income' ? 'income':'expense'} fill={chartTitle === 'income' ? '#36AE7C':'#FF5D5D'} barSize={20} />  
      </BarChart>
      </ResponsiveContainer>
  )
}

export default Chart