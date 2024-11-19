/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  swcMinify: false // Disable SWC minification for WebContainer compatibility
};

module.exports = nextConfig;