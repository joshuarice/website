import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "beryl.joshuarice.net",
            },
        ],
    },
};

export default nextConfig;
