/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
   images: {
     // unoptimized: true,
    domains: ["image.tmdb.org"],
  },
  // images: {
  //   domains: ["image.tmdb.org"],
  // },
}

module.exports = nextConfig
