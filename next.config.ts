import type { NextConfig } from "next";

// The browser calls Laravel directly for SSO so its state cookie is set on the
// backend host. The ordinary API remains same-origin through the Next.js proxy.
const apiUrl = process.env.API_URL ?? "http://127.0.0.1:8001";

const nextConfig: NextConfig = {
  output: "standalone",
  env: {
    NEXT_PUBLIC_BACKEND_URL: apiUrl.replace(/\/+$/, ""),
  },
  async rewrites() {
    return [
      { source: "/api/:path*", destination: `${apiUrl}/api/:path*` },
      { source: "/sanctum/:path*", destination: `${apiUrl}/sanctum/:path*` },
    ];
  },
};

export default nextConfig;
