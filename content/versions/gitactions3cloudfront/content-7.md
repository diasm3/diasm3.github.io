---
layout  : wiki
title   : GitHub Action을 이용한 자동화 업로드
summary : GitHub Action을 활용하여 S3에 파일을 업로드하고, CloudFront를 통해 HTTPS 배포까지 수행하는 방법에 대한 설명입니다.
date    : 2022-05-02 05:53:41 +0900
updated : 2022-05-04 20:20:29 +0900
tag     : aws, s3, cloudfront, https, route53, CLAs, CI/CD
toc     : true
public  : true
parent  : [[cicd]] 
latex   : false
---
* TOC
{:toc}

# 들어가기 앞서 알아야 할 내용
- **S3** : 간단하게 사용할 수 있는 스토리지로, Endpoint를 이용하여 정적 웹페이지를 호스팅할 수 있음.
- **CloudFront** : 전 세계에 분산된 엣지 로케이션을 통해 요청한 데이터를 재사용하고 빠른 업로드를 가능하게 하는 캐시 서버.
- **HTTPS** : 보안 통신을 통해 데이터 전송의 안전성을 보장함.
- **Route53** : AWS의 도메인 네임 시스템 (DNS) 서비스.
- **CLAs** : Contributor License Agreements의 약어, 기여에 대한 법적 조건.
- **IAM** : Identity and Access Management, AWS 리소스에 대한 접근 제어 관리.

> 용어가 생소할 수 있으니, 각 용어의 정확한 의미를 기억하는 것이 중요합니다.

## 셋팅 방법
1. GitHub 레포지토리를 생성한다.
2. GitHub Action을 설정하여 S3에 파일을 자동으로 업로드하는 워크플로우를 작성한다.
3. S3 버킷을 생성하고, 정적 웹사이트 호스팅을 활성화 한다.
4. CloudFront 배포를 설정하여 HTTPS를 통한 접근을 가능하게 한다.

## 실제 사용 사례
- **Example 1**: 자동화된 CI/CD 파이프라인을 사용하여 매번 코드 푸시 시, 테스트 후 자동으로 S3에 업로드 후 CloudFront를 통한 배포.

## Reference
- [Earth 95 Tistory](https://earth-95.tistory.com/m/127)