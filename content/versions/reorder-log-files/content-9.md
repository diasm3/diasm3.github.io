---
layout  : wiki
title   : Reorder Log Files
summary : This document provides a detailed overview of the problem of reordering log files based on order and content. The implementation details and example usage are included for better understanding.
date    : 2022-03-24 21:55:51 +0900
updated : 2022-03-25 06:42:21 +0900
tag     : log, algorithm, leetcode
 toc     : true
public  : true
parent  : [[leetcode]] 
latex   : false
---
* TOC
{:toc}

# Reorder Log Files

## Introduction
In this document, we will discuss the problem of reordering log files that are divided into two categories: letter-logs and digit-logs. The goal is to sort these logs based on specific rules.

## Problem Statement
You are given an array of log files. Each log file contains an identifier and content. Letter-logs are logs with letters in the content, while digit-logs contain digits. The letter-logs should be ordered lexicographically, while digit-logs need to maintain their relative order. 

## URL
* [Link](https://leetcode.com/problems/reorder-data-in-log-files/)

## Example Usage
Consider the following example input:
```
logs = ["d1 3 4", "a1 9 2 3", "c1 5 6", "a2 1 2"]
```
After reordering, the output should be:
```
[a1 9 2 3, a2 1 2, d1 3 4, c1 5 6]
```

## Implementation
```python
def reorderLogs(logs):
    letters = []
    digits = []
    
    for log in logs:
        if log.split()[1].isdigit():
            digits.append(log)
        else:
            letters.append(log)
    
    # Sort letter logs
    letters.sort(key=lambda x: (x.split()[1:], x.split()[0]))
    return letters + digits
```
### Explanation
This implementation first separates the log files into letter-logs and digit-logs. Then, it sorts the letter-logs based on lexicographic order. The digit-logs are appended after sorting the letter-logs, maintaining their original order. 

## Conclusion
Reordering log files is a common problem that can be solved efficiently with the right sorting techniques. Understanding the requirements is key to implementing a successful solution.