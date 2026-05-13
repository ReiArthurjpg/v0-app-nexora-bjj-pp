/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    const apiUrl =
      process.env.NEXORA_API_URL ||
      process.env.NEXT_PUBLIC_API_URL ||
      'http://localhost:8080';
    return [
      {
        source: '/nexora-api/:path*',
        destination: `${apiUrl}/:path*`,
      },
    ];
  },
}

export default nextConfig
