---
layout  : wiki
title   : mysql과 sequelize
summary :  
date    : 2022-04-16 08:04:47 +0900
updated : 2022-04-18 17:50:06 +0900
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

## EC2 서버 셋팅 방법
- ubuntu 20 버전으로 EC2 micro2 버전을 선택한다
- key 값을 받는다 
```bash
$ cd test_mysql_aws

$ chmod 400 my_test_key.pem

$ ssh -i “my_test_key.pem” ubuntu@ec2SSSSSS214.us-east-2.compute.amazonaws.com
```
- ssh로 접속한다
- 프로그램 설치
    - sudo apt update
    - sudo apt install mysql-server
    - sudo apt nodejs
    - sudo apt npm
- 한국 시간 맞추기
```bash
sudo ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
```
- portfowarding
```bash
sudo ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
`````
```
- sudo mysql
```mysql
//암호설정
mysql> sudo mysql

mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password_here';

mysql> FLUSH PRIVILEGES;

mysql> exit

//셋팅한 암호치고 접속
$ sudo mysql -u root -p

// 백엔드에서 셋팅한 데이터베이스 이름
mysql> create database database_name
```







## 참고 사이트
- https://www.mysqltutorial.net/mysql-select-database/
- https://velog.io/@gillog/MySQL-%EC%9C%A0%EC%A0%80-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0

## Sequelize 사용법
* Sequelize는 RDBMS 형식의 데이터 베이스를 



