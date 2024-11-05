"use client"
// src/app/wiki/page.tsx
import Link from "next/link"
import styled from "styled-components"
import { getAllMarkdownFiles } from "@/lib/mdParser"

// styles
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
    margin: 0;
  }
`

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.background};
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.secondary};
`

// types
interface WikiFile {
  slug: string
  title: string
  description?: string
  tags?: string[]
  date?: string
}

// 마크다운 파일의 frontmatter를 파싱하여 정보 추출
function parseWikiFiles(files: string[]): WikiFile[] {
  return files.map((file) => ({
    slug: file.replace(".md", ""),
    title: file.replace(".md", "").replace(/-/g, " "),
    // 여기에 frontmatter 파싱 로직 추가 가능
    tags: ["programming", "wiki"], // 예시 태그
  }))
}

export default function WikiPage() {
  const files = getAllMarkdownFiles()
  const wikiFiles = parseWikiFiles(files)

  // 알파벳 순으로 정렬
  wikiFiles.sort((a, b) => a.title.localeCompare(b.title))

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
              {file.tags && (
                <TagList>
                  {file.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagList>
              )}
            </WikiCard>
          </Link>
        ))}
      </WikiGrid>
    </WikiContainer>
  )
}
