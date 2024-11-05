// src/components/Header/styles.ts
import styled from "styled-components"

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  ${({ theme }) => theme.media.tablet} {
    padding: 1rem 2rem;
  }
`

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    gap: 2rem;
  }

  a {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`
