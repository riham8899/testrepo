
/**@type {import('next').NextConfig}*/



const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "ecommerce.routemisr.com",
      pathname: "/**",
    }]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};





export default nextConfig;
