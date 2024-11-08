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

// async function summarizeContent(content, fileHash) {
//   const cache = readCache()

//   if (cache[fileHash] && cache[fileHash].hash === fileHash) {
//     console.log("캐시된 요약 사용")
//     return cache[fileHash]
//   }

//   try {
//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         {
//           role: "system",
//           content:
//             "기술 문서의 내용을 분석하여 간단한 요약, 관련 태그, 문서의 완성도를 평가해주세요. 태그는 최대 5개까지만 생성해주세요.",
//         },
//         {
//           role: "user",
//           content: content,
//         },
//       ],
//       functions: [
//         {
//           name: "process_document",
//           description: "문서를 처리하고 요약, 태그, 완성도를 평가합니다.",
//           parameters: {
//             type: "object",
//             properties: {
//               summary: {
//                 type: "string",
//                 description: "문서의 간단한 요약 (1-2문장)",
//               },
//               tags: {
//                 type: "array",
//                 items: {
//                   type: "string",
//                 },
//                 description: "문서와 관련된 태그들 (최대 5개)",
//               },
//               completionStatus: {
//                 type: "object",
//                 properties: {
//                   status: {
//                     type: "string",
//                     enum: ["completed", "draft"],
//                     description: "문서의 완성 상태",
//                   },
//                   progress: {
//                     type: "number",
//                     minimum: 0,
//                     maximum: 100,
//                     description: "문서의 완성도 (퍼센트)",
//                   },
//                   analysis: {
//                     type: "string",
//                     description: "문서 상태에 대한 간단한 분석",
//                   },
//                 },
//                 required: ["status", "progress", "analysis"],
//               },
//             },
//             required: ["summary", "tags", "completionStatus"],
//           },
//         },
//       ],
//       function_call: { name: "process_document" },
//     })

//     const result = JSON.parse(
//       response.choices[0].message.function_call.arguments
//     )

//     cache[fileHash] = {
//       ...result,
//       hash: fileHash,
//       timestamp: new Date().toISOString(),
//     }

//     saveCache(cache)
//     console.log("새로운 요약 생성 및 캐시")
//     return result
//   } catch (error) {
//     console.error("AI 요약 생성 실패:", error)
//     return {
//       summary: "",
//       tags: [],
//       completionStatus: {
//         status: "draft",
//         progress: 0,
//         analysis: "분석 실패",
//       },
//     }
//   }
// }

// async function summarizeContent(content, fileHash) {
//   const cache = readCache()

//   // 캐시에 있고 해시가 같으면 캐시된 요약 반환
//   if (cache[fileHash] && cache[fileHash].hash === fileHash) {
//     console.log("캐시된 요약 사용")
//     return cache[fileHash]
//   }

//   try {
//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         {
//           role: "system",
//           content:
//             "기술 문서의 내용을 분석하여 간단한 요약과 관련 태그를 생성해주세요. 태그는 최대 5개까지만 생성해주세요.",
//         },
//         {
//           role: "user",
//           content: content,
//         },
//       ],
//       functions: [
//         {
//           name: "process_document",
//           description: "문서를 처리하고 요약과 태그를 생성합니다.",
//           parameters: {
//             type: "object",
//             properties: {
//               summary: {
//                 type: "string",
//                 description: "문서의 간단한 요약 (1-2문장)",
//               },
//               tags: {
//                 type: "array",
//                 items: {
//                   type: "string",
//                 },
//                 description: "문서와 관련된 태그들 (최대 5개)",
//               },
//             },
//             required: ["summary", "tags"],
//           },
//         },
//       ],
//       function_call: { name: "process_document" },
//     })

//     const result = JSON.parse(
//       response.choices[0].message.function_call.arguments
//     )

//     // 결과를 캐시에 저장
//     cache[fileHash] = {
//       ...result,
//       hash: fileHash,
//       timestamp: new Date().toISOString(),
//     }

//     saveCache(cache)
//     console.log("새로운 요약 생성 및 캐시")
//     return result
//   } catch (error) {
//     console.error("AI 요약 생성 실패:", error)
//     return { summary: "", tags: [] }
//   }
// }

