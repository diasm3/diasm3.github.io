// src/components/Layout/styles.ts
import styled from "styled-components"

export const MainContainer = styled.main`
  padding: 1rem;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;

  ${({ theme }) => theme.media.tablet} {
    padding: 2rem;
    max-width: 768px;
  }

  ${({ theme }) => theme.media.laptop} {
    max-width: 1024px;
  }

  ${({ theme }) => theme.media.desktop} {
    max-width: 1200px;
  }
`
