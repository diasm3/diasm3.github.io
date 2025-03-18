---
layout  : wiki
title   : Arrow Function
summary : 이 문서는 JavaScript의 Arrow Function에 대한 개념과 사용 방법을 설명합니다. 다양한 예제를 통해 Arrow Function의 특징과 이점을 소개합니다.
date    : 2022-04-05 06:44:09 +0900
updated : 2022-04-05 07:18:01 +0900
tag     : javascript, arrow function
toc     : true
public  : true
parent  : [[javascript]]
latex   : false
---

* TOC
{:toc}

# 5장 Arrow Function

Arrow Function은 JavaScript에서 더 간결하고 간편하게 함수를 작성할 수 있는 기능입니다. 아래는 Arrow Function의 주요 특징과 사용법을 설명하는 섹션입니다.

## 기본적인 빌딩 블럭
- 여러 번 사용 가능
- 작업을 수행하거나 값을 계산할 수 있음
  
## Function Declaration 
- 기본 문법: `function name(param1, param2){ body... return}`
    * 하나의 함수에서는 하나의 동작만 수행해야 함
    * 이름은 동작을 설명하는 의미 있는 이름으로
    * 함수는 객체임
    * 예시: `createCardandPoint` -> `createCard`, `createPoint`

```javascript
function printHello() {
    console.log('Hello')
}
printHello()

function log(message) {
    console.log(message)
}

// JavaScript에서는 타입을 알 수 없음
// 타입을 알기 위해 TypeScript를 사용함 -> Babel 
log('hello@')
log(1234)
```

```javascript
// 2. Parameters
// 기본 타입: 값에 의한 전달
// 객체 타입: 참조에 의한 전달
function changeName(obj) {
    obj.name = 'coder'
}

const me = {name: 'me'}
changeName(me)
console.log(me) // coder
// 객체의 주소값을 통해 변경 가능
```

```javascript
// 3. Default Parameters
function showMessage(message, from='unknown') {
    if(from === undefined) {
        ....
    }
}
```

```javascript
// 4. Rest Parameters (added in ES6)
function printAll(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i])
    }
    for (const arg of args) {
        console.log(arg)
    }
    args.forEach((arg) => console.log(arg))
}

printAll('dream', 'coding', 'ellie')
```

```javascript
// 5. Local Scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}
printMessage();
```

```javascript
// 6. Return a Value
function sum(a, b) {
    return a + b;
}
// return 없으면 undefined
```

```javascript
// 7. Early Return, Early Exit
// 조건이 맞지 않는 경우 빨리 리턴하라

// 나쁜 예
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic
    }
}

// 좋은 예
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }
    // long upgrade logic
}
```

## Function Expression

```javascript
print(); // Error

const print = function () { // 익명 함수
    console.log('print');
}

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));
```

> 함수 선언과 변수에 함수를 할당하는 것의 주요 차이점은 `호이스팅`이다.

## Callback Hell

```javascript
// Callback function 
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function() {
    console.log('yes');
};
const printNo = function() {
    console.log('no');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);
```

## Arrow Function

```javascript
const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b; 
// 위와 동일
const add = function(a, b) {
    return a + b;
};
```

> 차이점은?

## IIFE

```javascript
// 즉시 호출하고 싶으면 아래와 같이 사용하라
(function hello() {
    console.log('IIFE');
})();
```


