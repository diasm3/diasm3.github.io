---
layout  : wiki
title   : 자바스립트에서 어떻게 비동기가 작동될까? 
summary : EventLoop의 작동원리 
date    : 2022-06-11 16:57:20 +0900
updated : 2022-06-11 17:58:42 +0900
tag     : eventloop async 
toc     : true
public  : true
parent  : [[javascript]]
latex   : false
---
* TOC
{:toc}

# EventLoop
## 
자바스크립트는 싱글쓰레드 언어이다.

그러나 실제로는 비동기로 처리가 가능하다. 
왜 그럴까?

브라우져에서 지원하는 기능때문에 가능하다. 
브라우져에서는 Web API와 callback queue라는게 있는데 이 두개를 가지고 필요한 비동기 작업을수행한다.



### 간단 요약
1. WEB API : DOM(Document) AJAX(XMLHttpRequest) Timeout(setTimeout) 내장되어 있다.
2. Task Queue(Callback Queue) : Web API에서 비동기 작업이 완료된 후 호출된 콜백 함수들이 대기하는 공간 
3. Event Loop : 콜 스택과 태스크 큐를 수시로 확인하며 콜  스택이 비었을경우 태스크 큐에 있는 작업들을 콜 스택으로 넘겨준다.


Task Queue 
    1) Microtask Queue
             ![image](https://user-images.githubusercontent.com/56494905/159731726-9ef04fce-62c0-4a72-bee9-fef8e382f7cb.png){:width="80%", align="center"}


    2) Macrotask Queue :  setTimeout() setInterval(0 setImmediate() 같은 task를 넘겨받는다. 
       




