// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { GitHubClient, githubConfig } from "@/lib/github"

export async function middleware(request: NextRequest) {
  // /write 경로 체크
  if (request.nextUrl.pathname.startsWith("/write")) {
    // 쿠키에서 토큰 가져오기
    const token = request.cookies.get("github_token")?.value

    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url))
    }

    try {
      // GitHub API로 토큰 유효성과 사용자 확인
      const github = new GitHubClient(token)
      const user = await github.getUser()

      // 허용된 사용자가 아닌 경우
      if (user.login !== githubConfig.ALLOWED_USER) {
        return NextResponse.redirect(new URL("/login", request.url))
      }

      // 토큰이 유효하고 허용된 사용자인 경우 진행
      return NextResponse.next()
    } catch (error) {
      // 토큰이 유효하지 않거나 API 호출 실패
      const response = NextResponse.redirect(new URL("/login", request.url))

      // 잘못된 토큰 삭제
      response.cookies.delete("github_token")

      return response
    }
  }

  // 로그인 상태에서 /login 페이지 접근 시
  if (request.nextUrl.pathname === "/login") {
    const token = request.cookies.get("github_token")?.value

    if (token) {
      try {
        const github = new GitHubClient(token)
        const user = await github.getUser()

        if (user.login === githubConfig.ALLOWED_USER) {
          // 이미 로그인된 상태면 write 페이지로 리다이렉트
          return NextResponse.redirect(new URL("/write", request.url))
        }
      } catch (error) {
        // 토큰이 유효하지 않으면 쿠키 삭제
        const response = NextResponse.next()
        response.cookies.delete("github_token")
        return response
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  // 미들웨어를 적용할 경로 설정
  matcher: ["/write/:path*", "/login"],
}
