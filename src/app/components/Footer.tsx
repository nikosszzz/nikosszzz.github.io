import Image from "next/image"
import nextjs from "../../../public/nextjs.png";
import tailwind from "../../../public/tailwind.png";

export default function Footer() {
    return (
        //#292e2e - old color
        <div className="bottom-0 sm:text-base md:text-xl text-center justify-center flex flex-row mb-5">
            Made with ❤️ using
            {<Image src={nextjs} height={28} width={28} alt={"Tailwind CSS"} className="mx-1.5" />}
            and
            {<Image src={tailwind} height={28} width={28} alt={"NextJS"} className="mx-1.5" />}
        </div>
    )
}