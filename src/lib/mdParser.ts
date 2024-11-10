// src/lib/mdParser.ts
import wikiMetadata from "@/data/wiki-metadata.json"
import path from "path"
import fs from "fs"

export interface WikiFrontMatter {
  title?: string
  description?: string
  tags?: string[]
  date?: string
}

export interface WikiMetadata {
  slug: string
  title: string
  description?: string
  tags?: string[]
  date?: string
  content?: string
  // lastVersion?: string
}

interface Version {
  content: string
  version: number
  date: string
  changes: {
    type: string
    description: string
  }[]
  author?: string
}

export async function getWikiVersions(slug: string): Promise<Version[]> {
  const contentDir = path.join(process.cwd(), "content")
  const versionsDir = path.join(contentDir, "versions", slug)
  const versions: Version[] = []

  try {
    // 원본 버전 추가
    const originalPath = path.join(contentDir, `${slug}.md`)
    const originalStats = fs.statSync(originalPath)
    versions.push({
      content: fs.readFileSync(originalPath, "utf8"),
      version: 1,
      date: originalStats.birthtime.toISOString(),
      changes: [
        {
          type: "initial",
          description: "Initial version",
        },
      ],
    })

    // 버전 디렉토리가 존재하는 경우
    if (fs.existsSync(versionsDir)) {
      const versionFiles = fs
        .readdirSync(versionsDir)
        .filter((file) => file.endsWith(".json"))
        .sort((a, b) => {
          const vA = parseInt(a.split("-")[1])
          const vB = parseInt(b.split("-")[1])
          return vA - vB
        })

      for (const versionFile of versionFiles) {
        const versionData = JSON.parse(
          fs.readFileSync(path.join(versionsDir, versionFile), "utf8")
        )

        versions.push({
          content: fs.readFileSync(
            path.join(versionsDir, `content-${versionData.version}.md`),
            "utf8"
          ),
          ...versionData,
        })
      }
    }

    return versions
  } catch (error) {
    console.error("버전 정보 로딩 실패:", error)
    return [
      {
        content: fs.readFileSync(path.join(contentDir, `${slug}.md`), "utf8"),
        version: 1,
        date: new Date().toISOString(),
        changes: [
          {
            type: "initial",
            description: "Initial version",
          },
        ],
      },
    ]
  }
}

export function getAllSlugs(): string[] {
  const metadata = wikiMetadata as WikiMetadata[]
  return metadata.map((item) => item.slug)
}

export function getAllWikiContent() {
  return wikiMetadata
}

export function getMarkdownContent(slug: string) {
  const metadata = wikiMetadata as WikiMetadata[]
  const wikiData = metadata.find((wiki) => wiki.slug === slug)

  if (!wikiData) {
    return {
      frontMatter: {},
      content: "",
    }
  }

  return {
    frontMatter: {
      title: wikiData.title,
      description: wikiData.description,
      tags: wikiData.tags,
      date: wikiData.date,
    },
    content: wikiData.content || "",
  }
}
