import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export", // 정적 페이지 생성 활성화
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
