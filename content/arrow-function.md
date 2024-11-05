---
layout  : wiki
title   : Arrow Fucntion?
summary : Arrow Function 
date    : 2022-04-05 06:44:09 +0900
updated : 2022-04-05 07:18:01 +0900
tag     : Arrow fuction
toc     : true
public  : true
parent  : [[javascript]]
latex   : false
---
* TOC
{:toc}

# 5장 Arrow Function
* 기본적인 빌딩 블럭
* 여러번 사용가능
* 작업을 수행 또는 값을 계산

## Function declartion 
- function name(param1, param2){ body... return}
    * 하나의 함수에서는 하나만 해라
    * 이름은 동작하는 작업의 이름으로
    * 함수는 객체이다
    * e.g. createCardnadPoint -> createCard, createPoint

```javascript
function printHello() {
    console.log('Hello')
}
printHello()


function log(message){
    console.log(message)
}

// 자바스크립에서는 형이 뭔지 모름 
// 형을 알기 위해 typescript를 사용함 -> babel 
log('hello@')
log(1234)
```

```javascript
// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder'
}

const me = {name: 'me'}
changeName(me)
console.log(me) // coder
// 객체의 주소값에 있는 값을 변경해주기때문에 변경 가능

```
```javascript
// 3.Default Parameters

function showMessage(message, from='unkown'){
    if(from === undefined){
        ....
    }
}

```



```javascript
// 4.Rest Parameters(added in ES6)
function printALl(...args){
    for(let i=0,i < args.length; i++){
        console.log(args[i])
    }
    for (const arg of args) {
        console.log(arg)
    }
    
    args.forEach((arg) => console.log(arg))
}

printAll('dream, 'coding', 'ellie')

```

```javascript
// 5. Local scope
let globalMessage = 'global' // global variable
function printMessage(){
    let message = 'heelo'
    console.log(message)
    console.log(globalMessage)
}
printMessage()

```



```javascript
// 6. Return a value

function sum(a,b){
    return a + b
}
// return 없으면 undefined


```



```javascript
// 7. Early return, early exit
// 조건이 맞지 않는 경우 빨리 리턴하라


// bad 
function upgradeUser(user){
    if (user.point > 10 ){
        // long upgrade logic
    }
}

// good
function upgradeUser(user){
    if(user.point <= 10){
        return
    }
    //long upgrade logic
}

```

## function expression

```javascript
print() // Error

const print = function () { // annoymous function 
    console.log('print')
}

print()
const printAgain = print
printAgain()
const sumAgain = sum
console.log(sumAgain(1,3))

```
> 함수 선언하는것과 변수에 함수를 선언하는것의 가장 큰 차이점은 `호이스트` 이다


## call back hell

```javascript
//call back function 
fuction randomQuiz(answer, printYes, PrintNo){
    if (answer === 'love you'){
        printYes()
    } else {
        printNo()
    }
}


const printYes = function() {
    console.log('yes')
}
const printNo= function() {
    console.log('No')
}

randomQuiz('wrong', printYes, printNo)
randomQuiz('love you', printYes, printNo)

```


## Arrow Function

```javascript


const simplePrint = () => console.log('simplePrint')
const add = (a, b) => a + b 
// 위와 같다
const add = function(a,b) {
    return a + b
}

```
> 차이점은? 


## IIFE

```javascript
//바로 호출하고 싶으면아래와 같이 사용하라

(function hello(){
    console.log('IIFE')
})()

)



```

