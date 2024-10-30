/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    // יאפשר שימוש של המתשנים בשני הסביבות - צד לקוח וצד שרת
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;