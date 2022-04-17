---
layout  : wiki
title   : mysql과 sequelize
summary :  
date    : 2022-04-16 08:04:47 +0900
updated : 2022-04-17 09:04:58 +0900
tag     : db mysql 
toc     : true
public  : true
parent  : [[backend]]  
latex   : false
---
* TOC
{:toc}

# mysql 
## docker로 설치 방법
```bash
$ docker pull mysql

// 이미지가 제대로 다운로드 됐는지 확인한다 
$ docker images

// 도커 컨테이너를 실행시키고 이름은 mysql-docker 루트의 비번은 password(변경해서) 3306포트로 설정한다
$ docker run --name msyql-docker -e MYSQL_ROOT_PASSWORD=<password> -d -p 3306:3306 mysql:lates

// docker list 확인
$ docker ps -a 

$ docker start mysql-docker

$ docker exec -it mysql-docker bash

```

## Sequelize 사용법
* Sequelize는 RDBMS 형식의 데이터 베이스를 



