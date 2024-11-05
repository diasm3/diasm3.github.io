// src/app/wiki/components/WikiList.tsx
"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { WikiCardSkeleton } from "@/components/Skeleton/Skeleton"

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

  const totalItems = useRef(wikiFiles)

  const ITEMS_PER_PAGE = 10

  const formatDate = (dateString?: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }
  // 추가 데이터 로드 함수
  const loadMoreItems = () => {
    const start = (page - 1) * ITEMS_PER_PAGE
    const end = page * ITEMS_PER_PAGE
    const newItems = totalItems.current.slice(start, end)

    setDisplayedItems((prev) => [...prev, ...newItems])
    setPage((prev) => prev + 1)
    setIsLoading(false)
  }
  // Intersection Observer 콜백
  useEffect(() => {
    if (inView && !isLoading) {
      setIsLoading(true)
      setTimeout(loadMoreItems, 500) // 로딩 시뮬레이션
    }
  }, [inView])

  // 초기 데이터 로드
  useEffect(() => {
    setDisplayedItems(totalItems.current.slice(0, ITEMS_PER_PAGE))
  }, [])

  return (
    <WikiContainer>
      <WikiHeader>
        <h1>Wiki</h1>
        <p>Total {sortedWikiFiles.current.length} articles</p>
      </WikiHeader>

      <WikiGrid>
        {displayedItems.map((file) => (
          <Link
            href={`/wiki/${file.slug}`}
            key={file.slug}
            style={{ textDecoration: "none" }}
          >
            <WikiCard>
              <h2>{file.title}</h2>
              {file.date && <DateText>{formatDate(file.date)}</DateText>}
              {file.description && (
                <Description>{file.description}</Description>
              )}
              {file.aiSummary && (
                <AISummary>
                  <strong>AI 요약:</strong> {file.aiSummary}
                </AISummary>
              )}
              {file.tags && file.tags.length > 0 && (
                <TagList>
                  {file.tags.map((tag) => (
                    <Tag key={`${file.slug}-${tag}`}>#{tag}</Tag>
                  ))}
                </TagList>
              )}
            </WikiCard>
          </Link>
        ))}
      </WikiGrid>

      {/* 로딩 상태와 더 보여줄 항목이 있는 경우에만 스피너 표시 */}
      {isLoading && (
        <LoadingSection>
          <WikiCardSkeleton />
          <WikiCardSkeleton />
          <WikiCardSkeleton />
        </LoadingSection>
      )}

      {/* 모든 항목을 로드했을 때 메시지 표시 (선택사항) */}
      {displayedItems.length > 0 && (
        <EndMessage>모든 문서를 불러왔습니다.</EndMessage>
      )}

      {/* 더 보여줄 항목이 있는 경우에만 observer 타겟 표시 */}
      {<ObserverTarget ref={ref} />}
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

const ObserverTarget = styled.div`
  height: 10px;
  margin: 2rem 0;
`
const LoadingSection = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`

const EndMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-style: italic;
`

const DateText = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.5rem;
`

const Description = styled.p`
  margin: 0.5rem 0;
  line-height: 1.5;
`
