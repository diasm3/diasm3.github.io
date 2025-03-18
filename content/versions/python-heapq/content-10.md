---
layout  : wiki
title   : Python heapq 모듈
summary : Python의 heapq 모듈에 대한 설명과 사용 예제, 및 함수 목록입니다.
date    : 2022-03-25 09:27:15 +0900
updated : 2023-10-05 12:00:00 +0900
tag     : [python, heapq, 자료구조]
toc     : true
public  : true
parent  : [[python]] 
latex   : false
---

* TOC
{:toc}

# Python heapq 모듈

heapq 모듈은 최소 힙(min heap)을 구현한 Python의 표준 라이브러리로, 우선 순위 큐를 구현할 때 유용합니다. 이 문서에서는 heapq 모듈의 주요 함수와 사용 예제를 설명합니다.

## 주요 함수

### 1. heapq.heappush(heap, item)
- **설명:** item을 heap이라는 리스트에 추가합니다. heap의 속성을 유지합니다.
- **매개변수:**
  - `heap`: 리스트 형태의 힙
  - `item`: 추가할 요소

### 사용 예제
```python
import heapq

heap = []
heapq.heappush(heap, 5)
heapq.heappush(heap, 2)
heapq.heappush(heap, 8)

print(heap)  # 출력: [2, 5, 8]
```

## 추가 함수
- **heapq.heappop(heap)**: 최소값을 제거하고 반환합니다.
- **heapq.heapify(x)**: 리스트 x를 힙으로 변환합니다.

## 참고 문서
- [Python heapq 모듈 공식 문서](https://docs.python.org/ko/3.9/library/heapq.html?highlight=heap#module-heapq)