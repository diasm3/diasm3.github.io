---
layout  : wiki
title   : Layered Architecture(Model, View, Controller)
summary : 클래스의 재사용을 높혀주며 확장성을 눂혀준다 
date    : 2022-04-22 12:55:16 +0900
updated : 2022-04-22 13:15:53 +0900
tag     : MVC layered architecture model view controller 
toc     : true
public  : true
parent  : [[nodejs]] 
latex   : false
---
* TOC
{:toc}

# Layered Architecture?

- 백앤드에서 사용되는 디자인 패턴으로 3개의 레이어(3 단계의 depth)로 엔드포인트인 라우터 부분, 중간에서 비지니스 로직(data의 가공), 마지막으로 DB와 직적 연결되는 부분을 나눈 것을 말한다

![image](https://user-images.githubusercontent.com/56494905/164613140-545dc871-58ff-43b0-98c6-00a01269dab1.png)

> MVC 패턴을 모른상태에서는 라우터에 때려 넣는다. 그럼 가독성 및 확장성 생산성 모두를 잃게 된다

## MVC(Model, View, Controller)
- Model(data model)
    - 데이터베이스의 모델을 지정한다 
    - 이 레이어에서 정의된 모델을 토대로 데이터가 Create, Update, Read, Delete 된다
    - 폴더의 이름은 보통 Models로 넣는다
    - 데이터 베이스와 1:1 통신한다
    
    - 만약에 데이터 
    
```javascript




```





# 확장성

## MVC 패턴으로 얼마나 확장성이 높아 질까?
