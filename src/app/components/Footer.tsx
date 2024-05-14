import Image from "next/image"
import nextjs from "../../../public/nextjs.png";
import tailwind from "../../../public/tailwind.png";

export default function Footer() {
    return (
        //#292e2e - old color
        <footer className="bottom-0 rounded-2xl shadow m-4 bg-gradient-to-r from-[#111717] via-[#292e2e] to-[#686c6d]">
            <div className="w-full mx-auto max-w-screen-xl pt-2 pb-2 flex">
                <div className="sm:text-lg md:text-xl mr-auto ml-auto text-center flex items-center">
                    Made with ❤️ using
                    {<Image src={nextjs} height={32} width={32} alt={"Tailwind CSS"} className="mx-2" />}
                    and
                    {<Image src={tailwind} height={32} width={32} alt={"NextJS"} className="mx-2" />}
                </div>
            </div>
        </footer>
    )
}