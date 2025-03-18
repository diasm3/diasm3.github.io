---
layout  : wiki
title   : 함수 리터럴이란 무엇인가?
summary : 함수 리터럴은 자바스크립트에서 함수를 정의하는 방법 중 하나로, 이름 없이 즉시 사용할 수 있는 기능을 제공합니다.
date    : 2022-04-13T11:14:51+09:00
updated : 2023-10-05T13:28:20+09:00
tag     : ["function literals", "JavaScript", "프로그래밍"]  
toc     : true
public  : true
parent  : [[nodejs]] 
latex   : false
---
* TOC
{:toc}

# 함수 리터럴(function literals)
함수 리터럴이란 무엇인가? 이 개념은 자주 등장하지만, 그 의미를 정확히 이해하기 어려운 경우가 많습니다. 따라서 이번 문서에서 자세히 설명하겠습니다.

## 리터럴의 정의
> **리터럴**의 사전적인 의미: 정확한,...
융통성 없는, 문자 그대로 정확한, 문자의, 문자사아의  
MDN에서는 이렇게 정의합니다:
>Literals represent values in JavaScript. These are fixed values—not variables—that you literally provide in your script.

리터럴의 예시는 다음과 같습니다:
- Array literals
- Boolean literals
- Floating-point literals
- Numeric literals
- Object literals
- RegExp literals
- String literals

## 함수 리터럴의 개념
함수 리터럴은 함수의 이름 없이 사용되는 함수 정의 방식입니다. 즉, 함수명을 사용하지 않고 상태만 나타내는 것이 특징입니다. 코드 예시를 통해 이해해보겠습니다:

```javascript
// 함수 리터럴의 예
const what = function() {
    console.log("hello world");
};
```

* 자바스크립트의 모든 리터럴 값은 객체로 되어 있습니다.
* 따라서, 함수를 변수에 담는 것도 가능합니다. 즉, 변수 선언 후 함수를 정의하고, 그 이름 없이 변수를 통해 함수를 호출할 수 있습니다.

## 함수 리터럴의 구성요소
함수 리터럴은 몇 가지 요소로 구성되어 있으며, 다음과 같은 조건이 필요합니다:
- 함수를 정의하고 변수에 담을 때, 함수 이름 없이 저장해야 합니다.
- 예약어 `function`이 필수입니다.

## 참고 사이트
- [MDN Web Docs](https://developer.mozilla.org)  
- [W3Schools](https://www.w3schools.com)

## 결론
함수 리터럴은 자바스크립트에서 유용하게 사용되는 기능으로, 이름 없이 함수를 정의하고 사용할 수 있는 점이 큰 장점입니다. 이를 통해 코드의 간결성을 이끌어 낼 수 있습니다.