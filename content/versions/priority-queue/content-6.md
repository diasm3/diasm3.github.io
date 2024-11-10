---
layout  : wiki
title   : 우선순위 큐 (Priority Queue)
summary : Priority Queue의 기본 개념, 문제 풀이, 그리고 관련 Python 문법을 설명합니다. LeetCode 솔루션과 함께 합니다.
date    : 2022-03-20 22:50:27 +0900
updated : 2022-03-21 08:33:24 +0900
tag     : [algorithm, data structure, priority queue]
toc     : true
public  : true
parent  : [[algorithm]]
latex   : false
---
* TOC
{:toc}

# 우선순위 큐 (Priority Queue)  
우선순위 큐는 각 요소가 우선순위를 가지며, 우선순위가 가장 높은 요소가 가장 먼저 제거되는 특수한 큐입니다. 이 구조를 통해 특정 상황에서 더 효율적인 데이터 처리가 가능합니다.

## 기본 개념  
- 우선순위 큐는 정렬된 리스트를 기반으로 하며, 요소의 추가와 삭제가 O(log n) 시간이 소요됩니다.  
- 주로 다익스트라 알고리즘과 같이 최적 경로 탐색에서 사용됩니다.

## 문제 풀이  
### 교재 내용  
이 섹션에서는 다양한 우선순위 큐 문제를 다룹니다. 

### LeetCode 솔루션  
여기서는 LeetCode에 있는 몇 가지 문제와 그 솔루션을 제시합니다. 예를 들어, "Kth Largest Element in an Array" 문제를 통해 우선순위 큐를 활용한 풀이를 안내합니다.

```python
import heapq

def kth_largest(nums, k):
    return heapq.nlargest(k, nums)[-1]
```

## 풀면서 잘 몰랐던 부분  
이 섹션에서는 우선순위 큐를 사용하면서 직면했던 어려운 개념이나 이해하기 힘든 부분을 설명합니다.

## 파이썬 문법 모르는 부분  
우선순위 큐와 관련된 Python 문법과 관련하여 알고 있어야 할 중요한 부분을 다룹니다. 예를 들어, `heapq` 모듈의 설치와 사용법을 설명합니다.  

```python
import heapq  # 우선순위 큐를 위한 파이썬 모듈
```

이런 문법은 파이썬에서 우선순위 큐를 사용할 때 필수적입니다.