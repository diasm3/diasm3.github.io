---
layout  : wiki
title   : Latex syntax 
summary : Latex를 사용해서 수식을 입력하자 
date    : 2022-03-22 15:57:15 +0900
updated : 2022-03-22 16:49:48 +0900
tag     : latex 
toc     : true
public  : true
parent  : [[index]] 
latex   : true 
---
* TOC
{:toc}

# 기본문법

* 문법 시작과 끝을 알려준다
- `\begin
\end`

- 그냥 `$$` 열고 닫아도 된다.
- 곱셈 : `times`
- 덧셈 : `+`
- 아래에 넣기: `_n`
- 제곱 : `^n`

> `$$A + B = A$$` -> 
$$ A + B = A $$

그럼 책에 있는 내용을 넣어볼까?

$$ (N \times ((M \times ( W + T)) + (F \times (1 - W)))) + B $$

오 잘된다

이정도면 간단한건 쓸수 있겠다.


## 그냥 기록... 

$$ T_n = 2^n -1, \quad for \; n \ge 0 $$ 


$$\begin 
&T_0 = 0
&T_0 \times T_2 + 1 = 7 \\

\end$$


## 참고 사이트
https://goodtogreate.tistory.com/entry/LaTex-%EC%82%AC%EC%9A%A9-Tip-%EC%A0%95%EB%A6%AC