// async function getAllMarkdownFiles() {
//   const contentDir = path.join(process.cwd(), "content")
//   const files = fs.readdirSync(contentDir)
//   const results = []

//   for (const fileName of files) {
//     if (fileName.endsWith(".md")) {
//       const filePath = path.join(contentDir, fileName)
//       const fileContent = fs.readFileSync(filePath, "utf8")
//       const { data, content } = matter(fileContent)

//       // 파일 내용의 해시 생성
//       const fileHash = generateFileHash(content)

//       // AI 요약 생성 또는 캐시에서 가져오기
//       const aiAnalysis = await summarizeContent(content, fileHash)

//       results.push({
//         slug: fileName.replace(".md", ""),
//         title: data.title || fileName.replace(".md", "").replace(/-/g, " "),
//         description: data.description,
//         tags: [
//           ...(data.tags
//             ? Array.isArray(data.tags)
//               ? data.tags
//               : data.tags.split(/,\s*/)
//             : []),
//           ...aiAnalysis.tags,
//         ],
//         date: data.date,
//         content: content,
//         aiSummary: aiAnalysis.summary,
//         contentHash: fileHash,
//         lastProcessed: new Date().toISOString(),
//       })
//     }
//   }

//   return results
// }

// // scripts/generateData.js
// async function getAllMarkdownFiles() {
//   const contentDir = path.join(process.cwd(), "content")
//   const files = fs.readdirSync(contentDir)
//   const results = []
//   const usedSlugs = new Set() // 사용된 slug 추적

//   for (const fileName of files) {
//     if (fileName.endsWith(".md")) {
//       const filePath = path.join(contentDir, fileName)
//       const fileContent = fs.readFileSync(filePath, "utf8")
//       const { data, content } = matter(fileContent)
//       const fileHash = generateFileHash(content)
//       const aiAnalysis = await summarizeContent(content, fileHash)

//       // 기본 slug 생성
//       let baseSlug = fileName.replace(".md", "")
//       let slug = baseSlug
//       let counter = 1

//       // slug가 이미 사용중이면 번호 추가
//       while (usedSlugs.has(slug)) {
//         slug = `${baseSlug}-${counter}`
//         counter++
//       }
//       usedSlugs.add(slug)

//       const stats = fs.statSync(filePath)

//       results.push({
//         slug,
//         uniqueId: `${slug}-${fileHash.slice(0, 8)}`, // 고유 ID 추가
//         title: data.title || fileName.replace(".md", "").replace(/-/g, " "),
//         description: data.description,
//         tags: [
//           ...(data.tags
//             ? Array.isArray(data.tags)
//               ? data.tags
//               : data.tags.split(/,\s*/)
//             : []),
//           ...aiAnalysis.tags,
//         ],
//         date: data.date || stats.mtime.toISOString(),
//         content: content,
//         aiSummary: aiAnalysis.summary,
//         contentHash: fileHash,
//         lastProcessed: new Date().toISOString(),
//         created: stats.birthtime.toISOString(),
//         modified: stats.mtime.toISOString(),
//       })
//     }
//   }

//   // 날짜로 정렬
//   return results.sort((a, b) => {
//     const dateA = new Date(a.date || a.modified)
//     const dateB = new Date(b.date || b.modified)
//     return dateB.getTime() - dateA.getTime()
//   })
// }

// async function generateJsonFiles() {
//   console.log("마크다운 파일 분석 및 AI 요약 생성 중...")
//   const wikiData = await getAllMarkdownFiles()
//   const dataDir = path.join(process.cwd(), "data")

//   if (!fs.existsSync(dataDir)) {
//     fs.mkdirSync(dataDir, { recursive: true })
//   }

//   // 메타데이터 저장
//   fs.writeFileSync(
//     path.join(dataDir, "wiki-metadata.json"),
//     JSON.stringify(
//       wikiData.map(({ contentHash, ...rest }) => rest),
//       null,
//       2
//     )
//   )

