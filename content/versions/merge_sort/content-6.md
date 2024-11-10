---
layout  : wiki
title   : 병합 정렬 (Merge Sort)
summary : 병합 정렬의 기본 개념과 문제 해결 접근 방식을 설명하고, LeetCode 솔루션 및 주의할 점을 포함한 자주 발생하는 질문을 다룹니다.
date    : 2022-03-21 08:29:09 +0900
updated : 2023-10-11 10:00:00 +0900
tag     : [알고리즘, 정렬, 병합정렬]
toc     : true
public  : true
parent  : [[Algorithm]] 
latex   : false
---

* TOC
{:toc}

# 병합 정렬 (Merge Sort)

## 기본 개념  
병합 정렬은 분할 정복 알고리즘을 기반으로 하며, 배열을 반으로 나눈 후 각각 정렬한 뒤 병합하여 정렬된 상태로 만드는 방식입니다.

## 문제 풀이  
### 교재 내용  
병합 정렬의 이론적 기초와 시간 복잡도는 O(n log n)입니다. 따라서 큰 데이터 세트를 효과적으로 정렬할 수 있습니다.

### LeetCode 솔루션  
다음은 병합 정렬을 구현한 LeetCode에 대한 솔루션 예시입니다:

```python
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2  # 중간 인덱스
        L = arr[:mid]  # 왼쪽 절반
        R = arr[mid:]  # 오른쪽 절반

        merge_sort(L)  # 왼쪽 정렬
        merge_sort(R)  # 오른쪽 정렬

        i = j = k = 0

        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1

        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1

# 예시 사용법
arr = [38, 27, 43, 3, 9, 82, 10]
merge_sort(arr)
print(arr)  # 정렬된 배열 출력
```

## 풀면서 잘 몰랐던 부분  
- 병합 정렬에서의 재귀 호출 이해를 돕기 위한 시각적 설명이 필요했음.

## 파이썬 문법 모르는 부분  
- 리스트 슬라이싱과 재귀 호출 등의 파이썬 문법을 익히는 것이 중요함.