---
layout  : wiki
title   : AWS Elastic Beanstalk 사용방법
summary : 좀더 앱 배포를 쉽게 하자
date    : 2022-05-15 13:56:05 +0900
updated : 2022-06-17 21:13:20 +0900
tag     : AWS Elastic EC2 codepipeline 
toc     : true
public  : true
parent  : [[AWS]] 
latex   : false
---
* TOC
{:toc}

# 개요
>AWS Elastic Beanstalk는 Docker 또는 Node프로그램을 올려 백엔드 관리할 수 있다.

## AWS EB-CLI
설치 방법은 github repo 클론 한다음 python을 설치해줘야 한다.
나는 wls 에서 작업하거나 맥 iterms fish 또는 zsh를 이용한다.
- [깃헙 레포](https://github.com/aws/aws-elastic-beanstalk-cli-setup)

```bash
$ git clone https://github.com/aws/aws-elastic-beanstalk-cli-setup.git

$ python .\aws-elastic-beanstalk-cli-setup\scripts\ebcli_installer.py
```

- 주의 할점은 아마도 git config 할때 등록한 이메일로 EB-ClI가 작동되는거 같다. 여러대의 컴퓨터를 이용하다가 각각 다른 이메일 주소로 GIT Config 를 해놨더니 기존에 AWS Free tier 가 끝난 계정에 여러 인스턴스가 만들어져서 300불이 나와 구제 요청 받아서 인보이스를 무효화 했다.




