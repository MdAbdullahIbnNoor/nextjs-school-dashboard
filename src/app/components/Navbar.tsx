import Image from "next/image"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 '>
      {/* Search Bar */}
      <div className="hidden md:flex gap-2 p-2 ring-[1.5px] ring-gray-400 rounded-full text-xs">
        <Image src="/search.png"
          alt=""
          width={18}
          height={7} 
          className=""
          />
        <input type="text" placeholder="Search..." className="w-[200px] p-1 bg-transparent outline-none"/>
      </div>
      {/* Icons & user*/}
      <div className="flex items-center gap-4 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png"
            alt=""
            width={20}
            height={20} />
        </div>

        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png"
            alt=""
            width={20}
            height={20} />
          <div className="absolute -top-3 -right-1 text-xs bg-purple-600 w-4 h-4 rounded-full text-white flex items-center justify-center">1</div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-sm leading-3 font-medium">AB Noor</span>
          <span className="text-xs text-gray-500">Admin</span>
        </div>
        <Image src="/avatar.png"
          alt=""
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </div>
  )
}

export default Navbar