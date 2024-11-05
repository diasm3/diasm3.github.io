---
layout  : wiki 
title   : Unit testing NestJS applications with Jest(의역) - 작성중 
summary : unit test 
date    : 2022-07-18 13:16:21 +0900
updated : 2022-07-18 15:39:19 +0900
tag     : jest unit test  
toc     : true
public  : true
parent  : [[nestjs]] 
latex   : false
---
* TOC
{:toc}

# Unit Test에 대한 이해(번역) 
- Unit 테스트에 대한 공부를 하기 위해 구글링한 자료를 번역해본다.
- 의역과 오역이 있을수 있다는 
- reference : https://blog.logrocket.com/unit-testing-nestjs-applications-with-jest/

## Intro

프로그램 테스트는 꾀 어려운 컨셉이다. 그래서 그런지 많은 프로그래머들은 버그가 발생하는것에 두려움을 느껴 테스트를 기피하게 된다. 특히 Node.js 생태계에서는 항시 필요한 느낌은 아닌데 반면에Java 생태계에서는 리소스가 부족한거 같다.

그럼에도 불구하고 테스트 코드를 작성해야 한다. 유닛테스트는 그중 가장 쉬운 편에 속하는데 유닛 테스트란 무엇인가에 대해 알아보고자 한다. 유닛 테스트는 `가장 작은단위에 포커스`를 맞춘 테스트이다. 유닛이란 단일 함수 또는 메소드인데 만약 순수한 함수라면 다른 이슈가 발생하지 않을거고굉장히 쉬운 결과값을 알 수 있게 된다.

```jaavscript
expect(add(2,2)).toBe(4);
```

위 코드를 보고 우리는 바로 단정할 수 없는게 모든 함수들이 순수 함수로만 되어있지는 않기때문에 주의해야한다. 그리고 테스트 코드는 일반 함수보다 좀더 복잡하고 어렵다.

통상적으로 우리가 작성하는 함수들은 다른 함수를 위해 내부적으로 사용하는 함수이다. 예를 들어 `userService.createUser()` 같은경우에는 내부적으로 `userRepository.create()`를 불러서 유저엔티티를 만들고 `userRepository.save()`를 사용해 데이터베이스에 저장하게 된다. 이 경우에는 테스트 결과를 하는게 헛수고 이고, 코드가 제대로 작동되는지 확신할 수 없다.

유닛 테스트는 단지 비지니스로직에 대한 함수 그 자체를 테스트하기 위한 테스트이다.

그렇기 때문에 이러한 예제같은경우 `userRepository.create()`가 함수가 불러오는 자체를 확인해야 하는거고, 인자값


## What makes unit testing unique

유닛 테스트는 의존적이 않아야하며 빨라야한다. 그리고 그 유닛에 대한 크기 에 대한 속도를 예상할 수 있다.? <-- 좀더 확인해야함 
유닛 테스트는 커밋이 완료된 후에는 꼭 테스트를 해야한다. 그중 GIT으로 어떤 파일이 어떤 내용으로 변경됬는지 추적할 수 있다

End-to-End(E2) 테스트는

