---
layout  : wiki
title   : BFS (Breadth-First Search)
summary : BFS(너비 우선 탐색)에 대한 개요와 구현 방법, 실제 예제를 살펴봅니다.
date    : 2022-04-05 17:26:46 +0900
updated : 2023-10-05 10:00:00 +0900
tag     : bfs, graph, algorithm
toc     : true
public  : true
parent  : [[algorithm]]
latex   : false
---
* TOC
{:toc}

# BFS (Breadth-First Search)
너비 우선 탐색(BFS)은 그래프 탐색 알고리즘으로 주로 큐 자료구조를 사용하여 구현됩니다. 이 알고리즘은 특정 노드에서 시작해 인접한 모든 노드를 먼저 탐색한 후, 인접한 노드의 인접 노드를 탐색하는 방식으로 작동합니다.

## 그래프 예제
아래의 그래프는 BFS를 통해 탐색할 수 있는 구조를 보여줍니다.

```python
graph = {
    1 : [2, 3, 4],
    2 : [5],
    3 : [5],
    4 : [],
    5 : [6, 7],
    6 : [],
    7 : [3],
}
```

## BFS 구현
BFS 알고리즘의 간단한 구현 예제는 다음과 같습니다.

```python
def bfs(graph, start):
    visited = []     # 방문한 노드
    queue = []       # 탐색할 큐

    queue.append(start)
    while queue:
        node = queue.pop(0)  # 큐에서 노드 꺼내기
        if node not in visited:
            visited.append(node)  # 방문 리스트에 추가
            neighbours = graph[node]  # 인접 노드 가져오기
            for neighbour in neighbours:
                queue.append(neighbour)  # 인접 노드 큐에 추가

    return visited  # 방문한 노드 리스트 반환

# 사용 예
result = bfs(graph, 1)
print(result)  # [1, 2, 5, 6, 3, 4, 7]
```
이 코드는 BFS 알고리즘의 기본적인 작동 방식을 보여줍니다. 시작 노드로부터 탐색한 결과를 확인할 수 있습니다.