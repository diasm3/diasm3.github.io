---
layout  : wiki
title   : for in 과 for of 차이점
summary : for in과 for of의 차이점을 알자 
date    : 2022-04-09 06:39:54 +0900
updated : 2022-04-09 08:51:05 +0900
tag     : iterable symbol 
toc     : true
public  : true
parent  : [[javascript]] 
latex   : false
---
* TOC
{:toc}

# 가장 큰 차이점 



## for...in
-    
> The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.


* 왜for...in을 사용할까?
    - for...in 은 연속적인 객체 프로퍼티를 위해 만들어졌다 그러나 배열을 위해 쓰기는 추천하지 않는다. for each가 이미 있기때문이다. 
    - 디버깅때 목적으로 많이 쓸것이다. 객체의 프로퍼티를 체크하는데 쉬울것이다. 그래도 배열은 데이터를 저장하는 많이 사용한다 (key-value 방식의 데이터) 


>Why Use for...in?
>Given that for...in is built for iterating object properties, not recommended for use with arrays, and options like Array.prototype.forEach() and for...of exist, what might be the use of for...in at all?
>It may be most practically used for debugging purposes, being an easy way to check the properties of an object by outputting to the console or otherwise. Although arrays are often more practical for storing data, in situations where a key-value pair is preferred for working with data with properties acting as the key, there may be instances where you want to check if any of those keys hold a particular value.



## for...of
* for...of 정의
    * for...of 는 반복적이고 나열가능한 객체(문자열, 배열, array-liked objects(Nodelist), TypedArray, Map, Set 그리고 사용자지정 iterables)
    
String, array, array-linked objects(NodeList), TypedArray, Map, Set, and user-defined iterables.

> The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.


## Symbol 형
* 특징
    - 객체의 프로퍼티 키로 무낮형과 심볼형을 사용한다
    - 이때 어떤 객체의 프로퍼티의 키가 symbol이어야만 for...of가 사용될 수 있다

## iterable 객체
* 반복 가능한(iterable, 이터러블) 객체는 배열을 일반화한 객체이다. 이터러블 이라는 개념을 사용하려면 for...of를 사용할 수 있다






# 참고사이트
* [모질라 공식사이트](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)




