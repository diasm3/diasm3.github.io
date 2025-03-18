---
layout  : wiki
title   : AWS Elastic Beanstalk 사용 방법
summary : AWS Elastic Beanstalk를 사용하여 애플리케이션을 쉽게 배포하고 관리하는 방법에 대한 가이드입니다.
date    : 2022-05-15T13:56:05+09:00
updated : 2022-06-17T21:13:20+09:00
tag     : AWS, Elastic Beanstalk, EC2, CodePipeline
toc     : true
public  : true
parent  : [[AWS]]
latex   : false
---

* TOC
{:toc}

# 개요
AWS Elastic Beanstalk는 Docker 또는 Node.js 애플리케이션을 쉽게 배포하고 관리할 수 있도록 도와주는 서비스입니다.

## AWS EB-CLI 설치 방법
AWS Elastic Beanstalk CLI(AWS EB-CLI)를 설치하려면 GitHub 저장소를 클론한 후 Python을 설치해야 합니다. 저는 Windows Subsystem for Linux(WSL)에서 작업하며, Mac의 iTerm, Fish 또는 Zsh 셸을 사용합니다.

- [깃헙 레포](https://github.com/aws/aws-elastic-beanstalk-cli-setup)

```bash
$ git clone https://github.com/aws/aws-elastic-beanstalk-cli-setup.git

$ python ./aws-elastic-beanstalk-cli-setup/scripts/ebcli_installer.py
```

- **주의 사항**: AWS EB-CLI는 Git config에 등록된 이메일 주소를 사용하므로, 여러 대의 컴퓨터에서 서로 다른 이메일 주소를 사용할 경우 계정에 여러 인스턴스가 생성되고, 이전 AWS Free Tier 계정이 종료되어 추가 요금이 발생할 수 있습니다. 이는 구제 요청을 통해 인보이스를 무효화할 수 있습니다. 이 점에 유의하시기 바랍니다.