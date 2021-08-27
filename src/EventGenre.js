import React from 'react';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';

function EventGenre({events}) {

    const [data, setData] = useState([]);
    const colors = ['#6fa832', '#0cf2ee', '#9e0cf2', '#f20cbd', '#eef20c']

    const getData = () => {
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
        const data = genres.map((genre) => {
            const value = events.filter(({summary}) => {
                return summary
                    .split(' ')
                    .includes(genre)
            }).length;
            return {name: genre, value};
        });
        return data;
    }

    useEffect(() => {
        setData(() => getData())
    }, [events]);

    return (
        <ResponsiveContainer height={400} >
            <PieChart  margin={{top: 10, right: 10, bottom: 20, left: 10,}}>
                <Pie 
                    data={data}
                    cx='50%'
                    cy='50%'
                    labelLine={false}
                    legendType='square'
                    outerRadius={80}
                    fill='#8884d8'
                    dataKey='value'
                    label={({percent}) => ` ${(percent * 100).toFixed(0)}%`}
                >
                    { data.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index]} />)}
                </Pie>
                <Legend layout="horizontal" align="center" verticalAlign="bottom"></Legend>
            </PieChart>
        </ResponsiveContainer>
    )
    
}

export default EventGenre;