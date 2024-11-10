---
layout  : category 
title   : JavaScript MVC에 대한 이해 및 예시  
summary : 이 문서는 JavaScript의 MVC 패턴에 대한 개요와 파일 구조 설명, 관련 링크를 제공합니다.  
date    : 2022-03-22 13:04:02 +0900  
updated : 2022-03-25 10:03:24 +0900  
tag     : javascript, mvc, web-development  
toc     : true  
public  : true  
parent  : [[javascript]]  
latex   : false  
---

* TOC
{:toc}

# MVC 패턴에 대한 이해  
MVC는 Model-View-Controller의 약자로, 웹 어플리케이션의 구조적인 분리를 통해 유지보수성과 확장성을 높이는 디자인 패턴입니다. 이 문서는 전반적인 MVC 아키텍처와 함께 실제 사용 예제를 포함하여 설명합니다.

## 파일 구조  
아래는 전형적인 MVC 패턴의 파일 구조입니다:

```bash
/public
    /images
    /javascripts
    /stylesheets
/routes
    /index.js
    /user.js
/views
    /index.js
    /app.js
    /package.json
```

## 참고 자료  
* [JS MVC](https://code.tutsplus.com/tutorials/build-a-complete-mvc-website-with-expressjs--net-34168)  
* [원형님 GITHUB](https://github.com/choewy/node-mvc-lecture) - 원형님이 굉장히 잘 정리해주셨습니다.