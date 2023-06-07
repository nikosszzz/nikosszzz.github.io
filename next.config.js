/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",
    compress: true,
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
        optimisticClientCache: true
    }
}

module.exports = nextConfig
