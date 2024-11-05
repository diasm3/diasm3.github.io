// src/components/Footer/index.tsx
"use client"
import Link from "next/link"
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterLinks,
  Copyright,
} from "./styles"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Navigation</h3>
          <FooterLinks>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/wiki">Wiki</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/search">Search</Link>
            </li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Categories</h3>
          <FooterLinks>
            <li>
              <Link href="/wiki/Javascript">JavaScript</Link>
            </li>
            <li>
              <Link href="/wiki/Python">Python</Link>
            </li>
            <li>
              <Link href="/wiki/Docker">Docker</Link>
            </li>
            <li>
              <Link href="/wiki/algorithm">Algorithms</Link>
            </li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Connect</h3>
          <FooterLinks>
            <li>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </FooterLinks>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>© {currentYear} Your Name. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  )
}
