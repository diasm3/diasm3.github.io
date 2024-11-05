// src/app/wiki/[slug]/page.tsx
import { getAllSlugs, getMarkdownContent } from "@/lib/mdParser"
import { WikiContent } from "../components/WikiContent"

export function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export default function WikiPage({ params }: { params: { slug: string } }) {
  const { content, frontMatter } = getMarkdownContent(params.slug)

  return <WikiContent content={content} frontMatter={frontMatter} />
}
