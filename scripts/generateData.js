// scripts/generateData.js
const fs = require("fs")
const path = require("path")
const matter = require("gray-matter")
const crypto = require("crypto")
const OpenAI = require("openai")

require("dotenv").config()

const IMPROVEMENT_PROMPT = `당신은 전문적인 기술 문서 에디터입니다. 다음 마크다운 문서를 분석하고 개선해주세요:

1. 메타데이터 검사 및 개선:
   - 제목의 명확성과 정확성
   - 요약의 구체성
   - 태그의 적절성과 범위
   - 날짜 형식의 정확성

2. 문서 구조 개선:
   - 논리적 흐름
   - 섹션 구분의 명확성
   - 목차의 적절성

3. 내용 품질 향상:
   - 기술적 정확성
   - 예제 코드의 품질
   - 설명의 명확성
   - 실제 사용 사례 추가

4. 코드 품질 개선:
   - 일관된 코딩 스타일
   - 적절한 주석
   - 최신 문법 활용

원본 문서:
{originalContent}

위 문서를 개선하여 다음 형식으로 반환해주세요:
1. 개선된 전체 마크다운 문서
2. 변경 사항 목록
3. 개선 제안 사항`

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

function ensureDirectories() {
  const dirs = [
    path.join(process.cwd(), "content"),
    path.join(process.cwd(), "content/versions"),
    path.join(process.cwd(), "data"),
    path.join(process.cwd(), "data/cache"),
  ]

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
      console.log(`디렉토리 생성됨: ${dir}`)
    }
  })
}

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

async function saveNewVersion(slug, content, improvements) {
  const contentDir = path.join(process.cwd(), "content")
  const versionsDir = path.join(contentDir, "versions", slug)

  // 버전 디렉토리 생성
  if (!fs.existsSync(versionsDir)) {
    fs.mkdirSync(versionsDir, { recursive: true })
    console.log(`버전 디렉토리 생성됨: ${versionsDir}`)
  }

  let nextVersion = 2 // 기본값 설정

  // 최신 버전 번호 찾기
  const existingVersions = fs.existsSync(versionsDir)
    ? fs
        .readdirSync(versionsDir)
        .filter((file) => file.startsWith("version-"))
        .map((file) => parseInt(file.split("-")[1]))
    : []

  nextVersion =
    existingVersions.length > 0 ? Math.max(...existingVersions) + 1 : 2
  // } catch (error) {
  //   console.warn(`버전 번호 결정 중 오류 발생, 기본값 2 사용: ${error.message}`)
  // }

  // 새 버전 메타데이터
  const versionData = {
    version: nextVersion,
    date: new Date().toISOString(),
    changes: improvements.changes,
    author: "AI Assistant",
    summary: improvements.summary,
  }

  // try {
  // 버전 데이터와 컨텐츠 저장
  fs.writeFileSync(
    path.join(versionsDir, `version-${nextVersion}.json`),
    JSON.stringify(versionData, null, 2)
  )
  console.log(versionsDir, nextVersion, content)

  fs.writeFileSync(path.join(versionsDir, `content-${nextVersion}.md`), content)

  console.log(`새 버전 저장됨: ${slug} v${nextVersion}`)

  return {
    version: nextVersion,
    ...versionData,
  }
  // } catch (error) {
  //   console.error(`버전 저장 중 오류 발생: ${error.message}`)
  //   return null
}

// improveDocument 함수 수정
async function improveDocument(content, fileHash) {
  const cache = readCache()

  if (cache[fileHash] && cache[fileHash].hash === fileHash) {
    console.log("캐시된 개선사항 사용")
    return cache[fileHash]
  }

  try {
    const response = await openai.chat.completions.create({
      // model: "gpt-4-1106-preview",
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "당신은 전문적인 기술 문서 에디터입니다.",
        },
        {
          role: "user",
          content: IMPROVEMENT_PROMPT.replace("{originalContent}", content),
        },
      ],
      functions: [
        {
          name: "process_document_improvement",
          description: "문서를 분석하고 개선사항을 반환합니다.",
          parameters: {
            type: "object",
            properties: {
              improvedContent: {
                type: "string",
                description: "개선된 마크다운 문서 전체 내용",
              },
              summary: {
                type: "string",
                description: "이번 개선의 주요 내용 요약",
              },
              changes: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    type: {
                      type: "string",
                      enum: ["metadata", "structure", "content", "code"],
                      description: "변경 유형",
                    },
                    description: {
                      type: "string",
                      description: "변경 내용 설명",
                    },
                  },
                },
                description: "변경된 사항들의 목록",
              },
            },
            required: ["improvedContent", "summary", "changes"],
          },
        },
      ],
      function_call: { name: "process_document_improvement" },
    })

    const result = JSON.parse(
      response.choices[0].message.function_call.arguments
    )

    cache[fileHash] = {
      ...result,
      hash: fileHash,
      timestamp: new Date().toISOString(),
    }

    saveCache(cache)
    console.log("새로운 개선사항 생성 및 캐시")
    return result
  } catch (error) {
    console.error("AI 문서 개선 실패:", error)
    return null
  }
}

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

