// src/app/wiki/[slug]/components/WikiContent.tsx
"use client"
import styled from "styled-components"
import { WikiFrontMatter } from "@/lib/mdParser"
import MDRenderer from "@/components/MDRenderer"

const ContentContainer = styled.article`
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;

  ${({ theme }) => theme.media.tablet} {
    padding: 2rem;
  }
`

const ContentHeader = styled.header`
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  time {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.9rem;
  }
`

interface WikiContentProps {
  content: string
  frontMatter: WikiFrontMatter
}

export function WikiContent({ content, frontMatter }: WikiContentProps) {
  return (
    <ContentContainer>
      <ContentHeader>
        <h1>{frontMatter.title}</h1>
        {frontMatter.date && (
          <time dateTime={frontMatter.date}>
            {new Date(frontMatter.date).toLocaleDateString()}
          </time>
        )}
      </ContentHeader>

      <MDRenderer content={content} />
    </ContentContainer>
  )
}
