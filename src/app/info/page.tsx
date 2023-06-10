import { padding } from "../styles";

const repoData = [
    {
        name: "musicbot",
        url: "https://github.com/nikosszzz/musicbot",
        desc: "A fast Discord.JS Bot written in TypeScript using Discord.JS 14 with YouTube and Spotify support built-in."
    },
    {
        name: "windows-app",
        url: "https://github.com/nikosszzz/windows-app",
        desc: "A test project Windows Application built in React using an Electron entrypoint. Purely experimental hobby project to mess around with Electron & React."
    },
    {
        name: "vd-plugins",
        url: "https://github.com/nikosszzz/vd-plugins",
        desc: "My Vendetta plugins."
    },
    {
        name: "discordrn-themes",
        url: "https://github.com/nikosszzz/discordrn-themes",
        desc: "A repository consisting of Vendetta/Aliucord Themes."
    }
]

export default function Info() {
    return (
        <div className=" w-screen">
            <section className="relative w-full h-[800px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("/landingBg.webp")` }}>
            <div className={`${padding.X} absolute flex flex-col justify-center items-center h-full w-full`}>
                <p className="w-64 md:p-3 md:w-96 text-2xl font-medium md:text-3xl backdrop-blur-xl text-center align-center items-center rounded-full">
                    Information
                </p>
            </div>
            </section>
            <section className={`${padding.XY} relative w-full`}>
                <p className="text-5xl md:text-6xl w-[300px] md:w-[380px] font-extrabold md:p-3 rounded-full backdrop-blur-xl bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d]">Repositories</p>
                <p className="text-2xl">
                    Here are some of my repositories.
                </p>
            {repoData.map((d) => (
                <div key={d.name} className="mt-4 mb-4 p-5 rounded-lg shadow bg-primary">
                    <a href={d.url}>
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{d.name}</h5>
                    </a>
                    <p className="flex-row flex font-normal text-gray-500 dark:text-gray-400">
                        {d.desc}
                        <a href={d.url} className="ml-auto place-self-center h-5 inline-flex items-center text-blue-600 hover:underline bg-secondary rounded-xl pl-[6px] pr-[6px]">
                            Go
                            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                        </a>
                    </p>
                </div>
            ))}
            </section>
        </div>
    )
}