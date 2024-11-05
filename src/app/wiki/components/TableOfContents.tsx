"use client"
import { useEffect, useState } from "react"
import styled from "styled-components"

interface TocItem {
  id: string
  title: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    // footer와 comments를 제외하고 헤딩 요소만 선택
    const elements = Array.from(
      document.querySelectorAll(
        "h1, h2, h3, h4, h5, h6:not(footer):not(.comments)"
      )
    )
    const items = elements.map((element) => {
      const id =
        element.id ||
        element.textContent?.toLowerCase().replace(/\W+/g, "-") ||
        ""
      element.id = id

      return {
        id,
        title: element.textContent || "",
        level: parseInt(element.tagName.substring(1)) || 1,
      }
    })

    setHeadings(items)

    const handleScroll = () => {
      const headingElements = document.querySelectorAll(
        "h1, h2, h3, h4, h5, h6"
      )

      for (const element of headingElements) {
        const rect = element.getBoundingClientRect()
        if (rect.top >= 0 && rect.top <= 150) {
          setActiveId(element.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <TocContainer>
      <TocTitle>목차</TocTitle>
      <TocList>
        {headings.map((heading, index) => (
          <TocItem
            key={`toc-${heading.id}-${index}`}
            level={heading.level}
            $isActive={activeId === heading.id}
          >
            <TocLink
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              {heading.title}
            </TocLink>
          </TocItem>
        ))}
      </TocList>
    </TocContainer>
  )
}

const TocContainer = styled.nav`
  position: sticky;
  top: 2rem;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
  padding: 1rem;
  margin-left: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 250px;
`

const TocTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const TocList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const TocItem = styled.li<{ level: number; $isActive: boolean }>`
  margin: 0.5rem 0;
  padding-left: ${(props) => props.level - 1 + "rem"};
  border-left: 2px solid
    ${(props) => (props.$isActive ? props.theme.colors.primary : "transparent")};
`

const TocLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 0.9rem;
  display: block;
  padding: 0.2rem 0;
  transition: color 0.2s;
  outline: none; /* 블루 아웃라인 제거 */

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
