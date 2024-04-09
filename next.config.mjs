/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.dicebear.com"],
    dangerouslyAllowSVG: true,
  },
  output: "standalone",
};

export default nextConfig;
