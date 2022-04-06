---
layout  : wiki
title   : HTTPS/SSL
summary : HTTPS와SSL 
date    : 2022-03-23 21:59:10 +0900
updated : 2022-04-06 16:24:40 +0900
tag     : https ssl certificate 
toc     : true
public  : true
parent  : [[cs-homework]] 
latex   : false
---
* TOC
{:toc}

# Data Privacy?
> Privacy란 개인의 사생활이나 집안의 사사로운 일 또는, 그것이 남에게나 사회에 알려지지 않으며 간섭받지 않는 권리.

* personal information[^personal-informatio]

## 왜 데이터의 privacy가 중요한가?

* 범죄에 사용 될 가능성이 있고 사용자를 교란 및 괴롭힐 수  도 있다
* 개인정보가 유출되면 원하지 않는 광고들을 많이 받을 수 있다 
* 개인의 사생활을 추적할 수 있어, 언제나 추적 감시 대상이 될 수 있다
* 또한 기업의 중요 문서 등이 탈취되면 기업에 기술 및 가치를 탈취 당할 수 있다 


# http vs https
## `http`(HyperText Transfer Protorcol)

* HTML 문서와 같은 리소스들을 가져올 수 있도록 해주는 프로토콜이다. [^protocol]
* 모든 데이터 교환의 기초
* 클라이언트-서버 프로토콜(통신규약)
* 텍스트 기반의 통신 규약으로 `인터넷에서 데이터를 주고받을` 수 있는 프로토콜이다.

