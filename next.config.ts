/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Dikkat: "unsplash.com" değil, "images.unsplash.com" olmalı
      },
    ],
  },
};

export default nextConfig;
