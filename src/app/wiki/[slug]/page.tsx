// src/app/wiki/[slug]/page.tsx
import { getMarkdownContent, getAllMarkdownFiles } from "@/lib/mdParser"
import MDRenderer from "@/components/MDRenderer"

export async function generateStaticParams() {
  const files = getAllMarkdownFiles()
  return files.map((file) => ({
    slug: file.replace(".md", ""),
  }))
}

export default async function WikiPage({
  params,
}: {
  params: { slug: string }
}) {
  const { content, frontMatter } = getMarkdownContent(`${params.slug}.md`)

  return (
    <div>
      <h1>{frontMatter.title || params.slug}</h1>
      <MDRenderer content={content} />
    </div>
  )
}
