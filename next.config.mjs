/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The markup was ported from a hand-built page; don't fail builds on lint style rules.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
