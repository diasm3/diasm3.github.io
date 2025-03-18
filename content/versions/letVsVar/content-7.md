---
layout  : wiki
title   : Comparison of let and var in JavaScript
summary : A detailed comparison of the differences between let and var in JavaScript, including examples, use cases, and best practices.
date    : 2022-04-03T23:20:54+09:00
updated : 2022-10-04T07:23:39+09:00
tag     : [javascript, es6, var, let]
toc     : true
public  : true
parent  : [[javascript]] 
latex   : false
---

* TOC
{:toc}

# CS Study Chapter 3
* [YouTube Link](https://youtu.be/OCCpGh4ujb8)

## let vs var

```javascript
// 1. Use strict
'use strict'

// 2. Variable
// let (added in ES6)
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
```

### let 
- A mutable type
> Use when you expect to change the variable.

### var
> Avoid using var!

#### Why?

```javascript
// You can use it before declaring
// var hoisting (moves declaration to the top)

console.log(age); // undefined
age = 4;
console.log(age);
var age;
```
- **var hoisting**[^hoisting]:
    * Moves declarations to the top
    * Allows usage before declaration
    * Ignores block scope

---

### const 
> An immutable type

* Parts pointing to an object are locked and cannot be changed.

1. Reasons to avoid changing values:
    * Security risks (hackers may alter program behavior)
    * Thread safety (multiple threads changing variables can be dangerous)
    * Reduce human mistakes (to avoid collaborative errors)

---

### Block Scope
> Variables inside a block are only accessible within that block.

1. Persists in memory until the block finishes.
2. Stored globally.
3. Use only what is necessary.

```javascript
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name); // hello
    console.log(globalName); // global name
}
console.log(name); // undefined
console.log(globalName); // global name
```

---

## Variable Types

1. Primitive (single value)
    * number
    * string
    * boolean
    * null
    * undefined
    * symbol
2. Object (container)
    * function
    * first-class function

### Primitive
- number 
    * No need to declare another type.
    * Type is applied automatically.

```javascript
const infinity = 1 / 0; // Infinity
const negativeInfinity = -1 / 0; // -Infinity
const nAn = 'not a number' / 2; // NaN
```

---

- bigInt
    * Used for very large numbers.
```javascript
const bigInt = 1234123412487293487928374892734n;
console.log(`value: ${bigInt}, type:${typeof bigInt}`); // value: ... type: bigInt
```

---

- String
    * Use template literals.

```javascript
${variableName}
```

---

- Boolean
    * false -> 0, null, undefined, NaN, ''
    * true -> any other value

---

- null
> Indicates no value.

---

- undefined
> Declared but not yet assigned a value.

---

- symbol
> Creates unique identifiers for objects.
    * Used in algorithms and data structures.

```javascript
const gSymbol1 = Symbol('id');
const gSymbol2 = Symbol('id');

console.log(gSymbol1 === gSymbol2); // false
```

```javascript
// Using Symbol.for
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');

console.log(gSymbol1 === gSymbol2); // true
```

---

### Object 
> Real-life objects and data structures.

```javascript
// Using const for ellie won't allow reassignment, but values inside can be changed.
const detail= {name: 'me', age: 20};
detail.name = 'you'; // Allowed
```

## Dynamic typing: dynamically typed language
> The type is not fixed upon declaration.

```javascript
let text = 'hello';
console.log(text.charAt(0)); // h 

console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 3; // '73'
console.log(`value: ${text}, type: ${typeof text}`); // '73', type: string
text = '8' / '2'; // 4
```

# Notes
[^hoisting]: Hoisting refers to the behavior where declarations are moved to the top of their scope.