/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  swcMinify: false,
  trailingSlash: true,
  distDir: 'out'
};

module.exports = nextConfig;
