---
layout  : wiki
title   : 덱(Deque) - 양쪽 끝에서 삽입과 삭제가 가능한 자료구조
summary : 이 문서는 데크(Deque)에 대한 기본 개념, 문제 해결 접근법 및 파이썬 구현 예제를 제공합니다. 구체적인 LeetCode 문제와 실제 사용 사례를 포함하고 있습니다.
date    : 2022-03-20 22:47:24 +0900
updated : 2023-03-21 08:33:24 +0900
tag     : [자료구조, 알고리즘, 파이썬]
toc     : true
public  : true
parent  : [[algorithm]] 
latex   : false
---
* TOC
{:toc}

# 덱(Deque) - 양쪽 끝에서 삽입과 삭제가 가능한 자료구조

## 기본 개념  
- 덱(Deque)는 Double-Ended Queue의 약자로, 양쪽 끝에서 삽입과 삭제가 가능한 자료구조입니다. 주로 큐와 스택의 기능을 조합하여 사용됩니다.  
- 기본 연산에는 삽입(Insert)과 삭제(Remove) 기능이 포함되어 있으며, 고급 언어에서는 다양한 메서드를 제공합니다.

## 문제 풀이  
### 교재 내용
- 교재에서 제시하는 기본 문제들은 덱을 활용한 다양한 알고리즘 문제를 다룹니다.  
- 예를 들어, 슬라이딩 윈도우를 계산하기 위한 덱의 활용이 있습니다.

### LeetCode 솔루션
- [LeetCode 문제 239: 슬라이딩 윈도우 최대값](https://leetcode.com/problems/sliding-window-maximum/)
- 문제 설명: 주어진 배열에서 **k** 길이의 슬라이딩 윈도우를 사용하여 최대값을 찾는 문제입니다.

```python
from collections import deque

def maxSlidingWindow(nums, k):
    dq = deque()
    result = []
    for i in range(len(nums)):
        # Remove indices that are out of the window
        if dq and dq[0] < i - k + 1:
            dq.popleft()
        # Remove elements that are less than the current element
        while dq and nums[dq[-1]] < nums[i]:
            dq.pop()
        dq.append(i)
        # Append the maximum of the window
        if i >= k - 1:
            result.append(nums[dq[0]])
    return result
```

## 풀면서 잘 몰랐던 부분  
- 해당 문제를 풀면서 주의해야 할 점은 덱의 활용 적절성과 순서를 유지하는 것입니다. 특히, 삽입과 삭제 시 인덱스를 잘 관리해야 합니다.

## 파이썬 문법 모르는 부분  
- 파이썬의 `collections` 모듈에서 제공하는 `deque` 클래스에 대한 이해가 필요합니다. 이 클래스는 양쪽 끝에서 O(1)의 시간복잡도로 삽입과 삭제가 가능합니다.  
- 또한, 리스트의 메서드와 같이 사용하는 법을 숙지할 필요가 있습니다.