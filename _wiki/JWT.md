---
layout  : wiki
title   : JWT
summary : what is the jwt?
date    : 2022-03-20 14:45:40 +0900
updated : 2022-03-21 10:00:22 +0900
tag     : jwt, jwt-token
toc     : true
public  : true
parent  : [[cs-homework]]
latex   : false
---
* TOC
{:toc}

# JWT(JSON Web Signature)


## JWT인란?

> `JWT`는 RFC 7519 웹 표준으로 지정이 되어있다. JSON 객체를 사용해서 토큰 자체에 정보들을 저장하고 있는 Web Token이라고 정의할 수 있다.

## JWT 장점

![image](https://user-images.githubusercontent.com/56494905/158747176-d67b4bc7-b546-442e-bf3c-e80341e07253.png)



## JWT의 구조
`JWT는 header + payload + signature 로 조합된 토큰이다.`

### Header
`헤더는 암호화 방식을 선택하고 JWT및 JWE 등 암호화 방식을 선택할 수 있다.`

> `header의 인자값`
>> `alg`: algorithm의 줄임말. 알고리즘 선택.  
>> SHA256 or SHA512 등을 사용 
>>
>> `typ`: type의 줄임말. JWT, JWE등 다른 방식의 토큰을 선택가능.

### Payload 
`페이로드는 실제 데이터가가 들어가는 곳이며 토큰을 받는 사람, 제목, 보내는사람, 만료시간, 활성 날짜, 발급 시간 등을 설정할 수 있다.`

> `pay-load 인자값`
>> `iss`: issuer 의 줄임말. 토큰 발급자. 
>>
>> `sub`: subject의 줄임말. 토큰 제목.
>>
>> `aud`: audience의 줄임말. 토큰 대상자
>>
>> `exp`: expiration (time) 줄임말. 토큰 만료 시간
>>
>> `nbf`: from not before (time) 줄임말. 토큰 활성 날짜( 이날짜 이전의 토큰은 활성화되지 않을을 보장)
>>
>> `iat`: from issued at (time) 줄임말. 토큰 발급 시간. 
>>
>> `jti`: from JWT ID 줄임말. 토큰 식별자(issuer가 여러명일떄 이를 구분하기 위한값) 


### Signature
`시크릿키를 암호화 시키기면서 동시에 header와 payload를 합치고 최종적으로 토큰을 완성시킬 수 있다.`

``` javascript
//header 64진수로 변환 
const encodedHeader = base64(utf8(JSON.stringify(header)));

//paylod를 64진수로 변환
const encodedPayload = base64(utf8(JSON.stringify(payload)));

//위 두개를 가지고 hmac 알고리즘으로 주어진 secret 키를 이용해 암호화 후 64진수로 변환
const signature = base64(hmac(`${encodedHeader}.${encodedPayload}`,
secret, sha256));


//마지막으로 다시 header + payload + signature를 합친게 JWT 토큰의 완성이다.
const jwt = `${encodedHeader}.${encodedPayload}.${signature}`;

```
### 완성된 JWT 토큰 
> 아래의 코드가 JWT 토큰으로 변환된 완성 모습이다.
>>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ

>
> `Header` : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
>
> `payload` : eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.
>
> `signature` :TJVA95OorM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ

- 자세히 보면 . 으로 구분되어 있는 부분을 확인 할 수 있는데, 각 header와 payload 그리고 signature의 각 부분을 암호화하여 .으로 구분되어 있다 


### 디코드된 JWT 토큰
>https://jwt.io 에서 위 완성된 토큰을 다시 디코드를 하면 header와 payload에 관한 내용을 볼 수가 있다.
>![image](https://user-images.githubusercontent.com/56494905/158709055-3e610708-2ac6-4d44-82ee-5e0c36dfcaf5.png)



## JWT 생성 과정
>![image](https://user-images.githubusercontent.com/56494905/158618931-2a14edd7-00ed-4c2e-82b3-528acb66ef18.png)


## JWT 사용목적

> 1. 데이터 전송시 보안 목적
> 2. 권한 인증 목적 
> 3. stateless
> - 세션과는 달리 백엔드 서버가 바뀌어도 인증이 가능하다. 
> 4. 모바일 환경에서 로그인 지속 


## 토큰을 사용하지 않았을경우 취약점

### Cross-site Request Forgery(CSRF)
>CSRF 공격(Cross Site Request Forgery)은 웹 어플리케이션 취약점 중 하나로 인터넷 사용자(희생자)가 자신의 의지와는 무관하게 공격자가 의도한 행위(수정, 삭제, 등록 등)를 특정 웹사이트에 요청하게 만드는 공격이다.


### Cross-Site Scripting (XSS)

> 악성 스크립트를 통해 사용자의 의도와 상관없는 비 정상적인 동작을 발생시키는 공격  
>  (예: 쿠키값 노출, 피싱, 악성 코드가 실행 가능한 사이트로 리다이렉트 등)


## 일반적인 Token 인증 방식과 refresh 인증 방식
### 일반적인 token 인증 방식
>![Screen Shot 2022-03-17 at 1 15 18 PM](https://user-images.githubusercontent.com/56494905/158748389-630b2072-c1aa-479e-8d9b-badc5ec9009e.png)
>1. 사용자가 로그인한다.
>2. 서버에서 계정정보를 읽어 사용자를 확인하여 사용자의 고유한 ID 값을 부여한 뒤 기타 정보와 함께 Payload에 넣는다.
>3. JWT 토큰의 유효기간을 설정한다.
>4. 암호화할 Secret Key를 이용해 Access token을 발급한다.
>5. 사용자는 Access token을 받아 저장한 후, 인증이 필요한 요청마다 토큰을 헤더에 실어 보낸다.
> - Authorization: Bearer <token>
> - 요청을 보낼 때 JWT 토큰을 Authorization header 필드에 담아보낸다.
>6. 서버에서는 해당 토큰의 Verify Signature를 SECRET KEY로 복호화한 후, 조작여부/유효기간을 확인한다.
>7. 검증이 완료되면 Payload를 디코딩하여 사용자의 ID에 맞는 데이터를 가져온다.
### refresh token 인증 방식
>![Screen Shot 2022-03-17 at 1 18 22 PM](https://user-images.githubusercontent.com/56494905/158748708-c0b25f6a-f2fb-4fff-b8df-14bce0da82e2.png)
>
>1. Access Token은 짧은 생명 주기를, Refresh Token은 보다 긴 생명 주기를 갖는다. ( 구체적인 기간은 케이스마다 다르다. )
>2.  서버로 요청 시 Access Token을 사용하고 Access Token이 만료되면, Refresh Token을 이용해서 새로운 Access Token을 받아온다.
>3. Refresh Token도 만료된다면 다시 로그인을 해야한다.
>4. Access Token이 탈취당하는 경우, 공격자는 사용자와 동일한 권한을 갖게 된다.
>=> JWT를 사용하는 경우 반드시 SSL을 이용한 암호화 통신을 사용해야 한다.
>5. 보안이 중요한 서비스의 경우 JWT가 Stateless함에도 불구하고, Redis등에 발급한 Access Token을 보관하기도 한다.(로그아웃 시 Redis에서 삭제)
>

## 토큰처리시 백앤드 or 프론트앤드 

> 공식 문서에는 이렇게 나와있다.
>> 각 어플리케이션 모델에 따라 백엔드 또는 프론트엔드 알아서 처리해라
>>
>> 고려해야 할 부분은 이렇다.
>> 1. JWT 데이터가 너무 큰가?
>> 2. 대역폭에 영향을 끼치는가?
>> 3. 백엔드에서 오는 레이턴시 (반응속도)가 느린가?
>> 4. 자잘한 요청을 한번에 묶어 큰 요청으로 바꿀수 있는가?
>> 5. 토큰 요청이 데이터베이스에 큰영향을 끼치는가?



## 미니 프로젝트에서 사용된 JWT 코드 예제
### 인코드 방법 
``` python
def api_login():
    pw_hash = hashlib.sha256(pw_receive.encode('utf-8')).hexdigest()

    payload = {
            'userid': id_receive,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=2)
    }
    
    token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')

```


### 디코드 방법 
```python
def add_comment():

    ##클라이언트 사이트에서 mytoken 이라는 쿠키를 가져온다
    token_receive = request.cookies.get('mytoken')
    
    ##jwt 함수를 불러와 HS256으로 인코딩된 mytoken 데이터를 payload 함수에 저장한다.
    ##이때 SECRET_KEY는 기존에 인코딩할떄의 SECRET_KEY를 넣어준다.  
    payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])
    
    ## 몽고 DB 접속후 payload 안에있는 BODY 내용 중 userid를 확인해서 검색한 값을 userinfo에 넣어준다. 
    userinfo = mongo_connect().user.find_one({'userid': payload['userid']}, {'_id': 0})
    .....
    
```


## 용어 모음
> `Base64` 
> - 64진법 으로 변환 주로 이메일 보낼때 쓴다. 한글이나 특수 문자들이 영향을 끼치지 않는 ASCII코드로 변환시켜 준다.
>
> `utf8` 
> - 인코딩된 텍스트를 받고 UTF-8로 구성된 배열을 반환한다.
>
> `sha256` 
> - Secure hash Algorithm 256비트로 구성되어 64자리 문자열을 반환. 2의 256제곱만큼 경우의 수를 만들어 무차별 대입으로 수행시 해시 충돌사례를 찾으려할때 업겁의 시간이 소요 된다. 즉 불가능하다. 배열을 받아 sha-256 알고리즘으로 인코딩된 배열을 반환한다.
>
> `hmac` 
> - hash-based Message Authentication Codes 약자로 주어진 키를 가지고 코드를 생성 해당 코드만이 다시 원복할 수 있다. 
>
> `페이로드(Payload)의 뜻` :
> - 운송업에서 지금(pay) 해야 하는 적화물(load) 즉실 제 가지고 있는 데이터의 내용
>
>`Stateful`
> - 웹서버가 사용자(브라우저)의 상태 client(쿠기) or server(세션) 정보를 기억하고 있다가 유용한 정보로써 활용한다는 의미입니다.
>
>`Stateless`    
> - 웹서버 통신(http) 특성상 사용자(브라우저)의 이전 상태 client(쿠키) or server(세션) 정보를 기록하지 않는 접속이란 의미입니다.
>
> `Session`
> - 서버에 저장하는 사용자정보
> 
> `cookie`
> - 사용자 컴퓨터에 저장하는 데이터
>
>`RS256`
> - RS256(RSA signature with SHA-256) 공개키를 사용할때 사용 
>
>`HS256`
> - HS256(HMAC with SHA-256) 비공개키를 사용할때 사용


## 참고사이트

>
>https://itstory.tk/
>
> https://auth0.com/ 
>
> https://jwt.io/
>
> https://developer.okta.com/blog/2020/12/21/beginners-guide-to-jwt
>
>https://junshock5.tistory.com/83
>
>https://mokpo.tistory.com/14
>
>https://choppadontbiteme.tistory.com/95 
