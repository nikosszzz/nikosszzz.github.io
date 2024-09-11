import Button from "../components/Button";
import Icon from "../components/Icon";

const contactData = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 40 32"><path xmlns="http://www.w3.org/2000/svg" fill="#fff" d="m8.672 3.727 9.953 13.539L8.609 28.273h2.254l8.77-9.636 7.086 9.636h7.672l-10.516-14.3 9.324-10.246h-2.254l-8.074 8.875-6.527-8.875Zm3.316 1.691h3.524l15.562 21.164h-3.523Zm0 0" /></svg>
        ),
        platform: "X",
        name: "nikosszzz",
        url: "https://twitter.com/nikosszzz"
    },
    {
        icon: (
            <Icon icon={"github"} height={32} width={32} />
        ),
        platform: "GitHub",
        name: "nikosszzz",
        url: "https://github.com/nikosszzz"
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 -28.5 256 256"><path d="M216.856 16.597A208.5 208.5 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046q-29.538-4.442-58.533 0c-1.832-4.4-4.55-9.933-6.846-14.046a207.8 207.8 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161 161 0 0 0 79.735 175.3a136.4 136.4 0 0 1-21.846-10.632 109 109 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a132 132 0 0 0 5.355 4.237 136 136 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36M85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2 23.236 11.804 23.015 26.2c.02 14.375-10.148 26.18-23.015 26.18m85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18" fill="#5865F2" /></svg>
        ),
        platform: "Discord",
        name: "deoptimize",
        url: "https://discord.com/users/327065865201909762"
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="256" y1="0" x2="256" y2="510.132" gradientTransform="scale(.0625)"><stop offset="0" stopColor="#41bce7" stopOpacity="1" /><stop offset="1" stopColor="#22a6dc" stopOpacity="1" /></linearGradient></defs><path stroke="none" fillRule="nonzero" fill="url(#a)" d="M32 16c0 8.836-7.164 16-16 16S0 24.836 0 16 7.164 0 16 0s16 7.164 16 16m0 0" /><path stroke="none" fillRule="nonzero" fill="#ffff" fillOpacity="1" d="m23.79 9.207-2.86 14.406s-.399 1-1.5.52l-6.594-5.059-2.399-1.156-4.039-1.355s-.617-.22-.68-.7c-.062-.48.7-.738.7-.738l16.05-6.293c0-.008 1.321-.59 1.321.375m0 0" /><path stroke="none" fillRule="nonzero" fill="#d2e4f0" fillOpacity="1" d="M12.324 23.45s-.191-.02-.43-.774c-.238-.758-1.457-4.758-1.457-4.758l9.696-6.156s.562-.336.535 0c0 0 .102.062-.2.34-.3.28-7.613 6.855-7.613 6.855" /><path stroke="none" fillRule="nonzero" fill="#b5cfe4" fillOpacity="1" d="m15.363 21.012-2.605 2.383s-.207.156-.426.054l.5-4.418" /></svg>
        ),
        platform: "Telegram",
        name: "@deoptimize",
        url: "https://t.me/deoptimize"
    }
]

export default function Contact() {
    return (
        <div>
            <div className="text-5xl md:text-6xl inline-block mb-5 font-extrabold rounded-full">Contact</div>
            <div className="flex flex-col">
                {contactData.map((d) => (
                    <Button span={true} key={d.platform.toLowerCase()} className="bg-transparent flex flex-row gap-2 pl-0 pt-1">
                        <span className="p-1">{d.icon}</span>
                        <div className="text-2xl">{d.platform}</div>
                        <a href={d.url} target="_blank" className="ml-2 text-xl bg-primary rounded-xl px-2">{d.name}</a>
                    </Button>
                ))}
            </div>
        </div>
    )
}