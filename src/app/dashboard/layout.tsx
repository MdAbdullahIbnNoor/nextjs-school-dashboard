import Image from "next/image";
import Link from "next/link";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            {/* Left */}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
                <Link href="/" className="flex gap-2 items-center m-2">
                    <Image
                        src="/logo.png"
                        alt="image"
                        width={32}
                        height={32}
                        color="white"
                    />
                    <span className="font-bold hidden lg:block lg:text-xl 2xl:text-2xl text-gray-800">
                        School App
                    </span>
                </Link>
                <Menu />
            </div>
            {/* right */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
                <Navbar/>   
                <div className="pl-8">
                {children}
                </div>
            </div>
        </div>
    );
}