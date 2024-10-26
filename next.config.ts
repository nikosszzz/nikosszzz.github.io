export default {
    basePath: "",
    output: "export",
    reactStrictMode: true,
    compress: true,
    images: {
        unoptimized: true,
        dangerouslyAllowSVG: true
    },
    experimental: {
        optimizeCss: true,
        optimisticClientCache: true,
        typedRoutes: true,
        optimizeServerReact: true,
        serverMinification: true,
        reactCompiler: true,
        staleTimes: {
            dynamic: 30
        },
    }
} satisfies import("next").NextConfig;
