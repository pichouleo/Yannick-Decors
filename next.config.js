/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Désactive le port aléatoire pour le preview
  experimental: {},
}

module.exports = nextConfig
