"use client"
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from "next/image"

const data = [
    {
        name: 'Jan',
        income: 4000,
        expense: 2400,
    },
    {
        name: 'Feb',
        income: 3000,
        expense: 1398,
    },
    {
        name: 'Mar',
        income: 2000,
        expense: 8800,
    },
    {
        name: 'Apr',
        income: 2780,
        expense: 3908,
    },
    {
        name: 'May',
        income: 1890,
        expense: 4800,
    },
    {
        name: 'Jun',
        income: 6390,
        expense: 5800,
    },
    {
        name: 'Jul',
        income: 7490,
        expense: 4500,
    },
    {
        name: 'Aug',
        income: 5590,
        expense: 5400,
    },
    {
        name: 'Sep',
        income: 7890,
        expense: 6600,
    },
    {
        name: 'Oct',
        income: 7790,
        expense: 6800,
    },
    {
        name: 'Nov',
        income: 5590,
        expense: 7500,
    },
    {
        name: 'Dec',
        income: 4690,
        expense: 4100,
    },
];

const FinanceChart = () => {
    return (
        <div className='mt-2 py-2 w-full h-full'>
            {/* Title */}
            <div className='flex justify-between items-center px-6'>
                <h1 className='text-2xl font-bold text-gray-800'>Finance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>

            {/* Chart */}
            <div className='w-full h-[100%] py-2 px-2'>
                <ResponsiveContainer width="100%" height="90%">
                    <LineChart
                        width={300}
                        height={200}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="4 4" stroke='#ddd'/>
                        <XAxis dataKey="name" axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false} />
                        <YAxis axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false} />
                        <Tooltip 
                            contentStyle={{borderRadius: "20px", borderColor: "lightGray"}}
                        />
                        <Legend
                            align='center'
                            verticalAlign='top'
                            wrapperStyle={{ paddingTop: "5px", paddingBottom: "10px" }}
                        />
                        <Line type="monotone" dataKey="expense" stroke="#C3EBFA" strokeWidth={3} />
                        <Line type="monotone" dataKey="income" stroke="#FAE27C" strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default FinanceChart