//   // 태그 맵 생성 및 저장
//   const tagMap = {}
//   wikiData.forEach((wiki) => {
//     if (wiki.tags && wiki.tags.length > 0) {
//       wiki.tags.forEach((tag) => {
//         const normalizedTag = tag.trim().toLowerCase()
//         if (!tagMap[normalizedTag]) {
//           tagMap[normalizedTag] = []
//         }
//         tagMap[normalizedTag].push({
//           slug: wiki.slug,
//           title: wiki.title,
//           description: wiki.description,
//           aiSummary: wiki.aiSummary,
//         })
//       })
//     }
//   })

//   fs.writeFileSync(
//     path.join(dataDir, "tags.json"),
//     JSON.stringify(tagMap, null, 2)
//   )

//   console.log("데이터 파일 생성 완료!")
//   console.log(`총 문서 수: ${wikiData.length}`)
//   console.log(`총 태그 수: ${Object.keys(tagMap).length}`)
// }

// // 환경변수 확인
// if (!process.env.OPENAI_API_KEY) {
//   console.error("Error: OPENAI_API_KEY가 설정되지 않았습니다.")
//   process.exit(1)
// }

// async function getAllMarkdownFiles() {
//   const contentDir = path.join(process.cwd(), "content")
//   const files = fs.readdirSync(contentDir)
//   const results = []
//   const usedSlugs = new Set()

//   for (const fileName of files) {
//     if (fileName.endsWith(".md")) {
//       const filePath = path.join(contentDir, fileName)
//       const fileContent = fs.readFileSync(filePath, "utf8")
//       const { data, content } = matter(fileContent)
//       const fileHash = generateFileHash(content)
//       const aiAnalysis = await summarizeContent(content, fileHash)
//       const stats = fs.statSync(filePath)

//       // 기본 slug 생성 및 중복 처리
//       let baseSlug = fileName.replace(".md", "")
//       let slug = baseSlug
//       let counter = 1

//       while (usedSlugs.has(slug)) {
//         slug = `${baseSlug}-${counter}`
//         counter++
//       }
//       usedSlugs.add(slug)

//       // frontmatter에서 상태 정보 가져오기 (없으면 AI 분석 결과 사용)
//       const status = data?.status || aiAnalysis.completionStatus.status
//       const progress = data?.progress || aiAnalysis.completionStatus.progress

//       results.push({
//         slug,
//         uniqueId: `${slug}-${fileHash.slice(0, 8)}`,
//         title: data.title || fileName.replace(".md", "").replace(/-/g, " "),
//         description: data.description,
//         tags: [
//           ...(data.tags
//             ? Array.isArray(data.tags)
//               ? data.tags
//               : data.tags.split(/,\s*/)
//             : []),
//           ...aiAnalysis.tags,
//         ],
//         date: data.date || stats.mtime.toISOString(),
//         content: content,
//         aiSummary: aiAnalysis.summary,
//         status: status,
//         progress: progress,
//         statusAnalysis: aiAnalysis.completionStatus.analysis,
//         contentHash: fileHash,
//         lastProcessed: new Date().toISOString(),
//         created: stats.birthtime.toISOString(),
//         modified: stats.mtime.toISOString(),
//         wordCount: content.split(/\s+/).length,
//         readingTime: Math.ceil(content.split(/\s+/).length / 200), // 분 단위 예상 읽기 시간
//       })
//     }
//   }

//   // 날짜 및 상태로 정렬
//   return results.sort((a, b) => {
//     // 완성된 문서를 먼저 보여줌
//     if (a.status !== b.status) {
//       return a.status === "completed" ? -1 : 1
//     }
//     // 같은 상태면 날짜순
//     const dateA = new Date(a.date || a.modified)
//     const dateB = new Date(b.date || b.modified)
//     return dateB.getTime() - dateA.getTime()
//   })
// }

// async function generateJsonFiles() {
//   console.log("마크다운 파일 분석 및 AI 요약 생성 중...")
//   const wikiData = await getAllMarkdownFiles()
//   const dataDir = path.join(process.cwd(), "data")

//   if (!fs.existsSync(dataDir)) {
//     fs.mkdirSync(dataDir, { recursive: true })
//   }

//   // 메타데이터 저장
//   fs.writeFileSync(
//     path.join(dataDir, "wiki-metadata.json"),
//     JSON.stringify(
//       wikiData.map(({ contentHash, ...rest }) => rest),
//       null,
//       2
//     )
//   )