![image](https://user-images.githubusercontent.com/56494905/159731726-9ef04fce-62c0-4a72-bee9-fef8e382f7cb.png){:width="80%", align="center"}

## `https`(HyperText Transfer Protocol over Secure Socket Layer )
* https 기반에 `SSL`을 추가 보완한 프로토콜

    ![image](https://user-images.githubusercontent.com/56494905/161882125-1095a3bf-632c-4d3f-80e4-f01ff34102b8.png)

## http/https 비교

| 차이점            | http     | https                    | 설명                                                   |
| -                 | :-:      | :-:                      | -                                                      |
| 보안성            | 낮음     | 높음                     | 상대적으로 https가 보안성 측면에서 높다                |
| 사용계층          | 응용계층 | 전송계층과 응용계층 사이 | SSL/TLS 가 중간에 위치하여 한번더 체크를 한다          |
| 사용포트          | 80       | 443                      | 443 포트로 먼저 certificate 을 확인 후 통신한다        |
| 전달데이터 암호화 | No       | Yes                      | https는 암호화 되서 전송된다                           |
| 속도              | 빠름     | 상대적으로 느림          | 상대적으로http보다  https가 더 느리다(Handshake때문에) |



# TLS/SSL
## TLS(Transport Layer Security)
- TLS 특징
    * 클라이언트와 서버의 암호화 정보 교환을 목적을 두고 1999년 개발되었다
    * TLS는 웹뿐만아니라 이메일, 메세지,  VoIP 등 에 쓰인다
    * 최신버전인 TLS 1.3  2018년에 나왔다
    * 기존 버전의 암호화 프로토콜인 `SSL`을 포함하고 있다
    * 지원 가능한 알고리즘 서로 교환
    * 키 교환, 인증
    * `대칭키 암호`[^symmetric-key-algorithm]


## SSL(Secure Socket Layer)? 
> SSL or Secure Sockets Layer 암호화 기반의 인터넷 보안 프로토콜이다.

- SSL 특징
    * 1995년 네스케이프사에서 처음 개발되었다
    * 개발 목적은 프라이버시 보장, 인증, 데이터 진실성을 위해 개발되었다 
    * 암호화 알고리즘을 사용하여 데이터를 암호화함
    

- SSL 사용방법 
    * CA(Certificate authorities)에서 인증서를 발급
    * 서버에 설치 후 웹서버 설정
    
## TLS vs SSL 
    
> TLS는 SSL 3.0을 계승하는 암호화 프로토콜이다
> 즉 앞으로 `TLS == SSL` 라고 생각하면 된다

## SSL 암호화 방식 
- 대칭키 방식
    * 해시 테이블 처럼 키가 있어야 암호화를 할 수 있다 
    * 암호화 할때 1234이라는 암호로 키를 사용했다면 1234이 있어야 복호화 할 수 있다
    * 대칭키를 공유할때 위험이 노출되기 때문에 매우 위험하다
- 공개키 방식
    * 두개의 키를 갖는데 A키로 암호화를 하면 B키로 복호화 할 수 있고, B키로 암호화하면 A키로 복호화 할 수 있는 방식이다 
    * 두개의 키중 하나는 비공개키(private key) 하나는 공개키(public key)라고 한다 
    
>이때 어차피 두개의 키가 노출이 된다고 하더라도 인증서의 최종 목적은 `신원을 보장한다` 이다
    
    
    
    
> CA에서 발급받은 인증서는 제 3자가 소유하고있는 사이트를 보장해준다는 의미
> 즉 데이터가 안전하게 암호화 되어 전송되고 있다는 뜻이다


> 구글에서는 공식적으로 Search eninge ranking 이라는 항목으로 `https 암호화`를 적용시 `상위 검색순위`에 들어가게 됨으로 꼭 https를 적용시키자 
[SEO 체크리스트 공식문서](https://g.co/WebmasterChecklist)

![image](https://user-images.githubusercontent.com/56494905/161895465-1bbe2acc-ff94-49d4-a594-b92d0292f58c.png){:width="50%"}



## 인증서(Certificate)  
- CA(Certificate authorities) 기관의 종류
    - 무료
        * Let's Encrypt
        * WoSign 
        * AWS Certificate 
        * CloudFlare SSL 
 
     - 유료
        * Verisign
        * GoDaddy
        * GlobalSign
        * Comodo(Sectigo)  
        * Thawte  
        * GeoTrust 
        * DigiCert  

    * 실제로 적용된 살례
        
        ![image](https://user-images.githubusercontent.com/56494905/161917519-916e0d93-6011-46fb-8bf2-16c6d19fdc3f.png){:width="50%"}
    > 각자브라우져에 자물쇠 부분을 클릭해서 Certificate 부분을 부면 도메인의 소유자의 대한 내용이 상세히 나온다 즉 SSL이 적용된 사례라고 볼 수 있다



    * CA 사이트에서 구매 후 

        ![image](https://user-images.githubusercontent.com/56494905/161897304-cb440634-2169-43b8-8228-accd707c9341.png){:width="50%"}

    * 실제 도메인 내용 입력장면

        ![image](https://user-images.githubusercontent.com/56494905/161897397-47589b99-6113-468a-85dc-944d5b5a3828.png){:width="50%"}

    * 실제로 생성된 private key

        ![image](https://user-images.githubusercontent.com/56494905/161899159-9c07101d-e829-4562-a127-9c465263dd74.png){:width="50%"}
    * 실제 cludeflare.com의 certificate의 정보
        
        ![image](https://user-images.githubusercontent.com/56494905/161919187-83ea6c6e-8a84-4839-88a5-a213005fe8ec.png){:width="50%"}
    
    
- SSL certificate 포함된 내용
    * 도메인 네임이 인증되어있고 어떤 내용으로 발생되었는지
    * 어떤 사람, 기관, 기종에서 발생되었는지
    * 발급한 인증기관
    * 인증기관의 디지털 서명
    * 관련된 서브 도메인들
    * 인증날짜
    * 만료날짜
    * Public 키 
    
- SSL 작동 원리
    *  
    * 인증된 사이트에서 c 아래와 같이 

        ![image](https://user-images.githubusercontent.com/56494905/161885376-8022a886-fc79-46c9-a073-6839952e2fbe.png){:width="50%"}








## SSL Handshake[^handshake]란?

TLS 

![image](https://user-images.githubusercontent.com/56494905/161886749-b3359817-3331-41c7-8505-ec0222642733.png){:width="50%"}

TLS 암호화 부터 시작 


## 어떻게 불법적인 하이제킹을 막아야하는가?


## 참고사이트
* [모질라 공식사이트](https://developer.mozilla.org/ko/docs/Web/HTTP/Overview)
* [http 상태코드](http://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
* [Cloudflare](https://www.cloudflare.com/learning/ssl/what-is-ssl/)
* [링크](https://wayhome25.github.io/cs/2018/03/11/ssl-https/)
* [Mozila - ChiperSuite](https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_Ciphersuite)

## 주석
[^protocol]:  프로토콜은 컴퓨터 내부에서, 또는 컴퓨터 사이에서 데이터의 교환 방식을 정의하는 규칙 체계이다. 기기 간 통신은 교환되는 데이터의 형식에 대해 상호 합의를 요구한다. 이런 형식을 정의하는 규칙의 집합을 프로토콜이라고 한다. 
[^statuscode]: http 반환코드: 클라이언트의 데이터 요청에 따른 서버 반환 코드
[^handshake]: 프로토콜(protocol): 서버와 클라이언트의 소통 과정을 나타낸다. 
[^SYC]: 동기화(Synchronization  )
[^ACK]: 승인(Acknowledgement) 
[^symmetric-key-algorithm]: 대칭키 암호(symmetric-key algorithm) 암호화 알고리즘의 한 종류로, 암호화와 복호화에 같은 암호 키를 쓰는 알고리즘을 의마한다.
[^personal-information]: Personal information : 어떤 사람의 자세한 정보 즉 이름, 주소 기기정보, 계정정보 및 암호 등이다
