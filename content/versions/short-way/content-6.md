---
layout  : wiki
title   : 최단 경로 문제 (Shortest Path Problem)
summary : 이 문서는 최단 경로 문제의 기본 개념과 여러 해결 방법에 대해 설명합니다. LeetCode 문제와의 연계를 통해 구체적인 코드를 제시합니다.
date    : 2022-03-21T00:59:45+09:00
updated : 2022-03-21T08:33:24+09:00
tag     : [알고리즘, 최단경로, 문제풀이]
toc     : true
public  : true
parent  : [[algorithm]] 
latex   : false
---
* TOC
{:toc}

# 최단 경로 문제 개요

최단 경로 문제는 주어진 그래프에서 두 노드 사이의 최단 경로를 찾는 문제입니다. 이 문제는 다양한 알고리즘으로 해결할 수 있으며, 대표적으로 다익스트라 알고리즘과 벨만-포드 알고리즘이 있습니다.

## 기본 개념 

- **그래프**: 정점과 간선으로 이루어진 데이터 구조
- **최단 경로**: 시작 정점에서 목표 정점까지의 거리의 합이 최소인 경로

## 문제 풀이  
### 교재 내용

교재에서 설명하는 내용을 바탕으로 가장 기본적인 접근 방법을 설명합니다. 예를 들어, 깊이 우선 탐색(DFS)과 너비 우선 탐색(BFS)을 통해 최단 경로를 찾는 방법이 있습니다.

### LeetCode Solution

LeetCode에서 제공하는 최단 경로 문제 예시를 통해 다양한 해결 방법들을 살펴보겠습니다.
```python
# 다익스트라 알고리즘을 활용한 예제
import heapq

def dijkstra(graph, start):
    queue = []
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    heapq.heappush(queue, (0, start))

    while queue:
        current_distance, current_node = heapq.heappop(queue)

        if current_distance > distances[current_node]:
            continue

        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(queue, (distance, neighbor))

    return distances
```

## 풀면서 잘 몰랐던 부분 

문제를 풀면서 이해가 가지 않았던 부분이나, 고려해야 할 요소들에 대해 메모해두는 것이 좋습니다.

## 파이썬 문법 모르는 부분 

코드를 작성하면서 자주 사용하는 파이썬 문법에 대해 정리합니다. 예를 들어, 딕셔너리 컴프리헨션이나 고급 함수 사용법 등도 포함될 수 있습니다.