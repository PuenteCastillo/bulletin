/** @type {import('next').NextConfig} */
// https://picsum.photos
// allow picsum.photos
const nextConfig = {
  images: {
    domains: ["picsum.photos"],
  },
};

module.exports = nextConfig;
