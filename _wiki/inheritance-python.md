---
layout  : wiki
title   : 상속 inheritance 
summary : inheritance python 
date    : 2022-03-27 17:41:32 +0900
updated : 2022-03-27 18:26:43 +0900
tag     : inheritance python 
toc     : true
public  : true
parent  : python 
latex   : false
---
* TOC
{:toc}

# 상속 inheritance 
## 각자 만든 method를 한곳에 사용 하고싶다. 

> 2022-03-26 15:33:03 
토요일 
팀원들과 vscode live share를 하고 같이 스택에 대해서 같이 코딩을 해보았다 .
그런데 아래와 같은 문제가 발생했다.

1. 각자 파일을 만들고 메소드를 만들었다. push pop randompop
2. __main__파일로 import 해서 method를 불러왔다. 
3. __main__이라는 파일에서 Node 객체들 만들고 각자 만들었던 method를 가져와 상속시켰지만 `작동하지` 않았다 

> 상속이 왜 안될까?


```python
# __main__.py 파일
from smhong import Stack, Node

from sunghye import * 
from semyung import * 
from ksj import * 

class Stack_(Semyung, stack_ksj, Sunghye, Stack):
     def __init__(self):
         self.max = 10
         self.size = 0
         self.top = None

     def __str__(self):
         ss = []
         while top:
             ss.append(top.item)
            top = top.next
      
         return str(ss)
 a = Stack_()

 a.push(1)
 a.pop()
 a.push(1)
 print(a)
```


## 변수가 공유가 안된다 

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
