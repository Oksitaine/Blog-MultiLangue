/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "as2.ftcdn.net",
                protocol: "https",
            }
        ]
    }
}

module.exports = nextConfig
