---
layout  : wiki
title   : LaTeX Syntax Guide
summary : LaTeX를 사용하여 수식을 입출력하는 방법을 설명합니다. 이 가이드는 기본 문법, 사용 가능한 명령어 및 유용한 참고 자료를 제공합니다.
date    : 2022-03-22T15:57:15+09:00
updated : 2023-10-20T10:00:00+09:00
tag     : latex, 수식, 문법
 toc     : true
public  : true
parent  : [[index]] 
latex   : true
---

* TOC
{:toc}

# 기본 문법

LaTeX에서 수식을 작성하는 기본 문법을 알아보겠습니다. 수식은 `egin` 및 `egin` 명령어로 감싸거나 `$` 기호로 열고 닫을 수 있습니다.

- 수식 블록 시작: `\begin{equation}`
- 수식 블록 끝: `\end{equation}`
- 인라인 수식: `$ ... $`

### 기본 연산
- 곱셈: `*`
- 더하기: `+`
- 아래 첨자: `_n`
- 위 첨자: `^n`

> 예시: $A + B = A$  
$ A + B = A $

### 복합 수식 예제

아래는 복합적인 수식의 예입니다:
$$
(N \times ((M \times ( W + T)) + (F \times (1 - W)))) + B
$$

이 수식은 잘 작동합니다! 간단한 수식은 이제 잘 작성할 수 있겠네요.

## 수식 관련 명령어

### 다양한 수식 예시
![](https://user-images.githubusercontent.com/56494905/159516288-6b187e56-afb3-4c43-a29f-fc5ad7736fc6.png)

![](https://user-images.githubusercontent.com/56494905/159516477-3fd20f9d-1d3d-4625-b082-e395d7b878c7.png)

## 액센트 및 위아래 명령어
![](https://user-images.githubusercontent.com/56494905/159516049-8bb0a2a4-26c1-4b9c-a7a1-b7fcfde9e019.png)

## 기호 및 기호 명령어
![](https://user-images.githubusercontent.com/56494905/159515854-c14f23fa-64cd-4760-86a8-1627a1b1ebc7.png)

## 참고 자료
* [LaTeX 사용 팁](https://goodtogreate.tistory.com/entry/LaTex-%EC%82%AC%EC%9A%A9-Tip-%EC%A0%95%EB%A6%AC) 
* [LaTeX PDF 매뉴얼](https://www.icl.utk.edu/~mgates3/docs/latex.pdf)