import { getMarkdownContent, getAllSlugs } from "@/lib/mdParser"
import { Comments } from "@/components/Comments"
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

  return (
    <main>
      <article>
        <WikiContent content={content} frontMatter={frontMatter} />
        <Comments slug={(await params).slug} />
      </article>
    </main>
  )
}
