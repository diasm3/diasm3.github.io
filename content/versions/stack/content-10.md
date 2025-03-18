---
layout  : wiki
title   : 스택 (Stack)
summary : 스택(스택 자료구조)의 기본 개념 및 구현 방법에 대한 설명입니다.
date    : 2022-03-20 20:42:34 +0900
updated : 2023-10-05 05:49:54 +0900
tag     : stack, data-structures, algorithms
toc     : true
public  : true
parent  : [[algorithm]]
latex   : false
---
* TOC
{:toc}

# 스택 (Stack)

스택은 데이터 구조로, "먼저 들어오는 것이 마지막에 나간다"는 원칙을 따릅니다. 이는 LIFO(Last In, First Out) 방식으로 알려져 있습니다.

## 기본 개념
아래는 스택이 구현될 수 있는 두 가지 형태입니다:

1. **연결 리스트 (Linked List)** 로 구현 가능
2. **큐 (Queue)** 로 구현 가능 

## 메서드(Method)
다음은 스택의 기본 메서드 구현입니다:

``` python
# 노드 객체를 생성하고 스택을 구현합니다.
class Node:
    def __init__(self, value):
        self.value = value 
        self.next =  None 

class Stack:
    def __init__(self):  # 매개변수 제거
        self.head = None

    def push(self, value):
        new_node = Node(value)  # 새 노드 생성
        if self.head is None:
            self.head = new_node  # 스택이 비어있을 경우
        else:
            new_node.next = self.head  # 기존 노드 위에 새 노드 추가
            self.head = new_node  # 헤드 노드를 새 노드로 변경

    def pop(self):
        if self.head is None:
            return None  # 스택이 비어있을 경우
        popped_value = self.head.value  # 반환할 값 저장
        self.head = self.head.next  # 헤드 노드를 다음 노드로 변경
        return popped_value  # 반환
```

## 예제 사용 사례
아래는 위 스택 클래스를 사용하는 간단한 예제입니다:

``` python
# 스택 객체 생성
my_stack = Stack()

# 값 푸시
my_stack.push(10)
my_stack.push(20)
my_stack.push(30)

# 값 팝
print(my_stack.pop())  # 30
print(my_stack.pop())  # 20
print(my_stack.pop())  # 10
print(my_stack.pop())  # None  # 스택 비어있는 경우
```

스택은 수많은 알고리즘에서 핵심적인 역할을 하며 데이터의 일시적인 저장 및 관리에 유용합니다.