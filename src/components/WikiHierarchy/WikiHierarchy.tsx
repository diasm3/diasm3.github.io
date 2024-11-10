// / src/app/wiki/components/WikiHierarchy.tsx
"use client"
import styled from "styled-components"
import { WikiFile } from "../../app/wiki/components/types"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const CategorySection = styled.section`
  margin-bottom: 3rem;
`

const CategoryTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
`

const SubcategorySection = styled.div`
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
`

const SubcategoryTitle = styled.h3`
  font-size: 1.4rem;
  color: #4a5568;
  margin: 1rem 0;
  font-weight: 500;
`

const PageList = styled.ul`
  list-style: none;
  padding-left: 1.5rem;
`

const PageItem = styled.li`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
`

const PageLink = styled.a`
  color: #4a5568;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s;

  &:hover {
    color: #2b6cb0;
    text-decoration: underline;
  }
`

const PageDescription = styled.span`
  font-size: 0.9rem;
  color: #718096;
  margin-left: 0.5rem;
`

const StatusBadge = styled.span<{ status: "completed" | "draft" }>`
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  background-color: ${(props) =>
    props.status === "completed" ? "#48BB78" : "#F6E05E"};
  color: ${(props) => (props.status === "completed" ? "white" : "#744210")};
`

interface WikiHierarchyProps {
  wikiMetadata: {
    lastUpdated: string
    files: { [key: string]: WikiFile }
    hierarchy: {
      categories: {
        [key: string]: {
          title: string
          pages: string[]
          subcategories: {
            [key: string]: {
              title: string
              pages: string[]
            }
          }
        }
      }
    }
  }
}

export function WikiHierarchy({ wikiMetadata }: WikiHierarchyProps) {
  const { files, hierarchy } = wikiMetadata

  return (
    <Container>
      {Object.entries(hierarchy.categories).map(([categoryKey, category]) => (
        <CategorySection key={categoryKey}>
          <CategoryTitle>{category.title}</CategoryTitle>

          {/* 메인 카테고리 페이지들 */}
          {category.pages.length > 0 && (
            <PageList>
              {category.pages.map((pageSlug) => {
                const file = files[pageSlug]
                return (
                  <PageItem key={file.uniqueId}>
                    <PageLink href={`/wiki/${file.slug}`}>
                      {file.title}
                      <StatusBadge status={file.status}>
                        {file.status}
                      </StatusBadge>
                      {file.description && (
                        <PageDescription>{file.description}</PageDescription>
                      )}
                    </PageLink>
                  </PageItem>
                )
              })}
            </PageList>
          )}

          {/* 서브카테고리 */}
          {Object.entries(category.subcategories).map(
            ([subKey, subcategory]) => (
              <SubcategorySection key={subKey}>
                <SubcategoryTitle>{subcategory.title}</SubcategoryTitle>
                <PageList>
                  {subcategory.pages.map((pageSlug) => {
                    const file = files[pageSlug]
                    return (
                      <PageItem key={file.uniqueId}>
                        <PageLink href={`/wiki/${file.slug}`}>
                          {file.title}
                          <StatusBadge status={file.status}>
                            {file.status}
                          </StatusBadge>
                          {file.description && (
                            <PageDescription>
                              {file.description}
                            </PageDescription>
                          )}
                        </PageLink>
                      </PageItem>
                    )
                  })}
                </PageList>
              </SubcategorySection>
            )
          )}
        </CategorySection>
      ))}
    </Container>
  )
}
