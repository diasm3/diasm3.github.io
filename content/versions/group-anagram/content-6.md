---
layout  : wiki
title   : Effective Algorithms for Problem-Solving
summary : This document provides a comprehensive overview of algorithms commonly used in solving problems on competitive programming platforms like LeetCode. It includes explanations, code examples, and real-world applications of these algorithms.
date    : 2022-04-04 05:26:14 +0900
updated : 2022-04-04 05:41:02 +0900
tag     : algorithm, competitive-programming, leetcode
toc     : true
public  : true
parent  : [[leetcode]]
latex   : false
---
* TOC
{:toc}

# Overview

In this document, we will discuss some fundamental algorithms that are essential for competitive programming. The focus will be on understanding how these algorithms work and where they can be applied in solving typical problems.

# Common Algorithms

## Sorting Algorithms

Sorting algorithms play a crucial role in optimizing the performance of other algorithms. Here, we discuss popular sorting algorithms:

### Quick Sort

```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)
```

### Merge Sort

```python
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]

        merge_sort(L)
        merge_sort(R)

        i = j = k = 0

        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1

        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
```

# Conclusion

Understanding these algorithms and their implementations will equip you with the skills needed to tackle various problems on platforms such as LeetCode. Experiment with these examples to solidify your understanding and gain practical experience.