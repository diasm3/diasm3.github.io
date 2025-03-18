---
layout  : wiki
title   : 연결 리스트
summary : 이 문서는 연결 리스트의 정의, 구조 및 파이썬에서의 구현 방법에 대해 설명합니다.
date    : 2022-03-20T20:31:47+09:00
updated : 2023-10-06T12:00:00+09:00
tag     : [linked list, data structure, python]
toc     : true
public  : true
parent  : [[algorithm]]
latex   : false
---

* TOC
{:toc}

# 연결 리스트를 이해하자  
연결 리스트(linked list)는 데이터를 저장하는 객체의 모음으로, 각 요소가 자신 다음에 오는 요소를 참조합니다. 일반적인 리스트와 연결 리스트의 차이점은, 일반 리스트는 요소를 메모리의 연속된 블록에 저장하고, 연결 리스트는 각 요소가 다음 요소의 참조값을 저장한다는 점입니다.

## 메인 컨셉 
연결 리스트의 구조를 살펴보면:
1. **Data**: 노드 안에 변수 값을 저장합니다.
2. **Next**: 다음 노드의 참조값을 저장합니다.

연결 리스트의 구조를 그림으로 표현하면 다음과 같습니다:

![Linked List Structure](https://user-images.githubusercontent.com/56494905/160308041-a9beed32-9690-49b8-bdfa-0ad7b8c29fa2.png)

첫 번째 노드는 **head**라고 하며, 이 노드는 리스트의 시작점을 알려줍니다. 리스트는 순차적으로 반복되어 다음 노드를 가리키고, 마지막 노드는 `None`을 가리켜 종료점을 표시합니다.

![Linked List End](https://user-images.githubusercontent.com/56494905/160308173-5abf3af7-cbab-4ab9-9dc5-16f073ab90d4.png)

## 실제로 적용해보기  
연결 리스트는 스택(stack), 큐(queue), 그래프(graph)와 같은 자료 구조에 사용됩니다.

### 스택(stack) 및 큐(queue)

|      | 특징          |
|:----:|:-------------:|
| 스택 | 한쪽으로만 들어오고 나갈 수 있다. |
| 큐   | 한쪽으로만 들어오고 다른 쪽으로만 나간다. |

큐와 스택은 입력 방법은 동일하지만 삭제 방법은 다릅니다. 큐는 시작과 끝을 지정해 주고, 끝에서 항상 반환됩니다. 

`collections` 라이브러리에 포함된 `deque` 함수를 사용하면 쉽게 큐를 구현할 수 있습니다.

```python
from collections import deque

queue = deque()
queue.append("1")
queue.append("2")
queue.append("3")
print(queue)
```

위 코드를 실행하면 가장 먼저 들어온 `1`이 가장 먼저 나가게 됩니다.

```python
>>> queue.popleft()
'1'
>>> queue
deque(['2', '3'])
>>> queue.popleft()
'2'
>>> queue
deque(['3'])
```

`popleft()` 함수를 사용하면 항상 헤드 요소의 값이 제거됩니다.

### 스택(Stack) 구현

스택을 구현하여 링크드 리스트 메소드를 만듭니다. **head** 변수를 `None`으로 초기화합니다.

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

    def __repr__(self):
        return self.data

class LinkedList:
    def __init__(self):
        self.head = None
    def __repr__(self):
        node = self.head
        nodes = []
        while node is not None:
            nodes.append(node.data)
            node = node.next
        nodes.append("None")
        return "->".join(nodes)
```

### 노드 검색

```python
# node가 None일 때까지 반복하여 검색

def __iter__(self):
    node = self.head
    while node is not None:
        yield node
        node = node.next
```

### 노드 삽입

```python
# 첫 번째 노드로 추가

def add_first(self, node):
    node.next = self.head
    self.head = node
```

### 마지막에 노드 삽입

```python
# 마지막에 노드를 추가하는 법

def add_last(self, node):
    if self.head is None:
        self.head = node
        return
    for current_node in self:
        pass
    current_node.next = node
```

### 큐(Cue) 구현

```python
class Queue:
    def __init__(self):
        self.front = None
        self.rear = None

    def push(self, value):
        if self.front is not None:
            temp = self.front
            self.front.next = temp
            self.front = Node(value, next=None)
        else:
            self.front = Node(value, next=None)

    def pop(self):
        if self.front is not None:
            return 0
        node = self.front

        while node is not None:
            pass
``` 

![Stack Structure](https://user-images.githubusercontent.com/56494905/160309232-b3bd639a-acf0-492b-92d7-6db2c546c421.png)

---

## 연습

## 참고 문헌
* [Link](https://www.tutorialspoint.com/python_data_structure/python_stack.htm)
* [Real python](https://realpython.com/linked-lists-python/)