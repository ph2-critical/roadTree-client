/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  reactStrictMode: false,
  images: {
    protocol: "https",
    domains: ["lh3.googleusercontent.com", "k.kakaocdn.net"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
