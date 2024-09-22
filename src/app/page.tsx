import Icon from "./components/Icon";
import Button from "./components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="sm:text-5xl md:text-6xl inline-block mb-5 font-extrabold rounded-full">
        Hi, I&apos;m <span className=" bg-gradient-to-r from-[#444a4a] via-[#294242] to-[#4c5c61] text-transparent bg-clip-text">Nikos!</span>
      </div>

      <div className="md:text-2xl sm:text-xl">
        I am a 18 year old living in Greece who is striving to become an software engineer who is also experimenting in different fields such as web development & Discord bot development.
        <div>I also love playing games and listening to hip hop, specifically Eminem.</div>


        <div className="pt-10 flex items-center">
          You can become a sponsor for me on GitHub if you wish to support me:
          <Link href={"https://github.com/sponsors/nikosszzz"}>
            <Button className="ml-3 box-content px-[20px] inline-block text-3xl font-extrabold rounded-full bg-primary">
              <div className="flex flex-row gap-2 items-center">
                <Icon icon={"github"} width={32} height={32} className="w-8 h-8 rounded-xl" /> <span className="text-lg font-bold" >Sponsor</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
