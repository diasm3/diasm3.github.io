---
layout  : category
title   : JavaScript Overview
summary : This document provides an overview of JavaScript, covering essential concepts and features including ES6, asynchronous programming, and object-oriented programming. It is designed for developers looking to deepen their understanding of JavaScript.
date    : 2022-03-25T06:24:54+09:00
updated : 2022-04-11T01:31:52+09:00
tag     : javascript, es6, asynchronous, programming, concepts
toc     : true
public  : true
parent  : [[index]]
latex   : false
---

* TOC
{:toc}

# 카테고리
## JavaScript 
- JavaScript Essentials (JavaScript ES6)
    * [[origin]]{1장. 기원}
    * [[async-defer]]{2장. sync와 defer 차이점}
    * [[letVsVar]]{3장. let vs var}
    * [[operator-if-for-loop]]{4장. operator, if, for loop}
    * [[arrow-function]]{5장. arrow function}
    * [[class-vs-object]]{6장. class vs object}
    * [[what-is-object]]{7장. object의 정의}
    * [[array-APIs]]{8장. Array API}
    * [[json-js]]{10장. JSON 개념}
    * [[callback-function]]{11장. callback, promise, async, await}

- Planned Topics for Wednesday 
    * [[promise-js]]{12장. 프로미스 개념 및 활용}
    * [[async-await]]{13장. async와 await}


## 예제 코드

### Async/Await Example
```javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
```

### Callback Function Example
```javascript
function fetchDataWithCallback(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error));
}
```

## 실제 사용 사례
1. **비동기 데이터 로드**: 사용자가 웹앱에서 버튼을 클릭하여 데이터를 요청할 때 Async/Await를 사용하여 응답을 비동기적으로 처리할 수 있습니다. 
2. **API 호출**: 다양한 API에서 데이터를 가져오고 처리할 때 Callback 함수를 활용하여 결과를 전달할 수 있습니다.