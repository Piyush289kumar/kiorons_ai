/** @type {import('next').NextConfig} */
// const nextConfig = {};

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'localhost', 'backend.web.kiorons.com', 'images.ctfassets.net'],
  },
  experimental: {
    serverActions: {},
  },
}
export default nextConfig
