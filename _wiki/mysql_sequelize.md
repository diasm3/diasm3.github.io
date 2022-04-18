---
layout  : wiki
title   : mysql과 sequelize
summary :  
date    : 2022-04-16 08:04:47 +0900
updated : 2022-04-18 17:05:42 +0900
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

// m1 칩셋에서는 docker pull mysql이 안먹는다
// 아래 명령어로 받자

$ docker pull --platform linux/x86_64 mysql


// 이미지가 제대로 다운로드 됐는지 확인한다 
$ docker images



// 도커 컨테이너를 실행시키고 이름은 mysql-docker 루트의 비번은 password(변경해서) 3306포트로 설정한다
$ docker run --name msyql-docker -e MYSQL_ROOT_PASSWORD=<password> -d -p 3306:3306 mysql:lates

// docker list 확인
$ docker ps -a 

$ docker start mysql-docker

$ docker exec -it mysql-docker bash

//권한주기 로컬호스트로만 작동하고 싶으면  localhost로외부 전체 다 접속하고 싶으면 %로 변경
$ grant all privileges on *.* to '아이디'@'localhost';

//혹시라도 CURD만 기능 넣고 싶다 
$ grant select, insert, update on DBname.* to '아이디'#'%';

$ flush privileges


```


## 참고 사이트
- https://www.mysqltutorial.net/mysql-select-database/
- https://velog.io/@gillog/MySQL-%EC%9C%A0%EC%A0%80-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0

## Sequelize 사용법
* Sequelize는 RDBMS 형식의 데이터 베이스를 



