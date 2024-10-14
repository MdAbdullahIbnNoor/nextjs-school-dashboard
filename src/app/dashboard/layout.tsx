import Image from "next/image";
import Link from "next/link";
import Menu from "../components/Menu";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            {/* Left */}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-gray-100 shadow-lg shadow-black drop-shadow-sm">
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
                <Menu/>
            </div>
            {/* right */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-100">{children}</div>
        </div>
    );
}