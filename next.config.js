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
      require('unplugin-auto-import/webpack')({
        include: [
          /\.[tj]sx?$/,
          /\.md$/,
        ],
        imports: [
          'react',
          {
            'next/link': [['default', 'Link']],
            'next/image': [['default', 'Image']],
            'next/script': [['default', 'Script']],
            'next/head': [['default', 'Head']],
            'next/headers': ['cookies', 'headers'],
            'next/dist/client/components/not-found': ['notFound'],
            'next/navigation': ['useRouter', 'useSearchParams', 'useSelectedLayoutSegment', 'useSelectedLayoutSegments', 'usePathname'],
          }
        ],
        dirs: [
          './app/**',
          './pages/**',
        ],
        resolvers: [
          require('unplugin-icons/resolver')({
            prefix: 'Icon',
            extension: 'jsx',
          }),
        ],
        dts: true,
        eslintrc: {
          enabled: true,
        },
      }),
    )

    return config
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