//   // 태그 맵 생성 및 저장
//   const tagMap = {}
//   wikiData.forEach((wiki) => {
//     if (wiki.tags && wiki.tags.length > 0) {
//       wiki.tags.forEach((tag) => {
//         const normalizedTag = tag.trim().toLowerCase()
//         if (!tagMap[normalizedTag]) {
//           tagMap[normalizedTag] = []
//         }
//         tagMap[normalizedTag].push({
//           slug: wiki.slug,
//           title: wiki.title,
//           description: wiki.description,
//           aiSummary: wiki.aiSummary,
//           status: wiki.status,
//           progress: wiki.progress,
//         })
//       })
//     }
//   })

//   // 상태별 통계 생성
//   const stats = {
//     total: wikiData.length,
//     completed: wikiData.filter((w) => w.status === "completed").length,
//     draft: wikiData.filter((w) => w.status === "draft").length,
//     tags: Object.keys(tagMap).length,
//     averageProgress: Math.round(
//       wikiData.reduce((acc, curr) => acc + curr.progress, 0) / wikiData.length
//     ),
//     lastUpdated: new Date().toISOString(),
//   }

//   fs.writeFileSync(
//     path.join(dataDir, "tags.json"),
//     JSON.stringify(tagMap, null, 2)
//   )

//   fs.writeFileSync(
//     path.join(dataDir, "wiki-stats.json"),
//     JSON.stringify(stats, null, 2)
//   )

//   console.log("데이터 파일 생성 완료!")
//   console.log(`총 문서 수: ${stats.total}`)
//   console.log(`완성된 문서: ${stats.completed}`)
//   console.log(`작성중인 문서: ${stats.draft}`)
//   console.log(`평균 진행률: ${stats.averageProgress}%`)
//   console.log(`총 태그 수: ${stats.tags}`)
// }

// // 환경변수 확인 및 실행
// if (!process.env.OPENAI_API_KEY) {
//   console.error("Error: OPENAI_API_KEY가 설정되지 않았습니다.")
//   process.exit(1)
// }

// summarizeContent 함수 수정
async function summarizeContent(content, fileHash) {
  const cache = readCache()

  // 캐시된 결과가 있으면 반환
  if (cache[fileHash] && cache[fileHash].hash === fileHash) {
    console.log("캐시된 요약 사용")
    const cachedResult = cache[fileHash]
    // 기존 캐시에 completionStatus가 없는 경우를 위한 기본값 설정
    return {
      ...cachedResult,
      completionStatus: cachedResult.completionStatus || {
        status: "draft",
        progress: 50,
        analysis: "자동 생성된 상태",
      },
    }
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "기술 문서의 내용을 분석하여 간단한 요약, 관련 태그, 문서의 완성도를 평가해주세요. 태그는 최대 5개까지만 생성해주세요.",
        },
        {
          role: "user",
          content: content,
        },
      ],
      functions: [
        {
          name: "process_document",
          description: "문서를 처리하고 요약, 태그, 완성도를 평가합니다.",
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
              completionStatus: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    enum: ["completed", "draft"],
                    description: "문서의 완성 상태",
                  },
                  progress: {
                    type: "number",
                    minimum: 0,
                    maximum: 100,
                    description: "문서의 완성도 (퍼센트)",
                  },
                  analysis: {
                    type: "string",
                    description: "문서 상태에 대한 간단한 분석",
                  },
                },
                required: ["status", "progress", "analysis"],
              },
            },
            required: ["summary", "tags", "completionStatus"],
          },
        },
      ],
      function_call: { name: "process_document" },
    })

    const result = JSON.parse(
      response.choices[0].message.function_call.arguments
    )

    // 결과 캐시 저장
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
    // 에러 발생 시 기본값 반환
    return {
      summary: "",
      tags: [],
      completionStatus: {
        status: "draft",
        progress: 50,
        analysis: "분석 실패로 인한 기본 상태",
      },
    }
  }
}

