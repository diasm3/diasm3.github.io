// src/lib/mdParser.ts
import path from "path"
import matter from "gray-matter"

export interface WikiFrontMatter {
  title?: string
  description?: string
  tags?: string[]
  date?: string
}

// require를 사용하여 fs 모듈 가져오기
const fs = require("fs")

export function getMarkdownContent(filename: string) {
  try {
    const filePath = path.join(process.cwd(), "content", filename)
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContent)

    return {
      frontMatter: data as WikiFrontMatter,
      content,
    }
  } catch (error) {
    console.error(`Error reading ${filename}:`, error)
    return {
      frontMatter: {},
      content: "",
    }
  }
}

export function getAllMarkdownFiles() {
  try {
    return fs
      .readdirSync(path.join(process.cwd(), "content"))
      .filter((file) => file.endsWith(".md"))
  } catch (error) {
    console.error("Error reading markdown files:", error)
    return []
  }
}

export function getAllWikiContent() {
  const files = getAllMarkdownFiles()
  return files.map((filename) => {
    const { frontMatter, content } = getMarkdownContent(filename)
    return {
      slug: filename.replace(".md", ""),
      title:
        frontMatter.title || filename.replace(".md", "").replace(/-/g, " "),
      description: frontMatter.description,
      tags: frontMatter.tags,
      date: frontMatter.date,
      content,
    }
  })
}
