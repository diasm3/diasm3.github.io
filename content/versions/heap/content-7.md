---
layout  : wiki
title   : 힙 (Heap)
summary : 힙 데이터 구조의 기본 개념, 특징 및 파이썬 구현 방법에 대한 내용을 담고 있습니다. 힙의 최대값과 최소값을 빠르게 찾는 방법과 관련된 함수들을 설명합니다.
date    : 2022-03-21 00:59:31 +0900
updated : 2022-03-25 15:57:31 +0900
tag     : [heap, queue, data structure, algorithm]
toc     : true
public  : true
parent  : [[algorithm]]
latex   : false
---

* TOC
{:toc}

# 힙 (Heap)

## 기본 개념
힙은 트리 기반의 자료구조로, 데이터에서 최대값과 최소값을 빠르게 찾기 위해 고안된 완전 이진 트리(Complete Binary Tree)입니다.

## 특징
### 최대 힙
- 항상 큰 값이 상위 레벨에 위치하고, 작은 값이 하위 레벨에 있습니다.
- 부모 노드의 값이 자식 노드의 값보다 큽니다.

### 최소 힙
- 자식 노드의 값이 부모 노드의 값보다 큽니다.

> 일반적으로 2n+1부터 시작하는 것이 편리합니다.

파이썬에서는 이미 힙 관련 함수가 내장되어 있습니다:
- [Python heapq Module Documentation](https://docs.python.org/ko/3.9/library/heapq.html?highlight=heap#module-heapq)
- [[python-heapq]]{힙큐에 대한 내용은 여기}

## 함수 설명 (Max Heap)

### `__init__`
> 배열을 만들어 초기화합니다.

1. 초기에는 [None]으로 시작하여 인덱스를 1부터 카운트합니다.

```python
def __init__(self):
    self.items = [None]
```

### `__len__`
> Magic method로 기존 len() 함수를 오버라이딩하여 나만의 함수를 만듭니다.

```python
def __len__(self):
    return len(self.items) - 1
```

### `push_up` (위로 올려 비교)
> 현재 인덱스와 부모 인덱스를 비교하여 자식 노드의 값이 부모 노드보다 작은 경우 값을 바꿉니다.

```python
def _push_up(self):
    cur = len(self)
    parent = cur // 2 

    while parent > 0:
        if self.items[cur] > self.items[parent]:
            self.items[cur], self.items[parent] = self.items[parent], self.items[cur]
        cur = parent
        parent = cur // 2 # 부모 인덱스를 업데이트합니다.
```

### `push_down` (밑으로 내려서 마지막에 있을 때 삭제)
> 현재 인덱스를 기준으로 왼쪽과 오른쪽 자식 노드를 비교하여 큰 값을 위로 올립니다.

```python
def _push_down(self, cur):
    biggest = cur
    left = 2 * cur
    right = 2 * cur + 1

    if left <= len(self) and self.items[left] > self.items[biggest]:
        biggest = left
    if right <= len(self) and self.items[right] > self.items[biggest]:
        biggest = right

    if biggest != cur:
        self.items[cur], self.items[biggest] = self.items[biggest], self.items[cur]
```

### `insert` (추가)
> 값을 리스트에 추가하고 `push_up` 함수를 호출하여 힙 속성을 유지합니다.

```python
def insert(self, k):
    self.items.append(k)
    self._push_up()
```

### `extract` (추출)
> 가장 큰 값을 추출합니다.

## 문제 풀이
### 교재 내용

### LeetCode Solution

## 추가 참고 사항
### 풀면서 잘 몰랐던 부분

### 파이썬 문법 모르는 부분