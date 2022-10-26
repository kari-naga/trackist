/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.plugins.push(
      require('unplugin-icons/webpack')({
        compiler: 'jsx',
        jsx: 'react',
        autoInstall: true,
      }),
    )
    return config
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
