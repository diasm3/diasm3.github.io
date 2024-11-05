// src/components/WikiCard.tsx
interface WikiCardProps {
  title: string
  description: string
  aiSummary: string
  tags: string[]
}

export function WikiCard({
  title,
  description,
  aiSummary,
  tags,
}: WikiCardProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>
        <strong>AI 요약:</strong> {aiSummary}
      </p>
      <div>
        {tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
    </div>
  )
}
