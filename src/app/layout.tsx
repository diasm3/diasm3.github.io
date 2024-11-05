// src/app/layout.tsx
import StyledComponentsRegistry from "@/lib/registry"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// src/app/layout.tsx
export const metadata = {
  title: "Personal Storage",
  description: "",
}

// viewport 설정 분리
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
