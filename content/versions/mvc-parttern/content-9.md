---
layout  : wiki
title   : Layered Architecture (Model, View, Controller)
summary : MVC 패턴은 클래스의 재사용성을 높이고 확장성을 증가시켜 애플리케이션 구조를 효과적으로 관리하는 데 도움을 줍니다.
date    : 2022-04-22T12:55:16+09:00
updated : 2023-10-05T15:00:00+09:00
tag     : MVC, Layered Architecture, Model, View, Controller
toc     : true
public  : true
parent  : [[nodejs]]
latex   : false
---
* TOC
{:toc}

# Layered Architecture

Layered Architecture는 백엔드에서 사용되는 디자인 패턴으로, 주로 세 개의 레이어(Model, View, Controller)로 구성됩니다. 이 구조는 엔드포인트인 라우터, 중간의 비즈니스 로직, 그리고 데이터베이스와의 직접 연결 부분으로 나눌 수 있습니다.

![image](https://user-images.githubusercontent.com/56494905/164613140-545dc871-58ff-43b0-98c6-00a01269dab1.png)

> MVC 패턴을 모르는 상태에서 라우터에 모든 로직을 집어넣으면 가독성과 확장성, 생산성이 모두 저하됩니다.

## MVC (Model, View, Controller)
- **Model** (데이터 모델)
    - 데이터베이스의 모델을 정의합니다.
    - 이 레이어에서 정의된 모델을 기반으로 데이터의 생성(Create), 수정(Update), 조회(Read), 삭제(Delete) 작업이 이루어집니다.
    - 보통 폴더 이름은 `Models`로 지정합니다.
    - 데이터베이스와 1:1 통신을 합니다.

## 예제 코드
다음은 기본적인 MVC 구조의 예제 코드입니다.

```javascript
// Model 예제
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    save() {
        // 데이터베이스에 사용자 저장 로직
    }
}

// Controller 예제
const userController = {
    createUser(req, res) {
        const newUser = new User(req.body.name, req.body.email);
        newUser.save();
        res.status(201).send(newUser);
    }
};
```

## 확장성
### MVC 패턴으로 얼마나 확장성이 높아질까?
MVC 패턴을 사용하면 코드의 구조가 명확해지고 각 레이어의 책임이 분리됩니다. 이는 유지보수와 확장을 용이하게 합니다. 예를 들어 추가적인 뷰나 모델을 추가할 때 기존 코드에 미치는 영향을 최소화 할 수 있습니다.