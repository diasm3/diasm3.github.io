// src/app/wiki/components/WikiList.tsx
"use client"
import Link from "next/link"
import styled from "styled-components"

const WikiContainer = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  ${({ theme }) => theme.media.tablet} {
    padding: 2rem;
  }
`

const WikiHeader = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

const WikiGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.media.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const WikiCard = styled.article`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text};
  }
`

interface WikiFile {
  slug: string
  title: string
  description?: string
  tags?: string[]
  date?: string
}

interface WikiListProps {
  wikiFiles: WikiFile[]
}

export function WikiList({ wikiFiles }: WikiListProps) {
  return (
    <WikiContainer>
      <WikiHeader>
        <h1>Wiki</h1>
        <p>Total {wikiFiles.length} articles</p>
      </WikiHeader>

      <WikiGrid>
        {wikiFiles.map((file) => (
          <Link
            href={`/wiki/${file.slug}`}
            key={file.slug}
            style={{ textDecoration: "none" }}
          >
            <WikiCard>
              <h2>{file.title}</h2>
              {file.description && <p>{file.description}</p>}
            </WikiCard>
          </Link>
        ))}
      </WikiGrid>
    </WikiContainer>
  )
}
