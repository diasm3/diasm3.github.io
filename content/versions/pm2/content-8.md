---
layout  : wiki
title   : PM2 - 프로세스 관리 및 배포 도구  
summary : PM2는 Node.js 애플리케이션을 효율적으로 관리하고 배포하는 데 사용되는 강력한 프로세스 관리 도구입니다. 이 문서에서는 PM2의 기본 기능과 사용 방법을 설명합니다.
date    : 2022-04-24 20:49:49 +0900
updated : 2022-04-24 20:55:21 +0900
tag     : [Node.js, PM2, 프로세스 관리]
toc     : true
public  : true
parent  : 
latex   : false
---

* TOC
{:toc}

# PM2
PM2는 Node.js 애플리케이션을 효율적으로 배포하고 프로세스를 관리하는 도구입니다. 이를 통해 서버의 성능을 극대화하고 애플리케이션의 가용성을 높일 수 있습니다.

## 주요 기능
- 프로세스 모니터링
- 자동 재시작 기능
- 클러스터 모드 지원
- 로드 밸런싱

## 설치 방법
PM2를 설치하려면 다음 명령어를 사용하십시오:
```bash
npm install pm2 -g
```

## 기본 사용법
PM2를 사용하여 애플리케이션을 시작하는 방법은 다음과 같습니다:
```bash
pm2 start app.js
```

## 참고 사이트
- [PM2 GitHub](https://github.com/keymetrics/docker-pm2)
- [참고 블로그](https://blog.joon-lab.com/164)

## 실제 사용 사례
PM2는 Node.js 기반 웹 애플리케이션에서 주로 사용되며, 다음과 같은 실사용 사례가 있습니다:
- 대규모 트래픽을 처리하는 eCommerce 사이트
- 실시간 데이터 처리 애플리케이션
