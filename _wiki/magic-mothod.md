---
layout  : wiki
title   : Magic Method  
summary : 
date    : 2022-03-25 08:28:33 +0900
updated : 2022-03-25 08:32:33 +0900
tag     : 
toc     : true
public  : true
parent  : [[python]]
latex   : false
---
* TOC
{:toc}

# __len__
> 기존에 있던  len 함수를  overriding 해준다

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
