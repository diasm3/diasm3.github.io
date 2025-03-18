---
layout  : category 
title   : DFS(깊이 우선 탐색)  
summary : 깊이 우선 탐색(DFS)은 그래프를 탐색하는 알고리즘으로, 크게 스택 또는 재귀 방식으로 구현된다. 이 문서에서는 DFS의 개념, 그래프 표현 방법, 그리고 스택과 재귀를 통한 구현 방법을 설명한다.  
date    : 2022-04-05 15:03:39 +0900  
updated : 2023-10-18 17:26:24 +0900  
tag     : dfs, stack, algorithm  
toc     : true  
public  : true  
parent  : [[algorithm]]  
latex   : false  
---  
* TOC
{:toc}

# DFS (Depth First Search) 깊이 우선 탐색  
깊이 우선 탐색(DFS)은 그래프의 각 정점을 탐색하는 알고리즘으로, 주로 스택이나 재귀를 통해 구현된다. 이 문서에서는 DFS의 기본 개념, 그래프 표현 방법, 재귀 및 스택을 이용한 구현 방법을 다룬다.

## 그래프 순회
그래프의 각 정점을 탐색하는 방식은 크게 깊이 우선 탐색(DFS)과 너비 우선 탐색(BFS)의 두 가지 알고리즘으로 구분된다.

### DFS (Depth First Search)
- 주로 스택이나 재귀로 구현
- 백트래킹 방식으로 구현할 경우 효율성이 높다

### BFS (Breadth-First Search)
- 주로 큐로 구현

## 그래프를 표현하는 방법
그래프는 여러 방법으로 표현될 수 있으며, 가장 일반적인 두 가지 방법은 다음과 같다:

1. **인접 행렬 (Adjacency Matrix)**  
2. **인접 리스트 (Adjacency List)**  

![image](https://user-images.githubusercontent.com/56494905/161710801-d9868256-850c-4a18-85ad-a933a7a4c647.png)

### Dictionary로 표현하기
```python
# Dictionary로 표현하면 아래와 같다
graph = {
    1 : [2,3,4],
    2 : [5],
    3 : [5],
    4 : [],
    5 : [6,7],
    6 : [],
    7 : [3],
}
```

## 재귀로 구현 (Recursion)
```python
# 재귀를 이용한 DFS 구현

def recursive_dfs(v, discovered=[]):
    discovered.append(v)
    for w in graph[v]:  # 올바른 형식을 위해 변경
        if w not in discovered:
            discovered = recursive_dfs(w, discovered)
    return discovered
```

## 스택으로 구현 (Stack)
```python
# 스택을 이용한 DFS 구현

def iterative_dfs(start_v):
    discovered = []
    stack = [start_v]
    while stack:
        v = stack.pop()
        if v not in discovered:
            discovered.append(v)
            for w in graph[v]:
                if w not in discovered:  # 중복 추가 방지
                    stack.append(w)
    return discovered
```