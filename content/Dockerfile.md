---
layout  : wiki
title   : Dockerfile 설정방법
summary : dockerfile setting 
date    : 2022-05-01 16:12:38 +0900
updated : 2022-05-01 16:27:06 +0900
tag     : docker dockefile 
toc     : true
public  : true
parent  : [[docker]] 
latex   : false
---
* TOC
{:toc}

# Dockerfile 설정방법
## Dockerfile을 습득하기 앞서 필요한 내용
- 기본적인 shell command
- Docker의 기본적인 구조 및 사용방법(image, container)


 
## 매커니즘
- 폴더를 생성 후 Dockerfile 을 만든 후에 스크립트를 넣으면 안에 있는 모든 파일을 읽으며 docker image파일이 생성된다.

## 스크립트 명령어
- FROM : 베이스가 될 도커 이미지 <이미지 이름>:<태그> 
- MAINTAINER : 작성자 정보
- CMD : Shell Script 를 실행할 수 있다.
- LABEL : 라벨 작성 (docker inspect 명령으로 label을 확인 가능) 
- EXPOSE : 호스트와 연결할 포트 번호를 설정한다.(도커내부로만 가능 외부는 portforwarding 해줘야함)
- ENV : 환경변수 설정
- ADD : 파일 / 디렉터리 추가
- COPY : 파일 복사
- ENTRYPOINT : 컨테이너가 시작되었을때만 스크립트 실행
- VOLUME : 볼륨을 마운트 (내컴퓨터에 스토리지를 연결)
- USER : 명령 실행할 사용자 권한 지정
- WORKDIR : "RUN", "CMD", "ENTRYPOINT" 명령이 실행될 작업 디렉토리
- ARG : Dockerfile 내부 변수
- ONBUILD : 다른 이미지의Base Image로 이는 경우에 실행될 명령 수행
- SHELL : default shell 지정


## 기본 Dockerfile 스크립트
```Dockerfile
FROM ubuntu:20.1
//도커이미지 우분투20.1을 사용(local에 해당 이미지가 없으면 자동다운 )

RUN apt-get update && apt-get install -y vim apache2
// shell script명령어로 초기 apt update후 vim 과 apache를 설치

COPY index.html /var/www/html/
//Dockerfile에 같이 있는 index.html 파일을 apache  root 폴더인/var/www/html/ 에 넣는다

CMD ["/usr/sbin/apachectl", "-D", "FOREGROUND"]
//shell script명령어로 apache 실행 명령어 옵션에 -D를 넣고 실행
```

## reference
- [참고사이트](https://blog.d0ngd0nge.xyz/docker-dockerfile-write)

