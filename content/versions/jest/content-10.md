---
layout  : wiki 
title   : Unit Testing NestJS Applications with Jest - Draft Revision 
summary : A comprehensive guide on unit testing in NestJS applications using Jest, focusing on best practices and common pitfalls. 
date    : 2022-07-18 13:16:21 +0900 
updated : 2022-07-18 15:39:19 +0900 
tag     : jest, unit test, nestjs 
toc     : true 
public  : true 
parent  : [[nestjs]] 
latex   : false 
---
* TOC
{:toc}

# Unit Testing Basics
This document aims to provide an understanding of unit testing by translating materials found through research. Please note that while this information is useful, some interpretations may vary. 

Reference: [Unit Testing NestJS Applications with Jest](https://blog.logrocket.com/unit-testing-nestjs-applications-with-jest/)

## Introduction
Program testing can be a challenging concept. Many programmers tend to avoid writing tests due to the fear of encountering bugs. In the Node.js ecosystem, writing tests may not always seem necessary, contrasting with the Java ecosystem where it feels more critical.

Nonetheless, writing test code is essential. Unit testing is relatively easier; it focuses on the smallest units of code. A unit typically refers to a single function or method. If the function in question is a pure function, it is easy to predict its output without side effects.

```javascript
expect(add(2,2)).toBe(4);
```

However, not all functions are pure, so caution is required when making assertions based on a single test. Test code tends to be more complex than regular functions.

Typically, functions we write use other functions internally. For example, in a function like `userService.createUser()`, it internally calls `userRepository.create()` to instantiate a user entity and uses `userRepository.save()` to store it in a database. Testing such cases can become futile as confirming code correctness becomes challenging.

Unit tests should focus solely on the business logic encapsulated in the function itself.

## The Uniqueness of Unit Testing
Unit tests should be independent and run quickly. The time taken for the unit test can be predicted based on its size. It is essential to run tests after commits to track changes using GIT effectively.

End-to-End (E2E) testing provides a different scope of validation by testing entire workflows. Unit tests, however, remain focused on the internal logic of individual components.

---
