---
layout  : wiki
title   : Express Framework
summary : This document provides an overview of the Express framework, detailing its purpose, core functionalities, and common methods used in web application development.
date    : 2022-03-25 10:04:08 +0900
updated : 2023-10-05 15:00:00 +0900
tag     : [express, web development, nodejs]
toc     : true
public  : true
parent  : [[nodejs]] 
latex   : false
---
* TOC
{:toc}

# Express Framework

The Express framework is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.

## Core Functions

### app()
The `app()` function is the main entry point for an Express application.

### Router()
The `Router()` function is used to create modular and mountable route handlers.

## HTTP Methods

### GET
- Retrieves data from the server.

### POST
- Submits data to be processed to the server.

### PUT
- Updates existing data on the server.

### PATCH
- Applies partial modifications to existing data on the server.

### DELETE
- Removes data from the server.

## Difference Between PUT and PATCH
The key difference is that PUT is idempotent and replaces the entire resource, while PATCH applies partial modifications. See the detailed reference on [[PUT]]{reference page}.

## Code Example

Here’s a simple example of an Express application:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

This code initializes an Express app that listens on port 3000 and responds with "Hello World!" when accessed via a GET request to the root URL.

## Practical Use Case
In a real-world scenario, you might use Express to build RESTful APIs that interact with a database, allowing you to create, read, update, and delete records efficiently.