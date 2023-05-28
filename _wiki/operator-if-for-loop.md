---
layout  : wiki
title   : operator, if, for-loop
summary : operator if for-loop 
date    : 2022-04-05 05:55:48 +0900
updated : 2022-04-05 07:24:36 +0900
tag     : operator if for-loop Javascript ES6 
toc     : true
public  : true
parent  : [[javascript]] 
latex   : false
---
* TOC
{:toc}

# 4장 Operator if for-loop 

## 전장 복습
- Immutable data types: premitive types, frozen objects (i.e object.freeze())
- Mutable data types : all objects by default are mutable in JS

변하지 않는 데이터 타입 : 기본형 타입, 객체 등
변하는 데이터 타입 : 모든 객체

## Operator
* String concatenation
```javascript
console.log('my' + ' cat')
//my cat
console.log('1' +2)
//12 문자열로 반환 
console.log(`string literals: 1 + 2 = $(1 + 2)`)
//`` 백틱을 이용하면 변수의 값을 문자열 내로 사용할 수 있다
//${변수명 또는 숫자} 
```


* Numeric operators
```javascript
console.log(1 + 1) //더하기
console.log(1 - 1) // 빼기
console.log(1 / 1) // 
console.log(1 * 1)
console.log(1 % 1)
console.log(1 ** 1)
```

* Increment decrement opertiors
    - preIncrement
    ```javascript
    let ocunter = 2
    const preIncrement = ++counter 
    //counter = counter +1
    //preIncrement = counter
    ```
    - postIncrement
    ```javascript
    let counter = 2
    const postIncrement = counter++
    //postIncrement = counter
    //counter = counter + 1
    ```
    - preDecrement
    ```javascript
    let counter = 2
    const preDecrement = --counter 
    //counter = counter - 1
    //preDecrement = counter
    ```
    - postDecrement
    ```javascript
    let counter = 2
    const postDecrement = counter--
    //postDecrement = counter
    //counter = counter + 1
    ```


* Assingment operators
```javascript
let x = 3
let y = 6
x += y  // x = x + y
x -= y
x *= y
x /= y
```


* Comparison operators
```javascript
console.log(10 < 6) // less than
console.log(10 <= 6) // less than or equal
console.log(10 > 6) // greater than
console.log(10  6) // greater than equal
```

* logical operators:  (or), && (and), ! not
 
```javascript
const value1 = false
const value2 = 4 < 2


// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`)
//or는 제일 처음이 참이면 멈춘다
//제일 간단한것을 앞으로 놓고 복잡도가 높은 함수는 뒤로 넣는다


// $$ (and), finds the first falsy value
console.log(`and: ${value1 && value2 || check()}`)
//and는 모든것이 같아야 실행된다
//nullableObject && nullableObject.somthing
//true값을 반환하는 객체값이 true 면 somthing 인스턴스를 불러온다
//아래의 코드와 같다

if(nullableObject != null){
    nullableObject.somthing
}

function check(){
    for(let i =0; i< 10; i++){
    //wasting time
    console.log('what')
    }
    
}
```


* Equality

```javascript
const stringFive = '5'
const numberFive = 5

// == loose equlity, with type conversion
//값만 비교하는 비교구문
console.log(stringFive == numberFive) //true 형이 달라도 숫자나 문자가 같다
console.log(stringFive != numberFive) //false 

// === strict equality, no type conversion
//타입을 모두 비교하는 엄격한 비교구문
console.log(stringFive === numberFive) //false 형이 다르니 틀린 겂이다
console.log(stringFive !== numberFive) //true

// object equality by reference
const me1 = { name: 'me'}
const me2 = { name: 'me'}
const me3 = me1 
console.log(me1 == me2) // 객체 잠조 주소를 가르키니까 다른 값이다 FALSE
console.log(me1 === me2) // 객체의형이 같아도 참조 주소가 다르니까  FALSE 
console.log(me1 === me2) // 객체의 주소를 다시 받아 왔으니까 같은 값이다 TRUE


// equality - puzzler
console.log(0 == false) // true
console.log(0 === false) // false
console.log('' == false) // true
console.log('' === false) // false
console.log(null == undefined) // true
console.log(null === undefined) // false

```

* Conditional operators: if

```javascript
//if, else if, else

const name = 'ellie'
if (name === 'ellie'){
    console.log('you are my father')
} else if ( name === 'coder'){
    console.log('You are the chicken')
} else {
    console.log('unkwon')
}

```

* Ternary operator: ?

```javascript
//condition ? value1 : value2
console.log(name === 'me' ? 'yes' : 'no')
```

* Switch statment
 
```javascript
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS

const browser = 'IE'
switch (browser) {
    case 'IE':
        console.log('go away!')
        break
    case 'Chrome': //같은 출력값을 나타나게 할때는 생략 가능
    case 'FIreFox':
        console.log('love you!')
        break
    default:
        console.log('same all')
        break
}

```

* Loops

```javascript
// while loop, while the condition is truthy
// body code is executed

let i = 3
while (i>0){
    console.log(`while: ${i}`)
    i--
}




//do while 문은 조건을 나중에 실행 시킨다
do {
    console.log(`do while: ${i}`)
    i--

} while (i > 0)




// for loop, for(begin; condition; step)
for (i= 3; i>0; i--){
    console.log(`for: ${i}`)
}





for (let i = 3; i >0; i = i -2 ){
    //inline variable declaration
    console.log(`inline variable for: ${i}`)
}




// nested loops
for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++{
    console.log(`i: ${i}, j:${j}`)
    }
}

// break, continue
// for 를 끝내는거 break
// if문에서 그냥 continue  하는게 좋음

```







