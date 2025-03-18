---
layout  : wiki
title   : 819. 가장 흔한 단어
summary : 이 문서는 LeetCode의 "가장 흔한 단어" 문제에 대한 해결 방안을 제시합니다. 문제의 이해, 접근 방식, 예제 코드 및 실제 사용 사례를 포함하고 있습니다.
date    : 2022-03-24 23:05:07 +0900
updated : 2023-10-06 12:00:00 +0900
tag     : [LeetCode, 문제 풀이, 알고리즘]
toc     : true
public  : true
parent  : [[leetcode]]
latex   : false
---

* TOC
{:toc}

# 819. 가장 흔한 단어

## 문제 설명
 주어진 텍스트에서 가장 자주 등장하는 단어를 찾는 문제입니다. 구두점이나 대소문자를 무시하고, 단어 빈도가 가장 높은 단어를 반환해야 합니다.

## 접근 방식
이 문제를 해결하기 위해 다음과 같은 접근 방식을 사용할 수 있습니다:
1. 텍스트를 공백과 구두점을 기준으로 분리합니다.
2. 각 단어의 빈도를 계산합니다.
3. 가장 빈도가 높은 단어를 찾습니다.

## 예제 코드
아래는 Python을 사용하여 문제를 해결하는 방법입니다:
```python
from collections import Counter
import re

def most_common_word(paragraph: str, banned: list) -> str:
    # 텍스트에서 모든 단어 추출 및 전처리
    words = re.findall(r'\w+', paragraph.lower())
    # 금지된 단어를 제외한 단어들의 빈도 계산
    word_count = Counter(word for word in words if word not in banned)
    # 빈도가 가장 높은 단어를 반환
    return word_count.most_common(1)[0][0]

# 예시 사용법
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
print(most_common_word(paragraph, banned))  # 출력: "ball"
```

## 실제 사용 사례
이 문제는 자연어 처리(NLP) 및 텍스트 분석 분야에서 유용하게 활용될 수 있으며, 데이터를 준비하거나 분석하는 데 있어 중요한 부분입니다.