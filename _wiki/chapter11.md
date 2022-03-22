---
layout  : wiki
title   : chapter11  
summary : 논리게이트 
date    : 2022-03-21 16:31:24 +0900
updated : 2022-03-22 17:52:42 +0900
tag     : and or  
toc     : true
public  : true
parent  : [[cs-study]] 
latex   : true 
---
* TOC
{:toc}

# 논리게이트
> 논리 게이트란 전선과 스위치를 이용해서 0 1를 구현하여 and 또는 Or 를 구연할 수 있다
## 논리회로
>논리회로란 논리연산을 통해 전기 장치를 제어하는 통로
![image](https://user-images.githubusercontent.com/56494905/159283479-fcc317c9-3a2f-46f9-9877-9097f0e69c54.png)
## 게이트
>
![image](https://user-images.githubusercontent.com/56494905/159281773-6555f7a9-0268-46b3-84b1-323eddc0f82c.png)


## 논리곱과 논리합
> * OR
> `A + B = A` `b = A` 또는 `B`


> * AND 
> `A x B = A` `b = A` 와 `B` 

### 게이트의 종류
* AND 게이트
 기본적인 논리게이트이다.  `A X B = A`
>$$ A \times B = A $$
>
>![image](https://user-images.githubusercontent.com/56494905/159424649-0e2b9119-384a-405c-97d4-27c74bb2f025.png)
>
>| Input A | Input B |result|
>| :-: | :-: | :-:      |
>| 0 | 0 | 0      |
>| 0 | 1 | 0      |
>| 1 | 0 | 0      |
>| 1 |1 | 1      |


* OR 게이트

$$ A + B = A $$

> ![image](https://user-images.githubusercontent.com/56494905/159424792-cfbf6ab3-1eec-4087-af0b-a7c38c56d632.png)
>
>| Input A | Input B |result|
>| :-: | :-: | :-:      |
>| 0 | 0 | 0      |
>| 0 | 1 | 1      |
>| 1 | 0 | 1      |
>| 1 | 1 | 1      |

* NOT 게이트 - 1일 들어가면 부조건 0 , 0이 들어오면 1
> ![image](https://user-images.githubusercontent.com/56494905/159424844-d8cba4e4-9423-4e76-98e8-0df3f3d4b69e.png)
>
>| Input A | result|
>| :-: |  :-:      |
>| 0 |  1      |
>| 1 |  0      |

* NAND 게이트
>![image](https://user-images.githubusercontent.com/56494905/159453967-7d1d322d-5ebe-49b7-9865-70db0d995446.png)
>
>| Input A | Input B |result|
>| :-: | :-: | :-:      |
>| 0 | 0 | 1      |
>| 0 | 1 | 1      |
>| 1 | 0 | 1      |
>| 1 | 1 | 0      |


* NOR 게이트
>![image](https://user-images.githubusercontent.com/56494905/159454332-ae46a968-bf2f-47d1-84e9-454eff7a4028.png)
>
>| Input A | Input B |result|
>| :-: | :-: | :-:      |
>| 0 | 0 | 1      |
>| 0 | 1 | 0      |
>| 1 | 0 | 0      |
>| 1 | 1 | 0      |

* XOR 게이트
>![image](https://user-images.githubusercontent.com/56494905/159454370-413b39b6-ee3b-4768-bd3b-183a54fe8af2.png)
>
>| Input A | Input B |result|
>| :-: | :-: | :-:      |
>| 0 | 0 | 0      |
>| 0 | 1 | 1      |
>| 1 | 0 | 1      |
>| 1 | 1 | 0      |


* XNOR 게이트
>![image](https://user-images.githubusercontent.com/56494905/159454394-ec096680-3910-4e5d-b5a4-282caeebbd44.png)
>
>| Input A | Input B |result|
>| :-: | :-: | :-:      |
>| 0 | 0 | 1      |
>| 0 | 1 | 0      |
>| 1 | 0 | 0      |
>| 1 | 1 | 1      |



## 기본게이트

## 릴레이 

## 스위치




##

