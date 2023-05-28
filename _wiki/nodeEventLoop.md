---
layout  : wiki
title   : 노드에서의 이벤트 루프는 어떻게 동작하는가? 
summary : Nodejs 공식 사이트  
date    : 2022-06-15 07:10:51 +0900
updated : 2022-06-15 07:19:22 +0900
tag     : nodejs eventloop 
toc     : true
public  : true
parent  : [[nodejs]] 
latex   : false
---
* TOC
{:toc}

# 이벤트 루프는 무엇인가?
> 이벤트 루프는 Node.js 를 논블로킹 I/O를 가능하게끔 하는 것이다. 그런데 자바스크립트는 싱글 스레드이다. 

최신 커널들은 멀티 스레드를 지원하고, 백그라운드에서 여러개의 쓰레드를 관리 할 수 있다. 이때 작동인 완료 될때 커널은 nodejs에게 완료됐다고 콜백을 해주고 Poll 큐에 균등하게 등록된다음 균등하게 실행된다. 

- 비동기(asyncronous) : 두가지 작업이 동시에 시작하지 않는것
- 동기(syncronous) : 두가지 작업이 동시에 시작하는것

##  이벤트 루프 설명

노드가 시작될때, 이벤트루프가 초기화되고, 프로세스 들은 input script 로 비동기   
 
