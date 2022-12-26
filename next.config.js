const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [
      "portfolio-cms-production.up.railway.app",
      "upload.wikimedia.org",
    ],
    formats: ["image/webp"],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
});
