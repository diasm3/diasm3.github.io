---
layout  : wiki
title   : 차이점 between Async and Defer
summary : 이 문서는 HTML 스크립트 태그에서 async와 defer 속성의 차이에 대해 설명합니다. 두 속성이 JavaScript 파일 호출에 미치는 영향과 각각의 사용 사례를 소개합니다.
date    : 2022-04-01T22:31:01+09:00
updated : 2022-04-04T07:27:42+09:00
tag     : [async, defer, javascript]
toc     : true
public  : true
parent  : [[javascript]]
latex   : false
---

* TOC
{:toc}

# Async vs Defer

JavaScript는 웹 페이지의 구성 요소로서 중요한 역할을 합니다. 이 문서에서는 HTML의 `<script>` 태그에서 사용되는 `async`와 `defer` 속성의 차이점을 다룹니다.

## Code Example
```javascript
// filename: main.js
console.log("hello world");
```

이 스크립트를 node.js에서 실행할 수 있습니다:
```bash
$ node main.js
hello world
```

## Async

`async` 속성을 사용하여 스크립트를 포함하면, 이 스크립트는 페이지 로드와 동시에 다운로드되며 다운로드가 완료되는 대로 실행됩니다. 이는 다음과 같이 사용할 수 있습니다:

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

여러 개의 async 스크립트를 사용할 경우, 로드되는 순서는 보장되지 않습니다:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        <script async src="a.js"></script>
        <script async src="b.js"></script>
        <script async src="c.js"></script>
    </head>
    <body>
        <div></div>
    </body>
</html>
```

## Defer

`defer` 속성을 사용하면, 스크립트가 페이지가 완전히 로드된 후에 순서대로 실행됩니다. 아래는 사용 예제입니다:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        <script defer src="a.js"></script>
        <script defer src="b.js"></script>
        <script defer src="c.js"></script>
    </head>
    <body>
        <div></div>
    </body>
</html>
```

a.js가 먼저 실행되고, 그 다음 b.js, 마지막으로 c.js가 실행되는 순서입니다.

## Use Strict

`'use strict';`는 JavaScript의 엄격한 규칙을 적용하기 위해 사용됩니다. 이는 코드 품질을 향상시킬 수 있습니다:

```javascript
'use strict';
console.log("Hello World");
```

## Reference
* [Mozilla Developer Network](https://developer.mozilla.org)
* [엘리 강의](https://www.youtube.com/watch?v=tJieVCgGzhs&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=2)