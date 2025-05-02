/** @type {import('next').NextConfig} */
// const nextConfig = {};

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  experimental: {
    serverActions: true,
  },
};
export default nextConfig;
