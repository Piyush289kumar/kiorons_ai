/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/**",
      },
       {
        protocol: "https",
        hostname: "test.web.kiorons.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "test.web.kiorons.com",
        port: "",
        pathname: "/**",
      },
       {
        protocol: "https",
        hostname: "kiorons.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "kiorons.com",
        port: "",
        pathname: "/**",
      },
      
    ],
  },
};

export default nextConfig;
