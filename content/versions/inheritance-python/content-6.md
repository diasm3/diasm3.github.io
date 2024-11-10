---
layout  : wiki
title   : 상속 (Inheritance) in Python
summary : 이 문서는 Python에서의 상속 개념에 대한 설명과 예제를 제공합니다. 상속을 통해 메서드를 재사용하고, 여러 클래스를 조합하여 새로운 기능을 만드는 방법을 배우게 됩니다.
date    : 2022-03-27 17:41:32 +0900
updated : 2023-10-10 10:00:00 +0900
tags    : [inheritance, python, programming]
toc     : true
public  : true
parent  : python
latex   : false
---

* TOC
{:toc}

# 상속 (Inheritance) in Python

## 상속의 필요성

클래스의 메소드를 다른 클래스에서 사용하고 싶을 때, 상속을 사용하면 편리합니다. 이를 통해 코드 재사용성과 논리적인 구조를 유지할 수 있습니다.

## 코드 예제

팀원들과 함께 VSCode Live Share를 사용하여 스택을 구현하는 과정에서 발생한 문제를 통해 상속의 개념을 알아보겠습니다.

### 문제 설명
1. 각자 파일을 만들고 메소드를 정의했습니다: `push`, `pop`, `randompop`.
2. `__main__` 파일에서 필요한 메소드를 임포트 하여 사용했습니다.
3. `__main__` 파일에서 Node 객체를 만들어, 각자 정의한 메소드를 가져와 상속하려 했으나 작동하지 않았습니다.

> **상속이 왜 작동하지 않는가?**

### 코드 예제: __main__.py 파일

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
        while self.top:
            ss.append(self.top.item)
            self.top = self.top.next

        return str(ss)

a = Stack_()

a.push(1)
a.pop()
a.push(1)
print(a)
```

## 공유 변수가 작동하지 않는 이유
이제 각자가 만든 메소드를 한 파일로 통합하고, 클래스 간의 관계를 명확히 해보겠습니다.

### 수정된 코드

```python
#  __main__.py 

# semyung.py, ksj.py에서 모든 클래스를 임포트
from semyung import *
from ksj import *

# semyung.py 파일을 수정하여 클래스 정의
# semyung.py
class Semyung:
    def push(self, value):
        if self.head is not None:
            self.head = Node(value)
            self.temp = self.head.next
            self.head.next = Node(value)
            self.head = self.temp

# ksj.py 파일을 수정하여 클래스 정의
# ksj.py
class Ksj:
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
```

## 결론
이 문서를 통해 Python의 상속 개념과 이를 활용한 예제 코드를 살펴보았습니다. 상속을 통해 코드의 재사용성을 높이고, 여러 클래스를 조합하여 새로운 기능을 만들어내는 방법에 대해 배웠습니다.