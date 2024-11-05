---
layout  : wiki
title   : github action으로 업로드 자동화
summary : github action + s3 + cloudfront + https 
date    : 2022-05-02 05:53:41 +0900
updated : 2022-05-04 20:20:29 +0900
tag     : aws s3 cloudfront https route53 CLAs  
toc     : true
public  : true
parent  : [[cicd]] 
latex   : false
---
* TOC
{:toc}

# 들억가기 앞서 알아야할 내용
- S3 : 간단하게 사용할수 있는 스토리지 그런데 Endpoint를 이용해서 정적 웹페페이지를 이용할 수 있음
- CloudFront : 캐시 서버, 전세계 퍼져있는 캐시 서버(엣지 로케이션이라고)를 토대로 한번 요청한 데이터를 재사용하기 위해서 cloudFront 를 사용한다. 즉  region에 구애 받지 않고 빠른 업로드가 가능하다
- https
- route53
- CLAs
- IAM


> 용어가 너무 생소해서 빨리 파악하지 못한거 같다 용어를 기억하자 


## 셋팅 방법


## reference
https://earth-95.tistory.com/m/127

