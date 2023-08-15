import { padding } from "../styles";
import Image from "next/image";

const repoData = [
    {
        name: "musicbot",
        url: "https://github.com/nikosszzz/musicbot",
        desc: "A fast Discord.JS Bot written in TypeScript using Discord.JS 14 with YouTube and Spotify support built-in.",
        extra: "typescript"
    },
    {
        name: "windows-app",
        url: "https://github.com/nikosszzz/windows-app",
        desc: "A test project Windows Application built in React using an Electron entrypoint. Purely experimental hobby project to mess around with Electron & React.",
        extra: "typescript"
    },
    {
        name: "vd-plugins",
        url: "https://github.com/nikosszzz/vd-plugins",
        desc: "My Vendetta plugins.",
        extra: "typescript"
    },
    {
        name: "discordrn-themes",
        url: "https://github.com/nikosszzz/discordrn-themes",
        desc: "A repository consisting of Vendetta/Aliucord Themes.",
        extra: "discord"
    }
]

const accountData = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 56.693 56.693" className="mr-[10px]">
                <path d="M28.348 5.157c-13.6 0-24.625 11.027-24.625 24.625 0 13.6 11.025 24.623 24.625 24.623s24.623-11.023 24.623-24.623c0-13.598-11.024-24.625-24.623-24.625zm12.404 19.66c.013.266.018.533.018.803 0 8.201-6.242 17.656-17.656 17.656a17.572 17.572 0 0 1-9.513-2.787c.486.057.979.086 1.48.086a12.45 12.45 0 0 0 7.707-2.656 6.214 6.214 0 0 1-5.796-4.311 6.06 6.06 0 0 0 1.167.111c.566 0 1.114-.074 1.635-.217a6.21 6.21 0 0 1-4.979-6.084l.001-.08a6.184 6.184 0 0 0 2.811.777 6.204 6.204 0 0 1-2.761-5.166c0-1.137.306-2.204.84-3.12a17.618 17.618 0 0 0 12.792 6.483 6.206 6.206 0 0 1 6.045-7.619 6.2 6.2 0 0 1 4.529 1.959 12.395 12.395 0 0 0 3.941-1.506 6.223 6.223 0 0 1-2.73 3.433 12.407 12.407 0 0 0 3.565-.977 12.537 12.537 0 0 1-3.096 3.215z" fill="#1da1f2" />
            </svg>
        ),
        type: "twitter",
        name: "nikosszzz",
        description: "My Twitter account.",
        url: "https://twitter.com/nikosszzz"
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512" className="mr-[10px]">
                <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z" id="mainIconPathAttribute" fill="#ffffff" />
            </svg>
        ),
        type: "github",
        name: "nikosszzz",
        description: "My GitHub account.",
        url: "https://github.com/nikosszzz"
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32px" height="32" viewBox="0 -28.5 256 256" className="mr-[10px]">
                    <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#5865F2" fill-rule="nonzero" />
            </svg>
        ),
        type: "discord",
        name: "deoptimize",
        description: "My Discord account.",
        url: "https://discord.com/users/327065865201909762"
    }
]

export default function Info() {
    return (
        <div className="w-screen">
            <section className="relative w-screen h-[600px] md:h-[800px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("/landingBg.webp")` }}>
                <div className={`${padding.X} absolute flex flex-col justify-center items-center h-full w-full`}>
                    <div className="w-64 p-3 md:w-96 text-2xl font-medium md:text-3xl backdrop-blur-xl text-center align-center items-center rounded-full">
                        <span>Information</span>
                        <span className="animate-typing">_</span>
                    </div>
                </div>
            </section>
            <section className={`${padding.XY} relative w-full`}>
                <p className="text-5xl md:text-6xl w-[300px] md:w-[380px] font-extrabold md:p-3 rounded-full bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d]">Repositories</p>
                <p className="text-2xl">
                    Here are some of my GitHub repositories/projects.
                </p>
                {repoData.map((d) => (
                    <div key={d.name} className="mt-4 mb-4 p-5 rounded-lg shadow bg-primary">
                        <a href={d.url} target="_blank" className="flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512" className="mr-[10px]">
                                <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z" id="mainIconPathAttribute" fill="#ffffff" />
                            </svg>
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{d.name}</h5>
                            <div className="ml-2 h-32px w-32px">
                                <Image src={`https:/skillicons.dev/icons?i=${d.extra}`} height={28} width={28} alt={"Project language"} className="" />
                            </div>  
                        </a>
                        <div className="flex-row flex font-normal text-gray-500 dark:text-gray-400">
                            <span className="mr-[5px]">
                                {d.desc}
                            </span>
                            <a href={d.url} target="_blank" className="ml-auto place-self-center h-5 inline-flex items-center text-blue-600 hover:underline bg-secondary rounded-xl pl-[6px] pr-[6px]">
                                Go
                                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                            </a>
                        </div>
                    </div>
                ))}
            </section>
            <section className={`lg:px-22 sm:px-16 px-6 sm:py-4 py-6 relative w-full`}>
                <p className="text-5xl md:text-6xl w-[260px] md:w-[340px] font-extrabold md:p-3 rounded-full bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d]">Find me on</p>
                {accountData.map((d) => (
                    <div key={d.type} className="mt-4 mb-4 p-5 rounded-lg shadow bg-primary">
                        <a href={d.url} target="_blank" className="flex flex-row">
                            {d.icon}
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{d.name}</h5>
                        </a>
                        <div className="flex-row flex font-normal text-gray-500 dark:text-gray-400">
                            <span className="mr-[5px]">
                                {d.description}
                            </span>
                            <a href={d.url} target="_blank" className="ml-auto place-self-center h-5 inline-flex items-center text-blue-600 hover:underline bg-secondary rounded-xl pl-[6px] pr-[6px]">
                                Go
                                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                            </a>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}