// src/lib/mdParser.ts
import wikiMetadata from "@/data/wiki-metadata.json"

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
