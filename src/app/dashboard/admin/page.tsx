import UserCard from "@/app/components/UserCard"
import CountChart from '../../components/CountChart';
import AttendanceChart from "@/app/components/AttendenceChart";
import FinanceChart from "@/app/components/FinanceChart";
import Calender from "@/app/components/Calender";
import Announcement from "@/app/components/Announcement";

const AdminPage = () => {
  return (
    <div className='py-2 flex flex-col md:flex-row gap-4'>
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
          <div className="w-full lg:w-1/3 h-[320px] rounded-xl bg-white">
            <CountChart />
          </div>
          {/* Attendance Chart */}
          <div className="w-full lg:w-2/3 h-[320px] rounded-xl bg-white">
            <AttendanceChart />
          </div>
        </div>
        {/* Bottom Charts */}
        <div className="w-full h-[330px] rounded-xl bg-white mt-4">
          <FinanceChart />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        {/* Calender */}
        <div className="rounded-xl">
          <Calender />
          <Announcement/>
        </div>
      </div>
    </div>
  )
}

export default AdminPage