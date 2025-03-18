---
layout  : wiki
title   : Reverse String Algorithm
summary : An effective method to reverse a string in various programming languages.
date    : 2022-04-04 05:25:27 +0900
updated : 2024-04-04 05:41:02 +0900
tag     : string, algorithm, reverse
 toc     : true
public  : true
parent  : [[leetcode]]
latex   : false
---
* TOC
{:toc}

# Introduction
This document presents a basic algorithm for reversing a string. We will discuss its implementation in multiple programming languages and provide examples to illustrate its usage.

# Algorithm Description
The string reversal algorithm takes a string as input and returns the string in reverse order. This operation can be performed using various methods in different programming languages.

# Implementation Examples

## Python
```python
def reverse_string(s):
    return s[::-1]

# Example usage
original_string = "hello"
reversed_string = reverse_string(original_string)
print(reversed_string)  # Output: 'olleh'
```

## JavaScript
```javascript
function reverseString(s) {
    return s.split('').reverse().join('');
}

// Example usage
const originalString = "hello";
const reversedString = reverseString(originalString);
console.log(reversedString);  // Output: 'olleh'
```

## Java
```java
public class Main {
    public static String reverseString(String s) {
        return new StringBuilder(s).reverse().toString();
    }

    public static void main(String[] args) {
        String originalString = "hello";
        String reversedString = reverseString(originalString);
        System.out.println(reversedString);  // Output: 'olleh'
    }
}
```

# Conclusion
The reverse string algorithm is a fundamental concept in computer science. Understanding this algorithm can aid in the comprehension of more complex data manipulation techniques. Through the examples provided, you should now be able to implement string reversal in your preferred programming language.