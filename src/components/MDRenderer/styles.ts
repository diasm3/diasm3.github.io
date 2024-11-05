import styled from "styled-components"

// src/components/MDRenderer/styles.ts
export const ImageWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
    max-width: 100%;
    object-fit: cover;
  }

  ${({ theme }) => theme.media.tablet} {
    img {
      border-radius: 8px;
    }
  }
`
