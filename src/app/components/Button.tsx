import type { AnchorHTMLAttributes, CSSProperties, HTMLAttributeAnchorTarget, MouseEventHandler } from "react";

export function Button({ style, className, children, onClick, btnUrlInfo }: { style?: CSSProperties; className?: string; children?: React.ReactNode, onClick?: MouseEventHandler<HTMLElement>; btnUrlInfo?: { url: string; target?: HTMLAttributeAnchorTarget }; }): JSX.Element {
    return (
        <a
            href={btnUrlInfo?.url ?? undefined}
            target={btnUrlInfo?.target ?? undefined}
            onClick={onClick ?? undefined}
            className={`${className} py-2 px-5 rounded-full items-center justify-center inline-flex`}
            style={style ? style : undefined}
        >
            {children}
        </a>
    );
}