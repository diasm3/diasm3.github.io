// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { GitHubAppAuth } from '@/lib/githubApp'

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/write')) {
    const token = request.cookies.get('github_token')?.value

    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    try {
      // 토큰 검증
      const octokit = new Octokit({ auth: token })
      const { data: user } = await octokit.users.getAuthenticated()

      if (user.login !== 'diasm3') {
        throw new Error('Unauthorized user')
      }

      return NextResponse.next()
    } catch (error) {
      const response = NextResponse.redirect(new URL('/login', request.url))
      response.cookies.delete('github_token')
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/write/:path*']
}