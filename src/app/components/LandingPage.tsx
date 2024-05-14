import { padding } from "../styles";
import Button from "./Button";

export default function LandingPage() {
    return (
        <section className="relative w-screen h-[600px] md:h-[800px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("/landingBg.webp")` }}>
            <div className={`${padding.X} absolute inset-0 flex flex-col flex-wrap justify-center items-center`}>
                <Button className="backdrop-blur-xl bg-transparent" span={true}>
                    <span className="text-3xl sm:text-2xl text-center font-medium">Hello, I&apos;m Nikos and welcome to my website!<span className="animate-typing">_</span></span>
                </Button>
            </div>
        </section>
    )
}