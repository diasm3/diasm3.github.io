---
layout  : wiki
title   : Express의 미들웨어 작동방식
summary : middleware 사용법 
date    : 2022-04-13 06:31:41 +0900
updated : 2022-04-13 10:34:26 +0900
tag     : express middleware router  
toc     : true
public  : true
parent  : [[nodejs]] 
latex   : false
---
* TOC
{:toc}

## 사용방법
* 사용방법은 간단한다


```javascript
import express from 'express'
const app = express()

// 라우터의 경로와 콜백함수 사이에 원하는 미들웨어를 집어넣으면 된다
app.use('/', middleware, (req, res, next)=>{
})


// 콜백함수 3번째에 next를 넣고 호출하게 되면 다음 라우터로 데이터 값이 자동으로 넘어간다
app.use('/', (req, res, next) => {
    
    next() // next() 함수로 다음 단계의 라우터로 넘어간다
})
```

## Application-level middleware 
```javascript 
import express from 'express'
const app = express()

app.use('/',   )


```

## Router-level middleware
* 

## Error-handling middleware
* 



