import Image from "next/image"
import nextjs from "../../../public/nextjs.png";
import tailwind from "../../../public/tailwind.png";

export default function Footer() {
    return (
        //#292e2e - old color
        <footer className="rounded-2xl shadow mx-4 mb-4 mt-auto bg-secondary pt-2 pb-2">
                <div className="sm:text-base md:text-xl mx-auto text-center items-center justify-center flex flex-row">
                    Made with ❤️ using
                    {<Image src={nextjs} height={32} width={32} alt={"Tailwind CSS"} className="mx-1" />}
                    and
                    {<Image src={tailwind} height={32} width={32} alt={"NextJS"} className="mx-1" />}
                </div>
        </footer>
    )
}