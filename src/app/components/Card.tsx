import Link from "next/link";

export function Card({ className, button, titleUrl, cardUrl, title, description, icon, children }: { className?: string, button?: React.ReactNode, titleUrl?: string, cardUrl?: string, title: string, description?: string | React.ReactNode, icon?: React.ReactNode, children?: React.ReactNode }): JSX.Element {
    return (
        <div className={`${className} px-4 py-4 rounded-lg shadow bg-primary`}>

            <a href={titleUrl ?? undefined} target="_blank" className="flex flex-row gap-2 mb-2 shrink">
                {icon}
                <h5 className="text-lg font-semibold place-self-center text-gray-900 dark:text-white">{title}</h5>
            </a>
            <div className="flex flex-row justify-between text-gray-500 dark:text-gray-400">
                <span className="mr-[5px]">
                    {description}
                    {children}
                </span>
                {button}
            </div>
        </div>
    )
}