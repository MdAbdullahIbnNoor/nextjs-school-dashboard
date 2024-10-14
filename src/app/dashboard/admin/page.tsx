import UserCard from "@/app/components/UserCard"

const AdminPage = () => {
  return (
    <div className='p-2 flex-col md:flex-row'>
      {/* Left */}
      <div className="w-full lg:w-2/3">
      {/* User Cards */}
      <div className="flex gap-4 justify-between flex-wrap">
        <UserCard type="student"/>
        <UserCard type="teacher"/>
        <UserCard type="parent"/>
        <UserCard type="staff"/>
      </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3"></div>
    </div>
  )
}

export default AdminPage