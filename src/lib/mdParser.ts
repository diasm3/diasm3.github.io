// src/lib/mdParser.ts
import matter from "gray-matter"
import wikiMetadata from "@/data/wiki-metadata.json"
import tags from "@/data/tags.json"
import fs from "fs"
import path from "path"

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
  aiSummary?: string
  content?: string // 콘텐츠도 JSON에 포함
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
