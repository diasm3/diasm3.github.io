// src/app/wiki/page.tsx
import wikiMetadata from "@/data/wiki-metadata.json"
import { WikiList } from "./components/WikiList"

export default function WikiPage() {
  // JSON 파일에서 위키 데이터를 직접 사용
  const wikiFiles = wikiMetadata.sort((a, b) => a.title.localeCompare(b.title))

  return <WikiList wikiFiles={wikiFiles} />
}
