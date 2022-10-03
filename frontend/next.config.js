/** @type {import('next').NextConfig} */

const withImages = require('next-images') 
module.exports = withImages()

module.exports = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    domains: ['i.imgur.com', 'imgur.com']
  },
}

