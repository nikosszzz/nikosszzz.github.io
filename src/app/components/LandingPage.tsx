import { padding } from "../styles";

export default function LandingPage() {
    return (
        <section className="relative w-full h-[800px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("/landingBg.webp")` }}>
            <div className={`${padding.X} absolute flex flex-col justify-center items-center h-full w-full`}>
                <p className="w-64 md:p-3 md:w-96 text-2xl font-medium md:text-3xl backdrop-blur-xl text-center align-center items-center rounded-full">
                    Hello, I&apos;m Nikos and welcome to my website!
                </p>
            </div>
        </section>
    )
}