async function getAllMarkdownFiles() {
  const contentDir = path.join(process.cwd(), "content")

  // content 디렉토리가 없으면 생성
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true })
    console.log(`컨텐츠 디렉토리 생성됨: ${contentDir}`)
    return [] // 새로 생성된 경우 빈 배열 반환
  }

  const files = fs
    .readdirSync(contentDir)
    .filter(
      (file) =>
        file.endsWith(".md") &&
        fs.statSync(path.join(contentDir, file)).isFile()
    )

  if (files.length === 0) {
    console.log("처리할 마크다운 파일이 없습니다.")
    return []
  }

  const results = []
  const usedSlugs = new Set()

  for (const fileName of files) {
    try {
      const filePath = path.join(contentDir, fileName)
      const fileContent = fs.readFileSync(filePath, "utf8")
      const { data: frontMatter, content } = matter(fileContent)
      const fileHash = generateFileHash(content)

      // AI 분석 및 개선
      const improvementResult = await improveDocument(fileContent, fileHash)
      const aiAnalysis = await summarizeContent(content, fileHash)

      // 기본 slug 생성 및 중복 처리
      let baseSlug = fileName.replace(".md", "")
      let slug = baseSlug
      let counter = 1

      while (usedSlugs.has(slug)) {
        slug = `${baseSlug}-${counter}`
        counter++
      }
      usedSlugs.add(slug)

      // 개선된 버전 저장
      let versionInfo = null
      if (improvementResult) {
        versionInfo = await saveNewVersion(
          slug,
          improvementResult.improvedContent,
          {
            changes: improvementResult.changes,
            summary: improvementResult.summary,
          }
        )
      }

      const stats = fs.statSync(filePath)
      const completionStatus = aiAnalysis?.completionStatus || {
        status: "draft",
        progress: 50,
        analysis: "기본 상태",
      }

      results.push({
        slug,
        uniqueId: `${slug}-${fileHash.slice(0, 8)}`,
        title:
          frontMatter.title || fileName.replace(".md", "").replace(/-/g, " "),
        description: frontMatter.description || "",
        tags: [
          ...(frontMatter.tags
            ? Array.isArray(frontMatter.tags)
              ? frontMatter.tags
              : frontMatter.tags.split(/,\s*/)
            : []),
          ...(aiAnalysis?.tags || []),
        ],
        date: frontMatter.date || stats.mtime.toISOString(),
        content: content,
        aiSummary: aiAnalysis?.summary || "",
        status: frontMatter.status || completionStatus.status || "draft",
        progress: frontMatter.progress || completionStatus.progress || 50,
        statusAnalysis: completionStatus.analysis,
        lastVersion: versionInfo?.version || 1,
        lastUpdated: versionInfo?.date || stats.mtime.toISOString(),
        contentHash: fileHash,
        lastProcessed: new Date().toISOString(),
        created: stats.birthtime.toISOString(),
        modified: stats.mtime.toISOString(),
        wordCount: content.split(/\s+/).length,
        readingTime: Math.ceil(content.split(/\s+/).length / 200),
      })
    } catch (error) {
      console.error(`파일 처리 중 오류 발생 (${fileName}):`, error)
    }
  }
  return results.sort((a, b) => {
    if (a.status !== b.status) {
      return a.status === "completed" ? -1 : 1
    }
    const dateA = new Date(a.lastUpdated)
    const dateB = new Date(b.lastUpdated)
    return dateB.getTime() - dateA.getTime()
  })
}

