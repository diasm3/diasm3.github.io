---
layout  : wiki
title   : chapter11  
summary : 논리게이트 
date    : 2022-03-21 16:31:24 +0900
updated : 2022-03-23 08:55:41 +0900
tag     : and or  
toc     : true
public  : true
parent  : [[cs-study]] 
latex   : true 
---
* TOC
{:toc}

# 논리게이트란? 
* 전기를 입력받아 스위치를 이용해서 다양한 출력 방법을 구연할 수 있다

* 11장에서 알아야 할점 
1. 게이트의 종류 특성 
2. 릴레이와 스위치의 차이점
3. 게이트의 표현방법 ( 논리식, 기호, 진리표)
4. 드모르간의 법칙



## 게이트

>
![image](https://user-images.githubusercontent.com/56494905/159281773-6555f7a9-0268-46b3-84b1-323eddc0f82c.png)



## 논리곱과 논리합
> * OR
> `A + B = A` `b = A` 또는 `B`


> * AND 
> `A x B = A` `b = A` 와 `B` 

## 게이트의 종류
### `AND 게이트`
* 가장 기본적인 게이트로 두개의 입력값이 1이 되어야 결과값도 1이 된다 
$$ Y = A  \times B \\
 Y = A \cdot B\\ 
 Y = AB $$

* 기호

![image](https://user-images.githubusercontent.com/56494905/159424649-0e2b9119-384a-405c-97d4-27c74bb2f025.png)

* 진리표
 
| Input A | Input B | Ouput Y |
| :-:     | :-:     | :-:    |
| 0       | 0       | 0      |
| 0       | 1       | 0      |
| 1       | 0       | 0      |
| 1       | 1       | 1      |

--------------------------
### `OR 게이트`
* 입력값이 하나라도  1이 되면 결과값도 1이 된다.
$$ \\ Y = A + B $$

* 기호
 
![image](https://user-images.githubusercontent.com/56494905/159424792-cfbf6ab3-1eec-4087-af0b-a7c38c56d632.png)

* 진리표

| Input A | Input B | Ouput Y |
| :-:     | :-:     | :-:    |
| 0       | 0       | 0      |
| 0       | 1       | 1      |
| 1       | 0       | 1      |
| 1       | 1       | 1      |

--------------------------
### `NOT 게이트` 
* 1일 들어가면 부조건 0 , 0이 들어오면 1
$$ \\ Y = A + B $$

* 기호

![image](https://user-images.githubusercontent.com/56494905/159424844-d8cba4e4-9423-4e76-98e8-0df3f3d4b69e.png)

* 진리표

| Input A | Ouput Y |
| :-:     | :-:    |
| 0       | 1      |
| 1       | 0      |

--------------------------
### `Buffer 게이트`
* 입력된 정보를 그대로 출력
$$\\ Y = A $$

* 기호

![image](https://user-images.githubusercontent.com/56494905/159601277-10179f5d-924c-40ae-ac56-344e5dc015d6.png
)

* 진리표

| Input A | Ouput Y |
| :-:     | :-:    |
| 0       | 0       |
| 1       | 1      |

--------------------------

### `NAND 게이트`

* NOT + AND 즉 AND의 부정
$$ \\ Y = \overline{A \cdot B}  $$

* 기호

![image](https://user-images.githubusercontent.com/56494905/159453967-7d1d322d-5ebe-49b7-9865-70db0d995446.png)

* 진리표

| Input A | Input B | Ouput Y |
| :-:     | :-:     | :-:    |
| 0       | 0       | 1      |
| 0       | 1       | 1      |
| 1       | 0       | 1      |
| 1       | 1       | 0      |


--------------------------
### `NOR 게이트`

* NOT + OR 즉 OR의 부정
$$ \\ \overline{A \cdot B} $$


* 기호

>![image](https://user-images.githubusercontent.com/56494905/159454332-ae46a968-bf2f-47d1-84e9-454eff7a4028.png)

* 진리표


| Input A | Input B | Ouput Y |
| :-:     | :-:     | :-:    |
| 0       | 0       | 1      |
| 0       | 1       | 0      |
| 1       | 0       | 0      |
| 1       | 1       | 0      |

--------------------------
### `XOR 게이트`

* 입력신호가 모두 같으면 0, 한개라도 틀리면 1출력
$$ \\ Y = A \oplus B \\ 
Y = \overline{A}B + B\overline{B}
$$

* 기호

>![image](https://user-images.githubusercontent.com/56494905/159454370-413b39b6-ee3b-4768-bd3b-183a54fe8af2.png)

* 진리표

| Input A | Input B | Ouput Y |
| :-:     | :-:     | :-:    |
| 0       | 0       | 0      |
| 0       | 1       | 1      |
| 1       | 0       | 1      |
| 1       | 1       | 0      |


--------------------------
### `XNOR 게이트`

* Not + XOR 즉 XOR의 부정
$$ \\ Y = A \odot  B \\ 
Y = A \oplus B \\
Y = AB + \overline{A}\overline{B}\\
$$


* 기호

>![image](https://user-images.githubusercontent.com/56494905/159454394-ec096680-3910-4e5d-b5a4-282caeebbd44.png)

* 진리표

| Input A | Input B | Ouput Y |
| :-:     | :-:     | :-:    |
| 0       | 0       | 1      |
| 0       | 1       | 0      |
| 1       | 0       | 0      |
| 1       | 1       | 1      |


--------------------------


## 스위치와 릴레이의 차이점 

|        공통점        |                          차이점                          |
|          -           |                            -                             |
| 전력을 공급 차단한다 | 릴레이는 다른 라인의 전력을 `자동`으로 컨트롤 할 수 있다 |
|                      |          스위치는 직렬연결로 전력을 컨트롤한다           |



|        | 장점                                                 | 단점                                         |
| -      | -                                                    | -                                            |
| 릴레이 | 낮은 전력으로 다른 입력 전압전류를 컨트롤 할 수 있다 | 복잡한 구조를 이해하고 릴레이에 따라 Spec이 다르다.                                             |
| 스위치 | 단순해서 설치 및 이용이 편리하다                     | 연결된 부분에 전기를 단순 컨트롤밖에 못한다. |



> 스위치과 같은 역할이다. 다만 작은 전류를 통해서 큰전류를 통제하는 스위치다

릴레이는 쉽게 말해 ON, OFF가 있는 일종의 '스위치' 입니다.

하지만 우리가 일반적으로 알고있는 불을 켜고 끌때 누르는 스위치와는 `동작원리`가 다릅니다.

우리가 일반적으로 접하는 스위치는 수동'으로 ON, OFF 해주지만, 릴레이는 '자동'으로 ON,OFF 할 수 있게끔 í´주는 전자부품 입니다. 

조금 더 전문적으로 말하자면, 별도로 분리되어 흐르는 전기를 스위칭할 수 있는 신호 또는 펄스를 만들어 줍니다. 
이러한 릴레이는 작동하기위해 필요한 전압은 낮지만, 입력될 수 있는 전압은 높습니다.

그렇기 때문에 릴레이는 흔히 낮은 전압/전류를 이용하여 더 높은 전압/전류를 제어하는데에 많이 사용합니다.


## 논리회로
>논리회로란 논리연산을 통해 전기 장치를 제어하는 통로
![image](https://user-images.githubusercontent.com/56494905/159283479-fcc317c9-3a2f-46f9-9877-9097f0e69c54.png)

## 드모르간의 법칙
$$ \overline{A}\times\overline{B}=\overline{A + B} \\
    \overline{A} + \overline{B} = \overline{A \times B} $$





