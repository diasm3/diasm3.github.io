---
layout  : wiki
title   : Class & Object in JavaScript
summary : 이 문서는 JavaScript에서 클래스와 객체의 개념을 소개하고, ES6의 기능 및 사용법에 대한 예제를 포함한다.
date    : 2022-04-05 11:22:35 +0900
updated : 2022-04-05 11:56:15 +0900
tag     : class, javascript, object, es6
toc     : true
public  : true
parent  : [[javascript]]
latex   : false
---

* TOC
{:toc}

# Class 와 Object
클래스(class)는 틀(template)을 정의하고, 객체(object)는 그 틀을 통해 생성된 인스턴스(instance)로 다양한 데이터를 저장한다. 클래스는 메모리에 저장되지 않고, 객체는 클래스의 구조를 기반으로 실제 데이터를 보관한다.

## 'use strict' in ES6
`use strict`는 ES6에서의 엄격한 모드를 활성화하는 데 사용된다. 이를 통해 JavaScript의 안전성을 높이고 오류를 줄인다. 

- Object-oriented programming
- class : template
- object : instance of a class  
- JavaScript classes
  - introduced in ES6
  - syntactical sugar over prototype-based inheritance  

## Class
```javascript
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const me = new Person('me', 20);
console.log(me.name);
console.log(me.age);
```

## Getter and Setter
```javascript
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age;
    }
    
    get age() { 
        return this._age;
    }
    
    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}
```  

* Fields (public, private)
```javascript
class Experiment {
    publicField = 2;
    #privateField = 0;  // class 내부에서만 접근이 가능하다
}

const experiment = new Experiment();
console.log(experiment.publicField); // 실행가능
console.log(experiment.privateField); // 실행 불가능 -> undefined
```

* Static Method
```javascript
class Article {
    static publisher = 'dream coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    
    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(Article.publisher); // 클래스 함수로 인스턴스에서는 접근할 수 없다
Article.printPublisher();
```

* Inheritance (상속)
```javascript
class Shape {
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
    }
    
    draw() {
        console.log(`drawing ${this.color} color`);
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('*');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
    
    toString() {
       return `Triangle color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
```

## Class Checking: instanceOf
```javascript
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());
```

# 추가 논의
위 문서에서는 객체 비교 및 프로토타입에 대한 내용을 향후 추가할 예정이다.