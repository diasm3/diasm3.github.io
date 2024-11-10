---
layout  : wiki
title   : Valid Palindrome
summary : 주어진 문자열이 팰린드롬인지 확인하는 방법 및 구현 예제
date    : 2022-03-24 21:52:19 +0900
updated : 2022-03-25 06:42:21 +0900
tag     : algorithms, strings, palindrome
 toc     : true
public  : true
parent  : 
latex   : false
---

* TOC
{:toc}

# Question  
> 주어진 문자열이 팰린드롬인지 확인하라. 대소문자를 구분하지 않으며 영문자와 숫자만을 고려해야 한다.

## Solution Steps
1. 문자열을 리스트로 변환한다.
2. 변환된 리스트가 팰린드롬인지 확인한다.

## Code Example
```python
def is_palindrome(s):
    strs = []
    for char in s:
        if char.isalnum():
            strs.append(char.lower())
    return strs == strs[::-1]
# 사용 예시
print(is_palindrome("A man, a plan, a canal: Panama"))  # True
print(is_palindrome("race a car"))  # False
```

## What is a Palindrome?
> 앞뒤가 똑같은 문자열을 의미한다.
> 예시) 12321, "A man, a plan, a canal: Panama"

## Related Links
* [LeetCode 문제 링크](https://leetcode.com/problems/valid-palindrome/)