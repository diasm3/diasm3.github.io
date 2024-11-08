// src/app/write/page.tsx
import { Metadata } from "next"
// import AuthCheck from '@/components/AuthCheck'
import { MobileEditor } from "@/components/MobileEditor"

export const metadata: Metadata = {
  title: "글 작성 - Tech Wiki",
}

export default function WritePage() {
  return (
    // <AuthCheck>
    <MobileEditor />
    // </AuthCheck>
  )
}
