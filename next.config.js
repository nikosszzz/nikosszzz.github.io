/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    compress: true,
    swcMinify: true,
    images: {
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
