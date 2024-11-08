// components/MobileEditor/index.tsx
"use client"
import { useGitHubApi, useGitHubAuth } from "@/hooks/useGithubAction"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import styled from "styled-components"

export function MobileEditor() {
  const router = useRouter()
  const { isAuthenticated, isLoading } = useGitHubAuth()
  const { createOrUpdateFile } = useGitHubApi()
  const [content, setContent] = useState("")

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login")
    }
  }, [isLoading, isAuthenticated, router])

  const handleSave = async () => {
    try {
      const fileName = `${new Date().toISOString().split("T")[0]}-post.md`
      await createOrUpdateFile(`content/${fileName}`, content, "Add new post")
      router.push("/")
    } catch (error) {
      console.error("Save failed:", error)
    }
  }

  // const handleImageUpload = async (file: File) => {
  //   try {
  //     const imageUrl = await uploadImage(file)
  //     setContent((prev) => `${prev}\n![${file.name}](${imageUrl})`)
  //   } catch (error) {
  //     console.error("Image upload failed:", error)
  //   }
  // }

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
              const fileName = `${Date.now()}-${file.name}`
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

// const TitleInput = styled.input`
//   width: 100%;
//   padding: 0.5rem;
//   font-size: 1.5rem;
//   border: 1px solid #ddd;
//   border-radius: 4px;
// `

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
// // src/components/MobileEditor/index.tsx
// "use client"
// import { useState } from "react"
// import styled from "styled-components"
// import { useSession } from "next-auth/react"
// import { GitHubClient } from "@/lib/githubClient"

// export function MobileEditor() {
//   const { data: session } = useSession()
//   const [title, setTitle] = useState("")
//   const [content, setContent] = useState("")
//   const [tags, setTags] = useState<string[]>([])
//   const [isSaving, setIsSaving] = useState(false)

//   const handlePublish = async () => {
//     if (!session?.user?.isAllowed) {
//       alert("권한이 없습니다.")
//       return
//     }

//     setIsSaving(true)
//     try {
//       const github = new GitHubClient(process.env.NEXT_PUBLIC_GITHUB_TOKEN!)

//       // 파일 이름 생성 (날짜-제목.md)
//       const fileName = `${new Date().toISOString().split("T")[0]}-${title
//         .toLowerCase()
//         .replace(/\s+/g, "-")
//         .replace(/[^\w-]+/g, "")}.md`

//       // frontmatter 추가
//       const frontMatter = `---
// title: ${title}
// date: ${new Date().toISOString()}
// tags: [${tags.join(", ")}]
// author: ${session.user.name}
// ---

// `
//       const fullContent = frontMatter + content

//       // content 디렉토리에 저장
//       await github.createOrUpdateFile(
//         `content/${fileName}`,
//         fullContent,
//         `Add post: ${title}`
//       )

//       alert("발행되었습니다!")
//       // 에디터 초기화 또는 리다이렉트
//     } catch (error) {
//       console.error("Publishing error:", error)
//       alert("발행 중 오류가 발생했습니다.")
//     } finally {
//       setIsSaving(false)
//     }
//   }

//   const handleImageUpload = async (file: File) => {
//     if (!session?.user?.isAllowed) return

//     try {
//       const github = new GitHubClient(process.env.NEXT_PUBLIC_GITHUB_TOKEN!)
//       const imageUrl = await github.uploadImage(file)

//       // 이미지 마크다운 문법 삽입
//       setContent((prev) => `${prev}\n![${file.name}](${imageUrl})`)
//     } catch (error) {
//       console.error("Image upload error:", error)
//       alert("이미지 업로드 중 오류가 발생했습니다.")
//     }
//   }

//   return (
//     <EditorContainer>
//       <EditorHeader>
//         <TitleInput
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="제목을 입력하세요"
//         />
//         <TagInput
//           placeholder="태그 입력 (쉼표로 구분)"
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               const newTags = e.currentTarget.value
//                 .split(",")
//                 .map((t) => t.trim())
//               setTags([...tags, ...newTags])
//               e.currentTarget.value = ""
//             }
//           }}
//         />
//         {tags.length > 0 && (
//           <TagList>
//             {tags.map((tag) => (
//               <Tag key={tag}>
//                 #{tag}
//                 <TagRemove
//                   onClick={() => setTags(tags.filter((t) => t !== tag))}
//                 >
//                   ×
//                 </TagRemove>
//               </Tag>
//             ))}
//           </TagList>
//         )}
//       </EditorHeader>

//       <EditorToolbar>
//         <ToolButton onClick={() => setContent((prev) => prev + "\n# ")}>
//           H1
//         </ToolButton>
//         <ToolButton onClick={() => setContent((prev) => prev + "\n## ")}>
//           H2
//         </ToolButton>
//         <ImageUploadButton>
//           <label htmlFor="image-upload">📷</label>
//           <input
//             id="image-upload"
//             type="file"
//             accept="image/*"
//             onChange={(e) =>
//               e.target.files?.[0] && handleImageUpload(e.target.files[0])
//             }
//             hidden
//           />
//         </ImageUploadButton>
//       </EditorToolbar>

