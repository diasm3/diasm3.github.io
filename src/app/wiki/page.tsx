// // src/app/wiki/page.tsx
// import type { WikiFile } from "./components/types"
// import wikiMetadata from "@/data/wiki-metadata.json"
// import { WikiList } from "./components/WikiList"

// export default function WikiPage() {
//   // Type assertion으로 타입 안전성 확보
//   const wikiFiles = (wikiMetadata as unknown as Array<Partial<WikiFile>>)
//     .map(
//       (file) =>
//         ({
//           ...file,
//           status:
//             file.status === "completed" || file.status === "draft"
//               ? file.status
//               : "draft",
//           description: file.description ?? "",
//           tags: file.tags ?? [],
//           date: file.date ?? file.created ?? new Date().toISOString(),
//           aiSummary: file.aiSummary ?? "",
//           progress: file.progress ?? 0,
//           statusAnalysis: file.statusAnalysis ?? "",
//         } as WikiFile)
//     )
//     .sort((a, b) => a.title.localeCompare(b.title))

//   return <WikiList wikiFiles={wikiFiles} />
// }

// src/app/wiki/page.tsx
"use client"
import { WikiList } from "./components/WikiList"
import wikiMetadata from "@/data/wiki-metadata.json"
import styled from "styled-components"
import { useState } from "react"
import { WikiHierarchy } from "../../components/WikiHierarchy/WikiHierarchy"

const TabContainer = styled.div`
  margin-bottom: 2rem;
`

const TabButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border: none;
  background: ${(props) => (props.active ? "#4A5568" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#4A5568")};
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${(props) => (props.active ? "#4A5568" : "#E2E8F0")};
  }
`

export default function WikiPage() {
  const [viewMode, setViewMode] = useState<"list" | "hierarchy">("hierarchy")
  const wikiFiles = Object.values(wikiMetadata.files)
    .map((file) => ({
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
    }))
    .sort((a, b) => a.title.localeCompare(b.title))

  return (
    <div>
      <TabContainer>
        <TabButton
          active={viewMode === "hierarchy"}
          onClick={() => setViewMode("hierarchy")}
        >
          계층형 보기
        </TabButton>
        <TabButton
          active={viewMode === "list"}
          onClick={() => setViewMode("list")}
        >
          목록 보기
        </TabButton>
      </TabContainer>

      {viewMode === "hierarchy" ? (
        <WikiHierarchy wikiMetadata={wikiMetadata} />
      ) : (
        <WikiList wikiFiles={wikiFiles} />
      )}
    </div>
  )
}
