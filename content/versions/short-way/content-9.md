---
layout  : wiki
title   : 트라이 알고리즘
summary : 트라이 알고리즘의 기본 개념, 문제 해결법, 그리고 LeetCode에서의 구체적 예제 및 파이썬 코드 구현을 다룹니다.
date    : 2022-03-21 00:59:25 +0900
updated : 2023-10-05 10:00:00 +0900
tag     : algorithm, data structure, trie, coding
 toc     : true
public  : true
parent  : [[algorithm]]    
latex   : false
---
* TOC
{:toc}

# 트라이 알고리즘  
트라이(Trie) 알고리즘은 문자열 검색과 저장을 효율적으로 수행하는 자료구조입니다. 이 문서에서는 트라이 알고리즘의 기본 개념과 여러 문제를 해결하는 방법을 다룹니다.

## 기본 개념  
- **정의**: 트라이는 문자 기반의 검색 트리 데이터 구조로, 주로 문자열의 집합을 저장합니다.
- **특징**: 공통의 접두사를 공유하며, 검색, 삽입, 삭제가 O(m)의 시간 복잡도로 가능합니다. 여기서 m은 문자열의 길이입니다.

## 문제 풀이  
### 교재 내용  
- 기본적인 문제 설명 및 예시를 포함합니다. 문제를 이해하는 데 필요한 이론과 기법을 설명하십시오.

### LeetCode 솔루션  
- **문제 번호**: 208. Implement Trie (Prefix Tree)
- **문제 설명**: 트라이를 구현하여 단어의 삽입, 검색, 삭제 기능을 제공합니다.
- **Python 코드 예제**:
```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True

    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end_of_word

    def starts_with(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True
```

## 풀면서 잘 몰랐던 부분  
- 트라이 알고리즘에 대한 깊은 이해가 부족해 적용하기 어려웠던 부분을 정리합니다.

## 파이썬 문법 모르는 부분  
- 파이썬에서 다루기 어려운 문법이나 함수에 대한 설명 및 예제를 추가합니다.