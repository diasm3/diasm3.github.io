// src/components/Footer/styles.ts
import styled from "styled-components"

export const FooterSection = styled.div`
  h3 {
    color: #495057;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`

export const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.5rem;

    a {
      color: #6c757d;
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: #228be6;
      }
    }
  }
`

export const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #dee2e6;
  color: #868e96;
  font-size: 0.9rem;
`

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};

  ${({ theme }) => theme.media.tablet} {
    padding: 2rem;
  }
`

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.media.laptop} {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1200px;
    margin: 0 auto;
  }
`
