---
layout  : wiki
title   : 
summary : 
date    : 2022-06-16 12:02:11 +0900
updated : 2022-06-16 12:36:18 +0900
tag     : 
toc     : true
public  : true
parent  : 
latex   : false
---
* TOC
{:toc}

# OAuth 란?
2007년 12월 OAuth 1.0 이 나왔다 그리고 강력한 보안으로 사람들이 많이 사용하기 시작했다. 구글은 OAuth 1.0을 2008년 부터 지원하기 시작하고 트위터도 third-party 앱에 사용하도록 구연했다.

그러나  OAuth 1.0 은 보안 구성을 할때 암호로 구현하고 암호화로 상호 운용성이 필요했다. 많은 개발자들이 구현하기 힘들었다. 그래서 나온게 OAuth 2.0이 2012년 10월에 나왔다.

> 인터넷 표준 인증방식, 인증내역을 공유하여 애플리케이션간 회원정보를 공유할 수 있음

## OAuth 1.0 과 OAuth 2.0 차이점

> 1. OAuth 2.0에서는 SSL을 사용함으로써 인증과정 간소화
1. 2.0에서는 Signature 가 필요없음
2. 토큰이 생성되고나서 OAuth 1.0은 매번 API를 호출할때마다 2개의 보안토큰이 필요하고, OAuth 2.0 은 하나의 토큰만 필요함.



OAuth 1.0
* Transport-independent : 보안이 https/tls로 위임 받을 수 없다.


1. 카카오, 트위터, 페이스북 등이 제공한다.
2. ㅏ

OAuth 2.0
* Bearer Tokens 중심: 쉽게 사용할 수 있다. 그러나 보안으로는 좋지 않다. 
* 범용성 : OAuth 1.0은 웹에서만 가능하지만, OAuth 2.0은 웹이 아닌 곳에서도 사용가능하다.
* 용도의 구분 : 리소스 요청에 대해 핸들링이 가능하고 유저마다 필요한 인증이 능하다.

1. 클라이언트 어플리케이션 제공자다. (구글 트위터, 카카오, 네이버)
2. 트위터 제공
3. 클라이언트 어플리케이션은 "클라이언트 시크릿" 을 매번 요청한다.
4. 잘못된 요청이 있다고 하면 요청이 리젝된다.

## Refrence
(https://oauth.net)