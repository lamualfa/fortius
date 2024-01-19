/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    useDeploymentIdServerActions: true,
  },
}

module.exports = nextConfig
