---
layout  : wiki
title   : 환경변수가 git에 올라갔을때 
summary : git reset을 이용하자 
date    : 2022-06-13 00:20:11 +0900
updated : 2022-06-13 00:38:28 +0900
tag     : git reset --hard  
toc     : true
public  : true
parent  : [[git]] 
latex   : false
---
* TOC
{:toc}

# 레포에 ENV파일이 올라갔다면?
## 상황
> ENV파일을 설정하던 도중 팀원 중 한명이 ENV파일이 PUSH되어 레포에 업데이트 되었다.
당연히도 파일을 삭제하면 그래도 기존에 있던 내용이 삭제 되었다고 하며 기록이 남는다.
이럴때는 뒤로 돌아가야 한다.

이럴떄는 두가지 방법이 있다.
* CLI로 확인하는방법
    - git reflog로 hitory를 확인한다.
    - 확인한 head의 넘버를 확인한다. 
     ```git
      $ git reflog
        b1333f5 (HEAD -> main, origin/main, origin/HEAD) HEAD@{0}: commit: fix url2
        2601e68 HEAD@{1}: commit: fix url
        7195cc7 HEAD@{2}: commit: update
        6cc429a HEAD@{3}: commit: theme change
        3fb97a2 HEAD@{4}: reset: moving to HEAD~
        5e8ebb6 HEAD@{5}: commit: theme change
     ```
    - 위 내용을 보고 어디까지 내려가야 하는지 확인한다
    - git reset --hard HEAD~1(2601e68으로 되돌아간다)
    - git commit -m "return to back"
    - git push 
    
* gitLens로 확인
    - ![image](https://user-images.githubusercontent.com/56494905/173245735-3c3e81d1-6893-4c02-b5e4-dbc31ad121a0.png)
    - ![image](https://user-images.githubusercontent.com/56494905/173245816-4cd3a450-85e3-4df4-b570-c49983830c1a.png)
    - ![image](https://user-images.githubusercontent.com/56494905/173245801-560d33cd-6d9e-4c0c-82a3-b6ae210949c6.png)
    - commit 하고 push  
    

