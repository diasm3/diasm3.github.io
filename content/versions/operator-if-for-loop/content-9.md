---
layout  : wiki
title   : Operators: if and for-loop in JavaScript
summary : This document covers the concepts of operators including if-else statements and for-loops in JavaScript with examples and explanations.
date    : 2022-04-05T05:55:48+09:00
updated : 2023-10-05T07:24:36+09:00
tag     : operators, if, for-loop, JavaScript, ES6
 toc     : true
public  : true
parent  : [[javascript]]
latex   : false
---

* TOC
{:toc}

# 4장: Operators - if and for-loop in JavaScript

## 전장 복습
- Immutable Data Types: Primitive Types, Frozen Objects (e.g. Object.freeze())
- Mutable Data Types: All Objects by Default are Mutable in JS

변하지 않는 데이터 타입: 기본형 타입, 객체 등  
변하는 데이터 타입: 모든 객체

## Operators

### String Concatenation
```javascript
console.log('my' + ' cat'); // Outputs: my cat
console.log('1' + 2); // Outputs: 12 (converted to string)
console.log(`string literals: 1 + 2 = ${1 + 2}`); // Outputs: string literals: 1 + 2 = 3
```

### Numeric Operators
```javascript
console.log(1 + 1); // Addition
console.log(1 - 1); // Subtraction
console.log(1 / 1); // Division
console.log(1 * 1); // Multiplication
console.log(1 % 1); // Modulus
console.log(1 ** 1); // Exponentiation
```

### Increment and Decrement Operators
- Pre-increment
```javascript
let counter = 2;
const preIncrement = ++counter;  // counter = counter + 1
// preIncrement = counter
```
- Post-increment
```javascript
let counter = 2;
const postIncrement = counter++; // postIncrement = counter
// counter = counter + 1
```
- Pre-decrement
```javascript
let counter = 2;
const preDecrement = --counter;  // counter = counter - 1
// preDecrement = counter
```
- Post-decrement
```javascript
let counter = 2;
const postDecrement = counter--; // postDecrement = counter
// counter = counter - 1
```

### Assignment Operators
```javascript
let x = 3;
let y = 6;
x += y;  // x = x + y
x -= y;
x *= y;
x /= y;
```

### Comparison Operators
```javascript
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal
```

### Logical Operators: || (or), && (and), ! (not)
```javascript
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); // Evaluates or logic
// First truthy value stops the evaluation

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 || check()}`); // Evaluates and logic

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('what'); // Some complex operation
    }
}
```

### Equality Operators
```javascript
const stringFive = '5';
const numberFive = 5;

// == loose equality (with type conversion)
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality (no type conversion)
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// Object equality by reference
const me1 = { name: 'me' };
const me2 = { name: 'me' };
const me3 = me1;
console.log(me1 == me2); // false (different references)
console.log(me1 === me2); // false (different references)
console.log(me1 === me3); // true (same reference)

// Equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
```

### Conditional Operators: if
```javascript
const name = 'ellie';
if (name === 'ellie') {
    console.log('you are my father');
} else if (name === 'coder') {
    console.log('You are the chicken');
} else {
    console.log('unknown');
}
```

### Ternary Operator: ?
```javascript
// condition ? value1 : value2
console.log(name === 'me' ? 'yes' : 'no');
```

### Switch Statement
```javascript
// Use for multiple if checks
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'FireFox':
        console.log('love you!');
        break;
    default:
        console.log('same all');
        break;
}
```

### Loops
```javascript
// While loop: while the condition is truthy
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// Do-while loop: executes the body code at least once
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// For loop: for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    console.log(`inline variable for: ${i}`);
}

// Nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue: use break to end the loop;
// Use continue to skip to the next iteration.
```
