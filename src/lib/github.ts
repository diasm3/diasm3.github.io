// lib/github.ts
interface GithubConfig {
  GITHUB_TOKEN: string
  ALLOWED_USER: string
  REPO_OWNER: string
  REPO_NAME: string
}

// GitHub 설정
export const githubConfig: GithubConfig = {
  GITHUB_TOKEN: process.env.NEXT_PUBLIC_GITHUB_TOKEN || "",
  ALLOWED_USER: "diasm3", // 허용할 GitHub 계정명
  REPO_OWNER: "diasm3", // 저장소 소유자
  REPO_NAME: "diasm3.github.io", // 저장소 이름
}

// GitHub API 클래스
export class GitHubClient {
  private token: string
  private baseUrl = "https://api.github.com"

  constructor(token?: string) {
    this.token = token || githubConfig.GITHUB_TOKEN
  }

  // API 요청 헤더
  private get headers() {
    return {
      Authorization: `token ${this.token}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    }
  }

  // 사용자 정보 가져오기
  async getUser() {
    const response = await fetch(`${this.baseUrl}/user`, {
      headers: this.headers,
    })
    if (!response.ok) throw new Error("Failed to fetch user")
    return response.json()
  }

  // 저장소에 파일 생성/업데이트
  async createOrUpdateFile(path: string, content: string, message: string) {
    const { REPO_OWNER, REPO_NAME } = githubConfig

    // base64로 인코딩
    const contentEncoded = Buffer.from(content).toString("base64")

    const response = await fetch(
      `${this.baseUrl}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`,
      {
        method: "PUT",
        headers: this.headers,
        body: JSON.stringify({
          message,
          content: contentEncoded,
          branch: "main",
        }),
      }
    )

    if (!response.ok) throw new Error("Failed to create file")
    return response.json()
  }
}

export async function verifyGitHubToken(token: string) {
  try {
    const github = new GitHubClient(token)
    const user = await github.getUser()
    return {
      isValid: user.login === githubConfig.ALLOWED_USER,
      user,
    }
  } catch (error) {
    return {
      isValid: false,
      user: null,
    }
  }
}

// 쿠키 관리 헬퍼 함수들
export const cookieUtils = {
  setToken(token: string) {
    document.cookie = `github_token=${token}; path=/; max-age=${
      60 * 60 * 24 * 7
    }; secure; samesite=lax`
  },

  removeToken() {
    document.cookie = `github_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`
  },

  getToken() {
    const cookies = document.cookie.split(";")
    const tokenCookie = cookies.find((cookie) =>
      cookie.trim().startsWith("github_token=")
    )
    return tokenCookie ? tokenCookie.split("=")[1] : null
  },
}
