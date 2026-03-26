/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for better performance
  // Uncomment if deploying to GitHub Pages
  // output: 'export',

  // Image optimization
  images: {
    unoptimized: true,
  },

  // Compress
  compress: true,

  // React strict mode for development
  reactStrictMode: true,

  // Redirects (if needed)
  async redirects() {
    return [];
  },

  // Rewrites (if needed)
  async rewrites() {
    return [];
  },
};

module.exports = nextConfig;

