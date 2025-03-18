---
layout  : wiki
title   : 그래프(Graph) 알고리즘
summary : 그래프 알고리즘의 기본 개념과 다양한 탐색 기법인 오일러 경로, 해밀턴 경로, 깊이 우선 탐색(DFS), 너비 우선 탐색(BFS), 그리고 백트래킹에 대해 설명한다. 이 문서에서는 관련 예제와 함께 알고리즘의 기초를 다룬다.
date    : 2022-03-20 23:12:19 +0900
updated : 2023-10-04 10:30:00 +0900
tag     : 그래프, 알고리즘, 오일러경로, 해밀턴경로, DFS, BFS, 백트래킹, 제약충족문제
toc     : true
public  : true
parent  : [[algorithm]]
latex   : false
---
* TOC
{:toc}

# 그래프(Graph) 알고리즘

## 기본 개념  
그래프는 정점(Vertex)과 간선(Edge)으로 구성된 자료구조로, 노드 간의 관계를 표현하는 데 사용된다. 이 장에서는 그래프의 여러 중요한 개념과 탐색 기법을 설명한다.

### 오일러 경로
오일러 경로는 모든 간선을 정확히 한 번씩 지나고 시작점과 끝점이 같지 않은 경로이다. 오일러 경로가 존재하기 위한 조건과 예제를 살펴보자.

### 해밀턴 경로
해밀턴 경로는 모든 정점을 정확히 한 번만 방문하는 경로다. 이 경로의 존재 여부에 대한 문제는 NP-완전 문제로 알려져 있으므로 해결하기 어려운 경우가 많다.

### 그래프 순회
그래프 탐색 알고리즘의 두 가지 주요 기법인 깊이 우선 탐색(DFS)과 너비 우선 탐색(BFS)에 대해 설명한다.
- **DFS (깊이 우선 탐색)**: 그래프의 깊은 부분을 우선적으로 탐색하는 기법으로, 스택 자료구조를 이용하여 구현된다.
- **BFS (너비 우선 탐색)**: 그래프의 넓은 부분을 먼저 탐색하는 기법으로, 큐 자료구조를 이용하여 구현된다.

### 백트래킹 (N-Queen)
백트래킹 알고리즘은 해결책 후보를 구축하고, 후보가 유효하지 않을 경우 즉시 포기하고 이전 상태로 돌아가면서 해를 찾아가는 기법이다. 이는 제약 충족 문제에 특히 유용하다.

> [LeetCode 문제 - N-Queen](https://leetcode.com/problems/n-queens/)

![image](https://user-images.githubusercontent.com/56494905/159195564-27e88352-4d69-4ea9-a660-18c68cffa969.png)

```python
def nqueen(n):
    visited = [-1] * n  # n개의 배열을 생성
    cnt = 0  # 카운터 변수 선언

    # 범위를 벗어났는지 확인하는 함수를 정의
    def is_ok_on(nth_row):
        for row in range(nth_row):
            if visited[nth_row] == visited[row] or nth_row - row == abs(visited[nth_row] - visited[row]):
                return False
        return True

    def dfs(row):
        if row >= n:
            nonlocal cnt
            cnt += 1
            grid = [['.'] * n for _ in range(n)]
            for idx, value in enumerate(visited):
                grid[idx][value] = 'Q'
            return

        for col in range(n):
            visited[row] = col
            if is_ok_on(row):
                dfs(row + 1)

    dfs(0)
    return cnt

print(nqueen(int(input())))
```

### 제약 충족 문제
제약 충족 문제는 주어진 제약 조건을 만족하는 해를 찾는 문제로, 다양한 알고리즘을 통해 해결할 수 있다.

## 문제 풀이  
다양한 알고리즘을 통해 문제를 해결하는 방법을 다룬다.  
### 교재 내용
여기서는 교재에서 제공하는 내용을 바탕으로 문제 해결 방법을 정리한다.
### LeetCode Solution
LeetCode에서 제공하는 해결 방법을 설명하고, 필요한 경우 분야별로 나누어 정리한다.

## 학습 중 헷갈렸던 부분  
문제를 풀면서 헷갈렸던 부분에 대해 회고하는 섹션이다. 이는 향후 학습에 도움이 될 수 있다.

## 파이썬 문법 중 모르는 부분  
문법적으로 미숙한 부분에 대한 학습 및 이해를 좀 더 심도 있게 다룬다.

## 주석
위 코드에 대한 주석 및 설명을 추가하여 이후 읽는 사람에게 도움이 되도록 한다.