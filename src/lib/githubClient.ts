// src/lib/githubClient.ts
import { Octokit } from "@octokit/rest"

export class GitHubClient {
  private octokit: Octokit
  private readonly OWNER = "diasm3"
  private readonly REPO = "diasm3.github.io"
  private readonly BRANCH = "main"

  constructor(token: string) {
    this.octokit = new Octokit({ auth: token })
  }

  async createOrUpdateFile(path: string, content: string, message: string) {
    try {
      // 기존 파일 확인
      let sha: string | undefined
      try {
        const { data } = await this.octokit.repos.getContent({
          owner: this.OWNER,
          repo: this.REPO,
          path,
          ref: this.BRANCH,
        })

        if (!Array.isArray(data)) {
          sha = data.sha
        }
      } catch (error) {
        console.log(error)
        // 파일이 없는 경우 무시
      }

      // 파일 생성 또는 업데이트
      await this.octokit.repos.createOrUpdateFileContents({
        owner: this.OWNER,
        repo: this.REPO,
        path,
        message,
        content: Buffer.from(content).toString("base64"),
        branch: this.BRANCH,
        sha,
      })

      return true
    } catch (error) {
      console.error("GitHub API Error:", error)
      throw error
    }
  }

  // 이미지 업로드 메서드
  async uploadImage(file: File): Promise<string> {
    const fileName = `${Date.now()}-${file.name}`
    const path = `public/images/${fileName}`

    const buffer = await file.arrayBuffer()
    const content = Buffer.from(buffer).toString("base64")

    await this.octokit.repos.createOrUpdateFileContents({
      owner: this.OWNER,
      repo: this.REPO,
      path,
      message: `Add image: ${fileName}`,
      content,
      branch: this.BRANCH,
    })

    return `/images/${fileName}`
  }
}
