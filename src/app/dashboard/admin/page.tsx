import UserCard from "@/app/components/UserCard"
import CountChart from '../../components/CountChart';

const AdminPage = () => {
  return (
    <div className='p-2 flex-col md:flex-row'>
      {/* Left */}
      <div className="w-full lg:w-2/3">
        {/* User Cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* Middle Charts */}
        <div className="flex gap-4 flex-col lg:flex-row mt-4">
          {/* Count Charts */}
          <div className="w-full lg:w-1/3 h-[450px] rounded-xl bg-white">
            <CountChart />
          </div>
          {/* Attendence Chart */}
          <div className="w-full lg:w-2/3 h-[450px]"></div>
        </div>
        {/* Bottom Charts */}
        <div>
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3"></div>
    </div>
  )
}

export default AdminPage