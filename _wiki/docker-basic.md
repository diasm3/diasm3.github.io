---
layout  : wiki
title   : Docker basic
summary : docker pull push compose dockerfile 
date    : 2022-03-29 21:43:15 +0900
updated : 2022-03-31 19:45:24 +0900
tag     : docker pull push compose dockerfile  
toc     : true
public  : true
parent  : [[docker]] 
latex   : false
---
* TOC
{:toc}

# 기본개념 
> 나만의 이미지를 깃헙처럼 commit 해서 현재 상태를 유지하고 push 를 해서 이미지화 하여 똑같이 clone 을 해서 다른 시스템에 복붙할 수 있는 가상화 프로그램이다


> 이 페이지에서는 dockerfile과 docker-compose.yml 파일을 셋팅해서 ubuntu에 ssh를 설치 하는거 까지 진행한다


## docker 설치 

* mac 
[download page](https://docs.docker.com/desktop/mac/install/)

## dockerfile
적당한 폴더에서 dockerfile을 생성한다

```bash
# touch dockerfile
# vi dockerfile
```

