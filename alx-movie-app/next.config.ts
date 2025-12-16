import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */

const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com"],
  },
  // Explicitly set an empty turbopack config to silence turbopack warnings
  turbopack: {},
};

export default withPWA({
  ...nextConfig,
});
