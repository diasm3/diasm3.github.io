---
layout  : wiki
title   : JSON 사용법
summary : JSON 사용해보자 
date    : 2022-04-05 20:45:05 +0900
updated : 2022-04-06 07:01:52 +0900
tag     : json javascript 
toc     : true
public  : true
parent  : [[javascript]] 
latex   : false
---
* TOC
{:toc}

# JSON(Javascript Object Notation)  
* ECMAScript 3rd 1999
* AJAX (Asynchronous JavaScript And XML)
* XHR (XMLHttpRequest)

- 장점
    * simplest data interchange format
    * lightweight text=based structure
    * easy to read
    * key-value pairs
    * used for serialization and transmission of data between the network the network connection
    * independent programming language and platform




##  Object to JSON (Serialize)

* 간단한 예제

```javascript
// stringfy(obj)
let json = JSON.stringify(true)
console.log(json)
```

* 배열을 넣으면 "" 더블쿼트로 나온다

```javascript
let json = JSON.stringify(['appe', 'banana'])
console.log(json) //["apple", "banana"]
```

* 간단한 객체를 만들어서 넣어보자

```javascript

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    symbol : Symbol("id"),
    jump: () => {
       console.log(`${name} can jump`) 
    }

//
json = JSON.stringify(rabbit)
console.log(json) 
```

* 위 객체를 마음대로 변경 추가 삭제도 가능


```javascript
 
 //
json = JSON.stringify(rabbit, ['name']) //name만 출력가능
console.log(json) 

//
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`)
    return key === `name` ? `ellie` : value

}) //출력되는 JSON 데이터 파일을 컨트롤 가능
console.log(json) 
}
```


## JSON to Object(Deserialize)

* JSON을 다시 Object로 만드는것은 `JSON.stringify()`를 이용하면 된다
* 두번째 parameter 에서 call back 함수를 넣어 원하는 데이터를 쉽게 고칠 수 있다 





```javascript
// JSON to Object
json = JSON.stringify(rabbit)
const obj = JSON.parse(json)
console.log(obj)
rabbit.jump()
obj jump() //함수는 포함이 되지 않음 


console.log(rabbit.birthDate.getDate())
console.log(obj.brithDate) // string으로 할당
//

//revivor
const obj = JSON.parse(json, (key, value)=>{
    console.log(`key: ${key}, value: ${value}`)
    return key === 'birthDate' ? new Date(value) : value
})
console.log(obj)

```



