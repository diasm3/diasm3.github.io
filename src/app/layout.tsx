// src/app/layout.tsx
import StyledComponentsRegistry from "@/lib/registry"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// src/app/layout.tsx
export const metadata = {
  title: "Your Blog Title",
  description: "Your blog description",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
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
