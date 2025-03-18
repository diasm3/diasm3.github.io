---
layout  : wiki
title   : Deque Method (deque 메소드)
summary : 이 문서는 deque를 이용하여 스택과 큐를 구현하는 방법을 설명합니다.
date    : 2022-03-28 07:06:34 +0900
updated : 2022-04-01 10:25:59 +0900
tag     : deque, stack, queue
 toc     : true
public  : true
parent  : [[python]] 
latex   : false
---

* TOC
{:toc}

# Deque Method (deque 메소드)
> 파이썬의 내장 함수인 deque를 사용하여 스택이나 큐를 더욱 빠르고 간편하게 구현할 수 있습니다.

## 1. Deque 모듈 임포트

```python
from collections import deque
```

## 2. Deque를 이용한 스택 구현

스택은 LIFO(Last In First Out) 구조를 가지고 있습니다. 아래 코드는 deque를 사용하여 스택을 구현한 예시입니다.

```python
class Stack:
    def __init__(self):
        self.items = deque()

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop() if not self.is_empty() else None

    def is_empty(self):
        return len(self.items) == 0

    def peek(self):
        return self.items[-1] if not self.is_empty() else None

    def size(self):
        return len(self.items)
```

### 사용 예

```python
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
print(stack.pop())  # 출력: 3
print(stack.peek()) # 출력: 2
```

## 3. Deque를 이용한 큐 구현

큐는 FIFO(First In First Out) 구조를 가지고 있습니다. 아래 코드는 deque를 사용하여 큐를 구현한 예시입니다.

```python
class Queue:
    def __init__(self):
        self.items = deque()

    def enqueue(self, item):
        self.items.append(item)

    def dequeue(self):
        return self.items.popleft() if not self.is_empty() else None

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)
```

### 사용 예

```python
queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
print(queue.dequeue())  # 출력: 1
print(queue.size())     # 출력: 2
```

## 참고 자료
* [Real Python - Linked Lists in Python](https://realpython.com/linked-lists-python/)