"use client"
import React, { useState } from "react"
import imageCompression from "browser-image-compression"
import styled from "styled-components"

const CompressionDetails = styled.div`
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #e2e8f0;
  font-size: 0.75rem;
  color: #666;
`

// Styled Components
const Container = styled.div`
  padding: 1.5rem;
  max-width: 1152px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`

const FileInputWrapper = styled.div`
  margin-bottom: 1.5rem;
`

const FileInput = styled.input`
  display: block;
  width: 100%;
  font-size: 0.875rem;
  color: #4a5568;

  &::file-selector-button {
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    border: none;
    font-size: 0.875rem;
    font-weight: 600;
    background-color: #ebf5ff;
    color: #2b6cb0;
    cursor: pointer;

    &:hover {
      background-color: #e3efff;
    }
  }
`

const LoadingMessage = styled.div`
  text-align: center;
  padding: 1rem 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const ImageCard = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
`

const CardTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 0.5rem;
`

const ImagePreview = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 0.5rem;
`

const ImageInfo = styled.div`
  font-size: 0.875rem;

  p {
    margin: 0.25rem 0;
  }
`

interface CompressionResult {
  file: File
  preview: string
  size: number
  quality: number
  settings: any
}

const ImageCompressionTest = () => {
  const [originalImage, setOriginalImage] = useState<CompressionResult | null>(
    null
  )
  const [compressedImages, setCompressedImages] = useState<CompressionResult[]>(
    []
  )
  const [isLoading, setIsLoading] = useState(false)

  const compressionPresets = [
    {
      name: "원본 설정",
      settings: {
        maxSizeMB: 1,
        maxWidthOrHeight: Math.max(600, 600),
        initialQuality: 0.7,
        fileType: "image/webp",
        useWebWorker: true,
      },
    },
    {
      name: "고품질",
      settings: {
        maxSizeMB: 2,
        maxWidthOrHeight: 1200,
        initialQuality: 0.85,
        fileType: "image/webp",
        useWebWorker: true,
      },
    },
    {
      name: "중간품질",
      settings: {
        maxSizeMB: 1,
        maxWidthOrHeight: 800,
        initialQuality: 0.8,
        fileType: "image/webp",
        useWebWorker: true,
      },
    },
    {
      name: "낮은품질",
      settings: {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 600,
        initialQuality: 0.7,
        fileType: "image/webp",
        useWebWorker: true,
      },
    },
  ]

  const createPreview = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result as string)
      reader.readAsDataURL(file)
    })
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsLoading(true)

    try {
      // 원본 이미지 설정
      const originalPreview = await createPreview(file)
      setOriginalImage({
        file,
        preview: originalPreview,
        size: file.size,
        quality: 1,
        settings: "Original",
      })

      // 각 프리셋으로 압축 실행
      const results = await Promise.all(
        compressionPresets.map(async (preset) => {
          const compressedFile = await imageCompression(file, preset.settings)
          const preview = await createPreview(compressedFile)

          return {
            file: compressedFile,
            preview,
            size: compressedFile.size,
            quality: preset.settings.initialQuality,
            settings: preset,
          }
        })
      )

      setCompressedImages(results)
    } catch (error) {
      console.error("Compression failed:", error)
      alert("이미지 압축 중 오류가 발생했습니다.")
    } finally {
      setIsLoading(false)
    }
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`
  }

  return (
    <Container>
      <Title>이미지 압축 테스트</Title>

      <FileInputWrapper>
        <FileInput type="file" accept="image/*" onChange={handleImageUpload} />
      </FileInputWrapper>

      {isLoading && (
        <LoadingMessage>
          <p>이미지 압축 중...</p>
        </LoadingMessage>
      )}

      <Grid>
        {originalImage && (
          <ImageCard>
            <CardTitle>원본 이미지</CardTitle>
            <ImagePreview src={originalImage.preview} alt="Original" />
            <ImageInfo>
              <p>크기: {formatFileSize(originalImage.size)}</p>
              <p>품질: 100%</p>
            </ImageInfo>
          </ImageCard>
        )}

        {compressedImages.map((result, index) => (
          <ImageCard key={index}>
            <CardTitle>{result.settings.name} 압축 결과</CardTitle>
            <ImagePreview
              src={result.preview}
              alt={`Compressed ${index + 1}`}
            />
            <ImageInfo>
              <p>크기: {formatFileSize(result.size)}</p>
              <p>품질: {result.quality * 100}%</p>
              <p>
                압축률:{" "}
                {((1 - result.size / (originalImage?.size || 1)) * 100).toFixed(
                  1
                )}
                %
              </p>
              <p>
                최대 너비/높이: {result.settings.settings.maxWidthOrHeight}px
              </p>
              <CompressionDetails>
                <p>maxSizeMB: {result.settings.settings.maxSizeMB}MB</p>
                <p>
                  maxWidthOrHeight: {result.settings.settings.maxWidthOrHeight}
                  px
                </p>
                <p>initialQuality: {result.settings.settings.initialQuality}</p>
                <p>fileType: {result.settings.settings.fileType}</p>
              </CompressionDetails>
            </ImageInfo>
          </ImageCard>
        ))}
      </Grid>
    </Container>
  )
}

export default ImageCompressionTest
