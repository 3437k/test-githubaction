/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";
const repoName = isProduction ? "/test-githubaction" : "";

const nextConfig = {
  output: "export",
  assetPrefix: repoName,
};

module.exports = nextConfig;
