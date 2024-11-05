---
layout  : wiki
title   : 함수 리터럴이란 무엇인가?
summary : function literals 
date    : 2022-04-13 11:14:51 +0900
updated : 2022-04-13 13:28:20 +0900
tag     : function literals  
toc     : true
public  : true
parent  : [[nodejs]] 
latex   : false
---
* TOC
{:toc}

# 함수 리터럴(function literals)
* 자꾸 함수 리터럴이 나오는데 자꾸 뭔지 찾아보게 된다 
>literals 사전적인 의미 : 정확한....  융통성 없는, 문자 그대로 정확한, 문자의, 문자사아의  

* MDN에서는 이렇게 나타낸다
>Literals represent values in JavaScript. These are fixed values—not variables—that you literally provide in your script.

    - Array literals
    - Boolean literals
    - Floating-point literals
    - Numberic literals
    - Object literals
    - RegExp literals
    - String literals


## 뭔지 생각해보자
* 함수의 문자그대로?
* 아직도 감이 안온다 코드를 보면서 생각해보자

```javascript

// 일반적인 함수와 같지만 함수명을 사용하지 않고 상태만 나타내는 부분이 특징이다

const what = function(){
console.log("hello world")
}
```

* 자바스크립의 모든 리터럴 값은 객체로 되어 있다
* 따라서 객체를 개체로 담는것도 가능하다
* 즉 변수선언도 함수 선언도 각각 하고 나서 함수를 변수에 넣는것도 가능하다

* 단 몇가지 요소로 구성되어 있으며 조건이 몇개 있다
* 함수를 정의 하고 변수에 담는데 함수 이름은 없이 저장한다
    - 예약어 function (필수ㅔ)



## 참고사이트




## 함수 리터럴이란?
