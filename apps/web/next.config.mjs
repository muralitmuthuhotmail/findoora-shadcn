/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const nextConfig = {
  transpilePackages: ["@workspace/ui"],
};

const withPWAConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

export default withPWAConfig(nextConfig);
