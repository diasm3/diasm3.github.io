// src/components/Skeleton/index.tsx
"use client"
import styled, { keyframes } from "styled-components"

const pulse = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`

const SkeletonCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`

const SkeletonItem = styled.div<{ width: string }>`
  background: #f0f0f0;
  height: 20px;
  margin-bottom: 1rem;
  border-radius: 4px;
  width: ${(props) => props.width};
  animation: ${pulse} 1.5s infinite;
`

const SkeletonTags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`

const SkeletonTag = styled.div`
  background: #f0f0f0;
  height: 24px;
  width: 60px;
  border-radius: 12px;
  animation: ${pulse} 1.5s infinite;
`

export function WikiCardSkeleton() {
  return (
    <SkeletonCard>
      <SkeletonItem width="80%" /> {/* 제목 */}
      <SkeletonItem width="100%" /> {/* 설명 */}
      <SkeletonItem width="90%" />
      <SkeletonTags>
        <SkeletonTag />
        <SkeletonTag />
        <SkeletonTag />
      </SkeletonTags>
    </SkeletonCard>
  )
}

export function WikiListSkeleton() {
  return (
    <div>
      {[1, 2, 3].map((i) => (
        <WikiCardSkeleton key={i} />
      ))}
    </div>
  )
}
