import type { ReactNode } from "react";

export function Card({ className, button, cardUrl, title, description, icon, children, footer, header }: { className?: string, button?: ReactNode, cardUrl?: string, title: string, description?: string | ReactNode, icon?: ReactNode, children?: ReactNode, footer?: ReactNode, header?: ReactNode }): JSX.Element {
    return (
        <a href={cardUrl ?? undefined} target="_blank" className={`${className} relative flex flex-col cursor-pointer p-[1em] rounded-lg shadow bg-primary`}>
            {header}
            <div className="flex flex-row items-start gap-2 shrink">
                {icon}
                <h5 className="md:text-lg sm:text-base font-semibold place-self-center text-pretty text-white">{title}</h5>
            </div>
            <div className="flex flex-col items-start justify-between text-gray-400">
                <span className="mt-[0.3em] mb-[0.8em] text-pretty">
                    {description}
                    {children}
                </span>
                {button}
            </div>
            {footer}
        </a>
    )
}