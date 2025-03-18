---
layout  : wiki
title   : AWS CloudWatch로 과금 체크하기
summary : 이 문서에서는 AWS CloudWatch를 사용하여 과금을 관리하고 Slack을 통해 배포 알림을 받는 방법을 설명합니다.
date    : 2022-07-04T22:39:14+09:00
updated : 2022-07-04T22:45:40+09:00
tag     : aws, cloudwatch, 비용관리
toc     : true
public  : true
parent  : [[aws]]
latex   : false
---
* TOC
{:toc}

# AWS CloudWatch로 과금 체크하기

AWS CloudWatch는 다양한 기능을 제공하며, 특히 과금 관리에 유용하게 사용될 수 있습니다. 이 문서에서는 CloudWatch를 사용한 실제 과금 체크 방법 및 Slack 알림 설정 방법에 대해 설명합니다.

## 1. 과금 확인하기
CloudWatch를 통해 AWS 서비스의 사용량을 모니터링하면 예상치 못한 과금을 방지할 수 있습니다. CloudWatch에서 다음을 확인할 수 있습니다:
- 서비스별 사용량
- 경고 설정

## 2. Slack으로 배포 알림 받기
Elastic Beanstalk(EB) 배포와 관련된 알림을 Slack으로 받을 수 있습니다. 이 기능을 활용하면 배포 상태를 신속하게 확인할 수 있습니다.

### 2.1. Slack 알림 설정 방법
1. AWS Management Console에 로그인합니다.
2. CloudWatch로 이동하여 알림을 설정할 Metric을 선택하세요.
3. SNS(간단 알림 서비스) 주제를 생성하고 Slack Webhook URL을 사용하여 구독합니다.
4. 배포 시 해당 Metric을 기반으로 알림을 발송하도록 설정합니다.

## 실제 사용 사례
예를 들어, 특정 EC2 인스턴스를 모니터링하여 사용량이 예상치 이상일 경우 Slack으로 즉각적인 알림을 받을 수 있습니다. 이렇게 설정하면 비용 초과를 미리 방지할 수 있습니다.