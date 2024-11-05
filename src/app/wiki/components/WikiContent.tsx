// src/app/wiki/[slug]/components/WikiContent.tsx
"use client"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { WikiFrontMatter } from "@/lib/mdParser"
import { TableOfContents } from "./TableOfContents"

interface WikiContentProps {
  content: string
  frontMatter: WikiFrontMatter
}

export function WikiContent({ content, frontMatter }: WikiContentProps) {
  return (
    <ContentWrapper>
      <MainContent>
        <ContentHeader>
          <Title>{frontMatter.title}</Title>
          {frontMatter.date && (
            <DateText>
              {new Date(frontMatter.date).toLocaleDateString()}
            </DateText>
          )}
          {frontMatter.tags && frontMatter.tags.length > 0 && (
            <TagList>
              {frontMatter.tags.map((tag, index) => (
                <Tag key={`${frontMatter.title}-${tag}-${index}`}>#{tag}</Tag>
              ))}
            </TagList>
          )}
        </ContentHeader>
        <MarkdownContent>
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "")
                const language = match ? match[1] : ""

                if (!inline && language) {
                  return (
                    <CodeBlock>
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={language}
                        PreTag="div"
                        showLineNumbers
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    </CodeBlock>
                  )
                }

                return inline ? (
                  <InlineCode {...props}>{children}</InlineCode>
                ) : (
                  <CodeBlock>
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language="text"
                      PreTag="div"
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  </CodeBlock>
                )
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </MarkdownContent>
      </MainContent>
      <TableOfContents />
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 250px;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

const MainContent = styled.article`
  max-width: 800px;
`

const ContentContainer = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`

const ContentHeader = styled.header`
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`

const DateText = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
`

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.background};
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.secondary};
`

const MarkdownContent = styled.div`
  line-height: 1.6;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1.5em 0 0.5em;
    font-weight: 600;
  }

  p {
    margin: 1em 0;
  }

  ul,
  ol {
    margin: 1em 0;
    padding-left: 2em;
  }

  blockquote {
    margin: 1em 0;
    padding-left: 1em;
    border-left: 4px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.secondary};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1em 0;
  }

  th,
  td {
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 0.5em;
  }

  th {
    background: ${({ theme }) => theme.colors.background};
  }
`

const CodeBlock = styled.div`
  margin: 1em 0;
  border-radius: 8px;
  overflow: hidden;

  pre {
    margin: 0 !important;
    padding: 1em !important;

    & > div {
      background: none !important;
    }
  }
`

const InlineCode = styled.code`
  background: ${({ theme }) => theme.colors.background};
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-family: "Consolas", monospace;
  font-size: 0.9em;
`
