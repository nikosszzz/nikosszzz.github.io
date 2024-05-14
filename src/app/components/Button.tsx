import type { CSSProperties } from "react";

export default function Button({ style, className, children, span }: { style?: CSSProperties; className?: string; children: React.ReactNode, span?: boolean }): JSX.Element {
    return span ?
        (<span className={`py-3 px-8 pt-2 pb-2 rounded-full bg-blue-500 items-center inline-flex ${className}`} style={style ? style : undefined}> {children} </span>)
        : (<button className={`py-3 px-8 pt-2 pb-2 rounded-full  bg-blue-500 items-center inline-flex ${className}`} style={style ? style : undefined}> {children} </button>)
}