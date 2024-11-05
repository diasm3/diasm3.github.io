---
layout  : wiki
title   : async 와 defer의 차이점
summary :  
date    : 2022-04-01 22:31:01 +0900
updated : 2022-04-04 07:27:42 +0900
tag     : async defer
toc     : true
public  : true
parent  : [[javascript]]
latex   : false
---
* TOC
{:toc}

# async or defer 
```javascript
# filename : main.js
console.log("hello world")
```

console에서 node로 실행 가능
```bash
$ node main.js
hello world
```


## async

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        <script async src="main.js"></script>
    </head>
    <body>
    <div></div>
    </body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        
       //빨리 받는 순서로 미리 받고
       //a b c 순서대로 읽지 않는다
        <script async src="a.js"></script>
        <script async src="b.js"></script>
        <script async src="c.js"></script>
        
    </head>
    <body>
    <div></div>
    </body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        
        //미리 3개다 읽고 순서대로 불러온다
        // a -> b -> c
        
        <script defer src="a.js"></script>
        <script defer src="b.js"></script>
        <script defer src="c.js"></script>
        
    </head>
    <body>
    <div></div>
    </body>
</html>
```


## Use strict
>왜 써야하는가?

유연한 언어로 많은 실수가 할 수있다.

added ECMAScript 5


```javascript
'use strict':

console.log("Hello WOrld")

```





한줄씩 읽는다
script 태그가 있으면 내용물을 읽고 계속 진행한다
만약 js 파일 크다면 사이트 로딩이  




##ref 
* [mozilla](https://developer.mozilla.org)
* [엘리강의](https://www.youtube.com/watch?v=tJieVCgGzhs&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=2)
