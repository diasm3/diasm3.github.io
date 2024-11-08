// app/api/auth/callback/route.ts
import { cookies } from "next/headers"
import { GitHubAppAuth } from "@/lib/githubApp"

export const dynamic = "force-static" // 또는 "dynamic"으로 설정하여 동적 처리할 수 있습니다.

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")
  const state = searchParams.get("state")

  const savedState = cookies().get("github_auth_state")?.value
  if (!state || state !== savedState) {
    return new Response("Invalid state", { status: 403 })
  }

  try {
    const auth = await GitHubAppAuth.exchangeCodeForToken(code!)

    const response = Response.redirect("http://localhost:3000/write")
    response.headers.append(
      "Set-Cookie",
      `github_token=${
        auth.token
      }; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${60 * 60 * 24 * 7}`
    )
    response.headers.append(
      "Set-Cookie",
      `github_auth_state=; Path=/; Max-Age=0`
    )
    return response
  } catch (error) {
    console.error("Auth error:", error)
    return Response.redirect("http://localhost:3000/login?error=auth_failed")
  }
}

// app/api/auth/url/route.ts
export async function POST(request: Request) {
  const CLIENT_ID = process.env.GITHUB_CLIENT_ID

  const { state } = await request.json()

  // GitHub OAuth 인증 URL 생성
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&state=${state}`

  return new Response(JSON.stringify(authUrl), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
