---
layout  : category 
title   : Node.js Backend Development 
summary : A comprehensive guide for building backend applications using Node.js, covering essential libraries and design patterns. 
date    : 2022-04-04T08:00:00+09:00 
updated : 2022-04-24T20:51:21+09:00 
tag     : nodejs, javascript, backend, web-development 
toc     : true 
public  : true 
parent  : [[backend]] 
latex   : false
---

* TOC
{:toc}

# Introduction
This document provides an overview of key concepts, libraries, and design patterns in Node.js backend development, aimed at helping developers create efficient and scalable web applications.

# Content
## Node.js Overview

* [[Express]] - A fast, unopinionated, minimalist web framework for Node.js.
* MongoDB Library - Interaction with MongoDB databases from Node.js applications.
* HBS - Handlebars templating engine for rendering views.
* [[PUT]] - Understanding the PUT method in RESTful APIs.
* [[HBS vs Pug]] - A comparison between Handlebars and Pug templating engines.
* [[Middleware]] - Explanation of middleware in Express.
* [[IIFE]] - Overview of Immediately Invoked Function Expressions in JavaScript.
* [[Function Literals]] - An introduction to function literals within Node.js.
* [[MVC Pattern]] - Detailed explanation of the MVC (Model-View-Controller) pattern in Node.js.
* [[Lazy Loading vs Eager Loading]] - Understanding the concepts of lazy loading and eager loading to optimize performance.

# Repositories

* In the context of refactoring in Node.js, how does the `require` function, which is used to load modules installed via npm, work? Explore this in relation to IIFE and provide a summary.

* What are unnecessary test codes? Explain why in some cases, having one effective test case can be more beneficial than having a hundred test cases.

## MVC Pattern in Node.js
This section covers the implementation of the MVC design pattern in Node.js applications. Key components include:
- Model: Represents the data layer of the application.
- View: Responsible for the presentation layer.
- Controller: Handles user input and updates the model and view accordingly.

## Conclusion
This document serves as a foundational resource for developers looking to implement Node.js in backend systems, complete with explanations of core libraries, design patterns, and practical examples of code clarifications.