---
layout  : wiki
title   : MySQL과 Sequelize 사용법
summary : 이 문서는 MySQL 설치 및 EC2 서버에서의 설정 방법, 그리고 Sequelize의 기본 사용법에 대한 정보를 제공합니다.
date    : 2022-04-16 08:04:47 +0900
updated : 2023-10-10 14:00:00 +0900
tag     : db, mysql, sequelize, aws
 toc     : true
public  : true
parent  : [[backend]]  
latex   : false
---
* TOC
{:toc}

# MySQL 설치 방법
## Docker를 이용한 MySQL 설치
```bash
$ docker pull mysql

# M1 칩셋에서는 아래 명령어로 MySQL을 다운로드합니다.
$ docker pull --platform linux/x86_64 mysql

# 이미지가 제대로 다운로드 되었는지 확인합니다.
$ docker images

# 도커 컨테이너를 실행합니다. 이름은 mysql-docker로 설정하고, 루트 비밀번호를 설정합니다.
$ docker run --name mysql-docker -e MYSQL_ROOT_PASSWORD=<password> -d -p 3306:3306 mysql:latest

# 실행 중인 도커 컨테이너 리스트 확인
$ docker ps -a 

# 도커 컨테이너 시작
$ docker start mysql-docker

# 도커 컨테이너에 접속
$ docker exec -it mysql-docker bash

# 권한 설정
# 로컬호스트로만 접속을 원하면 'localhost'로 설정,
# 외부 접속을 원하면 '%'로 변경
mysql> GRANT ALL PRIVILEGES ON *.* TO '아이디'@'localhost';

# CURD 권한만 설정하고 싶다면 아래 명령어 사용
mysql> GRANT SELECT, INSERT, UPDATE ON DBname.* TO '아이디'@'%';

mysql> FLUSH PRIVILEGES;
```

## EC2 서버셋팅 방법
- Ubuntu 20 버전의 EC2 micro2 인스턴스를 선택합니다.
- key 값을 다운로드 합니다.

```bash
# 다운받은 폴더로 이동합니다.
$ cd test_mysql_aws

# 파일 실행 권한 설정
$ chmod 400 my_test_key.pem

# SSH로 EC2 인스턴스에 접속합니다.
$ ssh -i "my_test_key.pem" ubuntu@ec2-xx-xx-xx-xx.compute.amazonaws.com
```

- 서버 프로그램 설치
```bash
$ sudo apt update
$ sudo apt install mysql-server nodejs npm
```

- 한국 시간으로 설정
```bash
$ sudo ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
```

- 포트 포워딩 설정 및 보안 그룹에서 inbound 항목에 포트 5000과 80을 추가합니다.
```bash
$ sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 5000
```

- MySQL 관리자 접속
```bash
# MySQL 관리자 모드로 접속합니다.
$ sudo mysql

mysql> SHOW DATABASES;
# 사용자 생성
mysql> CREATE USER 'diasm'@'localhost' IDENTIFIED BY '123';

# 권한 조회
mysql> SHOW GRANTS FOR 'diasm'@'localhost';

# root 관리자 비밀번호 변경
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password_here';

# 변경 사항 적용
mysql> FLUSH PRIVILEGES;

# 나가기
mysql> EXIT;
```

- 설정한 비밀번호로 접속
```bash
$ sudo mysql -u root -p

# 데이터베이스 생성
mysql> CREATE DATABASE database_name;
```

## 참고 사이트
- [MySQL 공식 튜토리얼](https://www.mysqltutorial.net/mysql-select-database/)
- [Velog MySQL 유저 생성하기](https://velog.io/@gillog/MySQL-%EC%9C%A0%EC%A0%80-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0)

## Sequelize 사용법
** 작성중 **
