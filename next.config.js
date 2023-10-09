/** @type {import('next').NextConfig} */

// https://nextjs.org/docs/app/api-reference/next-config-js/assetPrefix
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  assetPrefix: isProduction ? "/test-githubaction" : undefined,
};

module.exports = nextConfig;
