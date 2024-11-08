// hooks/useGitHubAuth.ts
"use client"
import { useEffect, useState } from "react"
import { GitHubClient, verifyGitHubToken, cookieUtils } from "@/lib/github"

interface AuthState {
  isAuthenticated: boolean
  isLoading: boolean
  user: null
}

export function useGitHubAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    isLoading: true,
    user: null,
  })

  useEffect(() => {
    checkAuth()

    // 다른 탭과의 동기화를 위한 스토리지 이벤트 리스너
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "github_token") {
        checkAuth()
      }
    }
    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  const checkAuth = async () => {
    const token = cookieUtils.getToken()

    if (!token) {
      setAuthState({
        isAuthenticated: false,
        isLoading: false,
        user: null,
      })
      return
    }

    try {
      const { isValid, user } = await verifyGitHubToken(token)

      if (isValid && user) {
        setAuthState({
          isAuthenticated: true,
          isLoading: false,
          user,
        })
      } else {
        // 토큰이 유효하지 않으면 제거
        cookieUtils.removeToken()
        setAuthState({
          isAuthenticated: false,
          isLoading: false,
          user: null,
        })
      }
    } catch (error) {
      console.error("Auth check failed:", error)
      cookieUtils.removeToken()
      setAuthState({
        isAuthenticated: false,
        isLoading: false,
        user: null,
      })
    }
  }

  const login = async (token: string) => {
    try {
      const { isValid, user } = await verifyGitHubToken(token)

      if (isValid && user) {
        cookieUtils.setToken(token)
        setAuthState({
          isAuthenticated: true,
          isLoading: false,
          user,
        })
        return true
      }
      return false
    } catch (error) {
      console.error("Login failed:", error)
      return false
    }
  }

  const logout = () => {
    cookieUtils.removeToken()
    setAuthState({
      isAuthenticated: false,
      isLoading: false,
      user: null,
    })
  }

  // GitHub API 액세스를 위한 클라이언트 인스턴스 생성
  const getGitHubClient = () => {
    const token = cookieUtils.getToken()
    return token ? new GitHubClient(token) : null
  }

  return {
    ...authState,
    login,
    logout,
    checkAuth,
    getGitHubClient,
  }
}

// hooks/useGitHubApi.ts - API 호출을 위한 별도의 훅
export function useGitHubApi() {
  const { getGitHubClient } = useGitHubAuth()

  const createOrUpdateFile = async (
    path: string,
    content: string,
    message: string
  ) => {
    const client = getGitHubClient()
    if (!client) {
      throw new Error("Not authenticated")
    }

    return client.createOrUpdateFile(path, content, message)
  }

  const uploadImage = async (file: File) => {
    const client = getGitHubClient()
    if (!client) {
      throw new Error("Not authenticated")
    }

    const fileName = `${Date.now()}-${file.name}`
    const reader = new FileReader()

    return new Promise((resolve, reject) => {
      reader.onload = async () => {
        try {
          const content = (reader.result as string).split(",")[1]
          await client.createOrUpdateFile(
            `public/images/${fileName}`,
            content,
            `Upload image: ${fileName}`
          )
          resolve(`/images/${fileName}`)
        } catch (error) {
          reject(error)
        }
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  return {
    createOrUpdateFile,
    uploadImage,
  }
}
