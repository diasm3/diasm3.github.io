"use client"
import { useEffect, useState, useCallback } from "react"
import styled from "styled-components"

interface TocItem {
  id: string
  title: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState("")

  const createIntersectionObserver = useCallback(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      // 현재 뷰포트에 있는 모든 요소 찾기
      const visibleEntries = entries.filter((entry) => entry.isIntersecting)

      if (visibleEntries.length > 0) {
        // 가장 위에 있는 요소 선택
        const topEntry = visibleEntries.reduce((prev, current) => {
          const prevBounding = document
            .getElementById(prev.target.id)
            ?.getBoundingClientRect()
          const currentBounding = document
            .getElementById(current.target.id)
            ?.getBoundingClientRect()

          if (!prevBounding || !currentBounding) return prev
          return prevBounding.top > currentBounding.top ? current : prev
        })

        setActiveId(topEntry.target.id)
      }
    }

    return new IntersectionObserver(callback, {
      rootMargin: "-10% 0% -80% 0%", // 상단 여백 줄이고 하단 여백 늘림
      threshold: [0, 1],
    })
  }, [])

  useEffect(() => {
    // article 내부의 헤딩만 선택하고, comments 제외
    const elements = Array.from(
      document.querySelectorAll(
        "article h1, article h2, article h3, article h4, article h5, article h6"
      )
    ).filter((element) => {
      // comments 섹션에 속하는 요소 제외
      const isInComments =
        element.closest(".Comments__CommentsContainer-sc-ce97a036-0") || // styled-components 클래스
        element.closest("#comments") || // ID로 체크
        element.closest(".giscus") || // giscus 컨테이너
        element.closest('[class*="Comments"]') // Comments를 포함하는 모든 클래스

      return !isInComments
    })

    // 헤딩 정보 생성 및 ID 할당
    const items = elements
      .map((element) => {
        const text = element.textContent || ""
        // ID 생성 시 comments 관련 문자열 제외
        const id =
          element.id ||
          text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "") // 시작과 끝의 하이픈 제거

        // 이미 comments라는 ID가 있다면 다른 ID 생성
        if (id === "comments") {
          element.id = `heading-${id}-${Math.random()
            .toString(36)
            .substr(2, 9)}`
        } else {
          element.id = id
        }

        return {
          id: element.id,
          title: text,
          level: parseInt(element.tagName.substring(1)),
        }
      })
      .filter((item) => item.title.toLowerCase() !== "comments") // comments 제목 제외

    setHeadings(items)

    // Intersection Observer 설정
    const observer = createIntersectionObserver()
    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [createIntersectionObserver])

  const handleClick = useCallback((e: React.MouseEvent, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      history.pushState(null, "", `#${id}`)
      setActiveId(id)
    }
  }, [])

  // URL 해시 변경 감지
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash && hash !== "comments") {
        // comments 해시 무시
        setActiveId(hash)
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    handleHashChange()

    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  // comments 섹션이 아닌 항목만 표시
  // const filteredHeadings = headings.filter(
  //   (heading) => heading.title.toLowerCase() !== "comments"
  // )

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
              onClick={(e) => handleClick(e, heading.id)}
              $isActive={activeId === heading.id}
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

  /* 스크롤바 스타일링 */
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => `${theme.colors.border} transparent`};

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.border};
    border-radius: 4px;
  }

  /* 모바일에서 숨기기 */
  @media (max-width: 768px) {
    display: none;
  }
`

const TocTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
`

const TocList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
`

const TocItem = styled.li<{ level: number; $isActive: boolean }>`
  margin: 0.3rem 0;
  padding-left: ${(props) => (props.level - 1) * 0.8}rem;
  border-left: 2px solid
    ${(props) => (props.$isActive ? props.theme.colors.border : "transparent")};
  transition: all 0.2s ease-in-out;
`

const TocLink = styled.a<{ $isActive: boolean }>`
  color: ${(props) =>
    props.$isActive
      ? props.theme.colors.text
      : props.theme.colors.textSecondary || props.theme.colors.text};
  text-decoration: none;
  display: block;
  padding: 0.2rem 0;
  transition: color 0.2s ease-in-out;
  font-weight: ${(props) => (props.$isActive ? "500" : "400")};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`
