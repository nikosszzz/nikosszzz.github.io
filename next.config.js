/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "",
    output: "export",
    reactStrictMode: true,
    output: "export",
    compress: true,
    optimizeFonts: true,
    swcMinify: true,
    images: {
        unoptimized: true,
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "skillicons.dev"
            }
        ]
    },
    experimental: {
        optimizeCss: true,
        optimisticClientCache: true,
        typedRoutes: true,
        optimizeServerReact: true,
        serverMinification: true
    }
}

module.exports = nextConfig;
