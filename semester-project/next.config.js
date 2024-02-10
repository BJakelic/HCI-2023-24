/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { 
        hostname: "res.cloudinary.com"
      },
      { 
        hostname: "picsum.photos"
      },
      { 
        hostname: "via.placeholder.com"
      },
      { 
        hostname: "unsplash.com"
      },
      { 
        hostname: "source.unsplash.com"
      },
      { 
        hostname: "images.ctfassets.net"
      },
    ],
  },
};

module.exports = nextConfig;
