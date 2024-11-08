// lib/githubAuth.ts
const GITHUB_TOKEN_KEY = "github_token"
const GITHUB_USER_KEY = "github_user"
const ALLOWED_USER = "diasm3" // 허용된 사용자

interface GitHubUser {
  login: string
  avatar_url: string
  name: string
}

export class GitHubAuth {
  static async checkAuth(): Promise<boolean> {
    const token = localStorage.getItem(GITHUB_TOKEN_KEY)
    if (!token) return false

    try {
      const user = await this.getUser(token)
      return user.login === ALLOWED_USER
    } catch {
      this.logout()
      return false
    }
  }

  static async getUser(token: string): Promise<GitHubUser> {
    const response = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (!response.ok) throw new Error("Failed to get user")
    return response.json()
  }

  static getToken(): string | null {
    return localStorage.getItem(GITHUB_TOKEN_KEY)
  }

  static setToken(token: string): void {
    localStorage.setItem(GITHUB_TOKEN_KEY, token)
  }

  static logout(): void {
    localStorage.removeItem(GITHUB_TOKEN_KEY)
    localStorage.removeItem(GITHUB_USER_KEY)
  }
}
