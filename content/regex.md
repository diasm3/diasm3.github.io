---
layout  : wiki
title   : Regex 사용법
summary : Regex 사용해보자 
date    : 2022-04-05 10:34:35 +0900
updated : 2022-04-05 10:46:06 +0900
tag     : regex 
toc     : true
public  : true
parent  : [[index]] 
latex   : false
---
* TOC
{:toc}

# regex 란?
* 일정한 페턴을 구별하고 그 규칙을 가지고 값을 반환한다

# Sytax
## Groups and ranges
* \| 또는
* () 그룹
* [] 문자셋, 괄호안의 어떤 문자든
* [\^] 부정 문자셋, 괄호안의 어떤 문자가 아닐때
* (?:) 찾지만 기억하지 않음

## Quantifiers(수량자)
* ? 없거나 있거나(zero or one)
* \* 없거나 있거나 많거나(zero or more)
* \+ 하나 또는 많이(one or more)
* {n} n번 반복
* {min,} 최소
* {min, max} 최소, 그리고 최대

## Roundary-type
* \b 단어 경계
* \B 단어 경계가 아님
* ^  문장의 시작
* $ 문장의 끝

## Character classes
* \ 특수 문자가 아닌 문자
* . 어떤 글자(줄바꿈 문자 제외)
* \d digit 숫자
* \D digit 숫자 아님
* \w word 문자
* \W word 문자 아님
* \s space 공백
* \S space 공백 아님








## ref
* [엘리regex](https://www.youtube.com/watch?v=t3M6toIflyQ&list=PLv2d7VI9OotSn1ThdDeqvBx8QuRSd01qv)
* 

