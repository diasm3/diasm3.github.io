// src/app/wiki/components/WikiList.tsx
"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import styled from "styled-components"
import { WikiCardSkeleton } from "@/components/Skeleton/Skeleton"
import { useInView } from "react-intersection-observer"
import { WikiCard } from "@/components/WikiCard"

interface WikiFile {
  slug: string
  title: string
  description?: string
  tags?: string[]
  date?: string
  aiSummary?: string
  lastProcessed: string
}

interface WikiListProps {
  wikiFiles: WikiFile[]
}

export function WikiList({ wikiFiles }: WikiListProps) {
  const sortedWikiFiles = useRef(
    [...wikiFiles].sort((a, b) => {
      if (!a.date) return 1
      if (!b.date) return -1
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
  )

  const [displayedItems, setDisplayedItems] = useState<WikiFile[]>([])
  const [page, setPage] = useState(1)
  const [ref, inView] = useInView()
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true) // 추가 데이터 존재 여부

  const ITEMS_PER_PAGE = 10

  const loadMoreItems = useCallback(() => {
    if (!hasMore || isLoading) return // 더 이상 로드할 항목이 없거나 로딩 중이면 중단

    setIsLoading(true)
    const start = (page - 1) * ITEMS_PER_PAGE
    const end = page * ITEMS_PER_PAGE
    const newItems = sortedWikiFiles.current.slice(start, end)

    setTimeout(() => {
      setDisplayedItems((prev) => [...prev, ...newItems])
      setPage((prev) => prev + 1)
      setIsLoading(false)

      // 더 로드할 항목이 있는지 확인
      if (end >= sortedWikiFiles.current.length) {
        setHasMore(false)
      }
    }, 500)
  }, [page, hasMore, isLoading])

  useEffect(() => {
    loadMoreItems()
  }, [])

  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      loadMoreItems()
    }
  }, [inView, hasMore, isLoading, loadMoreItems])

  return (
    <WikiContainer>
      <WikiHeader>
        <h1>Wiki</h1>
        <p>Total {sortedWikiFiles.current.length} articles</p>
      </WikiHeader>

      <Grid>
        {displayedItems.map((file, index) => (
          <CardWrapper
            key={`${file.slug}-${index}`}
            href={`/wiki/${file.slug}`}
          >
            <WikiCard {...file} />
          </CardWrapper>
        ))}
      </Grid>

      {/* 로딩 상태와 더 보여줄 항목이 있는 경우에만 스피너 표시 */}
      {isLoading && hasMore && (
        <LoadingSection>
          <WikiCardSkeleton />
          <WikiCardSkeleton />
          <WikiCardSkeleton />
        </LoadingSection>
      )}

      {/* 모든 항목을 로드했을 때 메시지 표시 (선택사항) */}
      {!hasMore && displayedItems.length > 0 && (
        <EndMessage>모든 문서를 불러왔습니다.</EndMessage>
      )}

      {/* 더 보여줄 항목이 있는 경우에만 observer 타겟 표시 */}
      {hasMore && <ObserverTarget ref={ref} />}
    </WikiContainer>
  )
}

// 추가 스타일 컴포넌트
const EndMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-style: italic;
`

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

const ObserverTarget = styled.div`
  height: 10px;
  margin: 2rem 0;
`

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

// const WikiCard = styled.article`
//   background: white;
//   border-radius: 8px;
//   padding: 1.5rem;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   transition: transform 0.2s ease, box-shadow 0.2s ease;

//   &:hover {
//     transform: translateY(-4px);
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   }

//   h2 {
//     font-size: 1.25rem;
//     margin-bottom: 0.5rem;
//     color: ${({ theme }) => theme.colors.primary};
//   }

//   p {
//     font-size: 0.9rem;
//     color: ${({ theme }) => theme.colors.text};
//   }
// `

const DateText = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.5rem;
`

const Description = styled.p`
  margin: 0.5rem 0;
  line-height: 1.5;
`

const LoadingSection = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`

const CardWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-4px);
    transition: transform 0.2s ease;
  }
`
