import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.0.102','192.168.0.103','192.168.0.102:3000', '192.168.0.103:3000', '*.ngrok-free.app'],
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ]
  }
  /* config options here */
};

export default nextConfig;
