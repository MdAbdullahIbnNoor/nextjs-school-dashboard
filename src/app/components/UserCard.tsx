import Image from "next/image"

const UserCard = ({type}: {type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-adminPurple even:bg-adminYellow flex-1 flex-wrap p-2 lg:px-6 lg:py-4 space-y-2'>
        <div className="flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center">
            <span className="text-[10px] bg-white text-green-600 rounded-full p-1">2024/25</span>
            <Image src="/more.png" alt="" width={20} height={20}/>
        </div>
        <h1 className="text-gray-800 text-2xl font-semibold my-2">1,234</h1>
        <h2 className="text-gray-500 capitalize text-sm font-medium">{type}s</h2>
    </div>
  )
}

export default UserCard