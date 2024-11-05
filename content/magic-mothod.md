---
layout  : wiki
title   : Magic Method  
summary : 
date    : 2022-03-25 08:28:33 +0900
updated : 2022-04-04 16:59:13 +0900
tag     : Magic-method
toc     : true
public  : true
parent  : [[python]]
latex   : false
---
* TOC
{:toc}

# __len__
> 기존에 있던  len 함수를  overriding 해준다

## 내장함수
* 파이썬은 모든게 객체로 이루어져있다.
* 실제로 아무 변수를 만들고 객체를 탐색하면 __len__ 기타등등 의 Method가 보인다.




```python

class node:
    def __len__():
        return len(something) - 1


    def doSomthing():
        data = [1,2,3,4]
        print(len(data))
```

>`overriding` 해준다.

* 
