// lib/githubApp.ts
import { createAppAuth } from "@octokit/auth-app"
import { Octokit } from "@octokit/rest"

interface GitHubAuthResponse {
  token: string
  user: {
    login: string
    avatar_url: string
    name: string
  }
}

export class GitHubAppAuth {
  private static readonly ALLOWED_USER = "diasm3"
  private static readonly APP_ID = process.env.GITHUB_APP_ID!
  private static readonly PRIVATE_KEY = process.env.GITHUB_APP_PRIVATE_KEY!
  private static readonly CLIENT_ID = process.env.GITHUB_CLIENT_ID!
  private static readonly CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET!

  static async getAuthUrl(state: string) {
    const params = new URLSearchParams({
      client_id: this.CLIENT_ID,
      redirect_uri: "http://localhost:3000/api/auth/callback",
      // redirect_uri: "https://diasm3.github.io/api/auth/callback",
      state,
      scope: "repo user",
    })

    return `https://github.com/login/oauth/authorize?${params.toString()}`
  }

  static async exchangeCodeForToken(code: string): Promise<GitHubAuthResponse> {
    const response = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: this.CLIENT_ID,
          client_secret: this.CLIENT_SECRET,
          code,
        }),
      }
    )

    const data = await response.json()

    if (data.error) {
      throw new Error(data.error_description || "Authentication failed")
    }

    // 사용자 정보 가져오기
    const octokit = new Octokit({ auth: data.access_token })
    const { data: user } = await octokit.users.getAuthenticated()

    // 허용된 사용자 확인
    if (user.login !== this.ALLOWED_USER) {
      throw new Error("Unauthorized user")
    }

    return {
      token: data.access_token,
      user: {
        login: user.login,
        avatar_url: user.avatar_url,
        name: user.name || user.login,
      },
    }
  }

  static async getInstallationToken() {
    const auth = createAppAuth({
      appId: this.APP_ID,
      privateKey: this.PRIVATE_KEY,
    })

    const { token } = await auth({ type: "installation" })
    return token
  }
}
