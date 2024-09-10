import Button from "../components/Button";
import { Card } from "../components/Card";
import Icon from "../components/Icon";
import Link from "next/link";
const tech = {
    Frontend: [
        {
            name: "Tailwind",
            url: "https://tailwindcss.com/"
        },
        {
            name: "React",
            url: "https://react.dev/"
        },
        {
            name: "Electron",
            url: "https://electronjs.org/"
        },
        {
            name: "Tauri",
            url: "https://tauri.app/"
        }
    ],
    Backend: [
        {
            name: "NodeJS",
            url: "https://nodejs.org/"
        },
        {
            name: "TypeScript",
            url: "https://www.typescriptlang.org/"
        },
        {
            name: "Kotlin",
            url: "https://kotlinlang.org/"
        },
        {
            name: "Rust",
            url: "https://www.rust-lang.org/"
        },
        {
            name: "CSharp",
            url: "https://dotnet.microsoft.com/en-us/languages/csharp"
        }
    ],
    Databases: [
        {
            name: "MongoDB",
            url: "https://www.mongodb.com/"
        }
    ],
    OSes: [
        {
            name: "Windows",
            url: "https://www.microsoft.com/en-us/windows/"
        },
        {
            name: "Fedora",
            url: "https://fedoraproject.org/"
        },
        {
            name: "Debian",
            url: "https://www.debian.org/"
        }
    ]
}

const projects = [
    {
        title: "musicbot",
        description: "A fast Discord.JS 14 Bot written in TypeScript with YouTube, Spotify & SoundCloud support built-in.",
        url: "https://github.com/nikosszzz/musicbot",
        icon: "typescript"
    },
    {
        title: "windows-app",
        description: "A test project Windows Application built in React using an Electron entrypoint. Purely experimental hobby project to mess around with Electron & React. Code mess.",
        url: "https://github.com/nikosszzz/windows-app",
        icon: "typescript"
    },
    {
        title: "AliucordRN",
        description: "⚠️ Abandoned ⚠️ Aliucord rewrite for the new Discord React Native app",
        url: "https://github/Aliucord/AliucordRN",
        icon: "typescript"
    },
    {
        title: "vd-plugins",
        description: "My Vendetta plugins.",
        url: "https://github.com/nikosszzz/vd-plugins",
        icon: "typescript"
    }
]

// ../../../public/
export default function About() {
    return (
        <div>
            <div className="text-5xl md:text-6xl inline-block mb-5 font-extrabold rounded-full">About me</div>
            <div className="text-2xl">
                I&apos;ve started experimenting with coding when I was 13 and from that point onwards I&apos;ve decided to follow the path of being a developer. I hope to meet others that are also interested in this field and collaborate with them aswell as seek out new opportunities.
            </div>

            <div>
                <div className="mt-5 mb-3 text-5xl font-extrabold">Tech Stack</div>
                {
                    Object.entries(tech).map(([name, entries]) => (
                        <div className="flex flex-row items-center gap-2 mb-1" key={name.toLowerCase()}>
                            <Button span={true} className="bg-primary">{name}</Button>
                            <div className="flex flex-row items-center gap-1.5">
                                {entries.map(({ name, url }) =>
                                    <Link href={{ pathname: url }} key={name.toLowerCase()}>
                                        <Icon icon={name.toLowerCase()} />
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))
                }
            </div>

            <div>
                <div className="mt-5 mb-3 text-5xl font-extrabold">Projects</div>
                <div className="grid gap-1 grid-cols-3">
                    {
                        Object.values(projects).map((i) => (
                            <Card
                                key={i.title}
                                title={i.title}
                                description={i.description}
                                titleUrl={i.url}
                                icon={<Icon icon={i.icon} width={32} height={32} />}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}