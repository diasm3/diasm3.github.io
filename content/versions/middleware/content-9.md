---
layout  : wiki
title   : Express 미들웨어 작동 방식
summary : Express의 미들웨어 사용법 및 실제 예제
date    : 2022-04-13 06:31:41 +0900
updated : 2023-10-01 10:34:26 +0900
tag     : express, middleware, router, error-handling  
toc     : true
public  : true
parent  : [[nodejs]] 
latex   : false
---
* TOC
{:toc}

## 사용 방법
Express의 미들웨어는 요청(Request)과 응답(Response) object를 처리하는 중간 역할을 합니다. 사용 방법은 간단합니다.

### 기본 사용법
아래 코드는 미들웨어를 사용하는 기본 예제입니다:

```javascript
import express from 'express';
const app = express();

// 라우터의 경로와 콜백 함수 사이에 원하는 미들웨어를 집어넣으면 된다.
app.use('/', middleware, (req, res, next) => {
    // 처리 코드
});

// 콜백 함수의 3번째 인자인 next를 호출하여 그 다음 미들웨어로 넘어갈 수 있다.
app.use('/', (req, res, next) => {
    next(); // next() 함수 호출로 다음 단계의 라우터로 넘어간다.
});
```

## Application-level middleware
Application-level middleware는 애플리케이션 전체에 적용되는 미들웨어입니다. 다음은 그 예입니다:

```javascript
import express from 'express';
const app = express();

// 예: 모든 요청에 대해 로그를 남기도록 설정
app.use((req, res, next) => {
    console.log(`Request URL: ${req.originalUrl}`);
    next();
});
```

## Router-level middleware
Router-level middleware는 특정 라우터에만 적용되는 미들웨어입니다. 아래의 예제에서 확인할 수 있습니다:

```javascript
import express from 'express';
const router = express.Router();

router.use((req, res, next) => {
    console.log(`Router accessed: ${req.path}`);
    next();
});
```

## Error-handling middleware
Error-handling middleware는 에러 발생 시 호출됩니다. 다음은 에러 핸들링 미들웨어의 예제입니다:

```javascript
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something broke!');
});
```

## 실제 사용 사례
애플리케이션에서 미들웨어를 효과적으로 사용하는 방법은 다음과 같습니다:
- 인증 미들웨어: 사용자 인증을 위한 미들웨어를 생성하여 보호된 라우트에 접근할 수 있는 사용자만 허용합니다.
- 로깅 미들웨어: 모든 요청 경로와 메서드를 기록하여 나중의 디버깅에 도움을 줄 수 있습니다.