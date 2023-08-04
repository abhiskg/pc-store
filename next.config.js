/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "images.unsplash.com",
  //       port: "",
  //       pathname: "/account123/**",
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
