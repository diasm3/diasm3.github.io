---
layout  : wiki
title   : Socket.IO란 무엇인가?  
summary : Socket.IO는 실시간, 양방향, 이벤트 기반 통신을 위한 라이브러리로, 웹소켓과 같은 기술을 활용하여 클라이언트와 서버간의 연결을 유지하고 데이터를 전송하는 기능을 제공한다.
date    : 2022-06-28T16:49:01+09:00
updated : 2022-06-30T14:14:11+09:00
tag     : socket.io, websocket, 실시간통신  
toc     : true
public  : true
parent  : [[backend]]  
latex   : false
---
* TOC
{:toc}

# Socket.IO란?

Socket.IO는 실시간 웹 애플리케이션을 위한 JavaScript 라이브러리로, 클라이언트와 서버 간에 실시간 양방향 통신을 가능하게 한다. 

## WebSocket ?

> WebSocket 객체는 WebSocket 서버 연결의 생성과 관리 및 연결을 통한 데이터 송수신 API를 제공한다.
> websocket() 생성자를 이용하여 사용 가능하다.

## 사용 예제

다음은 Socket.IO를 사용하는 간단한 예제이다:

```javascript
// 서버 측
const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('새로운 클라이언트가 연결됨');

  socket.on('message', (msg) => {
    console.log('메시지 수신:', msg);
  });
});

// 클라이언트 측
const socket = io('http://localhost:3000');

socket.emit('message', '안녕하세요 서버!');
```

### 참고 자료
- [공식사이트 링크](https://socket.io)
- [WebSocket 명세 링크](https://websockets.spec.whatwg.org/#the-websocket-interface)
- [모질라 링크](https://developer.mozilla.org/ko/docs/Web/API/WebSocket)