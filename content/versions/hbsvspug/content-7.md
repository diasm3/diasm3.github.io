---
layout  : wiki
title   : Handlebars와 Pug 비교
summary : Express에서 사용되는 두 가지 템플릿 엔진인 Handlebars와 Pug의 장단점을 설명합니다.
date    : 2022-04-11T01:37:53+09:00
updated : 2022-04-12T07:11:32+09:00
tag     : [template engine, express, handlebars, pug]
toc     : true
public  : true
parent  : [[express]]
latex   : false
---

* TOC
{:toc}

## Handlebars (hbs)
[Handlebars 공식 문서](https://handlebarsjs.com/guide/)

### 장점
- HTML 태그를 그대로 사용 가능
- 정적인 부분과 동적인 부분을 따로 관리 가능
- 라우터에서 쉽게 데이터 수신 가능
- Flask와 유사하여 배우기 쉬움

## Pug
[Pug 공식 문서](https://pugjs.org/api/getting-started.html)

### 장점
- HTML의 `< >` 를 없애 가독성이 좋음
- 정적인 부분과 동적인 부분을 따로 관리 가능
- 다른 템플릿 엔진보다 Google Trend 수치가 높음

## 결론
Handlebars와 Pug 모두 각각의 장점이 있는 템플릿 엔진으로, 프로젝트의 요구사항에 맞게 선택하여 사용하면 좋습니다.