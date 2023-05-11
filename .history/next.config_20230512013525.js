/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  devServer: {
    headers: {
      "Cache-Control": "no-store",
    },
  },
};