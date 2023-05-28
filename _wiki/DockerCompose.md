---
layout  : wiki
title   : Docker compose 사용법
summary : docker compose를 통해 여러개의 도커를 한번에 셋팅하자
date    : 2022-05-01 16:42:28 +0900
updated : 2022-05-15 13:54:49 +0900
tag     : dockercompose docker 
toc     : true
public  : true
parent  : [[docker]]
latex   : false
---
* TOC
{:toc}

# Docker compose란?
- Docker compose 는여러개의 Dockerfile를포함하고 그걸 컨트롤 하는 Dockerfile의 부모격이다.
- docker compose로 세세한 각 dockerfile에 대한 셋팅을 할 수 있고 docker cli로 실행하는 동일한 방식을 스크립트로 만들어 실행 할 수 있다.

## Docker compose를학습하기 전에 알아야할 내용
- 기본적인 docker의 작동원리
- dockerfile의 작동원리
- 기본적인shell command 
- 버전 충돌에 대한 내용(원영님이 잘 정리했다.)
    * [링크](https://choewy.github.io/gitbook/issue/3)



## 초기 셋팅
- 원하는 프로젝트 이름으로 폴더를 생성
- 그안에 docker-compose.yml 생성 후 원하는 dockerfile를 다시 자식 폴더에 넣고 필요한 셋팅파일들을 구조화 하고 넣는다

```bash
- docker-compose.yml
- nginx
    - Dockerfile
    - nignx.conf
- nestserver
    - Dockerfile
    - src
- nodeserver
    - Dockerfile
    - index.js
```
> 도커 컴포즈를 구성할때는 루트 폴더에 docker-compose.yml 파일이 있고 각 하위 폴더에 각각 Dockerfile을 검색하여 하나씩 docker로 구성된다.


## 


## docker compose network
- none
- bridge
- maclan
- local


## Docker compose 기본
```docker
web:
    build: .
    ports:
        - "5000:5000"
    volumes:
        - .:/code
    links:
        - redis
redis:
    images: redis
```



## reference
- [참고 사이트](https://engineer-mole.tistory.com/221)



