---
layout  : wiki
title   : enumerate 
summary : 자동으로 인덱스를 만들어준다
date    : 2022-03-23 14:05:40 +0900
updated : 2022-03-23 17:24:26 +0900
tag     : enumerate 
toc     : true
public  : true
parent  : [[python]]
latex   : false
---
* TOC
{:toc}

# enumerate 
> 여러가지 자료형(list, set, tuple 등)을 인덱스를 포함한 enumerate  객체로 리턴한다


``` python
a = [1,2,3,2,45,2,5]
## A는 일반적인 배열인데.. 

enumerate(a)
## 함수에 넣으면

## <enumrate object at 0x1010f3f0>
## 위와같이 enumrate 객체가 주소를 가리키고 있다라고 나온다


list(enumerate(a))
## [(0,1),(1,2),(2,3),(3,2),(4,45),(5,2),(6,5)]
## list 함수로 이걸 출력해보면 위와같이 자동으로 인덱스가 지정되어 나온다
```
