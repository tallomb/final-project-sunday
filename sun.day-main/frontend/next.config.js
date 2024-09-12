/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
