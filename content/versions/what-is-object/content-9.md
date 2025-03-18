---
layout  : wiki
title   : 오브젝트란? (JavaScript)
summary : JavaScript에서 오브젝트의 정의, 사용법 및 주요 개념을 설명합니다.
date    : 2022-04-05 12:07:19 +0900
updated : 2023-10-05 10:00:00 +0900
tag     : object, javascript, programming
 toc     : true
public  : true
parent  : [[javascript]]
latex   : false
---

* TOC
{:toc}

# 오브젝트란? (JavaScript)
- 오브젝트는 자바스크립트의 데이터 타입 중 하나로, 관련 데이터와 기능을 모은 집합입니다.
- 자바스크립트의 거의 모든 오브젝트는 Object의 인스턴스입니다.
- 오브젝트는 다음과 같이 정의됩니다:
  ```javascript
  const object = { key: value }  
  ```

## 리터럴과 속성

```javascript
const obj1 = {}; // 'object literal' 구문
const obj2 = new Object(); // 'object constructor' 구문

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 }; // 즉시 객체 생성 
print(ellie);

ellie.hasJob = true; // 이미 정의된 객체에 새로운 속성을 추가
console.log(ellie.hasJob);

// 속성을 나중에 삭제할 수 있다
delete ellie.hasJob; // 삭제 가능
```

## 계산된 속성

```javascript
// 키는 항상 문자열이어야 함
console.log(ellie.name); // 직접 접근
console.log(ellie['name']); // 배열처럼 접근
// 필요한 키가 모를 때는 이렇게 사용한다
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(ellie, 'name');
```

## 속성 값 약어

```javascript
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};

const person4 = makePerson('ellie', 30);

function makePerson(name, age){
    return {
        name,
        age, // name: name 생략 가능
    };
}

// 4. 생성자 함수
function Person(name, age){
    this.name = name;
    this.age = age;
}
```

## in 연산자: 속성 존재 여부 확인 (key in obj)

```javascript
console.log('name' in ellie); // true
console.log('age' in ellie);
console.log('random' in ellie); // false
console.log(ellie.random); // undefined
```

## for..in vs for..of

```javascript
// for (key in obj)
for (key in ellie) {
    console.log(key); // ellie 안의 모든 키 출력
}
// for (value of iterable)
for (const value of iterable) {
    console.log(value); // 순차적인 배열의 모든 요소 출력
}
```

## 객체 복사

```javascript
const user = {name: 'ellie', age: '20'};

const user2 = user;
user2.name = 'coder';
console.log(user); // 두 객체 모두 같은 주소를 참조하므로 변경된다

// 객체를 깊은 복사하고 싶다면
const user3 = {};
for (const key in user) {
    user3[key] = user[key];
}
console.log(user3); // 오래된 방법

// 현대적인 방법
const user4 = Object.assign({}, user);

// 또 다른 예시
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);

console.log(mixed.color); // fruit2가 fruit1을 덮어씌운다
console.log(mixed.size);
```
