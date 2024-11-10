---
layout  : wiki
title   : GitHub Action을 이용한 SSH와 Git Pull 자동화
summary : SSH를 통해 서버의 최신 코드를 자동으로 Pull하여 배포하는 방법을 설명합니다.
date    : 2022-05-02 05:51:50 +0900
updated : 2022-05-04 20:20:29 +0900
tag     : 자동화, GitHub Actions, CI/CD, 서버 배포
toc     : true
public  : true
parent  : 
latex   : false
---
* TOC
{:toc}

# GitHub Action을 이용한 SSH와 Git Pull 자동화

이 문서에서는 GitHub Actions를 사용하여 SSH를 통해 서버에서 코드를 자동으로 Pull하고 배포하는 방법을 다룹니다. 이러한 자동화는 개발 및 배포 프로세스를 간소화합니다.

## 1. 환경 설정

서버와 GitHub 계정에 SSH 키를 설정하여 서로 통신할 수 있도록 합니다. SSH 키를 생성하고 서버에 추가하는 방법은 다음과 같습니다:

### 1.1 SSH 키 생성
```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

### 1.2 서버에 SSH 키 추가
```bash
# 생성된 공개 키를 서버의 authorized_keys에 추가
cat ~/.ssh/id_rsa.pub | ssh user@server "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

## 2. GitHub Action 구성

GitHub 리포지토리에서 Action을 설정합니다. 이를 위해 `.github/workflows/deploy.yml` 파일을 생성하십시오.

### 2.1 deploy.yml 설정 예제
```yaml
name: Deploy to Server

aon:
  pushes:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v2

      - name: SSH Command
        uses: appleboy/scp-action@master
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          port: 22
          source: "./*"
          target: "/path/to/server"
      - name: Git Pull on Server
        run: ssh -i ${{ secrets.SSH_KEY }} -o StrictHostKeyChecking=no ${{ secrets.USERNAME }}@${{ secrets.HOST }} 'cd /path/to/server && git pull'
```

## 3. 결론

이제 GitHub Actions를 사용하여 SSH를 통해 서버에서 자동으로 코드를 Pullling하여 최신 상태로 유지할 수 있습니다. 이러한 자동화는 배포 프로세스를 효율적으로 만들어줍니다.