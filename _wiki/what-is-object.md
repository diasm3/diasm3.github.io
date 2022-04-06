---
layout  : wiki
title   : 오브젝트란?
summary : 오브젝트란..... 
date    : 2022-04-05 12:07:19 +0900
updated : 2022-04-06 16:46:54 +0900
tag     : object javascript 
toc     : true
public  : true
parent  : [[javascript]] 
latex   : false
---
* TOC
{:toc}

# Object란?
- Objects
    * One of the JavaScript's data types
    * a collection of related data and/or functionality
    * Nearly all objects in JavaScript are instances of Object
    * object = { key : value}



## Literals and properties 

```javascript
const obj1 = {} // 'object literal' syntax
const obj2 = new Object() // 'object constructor' syntax

print(name, age)

function print(person) {
    console.log(person.name)
    console.log(person.age)
}

const ellie = { anme: 'ellie', age:4} //바로 객체를 만들 수 있음 
print(ellie)


ellie.hasJob = true  //이미 다 정의되어 있어도 그냥 넣어 줄 수 있지만 좋은 생각은 아니다
console.log(ellie.hasJob)


// can delete properties later
delete ellie.hasJob // 삭제 까지도 가능함
```
## Computed properties
```javascript

//key should be always string
console.log(ellie.name) // 아래와 같은걸로 출력할 수 있다
console.log(ellie['name']) //배열처럼 출력할 수 있다
//어떤키가 필요한지 모를때 이렇게 쓴다
ellie['hasJob'] = true
console.log(ellie.hasJob)

function printValue(obj, key){
    console.log(obj[key])
}
printValue(ellie, 'name')
```

## Property value shorthand

```javascript
const person1 = {name: 'bob', age:2}
const person2 = {name: 'steve', age:3}
const person3 = {name: 'dave', age:4}


const person4 = makePerson('elli', 30 )

const person5 = Person('elile', 30)

function makePerson(name, age){
    return{
        name, 
        age, //name : name 생략 가능
    }
}
//이렇게 함.. 


//4. constructor Function
function Person(name, age){
    this.name = name
    this.age = age
}
```




## in operator: property existence check (key in obj)
```javascript
console.log('name' in ellie) //true
console.log('age' in ellie)
console.log('random' in ellie) //false
console.log(ellie.random)//undefined
```

## for..in vs for .. of
```javascript
//for (key in obj)

for (key in ellie) {
    console.log(key) //ellie 안에 있는 모든 키를 가져옴
}
//for (key of obj)
for (value of interable){
    console.log(value)// 순차적인 배열이 있는 모든 요소를 가져옴
}

```


## Fun cloning
```javascript
const user = {name: 'ellie', age: '20'}

const user2 = user
user2.name = 'coder'
console.log(user) // 두개다 객체의 주소를 가르키기 때문에 가르키고 있는 내용은 변경된다

//따라서 오브젝트를 그대로 복사하고 싶으면
const user3 = {}
for (key in user){
    user3[key] = user[key]
}
console.log(user3) //옛날 방법

//다른 방법으로는
//기본지원으로 언제든지 사용할 수 있음
const user4 = Object.assign(user4, user)

//another example
const fruit1 = { color: 'red'}
const fruit2 = { color: 'blue', size: 'big'}
const mixed = Object.assign({}, fruit1, fruit2)

console.log(mixed.color) //뒤에 있는 fruit2가 fruit1을 덮어 씌운다
//즉 fruit2 가 출력된다 color: blue size : big
console.log(mixed.size)
```
