---
layout  : wiki
title   : Refresh Token 구현하기
summary : JWT 인증에 추가적인 보안 강화를 위한 Refresh Token 구현 방법
date    : 2022-05-09 22:34:00 +0900
updated : 2022-10-10 18:07:36 +0900
tags    : refresh-token, jwt, access-token
toc     : true
public  : true
parent  : nodejs 
latex   : false
---
* TOC
{:toc}

## 개요

현재 개발된 부분은 간단히 서버에서 JWT 토큰을 발행한 후 3600초 동안 유지되는 방식으로 테스트를 완료했습니다. 그러나 실제 서비스에서는 보안 관련하여 좀 더 신경 써야 하므로 Access Token과 Refresh Token을 이용한 3-way handshake 방식의 인증 방식을 사용하려고 합니다.(5월 16일 개발 예정)

현재 테스트 중에는 3600초 동안 JWT 토큰이 유지되며, 이 시간이 지나면 다시 JWT 토큰을 받기 위해 로그인을 다시 해야 하는 문제점이 있습니다. 따라서 Access Token과 Refresh Token에 대해 이해하고, 나중에 적용할 수 있도록 준비해 두시면 좋을 듯합니다.

[리액트에서 Refresh Token 관리법 레퍼런스](https://slog.website/post/10)  
[백엔드에서 Refresh Token 레퍼런스](https://velog.io/@kingth/%EC%84%9C%EB%B2%84-%EC%9D%B8%EC%A6%9D-%EB%B0%A9%EC%8B%9D%EC%84%B8%EC%85%98%EC%BF%A0%ED%82%A4-%ED%86%A0%ED%81%B0)

## 작동 방식

### 가정 1: Access Token과 Refresh Token이 모두 없을 때

#### **클라이언트**  
1. 로그인 요청  

#### **서버**  
2. **Access Token**과 **Refresh Token**을 발행  
   - Access Token: 생명주기가 짧은 토큰(예: 1시간)  
   - Refresh Token: 생명주기가 긴 토큰(예: 2주)  
3. Refresh Token은 서버 DB에 저장  
4. 클라이언트에게 Access Token과 Refresh Token을 보낸다  

#### **클라이언트**  
5. Refresh Token을 안전한 곳에 저장  
6. Access Token을 헤더에 넣고 필요한 요청을 보낸다.  

#### **서버**  
7. Access Token을 검증 후 필요한 데이터를 보낸다.

---  

### 가정 2: Access Token은 만료되고, Refresh Token이 유효할 때  

#### **클라이언트**  
1. Access Token과 함께 데이터 요청  
   (보내기 전에 Access Token의 payload에 유효 기간을 알 수 있어 재발급 요청 가능)  

#### **서버**  
2. Access Token 확인 -> 만료  
3. 클라이언트에서 Refresh Token 요청 및 확인(유효 기간 확인 가능)  
4. Refresh Token이 유효하면  
   - Access Token을 즉시 발급 후 헤더로 전송

---  

### 가정 3: Access Token과 Refresh Token 모두 만료될 때  
   -> **다시 로그인해야 함**

## 참고 자료
- [사이트 주소](https://hello-judy-world.tistory.com/74)