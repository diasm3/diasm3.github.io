---
layout  : wiki
title   : NestJS 내장 Swagger 사용 가이드
summary : NestJS에서 Swagger를 쉽게 설정하고 활용하는 방법에 대한 자세한 설명.
date    : 2022-07-17 22:50:42 +0900
updated : 2022-10-10 17:33:33 +0900
tag     : [swagger, nestjs, api-docs]
toc     : true
public  : true
parent  : [[nestjs]] 
latex   : false
---

* TOC
{:toc}

# Swagger 도구 소개
> Swagger는 API의 명세서와 데이터를 쉽게 주입하여 테스트할 수 있는 툴입니다.

## Swagger 설정하기  
Swift에서 Swagger를 사용하기 위해 먼저 swagger-ui-express와 swagger-jsdoc 패키지를 설치해야 합니다.

```bash
npm install swagger-ui-express swagger-jsdoc
```

## Swagger 구성  
설치 후, Swagger를 설정하는 방법은 다음과 같습니다:

```javascript
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express');

const app = express();

// Swagger 옵션 설정
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "NestJS API",
            version: "1.0.0",
            description: "API 문서화에 사용되는 Swagger 예제",
        },
    },
    apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(3000, () => {
    console.log('서버가 3000번 포트에서 실행 중입니다.');
});
```

## Swagger 사용 예  
Swagger를 사용하면 API 엔드포인트를 시각적으로 테스트하고 문서화할 수 있습니다. Swagger UI에 접속하여 구현한 API를 확인하세요.

### 실제 사용 사례  
예를 들어, 다음과 같은 엔드포인트를 Swagger에 추가할 수 있습니다:

```javascript
/**
 * @swagger
 * /users:
 *   get:
 *     summary: 사용자 목록 가져오기
 *     responses:
 *       200:
 *         description: 성공적으로 사용자 목록을 반환합니다.
 */
app.get('/users', (req, res) => {
    res.status(200).json([{ name: 'John Doe' }, { name: 'Jane Doe' }]);
});
```

# 결론
이 문서에서는 NestJS에서 Swagger를 사용하는 방법에 대해 알아보았습니다. API 문서화를 쉽게 처리할 수 있으며, 보다 나은 협업 환경을 제공합니다.