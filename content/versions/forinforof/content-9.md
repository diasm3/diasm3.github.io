---
layout  : wiki
title   : for...in과 for...of의 차이점
summary : JavaScript에서 for...in과 for...of의 차이점을 이해하고 각 용도의 최적 적용 방안을 알아보자.
date    : 2022-04-09T06:39:54+09:00
updated : 2023-10-13T09:00:00+09:00
tag     : [javascript, iterable, loop]
toc     : true
public  : true
parent  : [[javascript]] 
latex   : false
---
* TOC
{:toc}

# for...in과 for...of의 차이점

# 개요
for...in과 for...of는 JavaScript에서 객체와 배열을 반복하는 데 사용되는 두 가지 다른 루프입니다. 이 문서에서는 각 루프의 특징과 사용 사례에 대해 설명합니다.

## for...in
- **정의**  
for...in 문은 객체의 모든 enumerable(열거할 수 있는) 속성을 반복합니다. 이때 문자열로 키가 지정된 속성만 포함되며, Symbol로 키가 지정된 속성은 무시합니다.

> *Why Use for...in?*  
for...in 문은 객체 속성을 반복하는 데 최적화되어 있으며, 배열에는 사용하지 않는 것이 좋습니다. Array.prototype.forEach()나 for...of와 같은 대안이 존재하기 때문입니다. 그러나, 디버깅 목적으로는 유용하게 활용될 수 있습니다. 

- **주요 사용 사례**  
  - 객체의 프로퍼티를 체크하며, 특히 디버깅 시 편리합니다.  
  - Key-value 형태로 데이터를 저장해야 할 때 사용합니다.

## for...of
* **정의**  
for...of 문은 이터러블 객체(예: 문자열, 배열, array-like 객체, TypedArray, Map, Set, 사용자 정의 이터러블)를 반복합니다.

> The for...of statement creates a loop iterating over iterable objects, including built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.

- **주요 사용 사례**  
  - 배열과 문자열의 요소를 순회할 때 유용합니다.  
  - 이터러블 객체에서 값을 추출할 필요가 있을 때 적합합니다.

## Symbol 형
* **특징**  
   - 객체의 프로퍼티 키로 일반형과 심볼형을 사용할 수 있습니다.  
   - 이때 심볼이 키인 객체에 대해서만 for...of를 사용할 수 있습니다.

## 이터러블 객체
* 이터러블 객체는 배열을 일반화한 객체로, for...of를 사용하여 반복할 수 있습니다. 이는 특히 반복 가능한 데이터 구조를 구현할 때 유용합니다.

# 참고 사이트
* [모질라 공식사이트](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

---