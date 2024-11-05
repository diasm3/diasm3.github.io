// src/app/wiki/[slug]/components/WikiContent.tsx
"use client"
import styled from "styled-components"
import { WikiFrontMatter } from "@/lib/mdParser"
import ReactMarkdown from "react-markdown"

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

const MarkdownContainer = styled.div`
  line-height: 1.6;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2rem 0 1rem;
  }

  p {
    margin: 1rem 0;
  }

  code {
    background: ${({ theme }) => theme.colors.background};
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
  }

  pre {
    background: ${({ theme }) => theme.colors.background};
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;

    code {
      background: none;
      padding: 0;
    }
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

      <MarkdownContainer>
        <ReactMarkdown>{content}</ReactMarkdown>
      </MarkdownContainer>
    </ContentContainer>
  )
}
