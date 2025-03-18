---
layout  : wiki
title   : 큐(Queue)  
summary : 큐(Queue)의 개념과 문제 해결 방법을 설명하며, LeetCode 문제 해결을 위한 구체적인 예제를 포함합니다. 이 문서는 큐의 기본 개념부터 시작하여, 다양한 문제 풀이 접근법을 제시합니다.
date    : 2022-03-20 20:54:02 +0900
updated : 2023-10-21 08:33:24 +0900
tags    : [algorithm, data-structure, queue]  
toc     : true
public  : true  
parent  : [[algorithm]]
latex   : false
---

* TOC  
{:toc}

# 큐 (Queue)

큐는 FIFO(First-In-First-Out) 자료구조로, 들어온 순서대로 나가는 특성을 가지고 있습니다. 본 문서에서는 큐의 기본 개념과 실제 문제 해결 방안에 대해 설명합니다.

## 기본 개념  
큐의 구조와 특성은 다음과 같습니다:
- **enqueue**: 큐의 끝에 요소 추가
- **dequeue**: 큐의 앞에서 요소 제거
- **peek**: 큐의 앞에서 요소를 확인 (제거하지 않음)

## 문제 풀이  
### 교재 내용  
문제 풀이에서 큐는 여러 상황에서 유용하게 사용됩니다. 특히, BFS(너비 우선 탐색)와 같은 알고리즘에서 필수적입니다.

### LeetCode Solution  
다음은 LeetCode에서 큐를 활용하여 해결할 수 있는 문제의 예입니다:
```python
from collections import deque

def example_problem(nums):
    queue = deque()
    for num in nums:
        queue.append(num)
    while queue:
        print(queue.popleft())  # FIFO 구현
```

## 풀면서 잘 몰랐던 부분  
큐를 구현할 때, 스택과의 차이를 혼동할 수 있습니다. 스택은 LIFO(Last-In-First-Out) 자료구조이며, 각 자료구조의 사용 목적을 이해하는 것이 중요합니다.

## 파이썬 문법 모르는 부분  
큐를 구현하기 위해 파이썬의 `collections` 모듈을 활용하는 방법을 익혀야 합니다. 다양한 표준 라이브러리를 활용하여, 보다 효율적인 코드를 작성할 수 있습니다.