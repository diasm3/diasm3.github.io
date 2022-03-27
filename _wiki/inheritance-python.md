---
layout  : wiki
title   : 상속 inheritance 
summary : inheritance python 
date    : 2022-03-27 17:41:32 +0900
updated : 2022-03-27 17:44:24 +0900
tag     : inheritance python 
toc     : true
public  : true
parent  : python 
latex   : false
---
* TOC
{:toc}

# 상속 inheritance 


## 왜? 상속을 사용해야 할까?
>## 2022-03-26 15:33:03 
토요일 
팀원들과 vscode live share를 핳면서 스택에 대해서 같이 공부했다.
같이 코딩을 하면서 뭐가 문제인지 파악하면서 하니 재미있었다.
가티 코딩하는 도중문제가 발생했는데 적어봐야겠다.

1. 처음 설계를 정하지 않아 방향성을 잃었다.
2. 각자 파일을 만들고 거기에 대한 클라스를 만들고 메소를 만들어 하나의 __main__ 파일로 가져오려고 했을때 같은 데이터를 못쓰는 문제점이 있었다. 
    * 결국에는 구조적인 문제로 인해 다시 만들어야 했던거 같다.


## 실제 live coding 을 통해 아래와 같은 상황이 발생했다.

1. 각자 만든 메소드를 한 파일에 


```python
#  __main__.py 

# semyung 파일에서 모든 클라스를 가져온다
# ksj 파일에서 모든 클라스를 가져온다
from semyung import *
from ksj import *



# 아래와 같이 두가지 파일을 만들고 

# semyung.py
## push method

def push(self, value):
    if self.head is not None:
        self.head =  Node(value)
        
    self.temp = self.head.next
    self.head.next = Node(value)
    self.head = self.temp
    
    
# ksj.py
## pop, randompop method

def pop(self):
    if self.top is not None:
        node = self.top
        self.top = self.top.next
        self.size -= 1
        return node.item

def randompop(self):
    ran = randrange(1, self.size)
    node = self.top

    for _ in range(ran-1):
        if not node:
            return None
        node = node.next
    result = node.next

    node.next = node.next.next    
    return result.item




````
