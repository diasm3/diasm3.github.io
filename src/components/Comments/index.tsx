// src/components/Comments/index.tsx
"use client"
import { useEffect, useRef } from "react"
import styled from "styled-components"

interface CommentsProps {
  slug: string
}

export function Comments({ slug }: CommentsProps) {
  const utterancesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const utterancesContainer = utterancesRef.current

    if (!utterancesContainer) return

    const utterancesScript = document.createElement("script")

    const utterancesConfig = {
      src: "https://utteranc.es/client.js",
      repo: "diasm3/diasm3.github.io",
      "issue-term": "pathname",
      label: "comment",
      theme: "github-light",
      crossorigin: "anonymous",
    }

    Object.entries(utterancesConfig).forEach(([key, value]) => {
      utterancesScript.setAttribute(key, value)
    })

    utterancesScript.async = true

    // 기존 utterances가 있다면 제거
    const existingUtterances = utterancesContainer.querySelector(".utterances")
    if (existingUtterances) {
      existingUtterances.remove()
    }

    // 새로운 utterances 추가
    utterancesContainer.appendChild(utterancesScript)

    return () => {
      // 컴포넌트 언마운트시 스크립트 제거
      if (utterancesContainer.contains(utterancesScript)) {
        utterancesContainer.removeChild(utterancesScript)
      }
    }
  }, [slug])

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <div ref={utterancesRef} />
    </CommentsContainer>
  )
}

const CommentsContainer = styled.div`
  margin: 2rem auto;
  max-width: 800px;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const CommentsTitle = styled.h2`
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`
