// src/app/wiki/[slug]/page.tsx
import { getAllSlugs, getMarkdownContent } from "@/lib/mdParser"
import { WikiContent } from "../components/WikiContent"

export function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

type Params = Promise<{ slug: string }>

export default async function WikiPage({ params }: { params: Params }) {
  const { content, frontMatter } = getMarkdownContent((await params).slug)

  return <WikiContent content={content} frontMatter={frontMatter} />
}
