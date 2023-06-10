"use client";
import { padding } from '../styles';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
        <nav className={`${padding.X} w-full flex items-center py-5 fixed top-0 z-20 backdrop-blur-xl`}>
            <div className='w-full flex justify-between items-centermax-w-7xl mx-auto'>
                <Link
                    href={"/"}
                    className='flex items-center gap-2'
                    onClick={() => {
                        window.scrollTo(0, 0)
                    }}
                >
                    <Image src="/githubpfp.webp" width={460} height={460} className='w-9 h-9 object-contain' alt={""} />
                </Link>
                <ul className='list-none inline-flex flex-row gap-5 md:gap-10'>
                    {navigation.map((nav) => (
                        <li key={nav.id}
                            className={`${pathname === nav.id
                                ? "text-white"
                                : "text-zinc-300"
                                } hover:text-white text-[18px] font-medium cursor-pointer inline pr-2 pl-2 items-center self-center transition ease-in 500ms
                            `}
                        >
                            <a href={nav.id}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}