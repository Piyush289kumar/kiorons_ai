/** @type {import('next').NextConfig} */
// const nextConfig = {};

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'localhost'],
  },
  experimental: {
    serverActions: {},
  },
}
export default nextConfig
