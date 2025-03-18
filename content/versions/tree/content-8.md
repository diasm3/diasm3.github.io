---
layout  : wiki
title   : 트리 (Tree)
summary : 트리 구조에 대한 자세한 설명 및 유형, 문제 풀이, 개념 정리
date    : 2022-03-21T00:59:33+09:00
updated : 2022-03-23T14:39:05+09:00
tag     : [tree, binary, data structure]
toc     : true
public  : true
parent  : [[algorithm]]
latex   : false
---

* TOC
{:toc}

# 트리 (Tree) 
## 기본 개념 

> 트리는 각 노드가 m개 이하의 자식을 갖고 있는 데이터 구조이다. m-ary 트리라고도 하며, 특히 자식 수가 2 이하일 때는 이진트리(Binary Tree)라고 한다.

* **정 이진 트리 (Full Binary Tree)**: 모든 노드가 0개 또는 2개의 자식 노드를 갖는다.
* **완전 이진 트리 (Complete Binary Tree)**: 마지막 레벨을 제외하고 모든 레벨이 완전히 채워져 있으며, 마지막 레벨의 모든 노드는 가장 왼쪽부터 채워져 있다.
* **포화 이진 트리 (Perfect Binary Tree)**: 모든 노드가 2개의 자식 노드를 가지며, 모든 리프 노드가 동일한 깊이 또는 레벨을 갖는다. 이는 가장 이상적인 형태의 트리로 여겨진다.


### 이진 탐색 트리 (Binary Search Tree)
이진 탐색 트리는 각 노드의 왼쪽 자식 노드의 값이 해당 노드의 값보다 작고, 오른쪽 자식 노드의 값이 해당 노드의 값보다 크도록 구성된 이진 트리이다.

### 문제 풀이
#### 교재 내용
* [[Leetcode-104]] Maximum Depth of Binary Tree  
  - 반복 구조를 사용한 BFS 풀이  

#### Leetcode Solution
여기서는 Leetcode 문제를 해결하기 위해 사용한 코드 및 설명을 추가합니다.

## 풀면서 잘 몰랐던 부분 
여기에는 해결 과정에서 이해가 부족했던 부분을 정리합니다.

## 파이썬 문법 모르는 부분 
해당 부분에서는 파이썬에서 익숙하지 않은 문법을 정리합니다.

## 용어 개념
* **Node**: 트리에서 데이터를 저장하는 기본 요소입니다. 
* **Root Node**: 트리의 최상위에 위치한 노드입니다. 
* **Level**: 최상위 노드를 Level 0으로 하여 하위 Branch로 연결된 노드의 깊이를 나타냅니다.
* **Parent Node**: 어떤 노드의 상위 레벨에 연결된 노드입니다.
* **Child Node**: 어떤 노드의 하위 레벨에 연결된 노드입니다.
* **Leaf Node (Terminal Node)**: Child Node가 없는 노드입니다.
* **Sibling**: 동일한 Parent Node를 가진 노드를 의미합니다.
* **Depth**: 트리에서 노드가 가질 수 있는 최대 Level을 나타냅니다. 

## 참고 문헌
- 관련된 문헌이나 자료를 여기에 추가합니다.

