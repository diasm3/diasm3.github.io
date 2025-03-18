---
layout  : wiki
title   : 기존 커밋을 새로운 레포지토리로 이주하기
summary : AWS CodeCommit으로 소스코드를 안전하게 이전하는 방법
date    : 2022-09-05 15:11:00 +0900
updated : 2023-10-01 10:00:00 +0900
tag     : aws codecommit, github, repo, commit, migration
 toc     : true
public  : true
parent  : [[git]] 
latex   : false
---
* TOC
{:toc}

# AWS로 레포지토리 이주하기
AWS CodeCommit으로 소스코드를 이주하는 이유는 보안적인 측면이 중요하기 때문입니다. 기존 레거시 코드에는 민감한 정보가 포함되어 있어, 데이터 유출의 위험이 존재합니다. GitHub는 기본적으로 public으로 설정되어 있기 때문에, 민감한 정보를 한번이라도 커밋하면 외부 크롤러에 의해 쉽게 유출될 수 있습니다. 이러한 이유로 AWS의 레포지토리로의 이주를 고려하게 되었습니다.

## AWS CodeCommit 가격
- 5명 이하
    - 1,000 레포지토리/어카운트
    - 최대 25,000회 요청 가능 
    - 50GB/달 용량
    - 10,000 Git 요청/달
- 6명 이상부터는 1달러씩 추가
    - 1,000 레포지토리/어카운트
    - 최대 25,000회 요청 가능 
    - 10GB/계정 
    - 2,000 Git 요청/계정

## GitHub에서 CodeCommit으로 이주하기
아래의 절차를 따라 기존 커밋을 새로운 레포지토리로 이주할 수 있습니다. 이 명령어는 모든 커밋을 새로운 레포지토리로 쉽게 푸시합니다.

```bash
# 이전 레포지토리에서 커밋을 푸시하는 방법:
$ git clone https://github.com/path/to/new-repo.git new-repo
$ cd new-repo
$ git remote add old https://github.com/path/to/old-repo.git
$ git remote update
$ git merge --allow-unrelated-histories <last-commit-hash-from-old-repo>
$ git push origin main

# 모든 커밋을 단일 커밋으로 푸시하고 싶다면:
$ git merge --squash --allow-unrelated-histories <last-commit-hash-from-old-repo>
$ git push origin main
```

## 참고 자료
- [Stack Overflow에서의 유사 질문](https://stackoverflow.com/questions/37471740/how-to-copy-commits-from-one-git-repo-to-another)