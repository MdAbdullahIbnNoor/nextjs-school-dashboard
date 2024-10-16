'use client'
import Image from 'next/image';
import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 100,
        fill: 'white',
    },
    {
        name: 'Girls',
        count: 45,
        fill: '#FAE27C',
    },
    {
        name: 'Boys',
        count: 55,
        fill: '#C3EBFA',
    },
];


const CountChart = () => {
    return (
        <div className='mt-4 px-5 w-full h-full'>
            {/* Title */}
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold text-gray-800'>Students</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            {/* Chart */}
            <div className='relative w-full h-[60%]'> {/* Set height explicitly */}
                <ResponsiveContainer>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={50} data={data}>
                        <RadialBar
                            label={{ position: 'insideStart', fill: '#fff' }}
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src="/maleFemale.png" alt='' height={30} width={30} className='absolute top-1/2 right-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
            </div>
            {/* Bottom */}
            <div className='flex justify-around gap-16'>
                <div className='flex flex-col gap-1 leading-4 text-center items-center justify-center'>
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