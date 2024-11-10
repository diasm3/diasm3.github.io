---
layout  : wiki
title   : Amplify를 사용하여 간단히 배포하기 (Frontend)
summary : AWS Amplify를 활용한 CI/CD 및 배포 과정을 다룹니다. HTTPS 및 도메인 설정 방법과 함께 빌드부터 배포까지 단계별로 설명합니다.  
date    : 2022-09-04 15:17:54 +0900
updated : 2022-09-05 16:48:41 +0900
tag     : amplify, react, deploy, cicd, https  
toc     : true
public  : true
parent  : [[aws]]  
latex   : false
---

* TOC
{:toc}

# AWS Amplify란?
AWS Amplify는 S3를 기반으로 프론트엔드(또는 백엔드) 애플리케이션을 간단하게 배포할 수 있는 AWS의 종합 솔루션 원스톱 서비스입니다.

# 프론트엔드를 Amplify로 몇 분 만에 배포하기

## 1. 프론트(React) 애플리케이션 GitHub에 준비하기

1. 애플리케이션 코드를 GitHub에 푸시하기

2. Amplify Console에서 GitHub 리포지토리 연결하기

3. 배포 설정하기
    - 빌드 설정
    - 환경 변수 설정

4. 배포 시작

5. 배포 완료 후 웹사이트 URL 확인하기

## 실제 사용 사례
AWS Amplify를 이용하여 최근 업데이트된 React 애플리케이션을 AWS에 배포한 사례를 소개합니다. 이 사례에서는 버전 관리와 CI/CD 파이프라인이 어떻게 구성되었는지 보여줍니다.