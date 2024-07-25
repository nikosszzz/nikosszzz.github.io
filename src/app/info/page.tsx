import Button from "../components/Button";
import Icon from "../components/Icon";
import { padding } from "../styles";
import discord from "../../../public/discord.png";
import react from "../../../public/react.png";
import typescript from "../../../public/typescript.png";
import css from "../../../public/css.png";
import Link from "next/link";

const projectsData = [
    {
        icon: "github",
        name: "musicbot",
        url: "https://github.com/nikosszzz/musicbot",
        desc: "A fast Discord.JS 14 Bot written in TypeScript with YouTube, Spotify & SoundCloud support built-in.",
        extra: [css, typescript]
    },
    {
        icon: "github",
        name: "windows-app",
        url: "https://github.com/nikosszzz/windows-app",
        desc: "A test project Windows Application built in React using an Electron entrypoint. Purely experimental hobby project to mess around with Electron & React. Sorry for the code mess.",
        extra: [react, typescript]
    },
    {
        icon: "github",
        name: "vd-plugins",
        url: "https://github.com/nikosszzz/vd-plugins",
        desc: "My Vendetta plugins.",
        extra: [discord, typescript]
    },
    {
        icon: "github",
        name: "discordrn-themes",
        url: "https://github.com/nikosszzz/discordrn-themes",
        desc: "A repository consisting of Vendetta/Aliucord Themes.",
        extra: [discord, css]
    },
    {
        icon: "discord",
        name: "Infinium Anti-Nuke",
        url: "https://discord.com/oauth2/authorize?client_id=807520591065120819&permissions=1102128942247&scope=bot+applications.commands",
        desc: "A bot that I made that protects servers from possible attacks and nukers.",
        extra: [typescript],
        button_text: "Invite"
    },
    {
        icon: "discord",
        name: "Infinium",
        url: "https://discord.com/oauth2/authorize?client_id=812605665143029770&permissions=1633668169175&scope=bot+applications.commands",
        desc: "A bot that I made that has utility, info, moderation and fun commands.",
        extra: [typescript],
        button_text: "Invite"
    }
]

const contribData = [
    {
        name: "AliucordRN",
        url: "https://github.com/Aliucord/AliucordRN",
        desc: "Aliucord Rewrite for the new Discord React Native alpha. (Not maintained)",
        extra: [discord, typescript, react]
    },
    {
        name: "bloxflip-autocrash",
        url: "https://github.com/carince/bloxflip-autocrash",
        desc: "Bloxflip crash automation using the martingale strategy. Earn robux passively while you sit back!",
        extra: [typescript]
    }
]

const accountData = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" width="32px" viewBox="0 0 40 32">
                <path xmlns="http://www.w3.org/2000/svg" fill="white" d="M 8.671875 3.726562 L 18.625 17.265625 L 8.609375 28.273438 L 10.863281 28.273438 L 19.632812 18.636719 L 26.71875 28.273438 L 34.390625 28.273438 L 23.875 13.972656 L 33.199219 3.726562 L 30.945312 3.726562 L 22.871094 12.601562 L 16.34375 3.726562 Z M 11.988281 5.417969 L 15.511719 5.417969 L 31.074219 26.582031 L 27.550781 26.582031 Z M 11.988281 5.417969 " />
            </svg>
        ),
        type: "x",
        name: "nikosszzz",
        description: "My X account.",
        url: "https://twitter.com/nikosszzz"
    },
    {
        icon: (
            <Icon icon={"github"} height={32} width={32} />
        ),
        type: "github",
        name: "nikosszzz",
        description: "My GitHub account.",
        url: "https://github.com/nikosszzz"
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32px" height="32" viewBox="0 -28.5 256 256" >
                <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#5865F2" fillRule="nonzero" />
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
        <div>
            <section className="relative w-screen h-[600px] md:h-[800px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("/landingBg.webp")` }}>
                <div className={`${padding.X} absolute inset-0 flex flex-col justify-center items-center`}>
                    <Button className="backdrop-blur-xl bg-transparent" span={true}>
                        <span className="text-3xl sm:text-2xl text-center font-medium">Information<span className="animate-typing">_</span></span>
                    </Button>
                </div>
            </section>
            <section className="px-20 sm:px-5">
                <Button className="mt-10 text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d] px-5" span={true}> Repositories </Button>
                <p className="text-2xl">
                    Here are some of my GitHub repositories & various projects.
                </p>
                <div className="flex flex-col gap-2">
                    {projectsData.map((d) => (
                        <div key={d.name} className="px-4 py-4 rounded-lg shadow bg-primary">
                            <Link href={{ href: d.url }} target="_blank" className="flex flex-row gap-2 mb-2">
                                <Icon icon={"github"} height={32} width={32} />
                                <h5 className="text-lg md:text-2xl font-semibold place-self-center text-gray-900 dark:text-white">{d.name}</h5>
                                <div key={`${d.name}-icons`} className="flex flex-row gap-2 w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]">
                                    <Icon icon={d.extra} />
                                </div>

                            </Link>
                            <div className="flex flex-row justify-between text-gray-500 dark:text-gray-400">
                                <span className="mr-[5px]">
                                    {d.desc}
                                </span>
                                <Button className="h-5 r bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d] hover:underline pl-2 pr-2">
                                    <Link href={{ href: d.url }} target="_blank" className="flex flex-row items-center">
                                        {d.button_text ? d.button_text : "Go"}
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
                <Button className="mt-10 text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d] px-5" span={true}> Contributions </Button>
                <p className="text-2xl">
                    Here are the projects I have contributed to.
                </p>
                <div className="flex flex-col gap-2">
                    {contribData.map((d) => (
                        <div key={d.name} className="px-4 py-4 rounded-lg shadow bg-primary">
                            <Link href={{ href: d.url }} target="_blank" className="flex flex-row gap-2 mb-2">
                                <Icon icon={"github"} height={32} width={32} />
                                <h5 className="text-lg md:text-2xl font-semibold place-self-center text-gray-900 dark:text-white">{d.name}</h5>
                                <div key={`${d.name}-icons`} className="flex flex-row gap-2 w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]">
                                    <Icon icon={d.extra} />
                                </div>

                            </Link>
                            <div className="flex flex-row justify-between text-gray-500 dark:text-gray-400">
                                <span className="mr-[5px]">
                                    {d.desc}
                                </span>
                                <Button className="h-5 r bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d] hover:underline pl-2 pr-2">
                                    <Link href={{ href: d.url }} target="_blank" className="flex flex-row items-center">
                                        Go
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <Button className="mt-10 text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d] px-5" span={true}> Find me on </Button>
                <div className="mt-2 flex flex-col gap-2">
                    {accountData.map((d) => (
                        <div key={d.type} className="px-4 py-4 rounded-lg shadow bg-primary">
                            <Link href={{ href: d.url }} target="_blank" className="flex flex-row gap-2 mb-2">
                                {d.icon}
                                <h5 className="text-lg md:text-2xl font-semibold place-self-center text-gray-900 dark:text-white">{d.name}</h5>
                            </Link>
                            <div className="flex flex-row justify-between text-gray-500 dark:text-gray-400">
                                <span className="mr-[5px]">
                                    {d.description}
                                </span>
                                <Button className="h-5 r bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d] hover:underline pl-2 pr-2">
                                    <Link href={{ href: d.url }} target="_blank" className="flex flex-row items-center">
                                        Go
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}