---
layout  : wiki
title   : Docker Compose 사용법
summary : Docker Compose를 통해 여러 개의 Docker 컨테이너를 동시에 설정하는 방법에 대해 알아보자.
date    : 2022-05-01 16:42:28 +0900
updated : 2023-10-01 13:54:49 +0900
tag     : docker-compose, docker
 toc     : true
public  : true
parent  : [[docker]]
latex   : false
---

* TOC
{:toc}

# Docker Compose란?
Docker Compose는 여러 개의 Dockerfile을 포함하고 이를 제어하는 데 사용되는 도구이다. 이를 통해 각 Dockerfile에 대한 세부 설정을 하여, Docker CLI를 사용하여 실행하는 동일한 방식이 스크립트로 만들어 실행될 수 있다.

## Docker Compose를 학습하기 전에 알아야 할 내용
- 기본적인 Docker 작동 원리
- Dockerfile 작동 원리
- 기본적인 Shell Commands
- 버전 충돌에 대한 내용 ([원영님이 잘 정리했다.](https://choewy.github.io/gitbook/issue/3))

## 초기 설정
1. 원하는 프로젝트 이름으로 폴더를 생성한다.
2. 그 안에 `docker-compose.yml` 파일을 생성하고, 원하는 Dockerfile을 자식 폴더에 넣는다. 필요한 설정 파일들은 구조화하여 넣는다. 

```bash
project-folder/
├── docker-compose.yml
├── nginx/
│   ├── Dockerfile
│   └── nginx.conf
├── nestserver/
│   ├── Dockerfile
│   └── src/
└── nodeserver/
    ├── Dockerfile
    └── index.js
```

> 도커 컴포즈를 구성할 때는 루트 폴더에 `docker-compose.yml` 파일이 있고, 각 하위 폴더에 있는 Dockerfile을 검색하여 하나씩 Docker로 구성된다.

## Docker Compose Network
- `none`
- `bridge`
- `macvlan`
- `local`

## Docker Compose 기본 설정
```docker
version: '3'
services:
  web:
    build: .
    ports:
      - "5000:5000"
    volumes:
      - .:/code
    links:
      - redis
  redis:
    image: redis
```

## 참고자료
- [참고 사이트](https://engineer-mole.tistory.com/221)