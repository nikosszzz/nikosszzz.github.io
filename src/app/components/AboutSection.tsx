import Image from "next/image";
import { padding } from "../styles";

export default function AboutSection() {
    return (
        <section className={`${padding.XY} relative w-full`} id="about">
            <div className="text-5xl md:text-6xl w-[235px] md:w-[312px] font-extrabold md:p-3 rounded-full bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d]">About Me</div>
            <div className="text-2xl">
                Hello! I&apos;m Nikos, a 17 year old living in Greece. I am striving to become an software engineer but in the meanwhile I am experimenting in alot of different fields such as web development. I am actively involved with expanding and enriching my knowledge and sharpening my skills/abilities.
                <div className="flex flex-col">
                    <span className="text-center font-extrabold text-2xl md:text-3xl mt-5">Languages & Frameworks I use</span>
                    <Image src="https://skillicons.dev/icons?i=react,electron,nextjs,nodejs,ts,js,html,css,kotlin,tauri" height={48} width={512} alt={"My actively used languages & frameworks"} className="bg-gradient-to-r from-[#686c6d] via-[#292e2e] to-[#111717] p-2 rounded-3xl mr-auto ml-auto mb-5" />
                </div>
                I&apos;ve started experimenting with coding when I was 13 and from that point onwards I&apos;ve decided to follow the path of being a developer. I hope to meet others that are also interested in this field and collaborate with them aswell as seek out new opportunities.
            </div>
        </section>
    )
} 