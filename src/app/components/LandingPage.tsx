import { padding } from "../styles";

export default function LandingPage() {
    return (
        <section className="relative max-w-[1920px] h-[800px]" style={{ backgroundImage: `url("/landingBg.webp")`, backgroundRepeat: "no-repeat", backgroundPosition: "c" }}>
            <div className={`${padding.X} absolute flex flex-col justify-center items-center h-full w-full`}>
                <p className="w-64 md:p-3 md:w-96 text-2xl font-medium md:text-3xl backdrop-blur-xl text-center align-center items-center rounded-full">
                    Hello, I&apos;m Nikos and welcome to my website!
                </p>
            </div>
        </section>
    )
}