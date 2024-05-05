import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  output: 'export',
  images: { unoptimized: true },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
  webpack(config, options) {
    // Add MDX loader for .mdx files
    config.module.rules.push({
      test: /\.mdx$/,
      use: ['babel-loader', '@mdx-js/loader'],
    })

    return config
  },
})

export default withMDX(nextConfig)
