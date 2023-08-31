import Image from "next/image"

export default function Footer() {
    return (
        //#292e2e - old color
        <footer className="bottom-0 rounded-lg shadow m-4 bg-[#303636]">
            <div className="w-full mx-auto max-w-screen-xl pt-2 pb-2 flex">
                <div className="text-xl mr-auto ml-auto text-center] flex">
                    Made with ❤️ using
                    {<Image src={`https:/skillicons.dev/icons?i=tailwind`} height={42} width={42} alt={"Tailwind CSS"} className="pr-[5px] pl-[5px]" />}
                    and
                    {<Image src={`https:/skillicons.dev/icons?i=next`} height={42} width={42} alt={"NextJS"} className="pr-[5px] pl-[5px]" />}
                </div>
            </div>
        </footer>
    )
}