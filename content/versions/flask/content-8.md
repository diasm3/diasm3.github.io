---
layout  : category 
title   : Flask Documentation
summary : A comprehensive guide to Flask and Jinja2 templating engine, covering key features and usage examples.
date    : 2022-04-04 10:56:01 +0900
updated : 2023-10-04 09:00:00 +0900
tags    : [flask, jinja2, web-development]
toc     : true
public  : true
parent  : [[index]] 
latex   : false
---
* TOC
{:toc}

# Flask

## Introduction
Flask is a lightweight WSGI web application framework in Python. It is designed with simplicity and flexibility in mind, making it a popular choice for building web applications.

## Jinja2 Templating
Jinja2 is the templating engine for Flask. It allows you to build dynamic HTML pages using Python-like expressions and control structures.

### Key Features
- **Lightweight and modular**: Flask provides the essentials to get started and lets you add extensions as needed.
- **Easy to use**: Flask is straightforward and intuitive, making it suitable for beginners.

### Example Usage
To render a template using Jinja2:
```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
```

## Conclusion
Flask and Jinja2 together offer a powerful yet flexible way to build web applications. This documentation will continue to expand with more usage examples and advanced topics.
