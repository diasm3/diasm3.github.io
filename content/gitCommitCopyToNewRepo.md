---
layout  : wiki
title   : 새로운 레포에 기존 커밋 옮기기 
summary : AWS codecommit 이주 하기 
date    : 2022-09-05 15:11:00 +0900
updated : 2022-09-05 16:42:45 +0900
tag     : aws codecommit github repo commit  
toc     : true
public  : true
parent  : [[git]] 
latex   : false
---
* TOC
{:toc}

# AWS로 Repo로 이주하기
> 소스코드의 보안적인 측면에서 이주를 한다. 레거시 코드에서 모든 키들이 올라가있다. 벌써 몇번 유출되어서 수습하고 해결 방안을 찾던중 AWS에서도 레포를 제공하기때문에 이주한다. 
> 그런데 깃허브는 기본이 public으로 되어있어서 credential한 내용을 한번이라도 올리면 어디선가 crwaler가 몇 초만에 가져가 버린다. 주의 해야한다.

## AWS codecommit 가격
- 5명 아래
    - 1,000 레포지토리 / 어카운트
    - 최대 25,000까지 요청가능 
    - 50GB/달 용량
    - 10,000 Git 요청/달
- 6명 부터 1달러씩 추가
    - 1,000 레포지토리 / 어카운트
    - 최대 25,000까지 요청가능 
    - 10GB/계정  
    - 2,000 Git 요청/계정


## Github -> Codecommit

```bash
## you can try this, it's easy and straightforward. This will push all commits before (and including) the hash you use as <last-commit-hash-from-old-repo> to the other repo:

$ git clone https://github.com/path/to/new-repo.git new-repo
$ cd new-repo
$ git remote add old https://github.com/path/to/old-repo.git
$ git remote update
$ git merge --allow-unrelated-histories <last-commit-hash-from-old-repo>
$ git push origin main
## if anyone needs to push all commits from a repo to another as a single commit (like I needed), you can simply add --squash to the merge command like this:

$ git clone https://github.com/path/to/new-repo.git new-repo
$ cd new-repo
$ git remote add old https://github.com/path/to/old-repo.git
$ git remote update
$ git merge --squash --allow-unrelated-histories <last-commit-hash-from-old-repo>
$ git push origin main
```
## reference
- [https://stackoverflow.com/questions/37471740/how-to-copy-commits-from-one-git-repo-to-another](링크)
