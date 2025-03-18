---
layout  : wiki
title   : DOM (Document Object Model)
summary : DOM에 대한 포괄적인 설명과 기능, 구성 요소를 이해하는 데 필요한 정보를 제공합니다.
date    : 2022-03-23 21:44:26 +0900
updated : 2023-10-23 21:58:18 +0900
tag     : DOM, 웹 프로그래밍, 객체 모델 
toc     : true
public  : true
parent  : [[cs-homework]] 
latex   : false
---

* TOC
{:toc}

# DOM이란?
DOM (Document Object Model)은 웹 페이지를 스크립트 및 프로그래밍 언어와 연결시켜주는 구조화된 표현입니다. DOM은 HTML 및 XML 문서의 프로그래밍 인터페이스를 제공하여 개발자가 문서의 요소 및 콘텐츠에 접근하고 조작할 수 있게 합니다.

![DOM 이미지](https://user-images.githubusercontent.com/56494905/159727793-b89977e9-804a-4d8c-a462-82c3f1153bfd.png)

## 노드(Nodes)
DOM은 다음과 같은 다양한 노드 유형으로 구성됩니다:
- **DOCUMENT_NODE**: 문서의 최상위 노드 (예: `window.document`)
- **ELEMENT_NODE**: HTML 요소 노드 (예: `<html>`, `<body>`, `<a>`, `<p>`, `<script>`, `<style>`, `<h1>`)
- **ATTRIBUTE_NODE**: 요소의 속성 노드 (예: `class="hi"`)
- **TEXT_NODE**: 문서 내 텍스트 노드 (줄바꿈 및 공백 포함)
- **DOCUMENT_FRAGMENT_NODE**: 가볍고 유효한 DocumentFragment (예: `document.createDocumentFragment()`)
- **DOCUMENT_TYPE_NODE**: 문서의 유형 정의 노드 (예: `<!DOCTYPE html>`)

## DOM의 역할
DOM은 웹 페이지의 구조와 내용을 프로그래밍 언어로 접근하고 조작할 수 있게 해줍니다. 예를 들어, JavaScript를 사용하여 웹 페이지의 콘텐츠를 동적으로 변경하거나 사용자 인터랙션에 반응할 수 있도록 합니다. 또한, 이벤트를 처리하고 HTML 요소의 스타일을 변경하는 데에도 사용됩니다. 

## 실제 사용 예시
```javascript
// DOM을 통해 HTML 요소의 텍스트 변경하기
const heading = document.querySelector('h1');
heading.innerText = '새로운 제목';
```

# 참고 사이트
* [DOM이란?](https://www.howdy-mj.me/dom/what-is-dom/)
* [WHATWG DOM 스펙](https://dom.spec.whatwg.org/)
* [가상 DOM](https://elmprogramming.com/virtual-dom.html)
* [MDN: Document Object Model](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction)