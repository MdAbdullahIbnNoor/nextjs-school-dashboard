const Announcement = () => {
    const announcementData = [
        {
            id: 1,
            title: "New Term Begins",
            date: "October 20, 2024",
            description: "The new academic term will begin on October 20."
        },
        {
            id: 2,
            title: "Sports Day Rescheduled",
            date: "November 5, 2024",
            description: "Due to weather conditions, Sports Day has been rescheduled to November 5"
        },
        {
            id: 3,
            title: "Library Renovation",
            date: "October 25, 2024",
            description: "The school library will undergo renovations from October 25 to November 10"
        }
    ]

    return (
        <div className='bg-white w-full rounded-xl px-4 py-4'>
            <div className='flex items-center justify-between'>
                <h1 className='text-gray-700 font-bold text-lg'>Announcements</h1>
                <span className='text-xs text-gray-400'>View All</span>
            </div>

            <div className="flex flex-col gap-3 mt-2">
                {announcementData.map(item => (
                    <div key={item.id} className=' even:bg-adminYellowLight odd:bg-adminSkyLight rounded-lg px-4 py-2 shadow-md '>
                        <div className='flex items-center justify-between pb-1'>
                            <h1 className='text-gray-700 font-semibold'>{item.title}</h1>
                            <span className='text-xs text-gray-400'>{item.date}</span>
                        </div>
                        <p className='text-gray-500 text-sm'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Announcement