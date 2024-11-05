// src/styles/theme.ts
export const theme = {
  colors: {
    primary: "#228be6",
    secondary: "#6c757d",
    background: "#f8f9fa",
    text: "#495057",
  },
  breakpoints: {
    mobile: "320px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1280px",
  },
  // 모바일 우선 디자인을 위한 미디어 쿼리 헬퍼
  media: {
    mobile: `@media screen and (min-width: 320px)`,
    tablet: `@media screen and (min-width: 768px)`,
    laptop: `@media screen and (min-width: 1024px)`,
    desktop: `@media screen and (min-width: 1280px)`,
  },
}
