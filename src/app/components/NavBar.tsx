"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Button from "./Button";
import type { Route } from "next";

const navigation: { id: Route; title: string; }[] = [
    {
        id: "/",
        title: "Home",
    },
    {
        id: "/about",
        title: "About Me"
    },
    {
        id: "/contact",
        title: "Contact"
    }
]

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <div className="w-full ps-10 pe-10 sm:ps-3 sm:pe-3 fixed top-0 z-20 bg-secondary">
            <nav className='flex justify-between items-center h-16 gap-2'>
                <div className="flex flex-row items-center gap-2">
                    <button>
                        <Image src="/githubpfp.webp" width={460} height={460} className='w-9 h-9' alt={""} onClick={() => {
                            if (pathname !== "/") router.push("/")
                        }} />
                    </button>
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
                            onClick={() => router.push(nav.id)}
                        >
                            {nav.title}
                        </Button>
                    ))}
                </div>
            </nav>
        </div>
    )
}