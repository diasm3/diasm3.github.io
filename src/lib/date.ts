// src/utils/date.ts
export function formatDate(dateString?: string): string {
  if (!dateString) return ""

  try {
    return new Date(dateString).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  } catch (e) {
    console.log(e)
    return dateString
  }
}
