---
layout  : category 
title   : DFS(깊이 우선 탐색)
summary : 깊이 우선 탐색 
date    : 2022-04-05 15:03:39 +0900
updated : 2022-04-05 17:26:24 +0900
tag     : dfs stack 
toc     : true
public  : true
parent  : [[algorithm]] 
latex   : false
---
* TOC
{:toc}

# DFS (Depth Fisrt Search) 깊이 우선 탐색 
* Graph와 stack을 이용한 최단거리 찾기 문제?

## 그래프 순회
* 그래프의 각 정점을 방문하는 `그래프 순회(Graph Traversals)` 에는 크게 `깊이 우선 탐색(Depth First Search)`과 `너비 우선 탐색(Breadth-First Search)`의 2가지 알고리즘이 있다

- DFS
    * 주로 `스택`이나 `재귀`로 구현
    * 백트래킹으로 구현시 효율이 좋다
    
- BFS
    * 주로 `큐`로 구현


## 그래프를 포현하는 방법
* 인접 행렬(Adjacency Matrix)
    
- 인점 리스트(Adjacency List)

    ![image](https://user-images.githubusercontent.com/56494905/161710801-d9868256-850c-4a18-85ad-a933a7a4c647.png)


```python
# dictonary 로 표현하면 아래와 같다
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
graph = {
    1 : [2,3,4],
    2 : [5],
    3 : [5],
    4 : [],
    5 : [6,7],
    6 : [],
    7 : [3],
}

def recursive_dfs(v, discovered=[]):
    discovered.append(v)
        for w not in discovered:
            discovered = recursive_dfs(w, discovered)
        return discovered
```

## 스택으로 구현(Stack)

```python
def iterative_dfs(start_v):
    discovered = []
    stack = [start_v]
    while stack:
        v = stack.pop()
        if v not in discovered:
            discovered.append(v)
            for w in graph[v]:
                stack.append(w)
    return discovered
```

