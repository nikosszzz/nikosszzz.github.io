import Button from "../components/Button";
import { Card } from "../components/Card";
import Icon from "../components/Icon";
import Link from "next/link";
import Image from "next/image";
import { getLangColor } from "../utils/getLangColor";

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
    "https://api.github.com/repos/nikosszzz/musicbot",
    "https://api.github.com/repos/nikosszzz/windows-app",
    "https://api.github.com/repos/Aliucord/AliucordRN",
    "https://api.github.com/repos/nikosszzz/vd-plugins"
]

export default async function About() {
    const repoData = await Promise.all(
        projects.map(async repo => {
            const requestInit = {
                headers: new Headers({
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
                }),
                cache: "force-cache"
            } satisfies RequestInit;

            requestInit.headers.set("Accept", "application/vnd.github.v3+json");
            requestInit.headers.set("Authorization", `Bearer ${process.env.GH_KEY}`);

            return fetch(repo, requestInit)
                .then(async r => {
                    if (!r.ok) {
                        const e = await r.text().catch(() => "Unknown Error");
                        throw new Error(
                            `Failed to fetch repo info for ${repo}: ${r.status} ${r.statusText}\n${e}`
                        );
                    }
                    return r.json();
                })
                .catch(e => {
                    console.error(e);
                    return null;
                });
        })
    );

    return (
        <div className="mb-3">
            <div className="md:text-5xl sm:text-4xl inline-block mb-3 font-extrabold rounded-full">About me</div>
            <div className="md:text-2xl sm:text-xl">
                I&apos;ve started experimenting with coding when I was 13 and from that point onwards I&apos;ve decided to follow the path of being a developer. I hope to meet others that are also interested in this field and collaborate with them aswell as seek out new opportunities.
            </div>

            <div>
                <div className="mt-8 mb-3 md:text-5xl font-extrabold sm:text-4xl">Tech Stack</div>
                {
                    Object.entries(tech).map(([name, entries]) => (
                        <div className="flex flex-row items-center gap-2 mb-1" key={name.toLowerCase()}>
                            <Button span={true} className="bg-primary md:text-xl md:px-8 sm:text-base sm:px-5">{name}</Button>
                            <div className="flex flex-row items-center gap-1.5">
                                {entries.map(({ name, url }) =>
                                    <Link href={{ pathname: url }} key={name.toLowerCase()}>
                                        <Icon icon={name.toLowerCase()} className="w-[32px] h-[32px]" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))
                }
            </div>

            <div>
                <div className="mt-8 mb-3 md:text-5xl sm:text-4xl font-extrabold">Projects</div>
                <div className="grid gap-1 md:grid-cols-3 sm:grid-cols-2">
                    {
                        repoData.map(data => {
                            const { id, name, description, html_url, language, stars_count, stargazers_count, owner } = data;

                            return (<Card
                                key={id}
                                title={name}
                                description={description}
                                cardUrl={html_url}
                                header={<div className="flex items-center mb-[1em] mr-0.5"><Image src={owner.avatar_url} width={24} height={24} className="mr-[0.3em] rounded-xl" alt="avatar github" />{owner.login}</div>}
                                footer={<div className="leading-5 items-center flex mt-auto">
                                    <div
                                        className={`items-center flex md:mr-2 sm:mr-1 before:bg-[--lang-color] before:w-[0.8em] before:h-[0.8em] before:content-[""] before:inline-block before:rounded-xl before:translate-y-[0.1em] before:mr-1`}
                                        style={{
                                            "--lang-color": getLangColor(language)
                                        } as React.CSSProperties}
                                    >
                                        {language}
                                    </div>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M333.33-259 480-347l146.67 89-39-166.67 129-112-170-15L480-709l-66.67 156.33-170 15 129 112.34-39 166.33ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-353.33Z" /></svg>
                                        {stars_count ?? stargazers_count}
                                    </div>
                                </div>}
                            />)
                        })
                    }
                </div>
            </div>
        </div>
    )
}