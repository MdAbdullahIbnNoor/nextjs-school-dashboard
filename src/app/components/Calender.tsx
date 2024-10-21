"use client"
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// Temporary
const events = [
    {
        id: 1,
        title: "School Science Fair",
        time: "10:00 AM - 1:00 PM",
        description: "Annual science fair showcasing student projects."
    },
    {
        id: 2,
        title: "Parent-Teacher Conference",
        time: "3:00 PM - 5:00 PM",
        description: "A meeting between parents and teachers."
    },
    {
        id: 3,
        title: "Math Olympiad Workshop",
        time: "9:00 AM - 12:00 PM",
        description: "A preparation workshop for students."
    }

]

const Calender = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className='w-full rounded-xl px-2 py-4' >
            <Calendar onChange={onChange} value={value} />
            <div className='flex flex-col gap-3 mt-4'>
                {events.map(event => (
                    <div key={event.id} className='border-t-4 odd:border-adminPurple even:border-adminSky rounded-lg p-4 shadow-md '>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-gray-700 font-bold text-lg'>{event.title}</h1>
                            <span className='text-xs text-gray-400'>{event.time}</span>
                        </div>
                        <p className='text-gray-500 text-sm'>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Calender