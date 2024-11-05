import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export", // 정적 페이지 생성 활성화
  basePath: "/diasm3.github.io", // GitHub repository 이름으로 변경해주세요
  images: {
    unoptimized: true,
  },
}

export default nextConfig
