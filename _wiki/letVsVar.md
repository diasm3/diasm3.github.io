---
layout  : wiki
title   : let Vs var
summary : let 과 var의 차이점
date    : 2022-04-03 23:20:54 +0900
updated : 2022-04-04 07:23:39 +0900
tag     : let var 
toc     : true
public  : true
parent  : [[javascript]] 
latex   : false
---
* TOC
{:toc}

# CS스터디 3장 
* [유튜브 링크](https://youtu.be/OCCpGh4ujb8)


## let vs var 

```javascript
//1. Use strict
//
'use strict'

// 2. Variable
// let (added in ES6)

let name = 'ellie'
console.log(name)
name = hello
console.log(name)
```

## Variable
### let 
- Mutable type

> 써야함


-------------------------------------------
### var
> 쓰지마세요!

왜?

```javascript
// 선언하기도 전에도 사용할 수 있다
// var hoisting (move delcaration from boottm to top)

console.log(age)
//undefined
age = 4 
console.log(age)
var age 
```
- var hoisting[^hoisting]
    * 선언을 매 위로 올린다
    * 선언도 하기 전에 출력, 저장 할 수 있음
    * 블럭 스코프 무시

-------------------------------------------
### const 
> Immutable type 

* 포인터를 가르키는 부분이 잠겨있다 즉 변경 불가



1. 값을 변경하지 말아야 하는 이유
    * 보안상의 문제 
        - 혹시라도 해커가 변경하면 프로그램이 엉망이됨
    * thread safety 
        - 다양한 thread 가 동시에 변수를 변경하는데 위험함
    * redue human mistakes
        - 협헙시에 사람이 실수하는 부분을 더 줄여준다
    
-------------------------------------------
### block scope
> 블럭 안에 있는것은 블럭 안에서만 가능하다

1. 끝까지 메모리에 남는다
2. global 로 저장됨
3. 필요한 부분만 적절하게 사용해야함


```javascript
let globalName = 'global name'
{
    //항상 메모리에 탑제된다
    let name = 'ellie'
    console.log(k)
    name = 'hello'
    
    console.log(name)
    //hello
    console.log(globalName)
    //global name
}
console.log(name)
//undefined
console.log(globalName)
//global name

```


-------------------------------------------
## Variable types

1. primitive(single item)
    * number
    * string
    * bloolean
    * null
    * undefined
    * symbol
2. object(box container)
    * function
    * first-class function


### Primitive
- number 
    * 따로 다른 타입을 선언해 줄 필요없다.
    * type 이 자동으로 적용된다
```javascript
const infinity = 1/ 0
// Infinity
const negativeInfinity = -1 /0
// -Infinity
const nAn = 'not a number' / 2
// NaN
```

-------------------------------------------
- bigInt
    * 숫자의 크기가 클때 쓴다
```javascript
const bigInt = 1234123412487293487928374892734n
console.log(`value: ${bitInt}, type :${typeof bigInt}`)
// value :  ....  type bigInt
```

-------------------------------------------
- String
    * template literals(string)
```javascript 
${variable Name}
```

-------------------------------------------
- Boolean
    * false -> 0, null, undefined, NaN, ''
    * true -> any other value


-------------------------------------------
- null
>

-------------------------------------------
- undefined
> 선언은 되었지만 아직 변수를 주지 않았다

-------------------------------------------
- symbol
> create unique identifiers for objects
    * 알고리즘, 자료구조 할때 사용한다
    * 고유값을 지정하기 위해 사용한다
    * 출력할때는 .description 으로 출력한다.
    
```javascript
//기본 사용법 
const gSymbol1 = Symbol('id')
const gSymbol2 = Symbol('id')

console.log(gSymbol2 === gSymbol1)
//false
```
```javascript
//같은 심볼출력하기
//Symbol.for
const gSymbol1 = Symbol.for('id')
const gSymbol2 = Symbol.for('id')

console.log(sgSymbol1 === sgSymbol2 )
// true
```
```javascript
//같은 심볼출력하기
const gSymbol1 = Symbol('id')
const gSymbol2 = Symbol('id')
```

-------------------------------------------
### Object 
> real-life object, data structure



```javascript
//const로 elie를 수정할 수 없지만 자식의 값은 변경 가능함
const detail= {name : "me", age : 20}
detail.name = "you"
// const 로 선언했지만 객체의 내용은 변경 할 수 있음
```



## Dynamic typing: dynamically typed language
> 선언할때 어떤타입인지 설정하지 않는다

```javascript
let text = 'hello'
console.log(text.charAt(0))
//h 

console.log(`value: ${text}, type: ${tyepof text}`)
text = '7' + 3
//자동으로 문자열 7이 문자열7로 변경된다
// 10

console.log(`value: ${text}, type: ${tyepof text}`)
text ='8' + '3'
// string -> number 


text = '8' / '2'
```



# 주석
[^hoisting]: hoisting: 언제 어디든 제일 위에서부터 선언되어 있음





