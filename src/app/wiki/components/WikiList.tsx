"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import styled from "styled-components"
import { WikiCardSkeleton } from "@/components/Skeleton/Skeleton"
import { useInView } from "react-intersection-observer"
import { WikiCard } from "@/components/WikiCard"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/Ui/Tabs/tab"

// "use client"

// import { useCallback, useEffect, useRef, useState } from "react"
// import Link from "next/link"
// import styled from "styled-components"
// import { WikiCardSkeleton } from "@/components/Skeleton/Skeleton"
// import { useInView } from "react-intersection-observer"
// import { WikiCard } from "@/components/WikiCard"
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

interface WikiFile {
  slug: string
  title: string
  description?: string
  tags?: string[]
  date?: string
  aiSummary?: string
  status: "completed" | "draft"
  lastProcessed: string
}

interface WikiListProps {
  wikiFiles: WikiFile[]
}

interface TabData {
  items: WikiFile[]
  page: number
  hasMore: boolean
}

export function WikiList({ wikiFiles }: WikiListProps) {
  const [activeTab, setActiveTab] = useState<"all" | "completed" | "draft">(
    "all"
  )
  const [ref, inView] = useInView()
  const [isLoading, setIsLoading] = useState(false)

  // 탭별 데이터 상태 관리
  const [tabsData, setTabsData] = useState<Record<string, TabData>>({
    all: { items: [], page: 1, hasMore: true },
    completed: { items: [], page: 1, hasMore: true },
    draft: { items: [], page: 1, hasMore: true },
  })

  // 정렬된 파일 목록을 탭별로 캐싱
  const sortedWikiFiles = useRef({
    all: [...wikiFiles].sort(
      (a, b) =>
        new Date(b.date || "").getTime() - new Date(a.date || "").getTime()
    ),
    completed: [...wikiFiles]
      .filter((file) => file.status === "completed")
      .sort(
        (a, b) =>
          new Date(b.date || "").getTime() - new Date(a.date || "").getTime()
      ),
    draft: [...wikiFiles]
      .filter((file) => file.status === "draft")
      .sort(
        (a, b) =>
          new Date(b.date || "").getTime() - new Date(a.date || "").getTime()
      ),
  })

  const ITEMS_PER_PAGE = 10

  const loadMoreItems = useCallback(() => {
    if (!tabsData[activeTab].hasMore || isLoading) return

    setIsLoading(true)
    const currentTab = activeTab
    const currentData = tabsData[currentTab]
    const start = (currentData.page - 1) * ITEMS_PER_PAGE
    const end = currentData.page * ITEMS_PER_PAGE
    const newItems = sortedWikiFiles.current[currentTab].slice(start, end)

    setTimeout(() => {
      setTabsData((prev) => ({
        ...prev,
        [currentTab]: {
          items: [...prev[currentTab].items, ...newItems],
          page: prev[currentTab].page + 1,
          hasMore: end < sortedWikiFiles.current[currentTab].length,
        },
      }))
      setIsLoading(false)
    }, 500)
  }, [activeTab, tabsData, isLoading])

  // 탭 변경 시 세션 스토리지에서 데이터 복원
  useEffect(() => {
    const savedTabData = JSON.parse(
      sessionStorage.getItem(`wikiList_${activeTab}`) || "null"
    )
    const savedScroll = parseInt(
      sessionStorage.getItem(`wikiScroll_${activeTab}`) || "0"
    )

    if (savedTabData) {
      setTabsData((prev) => ({
        ...prev,
        [activeTab]: savedTabData,
      }))
      window.scrollTo(0, savedScroll)
    } else if (tabsData[activeTab].items.length === 0) {
      loadMoreItems()
    }
  }, [activeTab])

  // 탭 데이터 저장
  useEffect(() => {
    sessionStorage.setItem(
      `wikiList_${activeTab}`,
      JSON.stringify(tabsData[activeTab])
    )
  }, [tabsData, activeTab])

  // 스크롤 위치 저장
  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem(
        `wikiScroll_${activeTab}`,
        window.scrollY.toString()
      )
    }

    window.addEventListener("scroll", saveScrollPosition)
    return () => window.removeEventListener("scroll", saveScrollPosition)
  }, [activeTab])

  // 무한 스크롤
  useEffect(() => {
    if (inView && !isLoading && tabsData[activeTab].hasMore) {
      loadMoreItems()
    }
  }, [inView, isLoading, activeTab, tabsData, loadMoreItems])

  const handleTabChange = (value: string) => {
    setActiveTab(value as "all" | "completed" | "draft")
  }

  return (
    <WikiContainer>
      <WikiHeader>
        <h1>Wiki</h1>
        <p>Total {wikiFiles.length} articles</p>
      </WikiHeader>

      <Tabs defaultValue="all" onValueChange={handleTabChange}>
        <TabsList>
          <TabsTrigger value="all">
            전체 ({sortedWikiFiles.current.all.length})
          </TabsTrigger>
          <TabsTrigger value="completed">
            완성 ({sortedWikiFiles.current.completed.length})
          </TabsTrigger>
          <TabsTrigger value="draft">
            작성중 ({sortedWikiFiles.current.draft.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Grid>
            {tabsData.all.items.map((file, index) => (
              <CardWrapper
                key={`${file.slug}-${index}`}
                href={`/wiki/${file.slug}`}
              >
                <WikiCard {...file} />
              </CardWrapper>
            ))}
          </Grid>
        </TabsContent>

        <TabsContent value="completed">
          <Grid>
            {tabsData.completed.items.map((file, index) => (
              <CardWrapper
                key={`${file.slug}-${index}`}
                href={`/wiki/${file.slug}`}
              >
                <WikiCard {...file} />
              </CardWrapper>
            ))}
          </Grid>
        </TabsContent>

        <TabsContent value="draft">
          <Grid>
            {tabsData.draft.items.map((file, index) => (
              <CardWrapper
                key={`${file.slug}-${index}`}
                href={`/wiki/${file.slug}`}
              >
                <WikiCard {...file} />
              </CardWrapper>
            ))}
          </Grid>
        </TabsContent>
      </Tabs>

      {isLoading && tabsData[activeTab].hasMore && (
        <LoadingSection>
          <WikiCardSkeleton />
          <WikiCardSkeleton />
          <WikiCardSkeleton />
        </LoadingSection>
      )}

      {!tabsData[activeTab].hasMore && tabsData[activeTab].items.length > 0 && (
        <EndMessage>모든 문서를 불러왔습니다.</EndMessage>
      )}

      {tabsData[activeTab].hasMore && <ObserverTarget ref={ref} />}
    </WikiContainer>
  )
}

// 기존 스타일드 컴포넌트는 유지

const TabsListStyled = styled(TabsList)`
  margin-bottom: 2rem;
`

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