// getAllMarkdownFiles 함수 수정
async function getAllMarkdownFiles() {
  const contentDir = path.join(process.cwd(), "content")
  const files = fs.readdirSync(contentDir)
  const results = []
  const usedSlugs = new Set()

  for (const fileName of files) {
    if (fileName.endsWith(".md")) {
      const filePath = path.join(contentDir, fileName)
      const fileContent = fs.readFileSync(filePath, "utf8")
      const { data, content } = matter(fileContent)
      const fileHash = generateFileHash(content)

      // AI 분석 결과 가져오기
      const aiAnalysis = await summarizeContent(content, fileHash)
      const stats = fs.statSync(filePath)

      // 기본 slug 생성 및 중복 처리
      let baseSlug = fileName.replace(".md", "")
      let slug = baseSlug
      let counter = 1

      while (usedSlugs.has(slug)) {
        slug = `${baseSlug}-${counter}`
        counter++
      }
      usedSlugs.add(slug)

      // 안전하게 상태 정보 가져오기
      const completionStatus = aiAnalysis?.completionStatus || {
        status: "draft",
        progress: 50,
        analysis: "기본 상태",
      }

      // frontmatter의 status와 progress가 있으면 사용, 없으면 AI 분석 결과 사용
      const status = data.status || completionStatus.status || "draft"
      const progress = data.progress || completionStatus.progress || 50

      // 단어 수 계산
      const wordCount = content.split(/\s+/).length

      results.push({
        slug,
        uniqueId: `${slug}-${fileHash.slice(0, 8)}`,
        title: data.title || fileName.replace(".md", "").replace(/-/g, " "),
        description: data.description || "",
        tags: [
          ...(data.tags
            ? Array.isArray(data.tags)
              ? data.tags
              : data.tags.split(/,\s*/)
            : []),
          ...(aiAnalysis?.tags || []),
        ],
        date: data.date || stats.mtime.toISOString(),
        content: content,
        aiSummary: aiAnalysis?.summary || "",
        status: status,
        progress: progress,
        statusAnalysis: completionStatus.analysis,
        contentHash: fileHash,
        lastProcessed: new Date().toISOString(),
        created: stats.birthtime.toISOString(),
        modified: stats.mtime.toISOString(),
        wordCount: wordCount,
        readingTime: Math.ceil(wordCount / 200), // 분 단위 예상 읽기 시간
      })
    }
  }

  // 정렬: 완성된 문서 우선, 그 다음 날짜순
  return results.sort((a, b) => {
    if (a.status !== b.status) {
      return a.status === "completed" ? -1 : 1
    }
    const dateA = new Date(a.date || a.modified)
    const dateB = new Date(b.date || b.modified)
    return dateB.getTime() - dateA.getTime()
  })
}

// generateJsonFiles 함수에서 상태 관련 통계 처리 수정
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
          description: wiki.description || "",
          aiSummary: wiki.aiSummary || "",
          status: wiki.status || "draft",
          progress: wiki.progress || 50,
        })
      })
    }
  })

  // 상태별 통계 생성 (안전하게 처리)
  const stats = {
    total: wikiData.length,
    completed: wikiData.filter((w) => w.status === "completed").length,
    draft: wikiData.filter((w) => w.status === "draft").length,
    tags: Object.keys(tagMap).length,
    averageProgress: Math.round(
      wikiData.reduce((acc, curr) => acc + (curr.progress || 50), 0) /
        wikiData.length
    ),
    lastUpdated: new Date().toISOString(),
  }

  fs.writeFileSync(
    path.join(dataDir, "tags.json"),
    JSON.stringify(tagMap, null, 2)
  )

  fs.writeFileSync(
    path.join(dataDir, "wiki-stats.json"),
    JSON.stringify(stats, null, 2)
  )

  console.log("데이터 파일 생성 완료!")
  console.log(`총 문서 수: ${stats.total}`)
  console.log(`완성된 문서: ${stats.completed}`)
  console.log(`작성중인 문서: ${stats.draft}`)
  console.log(`평균 진행률: ${stats.averageProgress}%`)
  console.log(`총 태그 수: ${stats.tags}`)
}

// 실행
generateJsonFiles().catch(console.error)
