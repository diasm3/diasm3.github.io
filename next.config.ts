import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export", // 정적 페이지 생성 활성화
  basePath: "/diasm3.github.io", // GitHub repository 이름으로 변경해주세요
  // GitHub Pages에서 사용할 수 있도록 설정
  assetPrefix: process.env.NODE_ENV === "production" ? "/diasm3.github.io" : "",
  // 빌드 시 README.md 무시
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
