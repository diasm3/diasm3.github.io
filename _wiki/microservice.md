---
layout  : wiki
title   : microservice에 대한 고찰
summary : nestjs의 microservices 와 kubernetes 
date    : 2022-08-10 16:39:19 +0900
updated : 2022-08-10 17:10:54 +0900
tag     : nestjs microservice kubernetes 
toc     : true
public  : true
parent  : [[backend]] 
latex   : false
---
* TOC
{:toc}

# 진정한 마이크로서비스란? 
마이크로서비스는 소프트웨어 아키텍쳐 페턴으로 크고 복잡한 어플리케이션을 파편화로 각자 독립적인 프로세서들로 구성하는 것을 마이크로서비스라고 한다. 각각의 서비스들은 최대치의 퍼포먼스를 발휘하고 확장성이 용이하며 보수가 편리하다는 장점이 있다.

Agile 방식의 개발 환경과 맞게 진행가능하며 독립적으로 배포가 가능하다.


# 마이크로서비스의 5가지 장점

1. Decoupled components- 다른 모듈의 상관없이 쉽게 변경하고 쉽게 업데이트 할 수 있다
2. Scalability - 마이크로서비스의 다른 메모리를 공유하지 않는다 이것은 쉽게 스케일링 할 수 있고 리소스를 플렉시블하게 늘릴 수 있다. 
3. Faster to build - 어플리케이션을 작은 단위로 분리할때 병렬적으로 각 모듈을 개발할 수 있다. 
4. Language and technology agnostic - 다른 프레임워크나 다른 언어를 사용해도 된다. 진입 장벽이 낮고 각 팀원들마다 다른 언어를 사용해도 되며 다른 프레임워크를 사용해도 된다. 
5. Reduces complexity - 마이크로서비스의 파편화로 쉽게 이해할 수 있고, 보수, 테스트를 한번에 진행할 수 있다.

# 그럼 마이크로서비스를 구축하려면?

1. 마이크로서비스 







# Nestjs와 kubernetes


