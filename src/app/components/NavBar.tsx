"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "./Button";

const navigation = [
    {
        id: "/",
        title: "Home",
    }, {
        id: "/info",
        title: "Info"
    }
]

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className={`w-full ps-10 pe-10 sm:ps-3 sm:pe-3 fixed top-0 z-20 bg-secondary`}>
            <nav className='flex justify-between items-center h-16 gap-2'>
                <div className="flex flex-row items-center gap-2">
                    <Link
                        href={"/"}
                        onClick={() => {
                            window.scrollTo(0, 0)
                        }}
                    >
                        <Image src="/githubpfp.webp" width={460} height={460} className='w-9 h-9' alt={""} />
                    </Link>
                    <span className="text-base lg:text-2xl"> Personal Website </span>
                </div>
                <div className='inline-flex flex-row gap-5 sm:gap-2'>
                    {navigation.map((nav) => (
                        <Button key={nav.id}
                            className={`${pathname === nav.id
                                ? "text-white"
                                : "text-zinc-300"
                                } bg-zinc-800 hover:text-white text-[18px] sm:text-base font-medium pl-5 pr-5 items-center transition ease-in 500ms 
                            `}
                        >
                            <a href={nav.id}>{nav.title}</a>
                        </Button>
                    ))}
                </div>
            </nav>
        </div>
    )
}