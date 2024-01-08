/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "precious-guide.s3.eu-central-1.amazonaws.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
