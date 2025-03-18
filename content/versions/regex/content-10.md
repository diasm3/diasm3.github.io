---
layout  : wiki
title   : Regex 사용법
summary : 정규 표현식을 사용하는 방법과 예제
date    : 2022-04-05T10:34:35+09:00
updated : 2023-10-03T10:46:06+09:00
tag     : [regex, 정규표현식, 프로그래밍]
toc     : true
public  : true
parent  : [[index]] 
latex   : false
---
* TOC
{:toc}

# 정규 표현식 (Regex) 란?
정규 표현식은 일정한 패턴을 구별하고, 그 규칙을 사용하여 데이터를 매칭하거나 추출하는 강력한 도구입니다.

# Syntax
## Groups and Ranges
- `|` 또는
- `()` 그룹
- `[]` 문자 셋, 괄호 안의 어떤 문자든
- `[^]` 부정 문자 셋, 괄호 안의 어떤 문자가 아닐 때
- `(?:)` 찾지만 기억하지 않음

## Quantifiers (수량자)
- `?` 없거나 있거나 (zero or one)
- `*` 없거나 있거나 많거나 (zero or more)
- `+` 하나 또는 많이 (one or more)
- `{n}` n번 반복
- `{min,}` 최소
- `{min, max}` 최소 그리고 최대

## Boundary Types
- `\b` 단어 경계
- `\B` 단어 경계가 아님
- `^` 문장의 시작
- `$` 문장의 끝

## Character Classes
- `\` 특수 문자가 아닌 문자
- `.` 어떤 글자 (줄바꿈 문자 제외)
- `\d` digit 숫자
- `\D` digit 숫자 아님
- `\w` word 문자
- `\W` word 문자 아님
- `\s` space 공백
- `\S` space 공백 아님

## 예제 코드
다음은 Python에서 정규 표현식을 사용하는 예입니다:

```python
import re

# 예제 문자열
text = "Hello, my phone number is 123-456-7890."

# 정규 표현식 패턴
pattern = r'\d{3}-\d{3}-\d{4}'

# 매칭 검색
match = re.search(pattern, text)
if match:
    print(f'찾은 번호: {match.group()}')
else:
    print('번호를 찾지 못했습니다.')
```

# 실제 사용 사례
정규 표현식은 사용자 입력 검증, 데이터 추출, 문자열 변환 등에 널리 사용됩니다. 예를 들어, 이메일 형식이 유효한지를 검사하거나, 로그 파일에서 특정 패턴의 데이터를 추출하는 데 사용될 수 있습니다.

## Reference
- [엘리regex](https://www.youtube.com/watch?v=t3M6toIflyQ&list=PLv2d7VI9OotSn1ThdDeqvBx8QuRSd01qv)