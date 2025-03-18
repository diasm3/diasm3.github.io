---
layout  : wiki
title   : Dockerfile 설정 방법
summary : Dockerfile을 설정하는 방법에 대한 포괄적인 가이드입니다. 기본 개념, 주요 명령어, 그리고 예제 코드를 포함합니다.
date    : 2022-05-01 16:12:38 +0900
updated : 2023-10-01 12:00:00 +0900
tag     : docker, dockerfile, 설정
 toc     : true
public  : true
parent  : [[docker]] 
latex   : false
---

* TOC
{:toc}

# Dockerfile 설정 방법
## Dockerfile을 습득하기 앞서 필요한 내용
- 기본적인 Shell Command
- Docker의 기본적인 구조 및 사용 방법 (Image, Container)

## Dockerfile의 작동 매커니즘
Dockerfile은 스크립트를 작성하여 도커 이미지를 생성하는 방법을 정의합니다. 폴더를 생성한 후 Dockerfile을 작성하고 스크립트를 추가하면, 포함된 모든 파일을 읽어 Docker Image 파일이 생성됩니다.

## 주요 스크립트 명령어
- **FROM**: 베이스가 될 도커 이미지 `<이미지 이름>:<태그>`  
- **MAINTAINER**: 작성자 정보  
- **CMD**: Shell Script를 실행할 수 있습니다.  
- **LABEL**: 라벨 작성을 위해 사용 (docker inspect 명령으로 label을 확인 가능)  
- **EXPOSE**: 호스트와 연결할 포트 번호를 설정합니다. (도커 내부로만 가능하며, 외부는 포트 포워딩 해줘야 함)  
- **ENV**: 환경 변수 설정  
- **ADD**: 파일 / 디렉터리를 추가  
- **COPY**: 파일 복사  
- **ENTRYPOINT**: 컨테이너 시작 시 스크립트를 실행  
- **VOLUME**: 볼륨을 마운트 (내 컴퓨터에 스토리지를 연결)  
- **USER**: 명령 실행 사용자 권한 지정  
- **WORKDIR**: "RUN", "CMD", "ENTRYPOINT" 명령이 실행될 작업 디렉토리  
- **ARG**: Dockerfile 내부 변수  
- **ONBUILD**: 다른 이미지의 Base Image로 특정 조건에서 실행될 명령 수행  
- **SHELL**: 기본 Shell 지정

## 기본 Dockerfile 스크립트 예제
```Dockerfile
FROM ubuntu:20.04
# 도커 이미지 우분투 20.04를 사용. (local에 해당 이미지가 없으면 자동 다운로드)

RUN apt-get update && apt-get install -y vim apache2
# Shell script 명령어로 초기 apt update 후 vim과 apache를 설치

COPY index.html /var/www/html/
# Dockerfile과 함께 있는 index.html 파일을 apache root 폴더인 /var/www/html/에 복사

CMD ["/usr/sbin/apachectl", "-D", "FOREGROUND"]
# Shell script 명령어로 apache 실행. 옵션에 -D를 넣고 실행
```

## 참고 사이트
- [참고 사이트](https://blog.d0ngd0nge.xyz/docker-dockerfile-write)