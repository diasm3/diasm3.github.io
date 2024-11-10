"use client"
// src/app/wiki/[slug]/components/WikiContent.tsx
import React, { useState } from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { WikiFrontMatter } from "@/lib/mdParser"
import { TableOfContents } from "./TableOfContents"

interface VersionChange {
  type: string
  description: string
}

interface Version {
  content: string
  version: number
  date: string
  changes: VersionChange[]
  author?: string
}

interface WikiContentProps {
  content: string
  frontMatter: WikiFrontMatter
  versions: Version[]
}

export function WikiContent({
  content,
  frontMatter,
  versions,
}: WikiContentProps) {
  const [selectedVersion, setSelectedVersion] = useState<number>(
    versions.length - 1
  )
  const [showVersionHistory, setShowVersionHistory] = useState(false)

  const currentVersion = versions[selectedVersion]
  const displayContent = currentVersion?.content || content

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  return (
    <ContentWrapper>
      <MainContent>
        <ContentHeader>
          <TitleSection>
            <Title>{frontMatter.title}</Title>
            <VersionControls>
              <VersionInfo>
                최종 업데이트: {formatDate(currentVersion.date)}
              </VersionInfo>
              <VersionButton
                onClick={() => setShowVersionHistory(!showVersionHistory)}
              >
                버전 기록
              </VersionButton>
            </VersionControls>
          </TitleSection>

          {showVersionHistory && (
            <VersionHistoryPanel>
              <HistoryHeader>
                <HistoryTitle>버전 기록</HistoryTitle>
                <CloseButton onClick={() => setShowVersionHistory(false)}>
                  ×
                </CloseButton>
              </HistoryHeader>
              <VersionList>
                {versions.map((version, index) => (
                  <VersionItem
                    key={index}
                    active={selectedVersion === index}
                    onClick={() => setSelectedVersion(index)}
                  >
                    <VersionItemHeader>
                      <VersionNumber>버전 {version.version}</VersionNumber>
                      <VersionDate>{formatDate(version.date)}</VersionDate>
                    </VersionItemHeader>
                    <ChangesList>
                      {version.changes.map((change, changeIndex) => (
                        <ChangeItem key={changeIndex} type={change.type}>
                          <ChangeType>{change.type}</ChangeType>
                          <ChangeDescription>
                            {change.description}
                          </ChangeDescription>
                        </ChangeItem>
                      ))}
                    </ChangesList>
                  </VersionItem>
                ))}
              </VersionList>
            </VersionHistoryPanel>
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
              code({ inline, className, children, ...props }) {
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
            {displayContent}
          </ReactMarkdown>
        </MarkdownContent>
      </MainContent>
      <TableOfContents />
    </ContentWrapper>
  )
}

// const ContentWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 250px;
//   gap: 2rem;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 2rem;

//   @media (max-width: 1024px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const MainContent = styled.article`
//   max-width: 800px;
// `;

// const ContentHeader = styled.header`
//   margin-bottom: 2rem;
//   padding-bottom: 1rem;
//   border-bottom: 1px solid ${({ theme }) => theme.colors.border};
// `;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`

// const Title = styled.h1`
//   font-size: 2.5rem;
//   margin: 0;
// `;

const VersionControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const VersionInfo = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.9rem;
`

const VersionButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.border};
  }
`

const VersionHistoryPanel = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
`

const HistoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

const HistoryTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const VersionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 400px;
  overflow-y: auto;
`

const VersionItem = styled.div<{ active: boolean }>`
  padding: 1rem;
  border: 1px solid
    ${({ theme, active }) =>
      active ? theme.colors.primary : theme.colors.border};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const VersionItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`

const VersionNumber = styled.span`
  font-weight: 500;
`

const VersionDate = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondary};
`

const ChangesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const ChangeItem = styled.div<{ type: string }>`
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  border-left: 3px solid ${({ type }) => getChangeTypeColor(type)};
  font-size: 0.9rem;
`

const ChangeType = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
`

const ChangeDescription = styled.span`
  color: ${({ theme }) => theme.colors.text};
`

// const TagList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.5rem;
//   margin-top: 1rem;
// `;

// const Tag = styled.span`
//   background: ${({ theme }) => theme.colors.background};
//   padding: 0.25rem 0.75rem;
//   border-radius: 15px;
//   font-size: 0.8rem;
//   color: ${({ theme }) => theme.colors.secondary};
// `;

// 기존 MarkdownContent, CodeBlock, InlineCode 스타일 유지

function getChangeTypeColor(type: string): string {
  const colors = {
    metadata: "#FFB84C",
    structure: "#54B435",
    content: "#277BC0",
    code: "#EA047E",
    default: "#666666",
  }
  return colors[type as keyof typeof colors] || colors.default
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
