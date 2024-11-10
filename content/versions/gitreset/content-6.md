---
layout  : wiki
title   : Git에 ENV 환경변수가 올라갔을 때의 대처 방법
summary : ENV 파일의 푸시를 원복하기 위한 git reset 명령어의 사용법
date    : 2022-06-13T00:20:11+09:00
updated : 2022-06-13T00:38:28+09:00
tags    : [git, reset, environment variable]
toc     : true
public  : true
parent  : [[git]] 
latex   : false
---

* TOC
{:toc}

# 레포에 ENV 파일이 올라갔다면?
## 상황 설명
> 팀원 중 한명이 ENV 파일을 설정하다가 실수로 파일을 레포에 푸시했습니다. 이 경우 파일을 삭제해도 기존의 내용은 삭제되지 않으며 기록이 남게 됩니다. 이러한 상황에서 이전 상태로 되돌리는 방법은 두 가지가 있습니다.

## 이전 상태로 되돌리는 방법
### 1. CLI를 통한 확인
- `git reflog` 명령어를 사용하여 히스토리를 확인합니다.
- 확인한 HEAD의 번호를 체크합니다. 
  ```bash
  $ git reflog
    b1333f5 (HEAD -> main, origin/main, origin/HEAD) HEAD@{0}: commit: fix url2
    2601e68 HEAD@{1}: commit: fix url
    7195cc7 HEAD@{2}: commit: update
    6cc429a HEAD@{3}: commit: theme change
    3fb97a2 HEAD@{4}: reset: moving to HEAD~
    5e8ebb6 HEAD@{5}: commit: theme change
  ```
- 위의 커밋 로그를 바탕으로 되돌아갈 커밋을 결정합니다.
- 다음 명령어를 입력하여 환경변수를 푸시하기 전 상태로 되돌립니다:
  ```bash
  git reset --hard HEAD~1  # 2601e68으로 되돌아갑니다.
  git commit -m "return to back"
  git push
  ```

### 2. GitLens를 통한 확인
- 아래 이미지를 참조하여 GitLens를 이용해 커밋 히스토리를 확인합니다:
  ![image](https://user-images.githubusercontent.com/56494905/173245735-3c3e81d1-6893-4c02-b5e4-dbc31ad121a0.png)
  ![image](https://user-images.githubusercontent.com/56494905/173245816-4cd3a450-85e3-4df4-b570-c49983830c1a.png)
  ![image](https://user-images.githubusercontent.com/56494905/173245801-560d33cd-6d9e-4c0c-82a3-b6ae210949c6.png)
- 필요한 커밋 후 `push` 명령어로 변경 사항을 반영합니다.