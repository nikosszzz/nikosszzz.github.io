import Image, { StaticImageData } from "next/image"
import type { CSSProperties } from "react";

import csharpIcon from "../../../public/csharp.png";
import cssIcon from "../../../public/css.png";
import discordIcon from "../../../public/discord.png";
import electronIcon from "../../../public/electron.png";
import htmlIcon from "../../../public/html.png";
import javascriptIcon from "../../../public/javascript.png";
import kotlinIcon from "../../../public/kotlin.png";
import nextjsIcon from "../../../public/nextjs.png";
import nodejsIcon from "../../../public/nodejs.png";
import reactIcon from "../../../public/react.png";
import tailwindIcon from "../../../public/tailwind.png";
import tauriIcon from "../../../public/tauri.png";
import typescriptIcon from "../../../public/typescript.png";
import rustIcon from "../../../public/rust.png";
import mongoIcon from "../../../public/mongodb.png";
import windowsIcon from "../../../public/windows.png";
import debianIcon from "../../../public/debian.png";
import fedoraIcon from "../../../public/fedora.png";

const iconMap: { [key: string]: StaticImageData } = {
    csharp: csharpIcon,
    css: cssIcon,
    discord: discordIcon,
    electron: electronIcon,
    html: htmlIcon,
    javascript: javascriptIcon,
    kotlin: kotlinIcon,
    nextjs: nextjsIcon,
    nodejs: nodejsIcon,
    react: reactIcon,
    tailwind: tailwindIcon,
    tauri: tauriIcon,
    typescript: typescriptIcon,
    rust: rustIcon,
    mongodb: mongoIcon,
    windows: windowsIcon,
    debian: debianIcon,
    fedora: fedoraIcon
};

export default function Icon({
    icon,
    height,
    width,
    style,
    className,
    fill,
}: {
    icon: "github" | string | StaticImageData[];
    height?: number;
    width?: number;
    style?: CSSProperties;
    className?: string;
    fill?: boolean;
}): JSX.Element | JSX.Element[] {
    if (typeof icon === "string") {
        if (icon === "github") {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={width ?? undefined}
                    height={height ?? undefined}
                    style={style ?? undefined}
                    viewBox="0 0 512 512"
                    className={className ? className : undefined}
                >
                    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.6 17.6 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.6 18.6 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.2 208.2 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.6 18.6 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.4 19.4 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32" fill="#fff" />
                </svg>
            );
        } else {
            const selected = iconMap[icon.toLowerCase()];

            if (!selected) return <div>Icon not found</div>;

            return (
                <Image
                    src={selected}
                    height={height ?? selected.height}
                    width={width ?? selected.width}
                    style={style ?? undefined}
                    className={className ?? undefined}
                    fill={fill ?? undefined}
                    alt={icon}
                />
            );
        }
    } else {
        return icon.map((icon, index) => (
            <Image
                key={index}
                src={icon}
                height={height ?? icon.height}
                width={width ?? icon.width}
                style={style ?? undefined}
                className={className ?? undefined}
                fill={fill ?? undefined}
                alt={`icon-${index}`}
            />
        ));
    }
}