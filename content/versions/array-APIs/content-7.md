---
layout  : wiki
title   : JavaScript 배열에 대해 알아보자
summary : JavaScript 배열의 개념, 메서드 및 사용 예제를 설명합니다.
date    : 2022-04-05 20:20:55 +0900
updated : 2023-10-05 16:50:33 +0900
tag     : [array, javascript]
toc     : true
public  : true
parent  : [[javascript]] 
latex   : false
---

* TOC
{:toc}

# JavaScript 배열의 개념과 API 

## 배열 선언
```javascript
const arr1 = new Array();
const arr2 = [1, 2];
```

## 2. 인덱스 위치
```javascript
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length); // 2개
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[3]); // undefined
console.log(fruits[fruits.length - 1]); // 마지막 인덱스
```

## 3. 배열 순회
```javascript
// 모든 과일을 인쇄하기
// a. for 루프
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of 루프
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach 메서드
fruits.forEach((value) => console.log(value));
```

## 4. 추가, 삭제 및 복사
```javascript
// push: 아이템을 끝에 추가하기
fruits.push('strawberry', 'peach');
console.log(fruits);

// pop: 아이템을 끝에서 제거하기
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: 아이템을 시작에 추가하기
fruits.unshift('strawberry', 'lemon');
console.log(fruits);

// shift: 아이템을 시작에서 제거하기
fruits.shift(); // 느림
fruits.shift();
console.log(fruits);

// splice: 특정 인덱스 위치에서 아이템 제거하기
fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits);
fruits.splice(1, 1); // 1부터 1까지 지워짐
console.log(fruits);
fruits.splice(1, 1, 'apple', 'watermelon'); // 1부터 1까 삽입까지 가능함
console.log(fruits);

// 배열 결합하기
const fruits2 = ['pear', 'apple'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
```

## 5. 검색
```javascript
// 인덱스 찾기
console.log(fruits);
console.log(fruits.indexOf('apple')); // 0
console.log(fruits.indexOf('watermelon')); // -1

// includes
console.log(fruits.includes('watermelon')); // false

// lastIndexOf
fruits.push('apple');
console.log(fruits.lastIndexOf('apple')); // 최근의 인덱스
```