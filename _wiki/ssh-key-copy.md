---
layout  : wiki
title   : Ssh key copy to server 
summary : ssh command 
date    : 2022-03-30 06:40:30 +0900
updated : 2022-03-30 06:44:55 +0900
tag     : ssh key  
toc     : true
public  : true
parent  : [[ssh]] 
latex   : false
---
* TOC
{:toc}

# how to copy key files to server?
##

```bash
# 예제 
$ ssh-copy-id -i ~/.ssh/id_rsa.pub YOUR_USER_NAME@IP_ADDRESS_OF_THE_SERVER
```

```bash
# 실제 사용시
$ ssh-copy-id -i ~/.ssh/id_rsa.pub user_id@mydomainmane.co.kr
```
