---
layout  : wiki
title   : refresh token 구현하기
summary : jwt 인증만 하지 말고 보안을 더 신경쓰자 refresh token 구현하기
date    : 2022-05-09 22:34:00 +0900
updated : 2022-05-15 14:02:18 +0900
tag     : freshtoken jwt access token
toc     : true
public  : true
parent  : nodejs 
latex   : false
---
* TOC
{:toc}

## Description (개요)

현재 개발된 부분은 간단하게 서버에서 JWT토큰을 발행후 3600초 동안 유지하는 방식으로 테스트를 완료했습니다.
하지만 실제 서비스에서는 보안에 관련하여 좀더 신경써야 하기때문에 Access Token 과 Refresh Token을 이용한 3 Handshake 방식의 인증 방식을 사용하려고 합니다.(5월 16일 개발 예정)

To @pol-dev-shinroo
 지금 테스트를 진행할때는 3600초동안 JWT토큰이 유지될거라 3600 이후에는 다시 JWT토큰을 받으려면 로그인을 다시 해야하는 문제점이 있습니다.
따라서 Access Token과 Fresh Token에 대해 이해 하시고 나중에 적용할때 준비를 해두시면 좋을 듯 합니다.

[리엑트에서 Refresh Token 관리법 레퍼런스](https://slog.website/post/10) 
[백에서 Refresh Token 레퍼런스](https://velog.io/@kingth/%EC%84%9C%EB%B2%84-%EC%9D%B8%EC%A6%9D-%EB%B0%A9%EC%8B%9D%EC%84%B8%EC%85%98%EC%BF%A0%ED%82%A4-%ED%86%A0%ED%81%B0)

작동방식
----------------------
> 가정 1. Access Token과 Refresh Token이 둘다 없을때
### **클라이언트**
1. 로그인 요청
### **서버**
2. **Access Token**과 **Refresh Token**을 발행한다
      - Access Token : 생명주기가 짧은 토큰(예: 1시간)
      - Refresh Token: 생명주기가 긴 토큰(예: 2주일)
  3. Refresh Token은 서버DB에 저장
  4. Client에게 Access Token, Refresh Token을 보낸다
  ### **클라이언트**
  5. Refresh Token을 안전한 곳에 저장
  6. Access Token을 헤더에 넣고 필요한 요청을 보낸다.
  ### **서버**
  7. Access Token을 검증 후 필요한 데이터를 보낸다.

------------------------

> 가정 2. Access Token은 만료 되고, Refresh Token이 유효할때 

###   **클라이언트** 
1. Access Token과 함께 데이터 요청
(보내기전에 Access Token안에 payload안에 유효기간을 알 수 있어서 재발급 요청 가능)

 ###  **서버**
2. Access Token 확인 -> 만료 
3. 클라이언트에서 Refresh Token 요청 및 확인(payload 안에 유효기간확인가능)
4. Refresh Token이 아직 유효하면
5. Access Token을 바로 발급 후 헤더로 전송
  


-------------------------------
> 가정3. accessToken은 만료 되고, refreshToken도 만료될때 
 -> **다시 로그인해야함**

 개요  




## reference
- (https://hello-judy-world.tistory.com/74){사이트 주소}
