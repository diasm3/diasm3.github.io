---
layout  : wiki
title   : mysql과 sequelize
summary :  
date    : 2022-04-16 08:04:47 +0900
updated : 2022-04-19 13:30:08 +0900
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

// 다운받은 폴더에 들어가서
$ cd test_mysql_aws

// 파일 실행권한 설정
$ chmod 400 my_test_key.pem

//ssh로 접속
$ ssh -i “my_test_key.pem” ubuntu@ec2SSSSSS214.us-east-2.compute.amazonaws.com
```

- 프로그램 설치

```bash
$ sudo apt update
$ sudo apt install mysql-server nodejs npm
```
    
- 한국 시간 맞추기

```bash
sudo ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
```

- port fowarding 
- security 에서 inbound 항목에서 5000과 80 번 번호를 추가하고 아래의 명령어를 입력하자

```bash
$ sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 5000
```




- sudo mysql

```bash
// 관리자로 들어감
mysql> sudo mysql

// 관리자 테이블에 user 테이블에서 사용자를 확인한다
mysql> select user from mysql.user;


// 사용자 아이디를 임의로 추가하다 @ 'localhost' -> 이것을 % 로 변경하면 외부도메인에서 접속할 수 있다
mysql> CREATE USER 'diasm'@'localhost' IDENTIFIED BY '123';

// 권한 내요을 확인한다
mysql>SHOW GRANTS FOR diasm@localhost;

// root 관리자의 암호를 변경
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password_here';

// 적용
mysql> FLUSH PRIVILEGES;

// 나가기
mysql> exit

//셋팅한 암호치고 접속
$ sudo mysql -u root -p

// 백엔드에서 셋팅한 데이터베이스 이름
mysql> create database database_name
```

## 참고 사이트
- [링크](https://www.mysqltutorial.net/mysql-select-database/)
- [링크2](https://velog.io/@gillog/MySQL-%EC%9C%A0%EC%A0%80-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0)

## Sequelize 사용법
** 작성중



