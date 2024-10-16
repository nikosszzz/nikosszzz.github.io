import type { CSSProperties, MouseEventHandler } from "react";

export function Button({ style, className, children, onClick, btnUrl }: { style?: CSSProperties; className?: string; children?: React.ReactNode, onClick?: MouseEventHandler<HTMLElement>; btnUrl?: string; }): JSX.Element {
    return (
        <a
            href={btnUrl ?? undefined}
            target={"_blank"}
            onClick={onClick ?? undefined}
            className={`${className} py-2 px-5 rounded-full items-center justify-center inline-flex`}
            style={style ? style : undefined}
        >
            {children}
        </a>
    );
}