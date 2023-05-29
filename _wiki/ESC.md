---
layout  : wiki
title   : 
summary : 
date    : 2023-05-29 18:13:44 +0900
updated : 2023-05-29 18:15:18 +0900
tag     : 
toc     : true
public  : true
parent  : 
latex   : false
---
* TOC
{:toc}

# 트러블슈팅
 - 아래와 같이 에러가 날때는
 ``Unable to locate credentials. You can configure credentials by running "aws configure".
 Error: Cannot perform an interactive login from a non TTY device
 ``
 - AmazonEC2ContainerRegistryFullAccess 권한을 주면된다!
