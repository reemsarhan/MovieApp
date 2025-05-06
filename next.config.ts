/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  images: {
    domains: ["m.media-amazon.com"], // Add the domain here
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
