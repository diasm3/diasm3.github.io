// src/components/Header/index.tsx
"use client"
import Link from "next/link"
import { HeaderContainer, Navigation } from "./styles"

export default function Header() {
  return (
    <HeaderContainer>
      <Navigation>
        <Link href="/">Home</Link>
        <Link href="/wiki">Wiki</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/search">Search</Link>
      </Navigation>
    </HeaderContainer>
  )
}
