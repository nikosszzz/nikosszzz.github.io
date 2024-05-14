import Image from "next/image";
import Icon from "./Icon";
import Button from "./Button";
import react from "../../../public/react.png";
import electron from "../../../public/electron.png";
import nodejs from "../../../public/nodejs.png";
import nextjs from "../../../public/nextjs.png";
import ts from "../../../public/typescript.png";
import js from "../../../public/javascript.png";
import html from "../../../public/html.png";
import css from "../../../public/css.png";
import kotlin from "../../../public/kotlin.png";
import tauri from "../../../public/tauri.png";
import cs from "../../../public/csharp.png";

export default function AboutSection() {
    return (
        <section className="px-20 sm:px-5 pt-5" id="about">
            <div className="text-5xl md:text-6xl inline-block pr-2 pl-2 font-extrabold md:p-3 rounded-full bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d]">About Me</div>
            <div className="text-2xl">
                Hello! I&apos;m Nikos, a 18 year old living in Greece. I am striving to become an software engineer but in the meanwhile I am experimenting in alot of different fields such as web development. I am actively involved with expanding and enriching my knowledge and sharpening my skills/abilities.
                <div className="flex flex-col items-center">
                    <span className="text-center font-extrabold text-2xl md:text-3xl mt-10">Languages & Frameworks I use</span>
                    <Button className="flex flex-row flex-wrap gap-1 bg-gradient-to-r from-[#686c6d] via-[#292e2e] to-[#111717] mb-10 px-5" span={true}>
                        <Icon icon={[react, electron, nodejs, nextjs, ts, js, html, css, kotlin, tauri, cs]} className="h-12 w-12 sm:h-8 sm:w-8" />
                    </Button>
                </div>
                I&apos;ve started experimenting with coding when I was 13 and from that point onwards I&apos;ve decided to follow the path of being a developer. I hope to meet others that are also interested in this field and collaborate with them aswell as seek out new opportunities.
                <div className="pt-10">
                    You can also donate to support me if you wish to, using one of the buttons below.
                    <div className="pt-2">
                        <a href="https://github.com/sponsors/nikosszzz">
                            <Button className="box-content px-[20px] inline-block text-3xl font-extrabold rounded-full bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d]">
                                <div className="flex flex-row gap-2 items-center">
                                    <Icon icon={"github"} width={32} height={32} className="w-8 h-8 mr-2 self-center rounded-xl" /> <span className="text-lg font-bold" > GitHub </span>
                                </div>
                            </Button>
                        </a>
                        <a href="https://paypal.me/nikoszz">
                            <Button className="box-content px-[20px] inline-block text-3xl font-extrabold rounded-full bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d]">
                                <div className="flex flex-row gap-2 items-center">
                                    <Image src="/paypalLogo.webp" width={32} height={32} className='w-8 h-8 rounded-xl' alt={""} /> <span className="text-lg font-bold" > PayPal </span>
                                </div>
                            </Button>
                        </a>
                        <a href="https://ko-fi.com/nikoszz">
                            <Button className="box-content px-[20px] inline-block text-3xl font-extrabold rounded-full bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d]">
                                <div className="flex flex-row gap-2 items-center">
                                    <Image src="/kofiLogo.webp" width={32} height={32} className='w-8 h-8 rounded-xl' alt={""} /> <span className="text-lg font-bold" > Ko-Fi </span>
                                </div>
                            </Button>
                        </a>
                        <a href="https://liberapay.com/nikoszz/donate">
                            <Button className="box-content px-[20px] inline-block text-3xl font-extrabold rounded-full bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d]">
                                <div className="flex flex-row gap-2 items-center">
                                    <Image src="/liberapayLogo.webp" width={32} height={32} className='w-8 h-8 rounded-xl' alt={""} /> <span className="text-lg font-bold"> Liberapay </span>
                                </div>
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
} 