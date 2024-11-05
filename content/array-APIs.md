---
layout  : wiki
title   : array 관해서 알아보자 
summary : javascript array 
date    : 2022-04-05 20:20:55 +0900
updated : 2022-04-06 16:50:33 +0900
tag     : array javascript 
toc     : true
public  : true
parent  : [[javascript]] 
latex   : false
---
* TOC
{:toc}

# Array 개념과 APIs 
## Delarartion 
```javascript

const arr1 = new Array()
const arr2 = [1,2]

//2. Index posistion
const fruits = ['apple', 'banana' ]
console.log(fruits)
console.log(fruits.length) /// 2개
console.log(fruits[0]) //apple
console.log(fruits[1]) //banana
console.log(fruits[3]) //undefined
console.log(fruits[fruits.length -1]) //마지막 익덱스

//3. Looping over an array
//print all fruits
// a. for

for (let i=0; i < fruits.length; i++){
    console.log(fruits[i])
}


//b. for of
for(let fruit of fruits){
    console.log(fruit)
}


//c. forEach
fruits.forEach((value) => console.log(value))


//4. Addition, Deletion, copy
//push :add an item to the end
fruits.push('strawberry', 'peach')
console.log(fruits)

//pop : remove an item from the end
fruits.pop()
fruits.pop()
console.log(fruits)


//unshift :add an item to the beginning
fruits.unshift('strawberry', 'lemon')
console.log(fruits)


//shift: remove an item from the beginning
fruits.shift() // 느림
fruits.shift()
console.log(fruits)

//splice : remove an item by index position
fruits.push('strawberry', 'peach', 'lemon')
console.log(fruits)
fruits.splice(1, 1) // 1부터 1까지 지워짐 
console.log(fruits)
fruits.splice(1, 1, 'apple', 'watermelon') // 1부터 1까삽입까지 가능함 
console.log(fruits)


//comine two arrays
const fruits2 = ['pear', 'apple']
const newFruits = fruits.concat(fruits2)
console.log(fruits)



// 5. searching
// find the index
console.log(fruits)
console.log(fruits.indexOf('apple'))
console.log(fruits.indexOf('watermelon'))
console.log(fruits.indexOf('watermelon')) //없으면 -1 반환

// includes
console.log(fruits.includes('watermelon'))
console.log(fruits.includes('watermelon'))

// lastIndexof
// 제일 마지막에 있는 인덱스를 가져옴

fruits.push('apple')
console.log(fruits.lastIndexOf('watermelon'))


```





