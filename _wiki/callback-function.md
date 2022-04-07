---
layout: wiki
title: 비동기 처리, 콜백 이해,
summary: callback hell
date: 2022-04-06 14:42:06 +0900
updated: 2022-04-07 05:53:39 +0900
tag: javascript synchronous asynchronous
toc: true
public: true
parent: [[javascript]]
latex: false
---

- TOC
  {:toc}

# Javascript is synchronous

```javascript
console.log("1")

setTimeout(() => {
  console.log("hello world")
}) //지정한 시간이 지나면 콜백함수를 불러올 수 있음

console.log("2")
console.log("3")
```

## Synchronous callback/ Asynchronous callback

```javascript
function printImmediately(print) {
  print()
}

printImmediately(() => console.log("hello"))

// Asynchronous callback

function printWithDelay(print, timeout) {
  setTimeout(print, timeout)
}
```

## callback hell example

```javascript

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
            (id === 'ellie' && password === 'dream') ||
            (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id)
            } else {
                onError(new Error('not found'))
            }
            }

        }, 2000)
    }
    getRoles(user, onSucccess, onError) {
        setTimeout(() => {
            if(user === 'ellie'){
                onSuccess({ name:'ellie', role: 'admin'})
            } else {
                onError(new Error('no access'))
            }
        }, 1000)
    }
}



## Call back hell example

```javascript
const userStorage = new UserStorage()
const id = prompt("enter your id")
const password = prompt("enter yINFP-Tour password")
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role}`)
      },
      (error) => {
        console.log(error)
      }
    )
  },
  (error) => {
    console.log("error")
  }
)
```
