---
layout  : wiki
title   : 비동기 처리, 콜백 이해,
summary : callback hell 
date    : 2022-04-06 14:42:06 +0900
updated : 2022-04-06 16:46:54 +0900
tag     : javascript synchronous asynchronous 
toc     : true
public  : true
parent  : [[javascript]] 
latex   : false
---
* TOC
{:toc}

# Javascript is synchronous 

```javascript
console.log('1')

setTimeout(() => {console.log("hello world")})//지정한 시간이 지나면 콜백함수를 불러올 수 있음

console.log('2')
console.log('3')

```


## Synchronous callback
```javascript
function printImmediately(print){
    print()
}

printImmediately(()=> console.log('hello'))


function printWithDelay(print, timeout){
    setTimeout(print,timeout)

}




```


## Asynchronous callback
