/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();

const nextConfig = {
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tecdn.b-cdn.net",
        port: "",
        pathname: "/img/new/avatars/**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/w20/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "standalone",
  // useFileSystemPublicRoutes: false,
};

module.exports = withNextIntl(nextConfig);