async function processAllFiles() {
  const contentDir = path.join(process.cwd(), "content")
  const files = fs
    .readdirSync(contentDir)
    .filter(
      (file) =>
        file.endsWith(".md") &&
        fs.statSync(path.join(contentDir, file)).isFile()
    )

  const results = []
  const usedSlugs = new Set()

  for (const fileName of files) {
    try {
      const filePath = path.join(contentDir, fileName)
      const fileContent = fs.readFileSync(filePath, "utf8")
      const { data: frontMatter, content } = matter(fileContent)
      const fileHash = generateFileHash(content)

      // AI 분석 및 개선
      const improvementResult = await improveDocument(fileContent, fileHash)
      const aiAnalysis = await summarizeContent(content, fileHash)

      // Slug 생성 및 중복 처리
      let slug = fileName.replace(".md", "")
      let counter = 1
      while (usedSlugs.has(slug)) {
        slug = `${fileName.replace(".md", "")}-${counter}`
        counter++
      }
      usedSlugs.add(slug)

      // 버전 정보 저장
      const versionInfo = improvementResult
        ? await saveNewVersion(slug, improvementResult.improvedContent, {
            changes: improvementResult.changes,
            summary: improvementResult.summary,
          })
        : null

      const stats = fs.statSync(filePath)
      const completionStatus = aiAnalysis?.completionStatus || {
        status: "draft",
        progress: 50,
        analysis: "기본 상태",
      }

      // Wiki 링크 추출
      const wikiLinks = [...content.matchAll(/\[\[(.*?)\]\]/g)].map((match) => {
        const [fullMatch, link] = match
        const [pageName, displayName] = link.split("|")
        return { page: pageName, display: displayName || pageName }
      })

      results.push({
        slug,
        uniqueId: `${slug}-${fileHash.slice(0, 8)}`,
        title: frontMatter.title || slug.replace(/-/g, " "),
        description: frontMatter.description || "",
        tags: [
          ...(frontMatter.tags
            ? Array.isArray(frontMatter.tags)
              ? frontMatter.tags
              : frontMatter.tags.split(/,\s*/)
            : []),
          ...(aiAnalysis?.tags || []),
        ],
        date: frontMatter.date || stats.birthtime.toISOString(),
        content,
        wikiLinks,
        aiSummary: aiAnalysis?.summary || "",
        status: frontMatter.status || completionStatus.status || "draft",
        progress: frontMatter.progress || completionStatus.progress || 50,
        statusAnalysis: completionStatus.analysis,
        lastVersion: versionInfo?.version || 1,
        lastUpdated: versionInfo?.date || stats.mtime.toISOString(),
        lastProcessed: new Date().toISOString(),
        created: stats.birthtime.toISOString(),
        modified: stats.mtime.toISOString(),
        wordCount: content.split(/\s+/).length,
        readingTime: Math.ceil(content.split(/\s+/).length / 200),
      })
    } catch (error) {
      console.error(`파일 처리 중 오류 발생 (${fileName}):`, error)
    }
  }

  return results.sort((a, b) => {
    if (a.status !== b.status) {
      return a.status === "completed" ? -1 : 1
    }
    return new Date(b.lastUpdated) - new Date(a.lastUpdated)
  })
}

// generateJsonFiles 함수 수정
async function generateJsonFiles() {
  console.log("디렉토리 구조 확인 중...")
  ensureDirectories()

  console.log("마크다운 파일 분석, AI 요약 및 버전 관리 중...")
  const wikiData = await processAllFiles()

  if (wikiData.length === 0) {
    console.log("처리할 문서가 없습니다.")
    return
  }

  const dataDir = path.join(process.cwd(), "data")

  // 메타데이터 생성 및 저장
  const metadata = {
    lastUpdated: new Date().toISOString(),
    files: wikiData.reduce((acc, file) => {
      acc[file.slug] = file
      return acc
    }, {}),
    hierarchy: buildHierarchy(wikiData),
    stats: generateStats(wikiData),
  }

  // 파일 저장
  fs.writeFileSync(
    path.join(dataDir, "wiki-metadata.json"),
    JSON.stringify(metadata, null, 2)
  )

  // 태그 통계 생성
  const tagStats = generateTagStats(wikiData)
  fs.writeFileSync(
    path.join(dataDir, "tag-stats.json"),
    JSON.stringify(tagStats, null, 2)
  )

  console.log("데이터 파일 생성 완료!")
  logStats(metadata.stats)
}

function buildHierarchy(files) {
  const hierarchy = {
    categories: {},
    tags: {},
    recent: files
      .sort((a, b) => new Date(b.modified) - new Date(a.modified))
      .slice(0, 10)
      .map((f) => f.slug),
  }

  files.forEach((file) => {
    // 태그 기반 분류
    file.tags.forEach((tag) => {
      if (!hierarchy.tags[tag]) {
        hierarchy.tags[tag] = []
      }
      hierarchy.tags[tag].push(file.slug)
    })

    // 위키 링크 기반 관계 구축
    file.wikiLinks.forEach((link) => {
      const category = link.page.split("/")[0]
      if (!hierarchy.categories[category]) {
        hierarchy.categories[category] = {
          pages: [],
          subcategories: {},
        }
      }
      hierarchy.categories[category].pages.push(file.slug)
    })
  })

  return hierarchy
}

function generateTagStats(files) {
  const tagCounts = {}
  files.forEach((file) => {
    file.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
  })

  return Object.entries(tagCounts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
}

function logStats(stats) {
  console.log(`총 문서 수: ${stats.total}`)
  console.log(`완성된 문서: ${stats.completed}`)
  console.log(`작성중인 문서: ${stats.draft}`)
  console.log(`총 버전 수: ${stats.versions.total}`)
  console.log(`문서당 평균 버전: ${stats.versions.average}`)
  console.log(
    `마지막 업데이트: ${new Date(stats.versions.lastUpdate).toLocaleString()}`
  )
  console.log(`평균 진행률: ${stats.averageProgress}%`)
}

// 실행
generateJsonFiles().catch((error) => {
  console.error("실행 중 오류 발생:", error)
  process.exit(1)
})
