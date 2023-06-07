"use client"
import { useState } from 'react';
import { padding } from '../styles';
import Link from "next/link";
import Image from "next/image";

const navigation = [
    {
        id: "/",
        title: "Home",
    }, {
        id: "info",
        title: "Info"
    }
]

export default function Navbar() {
    const [activePage, setActivePage] = useState(typeof window !== "undefined" ? window.location.pathname.toString() : "/");

    return (
        <nav className={`${padding.X} w-full flex items-center py-5 fixed top-0 z-20 backdrop-blur-xl`}>
            <div className='w-full flex justify-between items-centermax-w-7xl mx-auto'>
                <Link
                    href={"/"}
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActivePage("/");
                        window.scrollTo(0, 0)
                    }}
                >
                    <Image src="/githubpfp.webp" width={460} height={460} className='w-9 h-9 object-contain' alt={""} />
                </Link>
                <ul className='list-none sm:flex flex-row gap-10'>
                    {navigation.map((nav) => (
                        <li key={nav.id}
                            className={`${activePage === nav.id
                                ? "text-white"
                                : "text-zinc-300"
                                }  hover:text-white text-[18px] font-medium cursor-pointer inline pr-2 pl-2 items-center transition ease-in 500ms
                            `}
                            onClick={() => setActivePage(nav.id)}
                        >
                            <a href={nav.id}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}