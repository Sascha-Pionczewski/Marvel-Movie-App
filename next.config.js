/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["res.cloudinary.com", "image.tmdb.org"],
  },
};

module.exports = nextConfig;
