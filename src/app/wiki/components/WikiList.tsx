// src/app/wiki/components/WikiList.tsx
"use client"
import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"

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
  }
`

interface WikiFile {
  slug: string
  title: string
  description?: string
  tags?: string[]
  date?: string
  aiSummary?: string
}

interface WikiListProps {
  wikiFiles: WikiFile[]
}

// export function WikiList({ wikiFiles }: WikiListProps) {
//   const [displayedItems, setDisplayedItems] = useState<WikiFile[]>([])
//   const [page, setPage] = useState(1)
//   const [ref, inView] = useInView()
//   const [isLoading, setIsLoading] = useState(false)
//   const totalItems = useRef(wikiFiles)

//   // 추가 데이터 로드 함수
//   const loadMoreItems = () => {
//     const start = (page - 1) * ITEMS_PER_PAGE
//     const end = page * ITEMS_PER_PAGE
//     const newItems = totalItems.current.slice(start, end)

//     setDisplayedItems((prev) => [...prev, ...newItems])
//     setPage((prev) => prev + 1)
//     setIsLoading(false)
//   }

//   // Intersection Observer 콜백
//   useEffect(() => {
//     if (inView && !isLoading) {
//       setIsLoading(true)
//       setTimeout(loadMoreItems, 500) // 로딩 시뮬레이션
//     }
//   }, [inView])

//   // 초기 데이터 로드
//   useEffect(() => {
//     setDisplayedItems(totalItems.current.slice(0, ITEMS_PER_PAGE))
//   }, [])
export function WikiList({ wikiFiles }: WikiListProps) {
  const [displayedItems, setDisplayedItems] = useState<WikiFile[]>([])
  const [page, setPage] = useState(1)
  const [ref, inView] = useInView()
  const [isLoading, setIsLoading] = useState(false)
  const totalItems = useRef(wikiFiles)

  const loadMoreItems = useCallback(() => {
    setIsLoading(true)
    const start = (page - 1) * 10
    const end = page * 10
    const newItems = totalItems.current.slice(start, end)

    setTimeout(() => {
      setDisplayedItems((prev) => [...prev, ...newItems])
      setPage((prev) => prev + 1)
      setIsLoading(false)
    }, 500)
  }, [page])

  useEffect(() => {
    if (inView && !isLoading) {
      loadMoreItems()
    }
  }, [inView, isLoading, loadMoreItems])

  return (
    <WikiContainer>
      <WikiHeader>
        <h1>Wiki</h1>
        <p>Total {totalItems.current.length} articles</p>
      </WikiHeader>

      <WikiGrid>
        {displayedItems.map((file, index) => (
          <Link
            href={`/wiki/${file.slug}`}
            key={`${file.slug}-${index}`} // slug와 index를 조합하여 고유한 key 생성
            style={{ textDecoration: "none" }}
          >
            <WikiCard>
              <h2>{file.title}</h2>
              {file.description && <p>{file.description}</p>}
              {file.aiSummary && (
                <AISummary>
                  <strong>AI 요약:</strong> {file.aiSummary}
                </AISummary>
              )}
              {file.tags && file.tags.length > 0 && (
                <TagList>
                  {file.tags.map((tag) => (
                    <Tag key={tag}>#{tag}</Tag>
                  ))}
                </TagList>
              )}
            </WikiCard>
          </Link>
        ))}
      </WikiGrid>

      {/* 로딩 인디케이터 */}
      {isLoading && (
        <LoadingContainer>
          <LoadingSpinner />
        </LoadingContainer>
      )}

      {/* Intersection Observer의 타겟 요소 */}
      <ObserverTarget ref={ref} />
    </WikiContainer>
  )
}

// Styled Components
const WikiContainer = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  ${({ theme }) => theme.media.tablet} {
    padding: 2rem;
  }
`

const AISummary = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 0.5rem;
  font-size: 0.9rem;
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

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const ObserverTarget = styled.div`
  height: 10px;
  margin: 2rem 0;
`
