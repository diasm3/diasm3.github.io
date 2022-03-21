---
layout  : wiki
title   : 그래프(graph) 
summary :  
date    : 2022-03-20 23:12:19 +0900
updated : 2022-03-21 13:57:36 +0900
tag     : 오일러경로 해밀턴경로 그래프순회 DFS 깊이우선탐색 BFS 너비우선탐색 백트래킹 제약충적문제
toc     : true
public  : true
parent  : [[algorithm]] 
latex   : false
---
* TOC
{:toc}

# 그래프(Graph)
## 기본개념 


### 오일러 경로
### 해밀턴 경로
### 그래프 순회
- DFS(깊이우선탐색)
- BFS(너비우선탐색)
### 백트래킹 (N-Queen)
> 백트래킹은 해결책에 대한 후보를 구축해 나아가다 가능성이 없다고 판단되는 즉시 후볼를 포기(백트랙)해 정답을 찾아가는 범용적인 알고리즘으로 제약 충족 문제에 특히 유용하다.

> leetcode 문제
> https://leetcode.com/problems/n-queens/

![image](https://user-images.githubusercontent.com/56494905/159195564-27e88352-4d69-4ea9-a660-18c68cffa969.png)

``` python
def nqueen(n):
    visited = [-1] * n # 배열을 n개 만든다 
    cnt=0 # 카운터 변수 선언

    # 범위를 벗어 났는지 확인
    def is_ok_on(nth_row):
        #
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


# assert nqueen(4) == [[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]]


```




### 제약 충족 문제


## 문제풀이  
### 교재 내용

### leetcode solution

## 풀면서 잘 몰랐던 부분 

## 파이썬문법 모르는 부분 

## 주석



