---
layout  : wiki
title   : 자바스크립트의 비동기 처리 이해하기
summary : 이벤트 루프와 비동기 처리 메커니즘에 대한 명확한 설명을 제공합니다. 이 문서는 JavaScript의 비동기 처리 방법 및 그 작동 원리를 설명합니다.
date    : 2022-06-11 16:57:20 +0900
updated : 2022-06-11 17:58:42 +0900
tag     : eventloop, async, javascript
toc     : true
public  : true
parent  : [[javascript]]
latex   : false
---

* TOC
{:toc}

# 이벤트 루프

자바스크립트는 싱글 스레드 언어입니다. 그러나 비동기 처리가 가능하다는 점에서 특별합니다. 그 이유는 브라우저에서 제공하는 기능 덕분입니다.

브라우저에서는 Web API와 콜백 큐를 활용하여 필요한 비동기 작업을 수행합니다.

## 간단 요약
1. **WEB API**: DOM(문서 객체 모델), AJAX(XMLHttpRequest), Timeout(setTimeout)과 같은 기능들이 내장되어 있습니다.
2. **Task Queue (콜백 큐)**: Web API에서 비동기 작업이 완료된 후 호출되는 콜백 함수들이 대기하는 공간입니다.
3. **Event Loop**: 콜 스택과 태스크 큐를 수시로 확인하며, 콜 스택이 비었을 때 태스크 큐에 있는 작업들을 콜 스택으로 넘겨줍니다.

### 태스크 큐 유형
1. **Microtask Queue**  
![image](https://user-images.githubusercontent.com/56494905/159731726-9ef04fce-62c0-4a72-bee9-fef8e382f7cb.png){:width="80%", align="center"}  

2. **Macrotask Queue**: `setTimeout()`, `setInterval()`, `setImmediate()`와 같은 작업들을 처리합니다.

## 실제 사용 사례
- **Ajax 호출**: 비동기적으로 서버와 통신하여 데이터를 가져오고, 페이지를 새로 고치지 않고도 결과를 반영할 수 있습니다.  
- **사용자 입력 처리**: UI 이벤트에 대한 응답을 즉각적으로 처리하면서도 페이지의 다른 작업을 수행할 수 있습니다.

## 참고 자료
- [MDN Web Docs - Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)  
- [JavaScript.info - Event Loop](https://javascript.info/event-loop)