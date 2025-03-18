---
layout  : wiki
title   : JSON 사용법
summary : JSON(A JavaScript Object Notation) 사용법에 대한 자세한 설명과 예제를 제공합니다.
date    : 2022-04-05 20:45:05 +0900
updated : 2023-10-01 12:00:00 +0900
tag     : json, javascript, programming, serialization
toc     : true
public  : true
parent  : [[javascript]] 
latex   : false
---
* TOC
{:toc}

# JSON (JavaScript Object Notation)  
JSON은 데이터 교환 형식으로 널리 사용되는 경량의 텍스트 기반 데이터 형식입니다. 

## 개요
- **정의**: JSON은 JavaScript 객체 표기법(Javascript Object Notation)으로, 데이터를 구조화하기 위한 수단입니다.
- **역사**: ECMAScript 3rd Edition에서 1999년에 처음 소개되었습니다.
- **관련 기술**: AJAX (Asynchronous JavaScript And XML), XHR (XMLHttpRequest)

## JSON의 장점
- 가장 단순한 데이터 교환 형식
- 경량의 텍스트 기반 구조
- 읽기 쉽고 이해하기 쉬움
- 키-값 쌍으로 구성
- 네트워크 연결을 통한 데이터 직렬화 및 전송에 사용
- 프로그래밍 언어 및 플랫폼에 독립적

## 객체를 JSON으로 직렬화 (Serialization)
### 간단한 예제
```javascript
// JSON.stringify(obj)
let json = JSON.stringify(true);
console.log(json); // 출력: "true"
```

### 배열을 JSON으로 직렬화
```javascript
let json = JSON.stringify(['apple', 'banana']);
console.log(json); // 출력: ["apple", "banana"]
```

### 객체를 JSON으로 직렬화
```javascript
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    symbol: Symbol("id"),
    jump: function() {
       console.log(`${this.name} can jump`);
    }
};

// JSON으로 변환
json = JSON.stringify(rabbit);
console.log(json);
```

### JSON.stringify의 두 번째 매개변수 사용
```javascript
// name만 출력 가능
json = JSON.stringify(rabbit, ['name']);
console.log(json); // 출력: {"name":"tori"}

// 고급 제어 사용
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json); // JSON 데이터 파일을 제어
```

## JSON을 객체로 복원 (Deserialization)
### JSON을 객체로 변환
```javascript
// JSON to Object
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);

// jump() 메소드는 포함되지 않음
rabbit.jump();
obj.jump(); // 오류 발생

// 날짜 데이터 접근
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate); // 문자열로 변환됨
```

### Reviver를 사용한 JSON 복원
```javascript
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
```