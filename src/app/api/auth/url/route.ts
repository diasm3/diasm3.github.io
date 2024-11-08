// app/api/auth/url/route.ts
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { state } = await request.json()
  const clientId = process.env.GITHUB_CLIENT_ID
  const redirectUri = `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/callback`

  if (!clientId) {
    return NextResponse.json({ error: "Client ID is missing" }, { status: 500 })
  }

  // GitHub OAuth URL 생성
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=read:user`

  return NextResponse.json(authUrl)
}
