// src/components/MDRenderer/index.tsx
"use client"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"

const MarkdownWrapper = styled.div`
  padding: 2rem;
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
    background: #f4f4f4;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
  }
`

interface MDRendererProps {
  content: string
}

export default function MDRenderer({ content }: MDRendererProps) {
  return (
    <MarkdownWrapper>
      <ReactMarkdown>{content}</ReactMarkdown>
    </MarkdownWrapper>
  )
}
