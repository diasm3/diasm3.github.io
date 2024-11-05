// scripts/generateData.js
const fs = require("fs")
const path = require("path")
const matter = require("gray-matter")
const crypto = require("crypto")
const OpenAI = require("openai")

require("dotenv").config()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// 파일의 해시를 생성하는 함수
function generateFileHash(content) {
  return crypto.createHash("md5").update(content).digest("hex")
}

// 캐시 파일 경로
const CACHE_FILE = path.join(process.cwd(), "data", "ai-summary-cache.json")

// 캐시 읽기
function readCache() {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      return JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"))
    }
  } catch (error) {
    console.warn("캐시 파일 읽기 실패:", error)
  }
  return {}
}

// 캐시 저장
function saveCache(cache) {
  try {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2))
  } catch (error) {
    console.error("캐시 저장 실패:", error)
  }
}

async function summarizeContent(content, fileHash) {
  const cache = readCache()

  // 캐시에 있고 해시가 같으면 캐시된 요약 반환
  if (cache[fileHash] && cache[fileHash].hash === fileHash) {
    console.log("캐시된 요약 사용")
    return cache[fileHash]
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "기술 문서의 내용을 분석하여 간단한 요약과 관련 태그를 생성해주세요. 태그는 최대 5개까지만 생성해주세요.",
        },
        {
          role: "user",
          content: content,
        },
      ],
      functions: [
        {
          name: "process_document",
          description: "문서를 처리하고 요약과 태그를 생성합니다.",
          parameters: {
            type: "object",
            properties: {
              summary: {
                type: "string",
                description: "문서의 간단한 요약 (1-2문장)",
              },
              tags: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "문서와 관련된 태그들 (최대 5개)",
              },
            },
            required: ["summary", "tags"],
          },
        },
      ],
      function_call: { name: "process_document" },
    })

    const result = JSON.parse(
      response.choices[0].message.function_call.arguments
    )

    // 결과를 캐시에 저장
    cache[fileHash] = {
      ...result,
      hash: fileHash,
      timestamp: new Date().toISOString(),
    }

    saveCache(cache)
    console.log("새로운 요약 생성 및 캐시")
    return result
  } catch (error) {
    console.error("AI 요약 생성 실패:", error)
    return { summary: "", tags: [] }
  }
}

async function getAllMarkdownFiles() {
  const contentDir = path.join(process.cwd(), "content")
  const files = fs.readdirSync(contentDir)
  const results = []

  for (const fileName of files) {
    if (fileName.endsWith(".md")) {
      const filePath = path.join(contentDir, fileName)
      const fileContent = fs.readFileSync(filePath, "utf8")
      const { data, content } = matter(fileContent)

      // 파일 내용의 해시 생성
      const fileHash = generateFileHash(content)

      // AI 요약 생성 또는 캐시에서 가져오기
      const aiAnalysis = await summarizeContent(content, fileHash)

      results.push({
        slug: fileName.replace(".md", ""),
        title: data.title || fileName.replace(".md", "").replace(/-/g, " "),
        description: data.description,
        tags: [
          ...(data.tags
            ? Array.isArray(data.tags)
              ? data.tags
              : data.tags.split(/,\s*/)
            : []),
          ...aiAnalysis.tags,
        ],
        date: data.date,
        content: content,
        aiSummary: aiAnalysis.summary,
        contentHash: fileHash,
        lastProcessed: new Date().toISOString(),
      })
    }
  }

  return results
}

async function generateJsonFiles() {
  console.log("마크다운 파일 분석 및 AI 요약 생성 중...")
  const wikiData = await getAllMarkdownFiles()
  const dataDir = path.join(process.cwd(), "data")

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }

  // 메타데이터 저장
  fs.writeFileSync(
    path.join(dataDir, "wiki-metadata.json"),
    JSON.stringify(
      wikiData.map(({ contentHash, ...rest }) => rest),
      null,
      2
    )
  )

  // 태그 맵 생성 및 저장
  const tagMap = {}
  wikiData.forEach((wiki) => {
    if (wiki.tags && wiki.tags.length > 0) {
      wiki.tags.forEach((tag) => {
        const normalizedTag = tag.trim().toLowerCase()
        if (!tagMap[normalizedTag]) {
          tagMap[normalizedTag] = []
        }
        tagMap[normalizedTag].push({
          slug: wiki.slug,
          title: wiki.title,
          description: wiki.description,
          aiSummary: wiki.aiSummary,
        })
      })
    }
  })

  fs.writeFileSync(
    path.join(dataDir, "tags.json"),
    JSON.stringify(tagMap, null, 2)
  )

  console.log("데이터 파일 생성 완료!")
  console.log(`총 문서 수: ${wikiData.length}`)
  console.log(`총 태그 수: ${Object.keys(tagMap).length}`)
}

// 환경변수 확인
if (!process.env.OPENAI_API_KEY) {
  console.error("Error: OPENAI_API_KEY가 설정되지 않았습니다.")
  process.exit(1)
}

// 실행
generateJsonFiles().catch(console.error)
