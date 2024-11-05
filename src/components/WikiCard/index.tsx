// src/components/WikiCard/index.tsx
"use client"
import styled from "styled-components"
import { type MouseEvent } from "react"
import { Heart, MessageSquare } from "lucide-react"

interface WikiCardProps {
  slug: string
  title: string
  description?: string
  date?: string
  tags?: string[]
  aiSummary?: string
}

export function WikiCard(props: WikiCardProps) {
  const { title, description, date, tags, aiSummary } = props

  const handleLike = (e: MouseEvent) => {
    e.preventDefault()
    // 좋아요 로직
  }

  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        {date && (
          <DateText>{new Date(date).toLocaleDateString("ko-KR")}</DateText>
        )}
        {description && <Description>{description}</Description>}
        {aiSummary && (
          <AISummary>
            <strong>AI 요약:</strong> {aiSummary}
          </AISummary>
        )}
        {tags && tags.length > 0 && (
          <TagList>
            {tags.map((tag) => (
              <Tag key={tag}>#{tag}</Tag>
            ))}
          </TagList>
        )}
        <Footer>
          <Interaction onClick={handleLike}>
            <Heart size={18} />
            <span>0</span>
          </Interaction>
          <Interaction>
            <MessageSquare size={18} />
            <span>댓글</span>
          </Interaction>
        </Footer>
      </Content>
    </Container>
  )
}

const Container = styled.article`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`

const Content = styled.div`
  padding: 1.5rem;
`

const Title = styled.h2`
  margin: 0 0 1rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
`

const DateText = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
`

const Description = styled.p`
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.colors.text};
`

const AISummary = styled.div`
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondary};
`

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.background};
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.secondary};
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const InteractionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`

const CommentIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`

const Interaction = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`
