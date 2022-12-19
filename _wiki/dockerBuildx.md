---
layout  : wiki
title   : Docker Buildx로 다양한 플렛폼에서도 빌드하자
summary : M1 맥북에서는 build가 되지만 AWS EC2 빌드시 에러가 발생할때 
date    : 2022-09-05 15:47:55 +0900
updated : 2022-09-05 16:48:07 +0900
tag     : docker buildx aws ec2 ElasticBeanstalk 
toc     : true
public  : true
parent  : [[docker]] 
latex   : false
---
* TOC
{:toc}

# Docker buildx란?  
> 도커를 빌드할때 M1맥북에서 빌드할때와 AMD에서 빌드할때와 Intel에서 빌드할때의 빌드 방식이 달라 yaml파일마다 각각 맞는 리소스를 넣어야 빌드가 된다.
> 이런 귀찮은 일을 buildx 명령어로 한방에 해결할 수 있다.


> M1 맥북은 플렛폼이 ARM64기반이다. 근데 ElasticBeanstalk를 이용해서 도커를 사용할때는 다른 플렛폼을 사용하는거 같다. 
> AMD64는 x86_64이고 arm64는 aarch64이다.  

## 명령어
- 나는 아래의 명령어만 가지고 빌드를 하고 적용하니 잘되었다

```bash
$  docker buildx build \
--push \
--platform linux/arm64/v8,linux/amd64 \
--tag gurumee92/buildx-test .

```



## reference
- [https://gurumee92.tistory.com/311](https://gurumee92.tistory.com/311)
