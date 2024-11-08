// app/error.tsx
"use client"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="error-container">
      <h2>오류가 발생했습니다</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>다시 시도</button>
      <button onClick={() => (window.location.href = "/login")}>
        로그인 페이지로 이동
      </button>
    </div>
  )
}
