---
layout: wiki
title: 비동기 처리와 콜백 이해
summary: 이 문서는 JavaScript에서의 비동기 처리와 콜백 함수의 개념을 설명하고, 콜백 헬(callback hell) 문제와 그 해결을 위한 예시를 제시합니다.
date: 2022-04-06 14:42:06 +0900
updated: 2022-04-07 05:53:39 +0900
tag: javascript, asynchronous, callback, programming
toc: true
public: true
parent: [[javascript]]
latex: false
---

- TOC
  {:toc}

# 비동기 처리와 콜백 이해

JavaScript는 기본적으로 동기적으로 실행되지만, 비동기 처리를 통해 더욱 효율적인 작업이 가능합니다. 이 문서에서는 비동기 처리를 위한 콜백 함수에 대해 다루고, 콜백 헬 현상의 예시를 보여줍니다.

## 자바스크립트의 동기 실행

```javascript
console.log("1")

setTimeout(() => {
  console.log("hello world")
}) // 지정한 시간이 지나면 콜백 함수를 불러올 수 있음

console.log("2")
console.log("3")
```

위의 코드는 다음과 같은 순서로 출력됩니다:
1. 1
2. 2
3. 3
4. hello world

## 동기 콜백 / 비동기 콜백

### 동기 콜백 예:
```javascript
function printImmediately(print) {
  print()
}

printImmediately(() => console.log("hello"))
```

### 비동기 콜백 예:
```javascript
function printWithDelay(print, timeout) {
  setTimeout(print, timeout)
}
```

## 콜백 헬의 예시

콜백 헬은 다중 중첩된 콜백 때문에 코드 가독성이 떨어지는 경우를 의미합니다. 다음은 콜백 헬의 한 예입니다:

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
        }, 2000)
    }
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'ellie'){
                onSuccess({ name: 'ellie', role: 'admin'})
            } else {
                onError(new Error('no access'))
            }
        }, 1000)
    }
}

const userStorage = new UserStorage()
const id = prompt("enter your id")
const password = prompt("enter your password")
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

이와 같은 중첩된 콜백은 가독성을 떨어뜨리고, 유지보수가 어렵습니다. 이러한 문제를 해결하기 위한 방법으로는 Promises 또는 async/await 패턴을 사용할 수 있습니다. 이를 통해 코드의 가독성을 높일 수 있습니다.