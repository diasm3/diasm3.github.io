---
layout  : wiki
title   : Docker Buildx로 다양한 플랫폼에서도 빌드하기
summary : M1 맥북에서 Docker 빌드가 성공하지만 AWS EC2에서 빌드할 때 발생하는 에러를 해결하는 방법을 설명합니다.
date    : 2022-09-05 15:47:55 +0900
updated : 2022-09-05 16:48:07 +0900
tag     : docker, buildx, aws, ec2, ElasticBeanstalk
 toc     : true
public  : true
parent  : [[docker]]
latex   : false
---

* TOC
{:toc}

# Docker Buildx란?  
> Docker는 여러 플랫폼에서 빌드할 때 M1 맥북, AMD, Intel의 빌드 방식이 각각 다릅니다. 각 YAML 파일마다 맞는 리소스를 넣어야 빌드가 가능합니다.  
> 이러한 번거로운 과정을 Docker Buildx 명령어로 한 번에 해결할 수 있습니다.

> M1 맥북은 ARM64 기반입니다. 그러나 Elastic Beanstalk를 사용할 때 Docker는 다른 플랫폼을 사용하는 것 같습니다.  
> AMD64는 x86_64이고, ARM64는 aarch64입니다.

## 명령어
- 아래의 명령어를 이용하여 빌드를 성공적으로 적용했습니다:

```bash
$ docker buildx build \
--push \
--platform linux/arm64/v8,linux/amd64 \
--tag gurumee92/buildx-test .
```  

## 실제 사용 사례
이 명령어를 사용하여 M1 맥북에서 AWS EC2 인스턴스에 도커 이미지를 성공적으로 배포했습니다.  
사례로는 ML 모델을 도커 컨테이너로 패키징하여 AWS에 배포하는 것을 들 수 있습니다.

## 참고자료
- [Tistory: Docker Buildx 사용법](https://gurumee92.tistory.com/311)