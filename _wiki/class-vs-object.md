---
layout  : wiki
title   : class & object 
summary : class와 object 
date    : 2022-04-05 11:22:35 +0900
updated : 2022-04-05 11:56:15 +0900
tag     : class javascript object 
toc     : true
public  : true
parent  : [[javascript]] 
latex   : false
---
* TOC
{:toc}

# class 와 object 
- class은 틀만 만들고 (메모리에 저장안되)
- object는 틀을 가지고 실제 다양한 종류의 데이터를 저장한다

## 'use strict' in ES6
// Object-oriented programming
// class : template
// object : instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance



## class
```javascript
class Person {
    // constructor
    constructor(name, age){
    //fields
    this.name = name
    this.age = age
    }

    speak(){
        console.log(`${this.name}: hello!`)
    }
}


const me = new Person('me', 20)
console.log(me.name)
console.log(me.age)
```


```javascript
//getter
//setter

class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age // setter 에 age를 불러온다
    }
    
    get age() { 
        return this._age // 상위 prototype 에서 this.age를 계속 가져오려고 하기 떄문에
        // 그래서 _age라는 다른 변수명을 사용한다
    }
    
    set age(value) {
        this._age = value
        this._age = value < 0 ? 0 : value
    }
}  


* Fields (public, private)
```javascript
class Experiemnt{
    publicField = 2
    #privateField = 0  //class 내부에서만 값을 읽고 쓰고 할 수 있다
}

const experiment = new Experiemnt()
console.log(experiment.publicField) // 실행가능
console.log(experiment.privateField) //실행 불가능 -> undefined
```


* Static

```javascript
class Article {
    static pulisher = 'dream coding'
    constructor(articleNumber){
        this.articleNumber = articleNumber
    }
    
    static printPublisher(){
        console.log(Article.publisher)
    }
}

const aritcle1 = new Article(1)
const article2  = new Article(2)

console.log(Article.publicsher) //클래스 함수에 내장하는 함수로 인스턴스에서는 포함이 안된다
console.log(article1.printPublisher) // undefined
Article.printPublisher()
```

* inheritance 상속 

```javascript

class Shape{
    constructor(height, width, color){
        this.height = height
        this.width = width
        this.color = color
    }
    
    draw() {
        console.log(`drawing ${this.color} color of`)
    }
    getArea() {
        return width * this.height 
    
    }
}

class Rectangle extends Shape {} // Shape 에 있는 내용을 그대로 가져 올 수 있음
class Triangle extends Shape {
    draw() {
        super.draw() // 부모에 있는 내용을 그대로 져올 수 있음
        console.log('*')
    }
    getArea(){
        return (this.width * this.height) /2
    }
    
    
    toString() {
       return `Triangle color: ${this.color} ` 
    
    }

} // Shape 에 있는 내용을 그대로 가져 올 수 있음


const rectangle = new Rectangle(20, 20, 'blue')
rectangle.draw()
const triangle = new Triangle(20, 20, 'red')
```

## Class checking: instanceOf
```javascript
console.log(rectangle instanceof Rectangle)
console.log(triangle instanceof Rectangle)
console.log(triangle instanceof Triangle)
console.log(triangle instanceof Shape)
console.log(triangle instanceof Object)
cosnoel.log(triangle.toString())

```
















아까 이야기 했던것은...  객체를 비교할 수 있나?
프로토 타입에 관한 내용을 정리하자
