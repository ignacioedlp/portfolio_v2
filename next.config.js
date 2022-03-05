const withPWA = require("next-pwa");
module.exports = withPWA({
  pwa: {
    dest: "public",
  },
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "upload.wikimedia.org"],
    formats: ["image/webp"],
  },
});
