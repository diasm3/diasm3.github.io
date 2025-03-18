---
layout  : wiki
title   : HTTPS/SSL: Understanding Encryption and Security Protocols
summary : 이 문서는 HTTPS와 SSL의 개념, 중요성, 작동 원리 및 보안성을 설명하며, 데이터 전송 과정에서의 암호화 역할을 다룬다.
date    : 2023-10-01 10:00:00 +0900
updated : 2023-10-01 10:05:00 +0900
tag     : https, ssl, certificate, security, encryption
toc     : true
public  : true
parent  : [[cs-homework]]
latex   : false
---

* TOC
{:toc}

# 데이터 프라이버시란?
> 프라이버시란 개인의 사생활 및 비공식적인 정보가 남에게 알려지지 않도록 보호받는 권리이다.

## 데이터 프라이버시의 중요성

* 개인정보 유출 시 범죄에 악용될 수 있다.
* 유출된 개인정보로 인해 원치 않는 광고가 증가할 수 있다.
* 개인의 사생활이 추적될 수 있으며, 항상 감시받을 수 있다.
* 기업의 기밀 문서가 탈취당할 경우, 기술적 손실과 가치의 상실이 우려된다.

# HTTP와 HTTPS
## HTTP (HyperText Transfer Protocol)

* HTML 문서와 리소스를 가져오는 프로토콜이다. [^protocol]
* 모든 데이터 교환의 기초가 된다.
* 클라이언트-서버 프로토콜로, 텍스트 기반의 통신 규약이다.
    ![image](https://user-images.githubusercontent.com/56494905/159731726-9ef04fce-62c0-4a72-bee9-fef8e382f7cb.png){:width="80%", align="center"}

## HTTPS (HyperText Transfer Protocol Secure)
---
HTTPS는 HTTP에 SSL/TLS를 추가하여 보안성을 강화한 프로토콜이다.
    ![image](https://user-images.githubusercontent.com/56494905/161882125-1095a3bf-632c-4d3f-80e4-f01ff34102b8.png)

# HTTP와 HTTPS 비교

| 차이점            | HTTP     | HTTPS                    | 설명                                                   |
| -                 | :-:      | :-:                      | -                                                      |
| 보안성            | 낮음     | 높음                     | 상대적으로 HTTPS가 보안성이 높다.                    |
| 사용 계층         | 응용 계층 | 전송 계층과 응용 계층 사이 | SSL/TLS가 중간에 있어 추가적인 확인이 이루어진다.    |
| 사용 포트         | 80       | 443                      | HTTPS는 443 포트로 먼저 인증서를 확인 후 통신한다.   |
| 데이터 전송 암호화 | No       | Yes                      | HTTPS는 데이터를 암호화하여 전송한다.                 |
| 속도              | 빠름     | 상대적으로 느림          | 핸드쉐이크 과정 때문에 HTTPS가 더 느리다.             |

# TLS/SSL
## TLS (Transport Layer Security)
- TLS는 클라이언트와 서버 간의 정보 암호화 교환을 목적으로 1999년에 개발되었다.
- 웹뿐 아니라 이메일, 메시지, VoIP 등에서도 사용된다.
- 최신 버전인 TLS 1.3는 2018년에 발표되었다.
- 기존의 SSL 암호화 프로토콜을 포함하고 있다.
- 대칭키 암호[^symmetric-key-algorithm]를 사용하여 암호화한다.

## SSL (Secure Socket Layer)
> SSL은 인터넷 보안을 위한 암호화 프로토콜이다.

- SSL의 특징
    * 1995년 네스케이프사에서 처음 개발되었다.
    * 프라이버시 보장 및 인증, 데이터 진실성을 위한 암호화 알고리즘을 사용한다.

- SSL의 사용 방법
    * CA (Certificate Authorities)에서 인증서를 발급받는다.
    * 서버에 설치한 후 웹 서버 설정을 진행한다.

---
### TLS vs SSL
> TLS는 SSL 3.0을 계승하는 암호화 프로토콜로, 앞으로는 TLS == SSL이라는 개념으로 이해하면 된다.

## SSL 암호화 방식
- 대칭키 방식
    * 같은 키로 암호화와 복호화를 수행한다.
    * 키를 공유할 때 노출될 위험이 있다.
- 비대칭 키 방식
    * 공개키와 개인키를 함께 사용한다.
    * 시스템의 공통적 비밀이 아닌 두 개의 다른 키를 사용한다.

> CA에서 발급받은 인증서는 사이트의 소유자를 보장하며, 데이터가 안전하게 암호화되어 전송되는 것을 의미한다.
> 구글 검색엔진은 HTTPS 암호화를 적용하면 상위 검색순위에 반영된다. [SEO 체크리스트 공식문서](https://g.co/WebmasterChecklist)

![image](https://user-images.githubusercontent.com/56494905/161895465-1bbe2acc-ff94-49d4-a594-b92d0292f58c.png){:width="50%"}

## 인증서(Certificate)
- 인증 기관(CA)의 종류
  - 무료
    * Let's Encrypt
    * WoSign 
    * AWS Certificate 
    * Cloudflare SSL 
  - 유료
    * Verisign
    * GoDaddy
    * GlobalSign
    * Comodo(Sectigo)  
    * Thawte  
    * GeoTrust 
    * DigiCert  

- 실제 적용 사례를 검토하도록 하자

![image](https://user-images.githubusercontent.com/56494905/161885376-8022a886-fc79-46c9-a073-6839952e2fbe.png){:width="50%"}

### 인증서 구매 및 설정
- CA 사이트에서 구매 후,

![image](https://user-images.githubusercontent.com/56494905/161897304-cb440634-2169-43b8-8228-accd707c9341.png){:width="50%"}

- 도메인 내용 입력

![image](https://user-images.githubusercontent.com/56494905/161897397-47589b99-6113-468a-85dc-944d5b5a3828.png){:width="50%"}

- 생성된 개인 키

![image](https://user-images.githubusercontent.com/56494905/161899159-9c07101d-e829-4562-a127-9c465263dd74.png){:width="50%"}

- Cloudflare에서의 인증서 정보 확인
    * 도메인 이름 인증
    * 발급 기관 정보
    * 인증 날짜 및 만료 날짜
    * 관련된 서브 도메인 정보  

![image](https://user-images.githubusercontent.com/56494905/161919187-83ea6c6e-8a84-4839-88a5-a213005fe8ec.png){:width="50%"}

- 인증 기관과 등록 절차가 완료되면 아래와 같은 4가지 키와 인증서를 받게 된다.
    * ssl.key : 서버 비공개 키
    * ssl.crt : 디지털 인증서
    * ca.pem : ROOT CA 인증서
    * sub.class1.server.ca.pem : 중계자 인증서

- Apache, Nginx 또는 Node.js에 설치
    ... 생략[후에 상세히]

### SSL 작동 원리
* 작동 원리 
    1. 핸드쉐이크를 통한 서버 인증 과정
    2. 절차 완료 후 클라이언트와 서버 간의 세션 확립
    3. 대칭 암호화를 통한 데이터 전송

* 이해할 개념 
    1. 대칭 키 알고리즘
    2. 비대칭 키 암호
    3. 인증서
    4. 인증 기관(CA)
    5. 핸드쉐이크 분석
    6. 암호화 알고리즘(RSA 등)

### SSL 핸드쉐이크를 통한 서버 인증 과정
- SSL 핸드쉐이크 과정에 대한 흐름도

![image](https://user-images.githubusercontent.com/56494905/161886749-b3359817-3331-41c7-8505-ec0222642733.png){:width="100%"}

- SSL 핸드쉐이크 RSA 키 교환 방식의 순서도

![image](https://user-images.githubusercontent.com/56494905/162109026-5095b356-4443-46a3-bde1-9802f498321e.png)

### 세션이란?
* 세션 준비 완료
* 세션 키를 가지고 암호화 후, 데이터 전송을 시작한다.

# 7가지 주요 Man-in-the-middle 공격 방식
* IP 스푸핑
    * 공격자가 IP 주소를 조작하여 일반 클라이언트 행세를 하며 서버에 접근하는 기법이다.
* DNS 스푸핑
    * 공격자가 금융기관과 동일한 사이트를 만들어 사용자를 속이는 방식이다.
* HTTPS 스푸핑
    * HTTPS 주소로 링크되어 있지만 실제로는 HTTP 링크로 연결되어 클라이언트 정보가 탈취되는 경우이다.
* SSL 하이재킹
    * HTTP 주소 접속 시, 공격자가 설정한 SSL 서버로 유도하며 데이터를 가로채는 방식이다.
* 이메일 하이재킹
    * 금융기관을 사칭하여 사용자 정보를 탈취하는 방식이다.
* Wi-Fi 도청
    * 공공 Wi-Fi 환경에서 패킷 정보를 모니터링할 수 있다.
* 쿠키 탈취
    * 클라이언트 내부에 저장된 개인정보를 탈취하는 방식이다.

> HTTPS로 암호화된 상태로 연결되었다면, 데이터가 중간에서 탈취되더라도 더 안전할 수 있다. 그러나 DDOS 공격과 같은 경우에는 HTTPS가 도움을 주지 않는다.

# 결론
> 랜선을 타고 다니는 모든 데이터는 안전하지 않다. 
> 다만 이중, 삼중의 암호화 과정을 거치면 보안성이 향상된다. 
> 따라서 HTTPS는 선택이 아닌 필수이다.

# 참고 사이트
* [Mozilla 공식 사이트](https://developer.mozilla.org/ko/docs/Web/HTTP/Overview)
* [HTTP 상태 코드](http://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
* [Cloudflare SSL 정보](https://www.cloudflare.com/learning/ssl/what-is-ssl/)
* [기타 리소스](https://wayhome25.github.io/cs/2018/03/11/ssl-https/)
* [Mozilla 암호화 스위트](https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_Ciphersuite)
* [Norton의 Man-in-the-middle 공격 설명](https://us.norton.com/internetsecurity-wifi-what-is-a-man-in-the-middle-attack.html)

# 주석
[^protocol]: 프로토콜은 컴퓨터 내 및 컴퓨터 간의 데이터 교환 방식을 정의하는 규칙의 집합이다.  
[^symmetric-key-algorithm]: 대칭 키 암호화 알고리즘의 유형으로, 암호화와 복호화에 동일한 키를 사용하는 알고리즘을 의미한다.  
[^personal-information]: 개인 정보: 이름, 주소, 기기 정보, 계정 정보 및 비밀번호를 포함하여 개인에 대한 자세한 정보를 의미한다.