---
layout  : wiki
title   : HTTPS/SSL
summary : HTTPS와SSL 
date    : 2022-03-23 21:59:10 +0900
updated : 2022-04-03 23:03:52 +0900
tag     : https ssl certificate 
toc     : true
public  : true
parent  : [[cs-homework]] 
latex   : false
---
* TOC
{:toc}

# 웹에서의 보안이란?
> 프로그래머로데이터만주고만 받는거에 신경을 쓰고 보안에 대해서는 대부분 모르는 부분이 많다

# http vs https

## `http`(HyperText Transfer Protorcol)


> HTML 문서와 같은 리소스들을 가져올 수 있도록 해주는 프로토콜이다. [^protocol]
> 모든 데이터 교환의 기초
> 클라이언트-서버 프로토콜(통신규약)

> 텍스트 기반의 통신 규약으로 `인터넷에서 데이터를 주고받을` 수 있는 프로토콜이다.



![image](https://user-images.githubusercontent.com/56494905/159731726-9ef04fce-62c0-4a72-bee9-fef8e382f7cb.png){:width="80%", align="center"}


### 요청방식
OPTIONS
GET
HEAD
POST
PUT
DELTET
TRACE
CONNECT
PATCH


### 상태코드(Statue Code)[^statuscode]

|Code|jj||





 
 
 
## `https`(HyperText Transfer Protocol over Secure Socket Layer )


### 보안성측면

|        | http | https |
| -      | -    | -     |
| 보안성 |      |       |
|        |      |       |
|        |      |       |


### 속도 측면 



### 비교

| 차이점            | http     | https           | 설명                                            |
| -                 | :-:      | :-:             | -                                               |
| 보안성            | 낮음     | 높음            | 상대적으로 https가 보안성 측면에서 높다         |
| 사용계층          | 응용계층 | 전송계층        |                                                 |
| 사용포트          | 80       | 443             | 443 포트로 먼저 certificate 을 확인 후 통신한다 |
| 전달데이터 암호화 | No       | Yes             | https는 암호화 되서 전송된다                    |
| 속도              | 빠름     | 상대적으로 느림 | 상대적으로 https가 더 느리다                    |



# https/ssl
## SSL(Secure Socket Layer)? 

## SSL certificate?

### SSL certificate 포함된 내용
1. 도메인 네임이 인증되어있고 어떤 내용으로 발생되었는지
2. 어떤 사람, 기관, 기종에서 발생되었는지
3. 발급한 인증기관
4. 인증기관의 디지털 서명
5. 관련된 서브 도메인들
6. 인증날짜
7. 만료날짜
8. Public 키 


### 왜 SSL이 필요한가?

1. 암호화 : SSL/TLS 암호화가 가능하다
2. 인증: SSL 인증은 실제 도메인을 가지고 있는 올바른 서버에 요청할 수 있다
3. HTTPS : 


### 어떻게 SSL Certificate을 얻나?
 



## TLS vs SSL? 
>`TLS` (Transport Layer Security)

1. 지원 가능한 알고리즘 서로 교환
2. 키 교환, 인증
3. `대칭키 암호`[^symmetric-key-algorithm]
로 암호화하고 메시지 인증
>`SSL`(Secure Sockets Layer)


### SSl이란 무엇일까?


### SSL Handshake[^handshake]란?
= > HTTP의 의미와 왜 사용하게 되었는지 기원을 알아보자. =



# 어떻게 불법적인 하이제킹을 막아야하는가?

## 용어정리
* 프로토콜 : 

## 참고사이트
* [모질라 공식사이트](https://developer.mozilla.org/ko/docs/Web/HTTP/Overview)
* [http 상태코드](http://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)

## 주석
[^protocol]:  프로토콜은 컴퓨터 내부에서, 또는 컴퓨터 사이에서 데이터의 교환 방식을 정의하는 규칙 체계입니다. 기기 간 통신은 교환되는 데이터의 형식에 대해 상호 합의를 요구합니다. 이런 형식을 정의하는 규칙의 집합을 프로토콜이라고 합니다. 
[^statuscode]: 클라이언트의 데이터 요청에 따른 서버 반환 코드
[^handshake]: 서버와 클라이언트의 소통 과정을 나타낸다. 
[^SYC]: 동기화(Synchronization  )
[^ACK]: 승인(Acknowledgement) 
[^symmetric-key-algorithm]: 대칭키 암호(symmetric-key algorithm) 암호화 알고리즘의 한 종류로, 암호화와 복호화에 같은 암호 키를 쓰는 알고리즘을 의마한다.
