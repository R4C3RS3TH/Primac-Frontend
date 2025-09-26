import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true, // evita que ESLint bloquee el build
  },
};

export default nextConfig;
