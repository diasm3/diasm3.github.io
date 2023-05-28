---
layout  : wiki
title   : 힙 
summary : 
date    : 2022-03-21 00:59:31 +0900
updated : 2022-03-25 15:57:31 +0900
tag     : heap queue 
toc     : true
public  : true
parent  : [[algorithm]] 
latex   : false
---
* TOC
{:toc}

# 
## 기본개념
> 트리기반의 자료구조로 데이터에서 `최대값과 최소값`을 빠르게 찾기 위해 고안된 `완전 이진 트리`(Complete Binary Tree)


## 특징
* 최대값
- 항상 큰값이 상위 레벨에 있고 작은 값이 하위 레벨에 있다.
- 부모노드 <  자식 노드 

* 최소값
- 자식노드 > 부모노드

* 2n+1 부터 시작하는게 편하다


* 이미 파이썬에는 함수로 내장되어 있다
- [링크](https://docs.python.org/ko/3.9/library/heapq.html?highlight=heap#module-heapq)
- [[python-heapq]]{힙큐에대한 내용은여기} 

## 함수 설명 (max heap)


### `__init__`
> 배열을 만들어 초기화 
    1. [None]으로 초기화하여 인덱스를 1부터 카운팅

```python
def __init__(self):
    self.items = [None]
```

### `__len__`
> Magic method 로 기존에 내장되어 있던 len함수를 overriding 해서 나만의 함수로 만든다 

```python
def __len__(self):
    return len(self.items) - 1
```

### `push-up` (위로 올려 비교 )
> 현재 인덱스와 부모인덱스를 비교하여 자식노드의 값이 부모노드보다 작은면 바꾸기 

```python
def _push_up(self):
    cur = len(self)

    parent = cur // 2 

    while parent > 0:
        if self.items[cur] > self.items[parent]:
            self.items[cur], self.items[parent] =self.items[parent], self.items[cur]

        cur = parent
        parent = cur // 2 #2를 나눈 나머지는 버린다
```


### `push-down` (밑으로 내려서 마지막에 있을때 삭제)
> 현재 인덱스의
*  2 * cur <- 왼쪽 노드
*  2 * cur +1 <- 오른쪽 노드 

```python
def _push_down(self, cur):
    biggest = cur
    left = 2* cur
    right = 2 * cur + 1

    if left <= len(self) and self.items[left] > self.items[biggest]:
        biggest = left
    if right <= len(self) and self.items[right] > self.items[biggest]:
        biggest = right

    if biggest != cur:
        self.items[cur], self.items[biggest] = self.items[biggest], self.items[cur]
```


### `insert` (추가)
> 값을 리스트에 넣어준다 그리고 push_up 함수를 불러와 계속 비교한다 

```python
def insert(self, k):
    self.items.append(k)
    self._push_up()
```


### `extract` (추출)
> 값을 아래로 내리면서 제일 아래로 내리고 마지막은 삭제 그리고 


## 문제풀이  
### 교재 내용

### leetcode solution

## 풀면서 잘 몰랐던 부분 

## 파이썬문법 모르는 부분 

