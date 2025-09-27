import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // 🔹 desactiva la optimización dinámica
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
