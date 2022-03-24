---
layout  : wiki
title   : Valid Palindrome
summary : 유요한 팰린드롬 
date    : 2022-03-24 21:52:19 +0900
updated : 2022-03-25 06:42:21 +0900
tag     : 
toc     : true
public  : true
parent  : 
latex   : false
---
* TOC
{:toc}

# Question  
> 주어진 문자열이 팰린드롬인지 확인하라. 대소문자를 구분하지 않으며 영문자와 숫자만을 
## 리스트로 변환
```python
strs = []
for char in s:
    if char isalnum():
        strs.append(char.lower())
```


## what is the palindrome
> 앞뒤가 똑같은 번호
> ex) 12321

## URL
* [link](https://leetcode.com/problems/valid-palindrome/)
