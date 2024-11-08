export interface WikiFile {
  slug: string
  uniqueId: string
  title: string
  description: string
  tags: string[]
  date: string
  content: string
  aiSummary: string
  status: "completed" | "draft" // union type으로 명확하게 지정
  progress: number
  statusAnalysis: string
  lastProcessed: string
  created: string
  modified: string
  wordCount: number
  readingTime: number
}
