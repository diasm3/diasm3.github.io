---
layout  : category 
title   : Docker: 컨테이너와 이미지 관리 
summary : 이 문서는 Docker의 기본 개념과 명령어를 설명하고, Docker 이미지, 컨테이너, 네트워크 설정에 대한 예제를 제공합니다. 
date    : 2022-03-25T06:38:42+09:00 
updated : 2022-04-24T08:06:15+09:00 
tag     : [docker, container, image] 
toc     : true 
public  : true 
parent  : [[index]] 
latex   : false 
---

* TOC
{:toc}

# Docker란? 
Docker는 애플리케이션을 컨테이너화하여 배포하고 관리할 수 있는 플랫폼입니다. 

# 주요 명령어 
* [[command]]{명령어}

## Docker 이미지
Docker 이미지는 컨테이너를 생성할 때 사용하는 템플릿입니다. 필요한 소프트웨어와 환경을 미리 정의할 수 있습니다. 

### 예제
```bash
# Docker 이미지 목록 보기
docker images
```

## Docker 컨테이너
Docker 컨테이너는 실행 중인 애플리케이션의 인스턴스를 의미합니다. 

### 예제
```bash
# 새로운 컨테이너 실행하기
docker run -d -p 80:80 nginx
```

## Docker Compose
Docker Compose는 여러 컨테이너를 쉽게 정의하고 실행할 수 있게 해주는 도구입니다. 

### 예제
```yaml
version: '3'
services:
  web:
    image: nginx
    ports:
      - "80:80"
```

## Docker 네트워크
Docker에서의 네트워크는 컨테이너 간의 통신을 관리합니다.
- **none**: 완전한 네트워크 독립 컨테이너 네트워크
- **host**: 호스트의 네트워크를 사용하는 방법
- **bridge**: 기본 가상 네트워크
- **macvlan**: MAC 주소를 지정하여 컨테이너에 할당하는 네트워크

## 명령어
- `docker inspect nginx` : 지정한 컨테이너의 네트워크 설정을 확인
- `ip a | grep docker0` : Docker 네트워크 인터페이스 확인

## 추가 문서
- [Docker 공식 문서](https://docs.docker.com) : 더욱 상세한 정보를 위해 Docker의 공식 문서를 참조하세요.