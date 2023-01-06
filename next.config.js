const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
}

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig)
