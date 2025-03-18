---
layout  : wiki
title   : IIFE (즉시 실행 함수)란?
summary : 즉시 실행 함수(Immediately Invoked Function Expression)는 자바스크립트에서 즉시 실행되는 함수를 정의하는 표현식입니다.
date    : 2022-04-13 11:09:11 +0900
updated : 2023-10-01 18:00:00 +0900
tag     : function, javascript, programming
 toc     : true
public  : true
parent  : [[nodejs]] 
latex   : false
---
* TOC
{:toc}

# IIFE (즉시 실행 함수)  
IIFE는 함수를 정의하자마자 즉시 호출하는 JavaScript 구문입니다. 비어있는 블록 안에는 실행할 코드가 포함됩니다.

## 사용 방법  
IIFE는 다음과 같이 정의할 수 있습니다:
```javascript
(function () {
    console.log("Hello, World!");
})();
```

이 예제에서는 익명 함수가 정의되자마자 호출되며, "Hello, World!"가 콘솔에 출력됩니다.

## 함수 리터럴  
IIFE는 그 자체로 함수를 정의하고 호출하는 방법이므로, 함수 리터럴의 일종으로 볼 수 있습니다.  
더 나아가, 이러한 패턴은 스코프를 보호하고 변수 충돌을 방지하는 데 유용합니다.

## 즉시 실행 함수
즉시 실행 함수는 여러 가지 유용한 용도로 사용됩니다:
- 코드 블록을 격리하여 전역 네임스페이스 오염을 방지
- 초기화 코드 실행 (예: 모듈 패턴)
- 클로저를 활용하여 상태 유지

## 실제 사용 사례
이 패턴은 모듈 패턴에서 종종 사용됩니다. 예를 들어, 간단한 카운터를 구현할 때 IIFE를 사용할 수 있습니다:
```javascript
const counter = (function () {
    let count = 0;
    return {
        increment: function() { count++; },
        getCount: function() { return count; }
    };
})();

counter.increment();
console.log(counter.getCount()); // 1
```

이와 같이 IIFE는 단순한 함수 호출 이상의 역할을 하며, 데이터를 보호하고 구조화된 코드를 작성하는 데 큰 도움을 줍니다.