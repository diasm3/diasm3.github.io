---
layout  : wiki
title   : 버블 정렬 (Bubble Sort)
summary : 버블 정렬 알고리즘의 기본 개념, 구현 방법, 문제 풀이 및 자주 발생하는 오류에 대한 설명을 제공합니다.
date    : 2022-03-21T08:18:31+09:00
updated : 2023-03-21T08:30:33+09:00
tags    : [정렬, 알고리즘, 파이썬]
toc     : true
public  : true
parent  : [[Algorithm]] 
latex   : false
---
* TOC
{:toc}

# 버블 정렬 (Bubble Sort)

## 기본 개념
버블 정렬은 인접한 두 요소를 비교하여 정렬하는 간단한 정렬 알고리즘입니다. 이 과정을 반복하여 리스트가 정렬될 때까지 진행합니다.

## 문제 풀이  
### 교재 내용  
버블 정렬의 절차는 다음과 같습니다:
1. 배열에 있는 요소를 처음부터 끝까지 반복합니다.
2. 각 인접한 요소를 비교하고, 필요 시 위치를 바꿉니다.
3. 배열의 마지막까지 진행한 후, 요소가 더 이상 교환되지 않을 때까지 반복합니다.

### LeetCode Solution  
다음은 버블 정렬을 사용하는 파이썬 코드 예제입니다:
```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]  # Swap
                swapped = True
        if not swapped:
            break
    return arr

# 사용 예
numbers = [64, 34, 25, 12, 22, 11, 90]
sorted_numbers = bubble_sort(numbers)
print(sorted_numbers)  # [11, 12, 22, 25, 34, 64, 90]
```

## 풀면서 잘 몰랐던 부분  
버블 정렬의 시간 복잡도는 O(n^2)입니다. 이 점을 고려해야 효율성을 비교할 수 있습니다. 또한 대량의 데이터에서 비효율적입니다.

## 파이썬 문법 모르는 부분  
- `def`: 함수를 정의하는 키워드입니다.
- `len`: 리스트 또는 문자열의 길이를 반환합니다.