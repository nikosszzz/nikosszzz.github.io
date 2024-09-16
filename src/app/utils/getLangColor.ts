import langcolors from "./langcolors.json" assert { type: "json" };

export function getLangColor(language: keyof typeof langcolors): string {
    return langcolors[language] || "#FFFFFF"
}