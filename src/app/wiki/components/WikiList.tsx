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
  const [hasMore, setHasMore] = useState(true)

  const ITEMS_PER_PAGE = 10

  const loadMoreItems = useCallback(() => {
    if (!hasMore || isLoading) return

    setIsLoading(true)
    const start = (page - 1) * ITEMS_PER_PAGE
    const end = page * ITEMS_PER_PAGE
    const newItems = sortedWikiFiles.current.slice(start, end)

    setTimeout(() => {
      setDisplayedItems((prev) => {
        const updatedItems = [...prev, ...newItems]
        sessionStorage.setItem("displayedItems", JSON.stringify(updatedItems))
        return updatedItems
      })
      setPage((prev) => {
        const newPage = prev + 1
        sessionStorage.setItem("wikiPage", newPage.toString())
        return newPage
      })
      setIsLoading(false)

      if (end >= sortedWikiFiles.current.length) {
        setHasMore(false)
      }
    }, 500)
  }, [page, hasMore, isLoading])

  useEffect(() => {
    const savedPage = parseInt(sessionStorage.getItem("wikiPage") || "1", 10)
    const savedItems = JSON.parse(
      sessionStorage.getItem("displayedItems") || "[]"
    )
    const savedScroll = parseInt(
      sessionStorage.getItem("scrollPosition") || "0",
      10
    )

    if (savedItems.length > 0) {
      setDisplayedItems(savedItems)
      setPage(savedPage)
      window.scrollTo(0, savedScroll)
    } else {
      loadMoreItems()
    }

    // 페이지 위치를 저장하는 이벤트 추가
    const saveScrollPosition = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString())
    }

    window.addEventListener("scroll", saveScrollPosition)
    return () => window.removeEventListener("scroll", saveScrollPosition)
  }, [loadMoreItems])

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

      {isLoading && hasMore && (
        <LoadingSection>
          <WikiCardSkeleton />
          <WikiCardSkeleton />
          <WikiCardSkeleton />
        </LoadingSection>
      )}

      {!hasMore && displayedItems.length > 0 && (
        <EndMessage>모든 문서를 불러왔습니다.</EndMessage>
      )}

      {hasMore && <ObserverTarget ref={ref} />}
    </WikiContainer>
  )
}

// 스타일 컴포넌트
const EndMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-style: italic;
`

const WikiContainer = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  ${({ theme }) => theme.media.tablet} {
    padding: 2rem;
  }
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
