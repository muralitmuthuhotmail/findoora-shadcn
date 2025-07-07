/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx';
import withPWA from 'next-pwa';

const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // Add any MDX options here
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const withPWAConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

export default withMDX(withPWAConfig(nextConfig));
