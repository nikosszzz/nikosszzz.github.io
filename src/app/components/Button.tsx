import type { CSSProperties, MouseEventHandler } from "react";

export default function Button({ style, className, children, span, onClick }: { style?: CSSProperties; className?: string; children: React.ReactNode, span?: boolean; onClick?: MouseEventHandler<HTMLElement>; }): JSX.Element {
    return span ?
        (<span onClick={onClick ?? undefined} className={`py-3 px-8 pt-2 pb-2 rounded-full bg-blue-500 items-center inline-flex ${className}`} style={style ? style : undefined}> {children} </span>)
        : (<button onClick={onClick ?? undefined} className={`py-3 px-8 pt-2 pb-2 rounded-full  bg-blue-500 items-center inline-flex ${className}`} style={style ? style : undefined}> {children} </button>)
}