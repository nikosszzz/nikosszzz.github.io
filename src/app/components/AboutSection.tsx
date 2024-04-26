import Image from "next/image";
import { padding } from "../styles";
import Icon from "./Icon";

export default function AboutSection() {
    return (
        <section className={`${padding.XY} relative w-full`} id="about">
            <div className="text-5xl md:text-6xl inline-block pr-2 pl-2 font-extrabold md:p-3 rounded-full bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d]">About Me</div>
            <div className="text-2xl">
                Hello! I&apos;m Nikos, a 18 year old living in Greece. I am striving to become an software engineer but in the meanwhile I am experimenting in alot of different fields such as web development. I am actively involved with expanding and enriching my knowledge and sharpening my skills/abilities.
                <div className="flex flex-col">
                    <span className="text-center font-extrabold text-2xl md:text-3xl mt-10">Languages & Frameworks I use</span>
                    <div className="bg-gradient-to-r from-[#686c6d] via-[#292e2e] to-[#111717] rounded-3xl mr-auto ml-auto mb-10">
                        <Image src="https://skillicons.dev/icons?i=react,electron,nextjs,nodejs,ts,js,html,css,kotlin,tauri,cs" height={48} width={512} alt={"My actively used languages & frameworks"} className="p-2" />
                    </div>  
                </div>
                I&apos;ve started experimenting with coding when I was 13 and from that point onwards I&apos;ve decided to follow the path of being a developer. I hope to meet others that are also interested in this field and collaborate with them aswell as seek out new opportunities.

                <div className="pt-10">
                    You can also donate to support me if you wish to, using the buttons below.
                    <div className="pt-2">
                        <a href="https://github.com/sponsors/nikosszzz">
                            <div className="box-content inline-block pr-2 pl-2 text-3xl font-extrabold rounded-full bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d]">
                                <div className="flex">
                                    <Icon icon={"github"} width={32} height={32} className="w-8 h-8 mr-2 self-center rounded-xl" /> GitHub
                                </div>
                            </div>
                        </a>
                        <a href="https://paypal.me/nikoszz">
                            <div className="box-content inline-block pr-2 pl-2 text-3xl font-extrabold rounded-full bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d]">
                                <div className="flex">
                                    <Image src="/paypalLogo.webp" width={32} height={32} className='w-8 h-8 mr-2 self-center rounded-xl' alt={""} /> PayPal
                                </div>
                            </div>
                        </a>
                        <a href="https://ko-fi.com/nikoszz">
                            <div className="box-content inline-block pr-2 pl-2 text-3xl font-extrabold rounded-full bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d]">
                                <div className="flex">
                                    <Image src="/kofiLogo.webp" width={32} height={32} className='w-8 h-8 mr-2 self-center rounded-xl' alt={""} /> Ko-Fi
                                </div>
                            </div>
                        </a>
                        <a href="https://liberapay.com/nikoszz/donate">
                            <div className="box-content inline-block pr-2 pl-2 text-3xl font-extrabold rounded-full bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d]">
                                <div className="flex">
                                    <Image src="/liberapayLogo.webp" width={32} height={32} className='w-8 h-8 mr-2 self-center rounded-xl' alt={""} /> Liberapay
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
} 