// src/components/Header/index.tsx
"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HeaderContainer, Navigation } from "./styles"

export default function Header() {
  const pathname = usePathname()

  return (
    <HeaderContainer>
      <Navigation>
        <Link href="/">Home</Link>
        <Link href="/wiki">Wiki</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/search">Search</Link>
      </Navigation>
    </HeaderContainer>
  )
}
