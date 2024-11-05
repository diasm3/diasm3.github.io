// src/components/Header/styles.ts
import styled from "styled-components"

export const HeaderContainer = styled.header`
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const Navigation = styled.nav`
  display: flex;
  gap: 2rem;
  a {
    text-decoration: none;
    color: #333;
    &:hover {
      color: #0070f3;
    }
  }
`
