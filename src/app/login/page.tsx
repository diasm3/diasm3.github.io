// app/login/page.tsx
"use client"
import { useState } from "react"
import { GitHubClient, githubConfig } from "@/lib/github"

export default function LoginPage() {
  const [token, setToken] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const github = new GitHubClient(token)
      const user = await github.getUser()

      // 허용된 사용자인지 확인
      if (user.login !== githubConfig.ALLOWED_USER) {
        throw new Error("Unauthorized user")
      }

      // 쿠키에 토큰 저장
      document.cookie = `github_token=${token}; path=/; max-age=${
        60 * 60 * 24 * 7
      }; secure; samesite=lax`

      // 로그인 성공 처리
      window.location.href = "/write"
    } catch (error) {
      console.error("Login failed:", error)
      alert("로그인에 실패했습니다.")
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>GitHub Token Login</h2>
      <p>
        1. GitHub Settings → Developer settings → Personal access tokens →
        Tokens (classic)
        <br />
        2. Generate new token (classic)
        <br />
        3. Select scopes: repo (Full control of private repositories)
        <br />
        4. Generate token and copy it
        <br />
      </p>
      <input
        type="password"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="GitHub Token"
        required
      />
      <button type="submit">Login</button>
    </form>
  )
}
