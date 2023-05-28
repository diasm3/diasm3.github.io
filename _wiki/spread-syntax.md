---
layout  : wiki
title   : Spread syntax 
summary : spread syntax 
date    : 2022-04-04 11:55:01 +0900
updated : 2022-04-04 15:40:29 +0900
tag     : spread syntax 
toc     : true
public  : true
parent  : [[javascript]] 
latex   : false
---
* TOC
{:toc}

# Spread sysntax(...) 
> 자꾸 잊어버려서 정리해야겠다

* 연속적인 배열 또는 문자열을 0 또는 인수 또는 인자값을 예약할 수 있다 
* 객체 또한 key-value 로 연속적인 부분을 예측 할 수 있다


```javascript

function sum(x, y, z){
    retrun x+y+z
}

const numbers = [1,2,3]

console.log(sum(...numbers))
//여기서 1,2,3 을 다 불러오라는 뜻이다

console.log(sum.apply(null, numbers))

```


# 주석 
