// src/lib/githubUploader.ts
import { Octokit } from "@octokit/rest"

export class GithubImageUploader {
  private octokit: Octokit
  private readonly REPO_OWNER = "diasm3"
  private readonly REPO_NAME = "diasm3.github.io"
  private readonly IMAGE_PATH = "public/images"

  constructor(token: string) {
    this.octokit = new Octokit({ auth: token })
  }

  async uploadImage(file: File | Buffer, fileName: string) {
    const content = await this.getBase64Content(file)

    try {
      await this.octokit.repos.createOrUpdateFileContents({
        owner: this.REPO_OWNER,
        repo: this.REPO_NAME,
        path: `${this.IMAGE_PATH}/${fileName}`,
        message: `Add image: ${fileName}`,
        content,
        branch: "main",
      })

      return `/${this.IMAGE_PATH}/${fileName}`
    } catch (error) {
      console.error("Image upload failed:", error)
      throw error
    }
  }

  private async getBase64Content(file: File | Buffer): Promise<string> {
    if (file instanceof File) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => {
          const base64 = (reader.result as string).split(",")[1]
          resolve(base64)
        }
        reader.onerror = reject
        reader.readAsDataURL(file)
      })
    }
    return Buffer.from(file).toString("base64")
  }
}
