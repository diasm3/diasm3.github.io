#!/bin/bash

# 1. 디렉토리 구조 생성
mkdir -p src/{components,styles,lib,types}
mkdir -p src/app/{wiki,blog,search}
mkdir -p src/components/{Header,Footer,SearchBox,TagList,MDRenderer}

# 2. 컴포넌트 파일 생성
touch src/components/Header/{index.tsx,styles.ts}
touch src/components/Footer/{index.tsx,styles.ts}
touch src/components/SearchBox/{index.tsx,styles.ts}
touch src/components/TagList/{index.tsx,styles.ts}
touch src/components/MDRenderer/{index.tsx,styles.ts}

# 3. 스타일 파일 생성
touch src/styles/{globalStyles.ts,theme.ts}

# 4. lib 파일 생성
touch src/lib/{mdParser.ts,registry.tsx}

# 5. types 파일 생성
touch src/types/index.ts

# 6. app 라우트 파일 생성
touch src/app/wiki/page.tsx
touch src/app/wiki/[slug]/page.tsx
touch src/app/blog/page.tsx
touch src/app/search/page.tsx

# 7. 실행 권한 부여
chmod +x setup.sh