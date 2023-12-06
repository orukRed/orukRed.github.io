/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //dockerでホットリロードを有効にする
  webpack: (config, context) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
      ignored: ['node_modules']
    }
    return config
  },
  output: 'export',//静的サイト出力に必要
  images: { unoptimized: true }
}

module.exports = nextConfig
