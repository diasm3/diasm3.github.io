---
layout  : wiki
title   : Cheerio 사용법
summary : Cheerio 라이브러리를 사용하여 네이버에서 실시간 환율 데이터를 백엔드에서 가져오는 방법
date    : 2022-07-31 18:37:37 +0900
updated : 2022-08-08 10:48:50 +0900
tag     : nodejs, cheerio, 웹 스크래핑
 toc     : true
public  : true
parent  : [[DevOps]] 
latex   : false
---
* TOC
{:toc}

# Cheerio란?  
> Cheerio는 서버에서 사용할 수 있도록 특별히 설계된 JQuery의 빠르고 유연한 구현체입니다.

## Cheerio의 주요 특징  
- 빠른 HTML 파싱
- jQuery와 유사한 문법
- 서버 환경에서 사용 가능  

## 사용 방법  
Cheerio를 사용하여 Node.js에서 원하는 웹사이트의 내용을 jQuery 스타일로 가져오는 방법을 설명합니다.  

### 1. 환경 설정  
1. Node.js를 설치합니다.
2. Cheerio를 설치합니다:  
   ```bash
   npm install cheerio
   ```

### 2. 코드 예시  
다음은 네이버에서 실시간 환율 정보를 가져오는 코드 예시입니다:
```javascript
const axios = require('axios');
const cheerio = require('cheerio');

async function fetchExchangeRate() {
    try {
        const { data } = await axios.get('https://finance.naver.com/marketindex/exchange.nhn');
        const $ = cheerio.load(data);

        // 환율 정보 추출
        const exchangeRate = $('div.head_info > span.value').text();
        console.log(`현재 환율: ${exchangeRate}`);
    } catch (error) {
        console.error('에러 발생:', error);
    }
}

fetchExchangeRate();
```

### 3. 설명  
- 이 코드는 Axios를 사용하여 네이버의 환율 페이지에서 데이터를 가져온 후 Cheerio를 통해 HTML을 탐색합니다.
- `$('div.head_info > span.value').text()`를 사용하여 현재 환율 정보를 추출합니다.

### 4. 실제 사용 사례  
이 기능은 실시간 환율 정보를 사용자에게 제공해야 하는 금융 웹 애플리케이션이나 봇에서 유용하게 사용됩니다.