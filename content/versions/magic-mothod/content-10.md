---
layout  : wiki
title   : Magic Methods in Python
summary : This document provides a comprehensive overview of Python's magic methods, specifically focusing on the `__len__` method, its use, and how it can be overridden in custom classes.
date    : 2022-03-25 08:28:33 +0900
updated : 2023-10-01 12:00:00 +0900
tag     : [Magic-method, Python, OOP]
toc     : true
public  : true
parent  : [[python]]
latex   : false
---

* TOC  
{:toc}

# The __len__ Magic Method
The `__len__` method allows you to define the behavior of the built-in `len()` function. By overriding this method in your custom class, you can specify what should be returned when `len()` is called on an instance of that class.

## Understanding Magic Methods
* In Python, everything is an object. Custom classes can define special methods, known as magic methods, which are prefixed and suffixed with double underscores.
* For instance, if you create an instance of a class, you can see that it automatically has methods like `__len__`, among others.

## Example: Overriding the __len__ Method
Here's a simple example that demonstrates how to override the `__len__` method in a custom class:

```python
class Node:
    def __init__(self, data):
        self.data = data

    def __len__(self):
        return len(self.data)

# Sample usage
node = Node([1, 2, 3, 4])
print(len(node))  # Output: 4
```

In the example above, the overridden `__len__` method returns the length of the `data` attribute, allowing you to use the `len()` function directly on instances of the `Node` class.

## Conclusion
Overriding magic methods such as `__len__` allows you to create intuitive classes that behave more like built-in Python types. Experimenting with magic methods can greatly enhance your understanding and capability in Python programming.