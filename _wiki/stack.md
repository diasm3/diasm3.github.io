---
layout  : wiki
title   : 스택 
summary : Stack 
date    : 2022-03-20 20:42:34 +0900
updated : 2022-04-05 05:49:54 +0900
tag     : stack 
toc     : true
public  : true
parent  : [[algorithm]] 
latex   : false
---
* TOC
{:toc}

# 스택
## 기본개념 
>먼저들어오는게 마지막에 나간다...

1. 스택으 기본적으로 두가지형태로 구현할 수 있다.
    * [[linked-list]] 로 구현가능
    * queue 로 구현가능

## method 

``` python
# 노드 객체를 생성하고 
class Node:
    def __init__(self, value):
        self.value = value 
        self.next =  None 

class Stack:
    def __init__(self,value)
        self.head = None
        
    def push(self, value):
        if self.head is not None:
            self.head = Node(value)
        else :
            temp = Node(value)
            self.head = self.head.next 
            temp.next = temp
        
    def pop(self):
        if self.head is not None:
            return 0
            
        self.head = self.head.next
        
```

