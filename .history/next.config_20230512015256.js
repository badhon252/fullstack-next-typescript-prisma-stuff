/** @type {import('next').NextConfig} */
const nextConfig = {
  devServer: {
    headers: {
      "Cache-Control": "no-store",
    },
  },
};

export default nextConfig;
