---
layout  : wiki
title   : 타겟 넘버 (Target Number)
summary : DFS와 BFS를 이용하여 주어진 타겟 넘버를 찾는 문제 해결 방법에 대한 설명
date    : 2022-03-25T06:34:51+09:00
updated : 2023-10-02T10:00:00+09:00
tag     : [DFS, BFS, 알고리즘, 문제해결]
toc     : true
public  : true
parent  : [[programmers]] 
latex   : false
---

* TOC
{:toc}

# 타겟 넘버 (Target Number)  
이 문서에서는 프로그래머스의 43165번 문제인 "타겟 넘버"를 DFS와 BFS 알고리즘을 활용하여 해결하는 방법에 대해 논의합니다.  

## 문제 설명  
주어진 숫자 배열을 사용하여 특정 타겟 넘버를 만들 수 있는 방법의 수를 구하는 문제입니다. 배열의 원소는 각각 더하거나 빼는 방식으로 사용될 수 있습니다.

## 접근 방법  
1. **DFS(깊이 우선 탐색)**
   - 가능한 모든 경우의 수를 탐색하기 위한 재귀적 접근 방식을 사용합니다.
2. **BFS(너비 우선 탐색)**  
   - 각 단계에서 가능한 경우의 수를 층별로 탐색하여 해답에 접근합니다.

## 구현  
코드 예시는 아래와 같습니다:
```python
def target_number(numbers, target):
    def dfs(index, current_sum):
        if index == len(numbers):
            return 1 if current_sum == target else 0
        return dfs(index + 1, current_sum + numbers[index]) +
               dfs(index + 1, current_sum - numbers[index])
    return dfs(0, 0)
```

## 실제 사용 사례  
이 알고리즘은 금융 분야에서 특정 수익 목표를 달성하기 위한 투자 조합을 찾거나, 로봇 공학에서 특정 위치로 이동하기 위한 경로 패턴을 찾는 데 활용될 수 있습니다.

## 링크  
* [프로그래머스 타겟 넘버 문제 링크](https://programmers.co.kr/learn/courses/30/lessons/43165)

## 결론  
이 문서에서는 DFS와 BFS를 통한 타겟 넘버 문제 해결 접근 방법에 대해 살펴보았습니다. 이 알고리즘을 통해 다양한 문제 상황에서도 유사한 접근을 사용할 수 있습니다.