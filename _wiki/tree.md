---
layout  : wiki
title   : 트리 
summary : tree 
date    : 2022-03-21 00:59:33 +0900
updated : 2022-03-23 14:39:05 +0900
tag     : tree binary 
toc     : true
public  : true
parent  : [[algorithm]] 
latex   : false
---
* TOC
{:toc}

# 트리(tree) 
## 기본개념 

> 각 노드가 m개 이하의 자식을 갖고 있으면, m-ary 트리(다항트리, 다진트리)라고 한다.
- 노드의 차수가 2 이하일때 `이진트리`



* 정 이진트리(Full Binary Tree) : 모든 노드가 0개 또는 2개의 자식 노드를 갖는다.
* 완전 이진 트리(Complete BInaray Tree) : 마지막 레벨을 제외하고 모든 레벨이 완전히 체워져 있으며, 마지막 레벨의 모든 노드는 가장 왼쪽부터 채워져 있다.
* 포화 이진 트리(Perfect Binary Tree) : 모든 노드가 2개의 자식 노드를 갖고 있으며, 모든 리프 노드가 동일한 깊이 또는 레벨을 갖는다. 문자 그대로, 가장 완벽한 유형의 트리다


* 이진탐색(Binary Search Tree)

* 이진트리(Binary Tree)

## 문제풀이
### 교재 내용
 * [[Leetcode-104]] Maximum Depth of Binary Tree 
  - 반복 구조로 BFS 풀이 
  
### leetcode solution

## 풀면서 잘 몰랐던 부분 

## 파이썬문법 모르는 부분 

## 용어 개념
* node: 트리에서 데이터를 저장하는 기본 요소 
* Root Node: 트리 맨 위에 있는 노드
* Level: 최상위 노드를 Level 0으로 하였을 때, 하위 Branch로 연결된 노드의 깊이를 나타냄
* Parent Node: 어떤 노드의 상위 레벨에 연결된 노드
* Child Node: 어떤 노드의 하위 레벨에 연결된 노드
* Leaf NodeTerminal Node)(: Child Node가 하나도 없는 노드
* Sibling: 동일한 Parent Node를 가진 노드
* Depth: 트리에서 Node가 가질 수 있는 최대 LeveliNode: 트리에서 데이터를 저장하는 기본 요소 
* Root Node: 트리 맨 위에 있는 노드
* Level: 최상위 노드를 Level 0으로 하였을 때, 하위 Branch로 연결된 노드의 깊이를 나타냄
* Parent Node: 어떤 노드의 상위 레벨에 연결된 노드
* Child Node: 어떤 노드의 하위 레벨에 연결된 노드
* Leaf NodeTerminal Node(: Child Node가 하나도 없는 노드
* Sibling: 동일한 Parent Node를 가진 노드
* Depth: 트리에서 Node가 가질 수 있는 최대 Level))
