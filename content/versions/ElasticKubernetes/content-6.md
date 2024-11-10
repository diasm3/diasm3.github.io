---
layout  : wiki
title   : AWS와 Kubernetes: EKS를 사용한 Node.js 배포
summary : 이 문서에서는 AWS EKS를 활용하여 Node.js 애플리케이션을 배포하는 방법에 대해 설명합니다. 단계별로 진행되며, 실제 사용 사례를 포함합니다.
date    : 2022-09-01T21:00:14+09:00
updated : 2022-09-07T23:27:26+09:00
tag     : kubernetes, EKS, nodejs, nestjs, 배포
 toc     : true
public  : true
parent  : [[aws]] 
latex   : false
---
* TOC
{:toc}

# AWS와 Kubernetes를 사용한 Node.js 배포

이 문서에서는 AWS EKS를 활용하여 Node.js 애플리케이션을 배포하는 방법에 대해 상세히 설명합니다. EKS는 관리형 Kubernetes 서비스를 제공하여 애플리케이션을 scale하고 운영하는 데 도움을 줍니다.

## 1. AWS EKS란?

AWS EKS는 AWS에서 제공하는 관리형 Kubernetes 서비스로, Kubernetes 클러스터를 쉽게 배포하고 관리할 수 있게 해줍니다.

## 2. 사전 준비

- AWS 계정
- AWS CLI 설치
- kubectl 설치
- eksctl 설치

## 3. EKS 클러스터 생성하기

```bash
eksctl create cluster --name my-cluster --region ap-northeast-2 --nodegroup-name my-nodes --nodes 2 --nodes-min 1 --nodes-max 3
```

## 4. 애플리케이션 배포하기

### 4.1 Docker 이미지 만들기

Dockerfile을 작성하여 Node.js 애플리케이션의 Docker 이미지를 생성합니다.

```dockerfile
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "app.js"]
```

### 4.2 Kubernetes 배포 파일 생성하기

Kubernetes 배포를 위해 YAML 파일을 작성해야 합니다.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nodejs-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nodejs-app
  template:
    metadata:
      labels:
        app: nodejs-app
    spec:
      containers:
      - name: nodejs-container
        image: my-nodejs-image:latest
        ports:
        - containerPort: 3000
```

## 5. 실제 사용 사례

- 사용자가 인증을 통해 리소스에 접근하는 웹 애플리케이션 배포
- 유지보수가 용이한 CI/CD 파이프라인 설정

## 6. 결론

AWS EKS를 통해 Node.js 애플리케이션을 손쉽게 배포할 수 있습니다. 이 문서에서 제공하는 단계별 가이드를 통해 실제 환경에서의 배포를 경험해보시기 바랍니다.