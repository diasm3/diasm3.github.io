---
layout  : wiki
title   : Palindrome Linked List
summary : This document discusses the concept and implementation of a palindrome linked list, including its definition, algorithms for detection, and practical use cases in software development.
date    : 2022-03-24T21:45:13+09:00
updated : 2022-03-25T06:42:21+09:00
tag     : linked-list, algorithm, data-structure
 toc     : true
public  : true
parent  : [[leetcode]] 
latex   : false
---

* TOC
{:toc}

# Overview
A palindrome linked list is a linked list that reads the same forward and backward. This document outlines various algorithms to determine if a linked list is a palindrome and demonstrates practical implementation.

## Problem Statement
> Given a linked list, determine if it is a palindrome. For example, the linked list 1 -> 2 -> 2 -> 1 is a palindrome.

## URL
* [LeetCode Problem](https://leetcode.com/problems/palindrome-linked-list/)

## Algorithms
### Method 1: Reverse the Linked List
1. Find the midpoint of the linked list using the slow and fast pointer method.
2. Reverse the second half of the linked list.
3. Compare the first half and the reversed second half.

### Example Code
```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        # Implementing the algorithm to check for palindrome linked list
        if not head:
            return True

        slow = fast = head
        # Find the midpoint
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        # Reverse the second half
        prev = None
        while slow:
            next_temp = slow.next
            slow.next = prev
            prev = slow
            slow = next_temp

        # Compare the two halves
        left, right = head, prev
        while right:
            if left.val != right.val:
                return False
            left = left.next
            right = right.next
        return True
```

### Use Cases
- Palindrome validation is often needed in data processing and manipulation tasks, particularly in algorithms dealing with strings and lists. Understanding this concept is crucial for problem-solving in competitive programming and technical interviews.