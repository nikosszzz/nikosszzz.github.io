import Link from "next/link";

export function Card({ className, button, cardUrl, title, description, icon, children }: { className?: string, button?: React.ReactNode, cardUrl?: string, title: string, description?: string | React.ReactNode, icon?: React.ReactNode, children?: React.ReactNode }): JSX.Element {
    return (
        <a href={cardUrl ?? undefined} target="_blank" className={`${className} px-4 py-4 rounded-lg shadow bg-primary`}>
            <div className="flex flex-row items-start gap-2 mb-2 shrink">
                {icon}
                <h5 className="md:text-lg sm:text-base font-semibold place-self-center text-pretty text-gray-900 dark:text-white">{title}</h5>
            </div>
            <div className="flex flex-row items-start justify-between text-gray-500 dark:text-gray-400">
                <span className="mr-[5px]">
                    {description}
                    {children}
                </span>
                {button}
            </div>
        </a>
    )
}