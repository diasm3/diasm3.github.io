---
layout  : wiki
title   : Spread Syntax
summary : 이 문서는 자바스크립트의 Spread Syntax에 대한 설명과 예제를 제공합니다. Spread Syntax는 배열과 객체를 다루는 데 유용한 기능입니다.
date    : 2022-04-04 11:55:01 +0900
updated : 2022-04-04 15:40:29 +0900
tag     : [javascript, spread-syntax]
toc     : true
public  : true
parent  : [[javascript]] 
latex   : false
---

* TOC
{:toc}

# Spread Syntax

> 자바스크립트의 Spread Syntax에 대한 정리입니다.

Spread Syntax는 배열이나 객체를 쉽게 펼칠 수 있도록 도와줍니다. 이 문서는 Spread Syntax의 사용법과 예제를 포함하고 있습니다.

## 사용법

Spread Syntax는 `...`를 사용합니다. 다음은 배열의 요소를 개별 인자로 풀어내는 예시입니다:

```javascript
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // 6
// 위 코드는 numbers 배열의 요소를 sum 함수의 인자로 전개합니다.

console.log(sum.apply(null, numbers)); // 6
// apply 메소드를 사용하여 배열을 펼친 형태로 함수 호출
```

## 객체에서의 사용

Spread Syntax는 객체에서도 사용할 수 있으며, 객체의 키-값 쌍을 쉽게 병합할 수 있습니다.

### 예시

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 3, c: 4 }
// 두 객체를 결합하여 새로운 객체 생성
```

## 결론

Spread Syntax는 배열과 객체 작업을 간편하게 만들어 주는 유용한 문법입니다. 자바스크립트를 사용할 때 자주 사용되는 기능임으로, 익혀두면 유용합니다.