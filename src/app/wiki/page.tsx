// src/app/wiki/page.tsx
import type { WikiFile } from "./components/types"
import wikiMetadata from "@/data/wiki-metadata.json"
import { WikiList } from "./components/WikiList"

export default function WikiPage() {
  // Type assertion으로 타입 안전성 확보
  const wikiFiles = (wikiMetadata as unknown as Array<Partial<WikiFile>>)
    .map(
      (file) =>
        ({
          ...file,
          status:
            file.status === "completed" || file.status === "draft"
              ? file.status
              : "draft",
          description: file.description ?? "",
          tags: file.tags ?? [],
          date: file.date ?? file.created ?? new Date().toISOString(),
          aiSummary: file.aiSummary ?? "",
          progress: file.progress ?? 0,
          statusAnalysis: file.statusAnalysis ?? "",
        } as WikiFile)
    )
    .sort((a, b) => a.title.localeCompare(b.title))

  return <WikiList wikiFiles={wikiFiles} />
}
