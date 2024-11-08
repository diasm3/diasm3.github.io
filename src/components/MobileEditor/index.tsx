// components/MobileEditor/index.tsx
"use client"
import { useGitHubApi, useGitHubAuth } from "@/hooks/useGithubAction"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import styled from "styled-components"

export function MobileEditor() {
  const router = useRouter()
  const { isAuthenticated, isLoading, user } = useGitHubAuth()
  const { createOrUpdateFile, uploadImage } = useGitHubApi()
  const [content, setContent] = useState("")

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login")
    }
  }, [isLoading, isAuthenticated, router])

  const handleSave = async () => {
    try {
      const fileName = `${new Date().toISOString().split("T")[0]}3333-post.md`
      await createOrUpdateFile(`content/${fileName}`, content, "Add new post")
      router.push("/")
    } catch (error) {
      console.error("Save failed:", error)
    }
  }

  const handleImageUpload = async (file: File) => {
    try {
      const imageUrl = await uploadImage(file)
      setContent((prev) => `${prev}\n![${file.name}](${imageUrl})`)
    } catch (error) {
      console.error("Image upload failed:", error)
    }
  }

  if (isLoading) return <div>Loading...</div>
  if (!isAuthenticated) return null

  return (
    <EditorContainer>
      <EditorHeader>
        {/* <TitleInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        /> */}
      </EditorHeader>

      <ContentArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="마크다운으로 작성해주세요..."
      />

      <ToolBar>
        <Button onClick={handleSave}>저장</Button>
      </ToolBar>

      {/* 이미지 업로드 처리 */}
      <ImageUploader>
        <label htmlFor="image-upload">이미지 업로드</label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={async (e) => {
            const file = e.target.files?.[0]
            if (!file) return

            const token = localStorage.getItem("github_token")
            if (!token) return

            try {
              // const fileName = `${Date.now()}-${file.name}`
              const fileName = `${new Date()
                .toISOString()
                .replace(/[:\.Z]/g, "-")
                .replace("T", "-")}-${file.name}`
              const reader = new FileReader()

              reader.onload = async () => {
                const content = (reader.result as string).split(",")[1]

                await fetch(
                  `https://api.github.com/repos/diasm3/diasm3.github.io/contents/public/images/${fileName}`,
                  {
                    method: "PUT",
                    headers: {
                      Authorization: `Bearer ${token}`,
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      message: `Add image: ${fileName}`,
                      content,
                      branch: "main",
                    }),
                  }
                )

                // 마크다운에 이미지 추가
                setContent(
                  (prev) => `${prev}\n![${fileName}](/images/${fileName})`
                )
              }

              reader.readAsDataURL(file)
            } catch (error) {
              console.error("Failed to upload image:", error)
            }
          }}
        />
      </ImageUploader>
    </EditorContainer>
  )
}

// Styled components
const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1rem;
`

const EditorHeader = styled.div`
  margin-bottom: 1rem;
`

const TitleInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`

const ContentArea = styled.textarea`
  flex: 1;
  padding: 1rem;
  font-family: monospace;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
`

const ToolBar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0;
`

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0051cc;
  }
`

const ImageUploader = styled.div`
  margin-top: 1rem;
`
