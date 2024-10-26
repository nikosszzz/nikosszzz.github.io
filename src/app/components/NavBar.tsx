"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./Button";
import type { Route } from "next";

const navigation: { id: Route; title: string; }[] = [
    {
        id: "/",
        title: "Home",
    },
    {
        id: "/about",
        title: "About"
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
        <div className="fixed z-20 top-0 start-0 w-full ps-10 pe-10 sm:ps-3 sm:pe-3 bg-secondary">
            <nav className='flex justify-between items-center h-16'>
                <div className="flex flex-row items-center gap-2 ">
                    <button aria-label="github pfp">
                        <Image src="/githubpfp.webp" priority={true} width={460} height={460} className='w-9 h-9 rounded-2xl' alt={""} onClick={() => {
                            if (pathname !== "/") router.push("/")
                        }} />
                    </button>
                </div>
                <div className='inline-flex flex-row gap-2'>
                    {navigation.map((nav) => (
                        <Button
                            key={nav.id}
                            className={`${pathname === nav.id
                                ? "text-white"
                                : "text-zinc-400 transition ease-out 500ms"
                                } bg-zinc-800 cursor-pointer md:hover:text-white text-base font-medium sm:px-2 md:px-2.5 items-center transition ease-in 500ms 
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