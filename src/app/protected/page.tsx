// app/protected/page.tsx
"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
// import Cookies from "js-cookie"

export default function ProtectedPage() {
  const router = useRouter()

  useEffect(() => {
    const token = null

    if (!token) {
      router.push("/login")
    }
  }, [router])

  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page is only accessible if you are logged in.</p>
    </div>
  )
}
