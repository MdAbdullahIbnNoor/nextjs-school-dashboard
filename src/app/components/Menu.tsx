import Image from "next/image"
import Link from "next/link"

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/dashboard/teachers",
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/dashboard/students",
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/dashboard/parents",
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/dashboard/classes",
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/dashboard/classes",
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/dashboard/lessons",
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/dashboard/exams",
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/dashboard/assignments",
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/dashboard/attendance",
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/dashboard/events",
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/dashboard/messages",
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/dashboard/announcements",
      },
    ]
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/dashboard/profile",
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/dashboard/settings",
      },
      {
        icon: "/logout.png",
        label: "logout",
        href: "/logout",
      },
    ],
  },
]

const Menu = () => {
  return (
    <div className='text-sm 2xl:text-lg text-gray-700'>
      {menuItems.map(i => (
        <div className="flex flex-col justify-start space-y-2 items-start ml-4" key={i.title}>
          <span className="hidden lg:block font-light text-gray-400 my-4">{i.title}</span>
          <hr/>
          {i.items.map(item => (
            <Link href={item.href} key={item.label} className="flex gap-2 items-center justify-center">
              <Image src={item.icon} alt="" width={17} height={17} />
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
} 

export default Menu