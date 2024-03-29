/** @type {import('next').NextConfig} */

const withImages = require('next-images') 
module.exports = withImages()

module.exports = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    domains: ['i.imgur.com', 'imgur.com', "loremflickr.com"]
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'https://sf-tech-back.vercel.app/v1',
  //     }
  //   ]
  // },

  async headers() {
    return [
      {
        //matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
}