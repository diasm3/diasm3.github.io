// src/styles/globalStyles.ts
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    font-size: 16px;
    
    ${({ theme }) => theme.media.mobile} {
      font-size: 14px;
    }

    ${({ theme }) => theme.media.tablet} {
      font-size: 16px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* 모바일에서 더 나은 터치 타겟 크기 */
  button, a {
    min-height: 44px;
    min-width: 44px;
  }

  /* 모바일에서 폼 요소 최적화 */
  input, select, textarea {
    font-size: 16px; /* iOS에서 자동 확대 방지 */
  }
`
