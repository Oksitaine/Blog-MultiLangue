/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "img.freepik.com",
                protocol: "https",
            },
            {
                hostname: "directus-production-ab09.up.railway.app",
                protocol: "https",
            },
            {
                hostname: "images.pexels.com",
                protocol: "https",
            }
        ]
    },
    // experimental: {
    //     serverActions: true,
    // }
}

module.exports = nextConfig
