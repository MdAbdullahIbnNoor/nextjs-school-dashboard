'use client'
import Image from 'next/image';
import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '18-24',
        uv: 31.47,
        pv: 2400,
        fill: '#8884d8',
    },
    {
        name: '25-29',
        uv: 26.69,
        pv: 4567,
        fill: '#83a6ed',
    },
    {
        name: '30-34',
        uv: 15.69,
        pv: 1398,
        fill: '#8dd1e1',
    },
    {
        name: '35-39',
        uv: 8.22,
        pv: 9800,
        fill: '#82ca9d',
    },
    {
        name: '40-49',
        uv: 8.63,
        pv: 3908,
        fill: '#a4de6c',
    },
    {
        name: '50+',
        uv: 2.63,
        pv: 4800,
        fill: '#d0ed57',
    },
    {
        name: 'unknow',
        uv: 6.67,
        pv: 4800,
        fill: '#ffc658',
    },
];

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};


const CountChart = () => {
    return (
        <div className='mt-4 px-5 w-full h-full'>
            {/* Title */}
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold text-gray-800'>Students</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            {/* Chart */}
            <div className=''>
                {/* <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                        <RadialBar
                            minAngle={15}
                            label={{ position: 'insideStart', fill: '#fff' }}
                            background
                            clockWise
                            dataKey="uv"
                        />
                        <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                    </RadialBarChart>
                </ResponsiveContainer> */}
            </div>
            {/* Bottom */}
            <div className='flex justify-around gap-16'>
                <div className='flex flex-col gap-1 leading-4'>
                    <div className='w-5 h-5 bg-adminSky rounded-full' />
                    <h1 className='font-fold'>1,234</h1>
                    <h2 className='text-xs text-gray-400'>Boys (55%)</h2>
                </div>
                <div className='flex flex-col gap-1 leading-4'>
                    <div className='w-5 h-5 bg-adminYellow rounded-full' />
                    <h1 className='font-fold'>1,234</h1>
                    <h2 className='text-xs text-gray-400'>Girls (35%)</h2>
                </div>
            </div>
        </div>
    )
}

export default CountChart