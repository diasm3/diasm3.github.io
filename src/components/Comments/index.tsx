"use client"
import { useEffect, useRef } from "react"
import styled from "styled-components"
import { useTheme } from "styled-components"

interface CommentsProps {
  slug: string
}

export function Comments({ slug }: CommentsProps) {
  const giscusRef = useRef<HTMLDivElement>(null)
  const theme = useTheme()

  useEffect(() => {
    const giscusContainer = giscusRef.current
    if (!giscusContainer) return

    // 기존 giscus가 있다면 제거
    const existingGiscus = giscusContainer.querySelector(".giscus-frame")
    if (existingGiscus) {
      existingGiscus.remove()
    }

    const giscusScript = document.createElement("script")
    const giscusConfig = {
      src: "https://giscus.app/client.js",
      "data-repo": "diasm3/diasm3.github.io",
      "data-repo-id": "R_kgDOHCKY4g", // GitHub에서 가져온 repo ID
      "data-category": "Announcements", // 또는 원하는 카테고리 이름
      "data-category-id": "DIC_kwDOHCKY4s4CkFTI", // GitHub에서 가져온 category ID
      "data-mapping": "pathname",
      "data-strict": "0",
      "data-reactions-enabled": "1",
      "data-emit-metadata": "0",
      "data-input-position": "bottom",
      "data-theme": theme?.colors?.mode === "dark" ? "dark" : "light", // 테마에 따라 자동 변경
      "data-lang": "ko",
      crossorigin: "anonymous",
    }

    Object.entries(giscusConfig).forEach(([key, value]) => {
      giscusScript.setAttribute(key, value)
    })

    giscusScript.async = true
    giscusContainer.appendChild(giscusScript)

    // Giscus 테마 변경을 위한 메시지 전달 함수
    const updateGiscusTheme = (theme: string) => {
      const iframe = document.querySelector<HTMLIFrameElement>(".giscus-frame")
      if (!iframe) return
      iframe.contentWindow?.postMessage(
        { giscus: { setConfig: { theme } } },
        "https://giscus.app"
      )
    }

    // 테마 변경 감지 및 적용
    const observer = new MutationObserver(() => {
      updateGiscusTheme(theme?.colors?.mode === "dark" ? "dark" : "light")
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    })

    return () => {
      // Clean up
      observer.disconnect()
      if (giscusContainer.contains(giscusScript)) {
        giscusContainer.removeChild(giscusScript)
      }
    }
  }, [slug, theme])

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <div ref={giscusRef} />
    </CommentsContainer>
  )
}

const CommentsContainer = styled.div`
  margin: 2rem auto;
  max-width: 800px;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const CommentsTitle = styled.h2`
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
`
