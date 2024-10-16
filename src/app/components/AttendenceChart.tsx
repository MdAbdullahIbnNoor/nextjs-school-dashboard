"use client"
import Image from 'next/image';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        present: 50,
        absent: 50,
    },
    {
        name: 'Tue',
        present: 70,
        absent: 30,
    },
    {
        name: 'Wed',
        present: 40,
        absent: 60,
    },
    {
        name: 'Thu',
        present: 100,
        absent: 70,
    },
    {
        name: 'Fri',
        present: 80,
        absent: 20,
    },

];

const AttendanceChart = () => {

    return (
        <div className='mt-2 py-2 w-full h-full'>
            {/* Title */}
            <div className='flex justify-between items-center px-4'>
                <h1 className='text-2xl font-bold text-gray-800'>Attendance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            {/* Chart */}
            <div className='w-full h-[85%] py-2 px-4'>
                <ResponsiveContainer width="100%" height="105%">
                    <BarChart
                        width={10}
                        height={5}
                        data={data}
                        margin={{
                            top: 0,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="2 2" vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                        <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                        <Tooltip
                            contentStyle={{ borderRadius: "20px", borderColor: "lightGray" }}
                        />
                        <Legend
                            align='left'
                            verticalAlign='top'
                            wrapperStyle={{ paddingTop: "5px", paddingBottom: "10px" }}
                        />

                        <Bar
                            dataKey="absent"
                            fill="#C3EBFA"
                            barSize={15}
                            legendType='circle'
                            radius={[10, 10, 0, 0]}
                        />

                        <Bar
                            dataKey="present"
                            fill="#FAE27C"
                            barSize={15}
                            legendType='circle'
                            radius={[10, 10, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default AttendanceChart