//       <EditorContent
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         placeholder="마크다운으로 작성해주세요..."
//       />

//       <EditorFooter>
//         <PublishButton
//           onClick={handlePublish}
//           disabled={isSaving || !title || !content}
//         >
//           {isSaving ? "발행 중..." : "발행하기"}
//         </PublishButton>
//       </EditorFooter>
//     </EditorContainer>
//   )
// }

// const StatusBar = styled.div<{ online: boolean }>`
//   padding: 0.5rem;
//   text-align: center;
//   font-size: 0.9rem;
//   background-color: ${(props) => (props.online ? "#4caf50" : "#ff9800")};
//   color: white;
//   transition: background-color 0.3s ease;
// `

// const ToolbarTop = styled.div`
//   display: flex;
//   padding: 0.5rem;
//   gap: 0.5rem;
//   background-color: white;
//   border-bottom: 1px solid ${({ theme }) => theme.colors.border};
//   overflow-x: auto;
//   -webkit-overflow-scrolling: touch;

//   &::-webkit-scrollbar {
//     display: none;
//   }
// `

// const ToolButton = styled.button`
//   padding: 0.5rem 1rem;
//   border: none;
//   border-radius: 4px;
//   background-color: ${({ theme }) => theme.colors.background};
//   color: ${({ theme }) => theme.colors.text};
//   font-size: 1rem;
//   cursor: pointer;
//   transition: background-color 0.2s ease;
//   min-width: 44px;
//   height: 44px;

//   &:hover {
//     background-color: ${({ theme }) => theme.colors.primary};
//     color: white;
//   }

//   &:active {
//     transform: translateY(1px);
//   }
// `

// const ImageUploadButton = styled(ToolButton)`
//   label {
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     height: 100%;
//   }
// `

// const EditorWrapper = styled.div`
//   flex: 1;
//   padding: 1rem;
//   overflow-y: auto;
//   -webkit-overflow-scrolling: touch;
//   background-color: white;
// `

// const StyledTextArea = styled.textarea`
//   width: 100%;
//   height: 100%;
//   border: none;
//   resize: none;
//   outline: none;
//   font-family: "Menlo", monospace;
//   font-size: 1rem;
//   line-height: 1.6;
//   color: ${({ theme }) => theme.colors.text};
//   background: transparent;

//   &::placeholder {
//     color: ${({ theme }) => theme.colors.secondary};
//   }
// `

// const BottomBar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem;
//   background-color: white;
//   border-top: 1px solid ${({ theme }) => theme.colors.border};
//   box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
// `

// const SaveStatus = styled.div`
//   font-size: 0.9rem;
//   color: ${({ theme }) => theme.colors.secondary};
// `

// const PreviewButton = styled.button`
//   padding: 0.5rem 1rem;
//   border: none;
//   border-radius: 4px;
//   background-color: ${({ theme }) => theme.colors.primary};
//   color: white;
//   font-size: 0.9rem;
//   cursor: pointer;
//   transition: background-color 0.2s ease;

//   &:hover {
//     background-color: ${({ theme }) => theme.colors.primary}dd;
//   }

//   &:active {
//     transform: translateY(1px);
//   }
// `

// // 반응형 스타일 (태블릿/데스크톱)
// const mediaQueries = {
//   tablet: `@media (min-width: 768px)`,
//   desktop: `@media (min-width: 1024px)`,
// }

// const EditorContainerDesktop = styled(EditorContainer)`
//   ${mediaQueries.desktop} {
//     max-width: 1200px;
//     margin: 0 auto;
//     height: calc(100vh - 4rem);
//     margin-top: 2rem;
//     border-radius: 8px;
//     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   }
// `

// const EditorWrapperDesktop = styled(EditorWrapper)`
//   ${mediaQueries.desktop} {
//     padding: 2rem;
//   }
// `

// const EditorContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   background: white;
// `

// const EditorHeader = styled.div`
//   padding: 1rem;
//   border-bottom: 1px solid ${({ theme }) => theme.colors.border};
// `

// const TitleInput = styled.input`
//   width: 100%;
//   font-size: 1.5rem;
//   padding: 0.5rem;
//   border: none;
//   border-bottom: 2px solid ${({ theme }) => theme.colors.border};
//   outline: none;
//   margin-bottom: 1rem;

//   &:focus {
//     border-bottom-color: ${({ theme }) => theme.colors.primary};
//   }
// `

// const TagInput = styled.input`
//   width: 100%;
//   padding: 0.5rem;
//   border: 1px solid ${({ theme }) => theme.colors.border};
//   border-radius: 4px;
//   margin-bottom: 0.5rem;
// `

// const TagList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.5rem;
// `

// const Tag = styled.span`
//   display: inline-flex;
//   align-items: center;
//   padding: 0.25rem 0.5rem;
//   background: ${({ theme }) => theme.colors.background};
//   border-radius: 15px;
//   font-size: 0.9rem;
// `

// const TagRemove = styled.button`
//   margin-left: 0.5rem;
//   border: none;
//   background: none;
//   color: ${({ theme }) => theme.colors.secondary};
//   cursor: pointer;
// `

// // ... 나머지 스타일 컴포넌트
