---
layout  : wiki
title   : Random Function in Python
summary : A comprehensive guide on how to use the random function in Python, including its syntax, parameters, and examples.
date    : 2022-04-04 13:22:59 +0900
updated : 2023-10-04 15:47:17 +0900
tag     : random python, programming
 toc     : true
public  : true
parent  : [[python]] 
latex   : false
---

* TOC
{:toc}

# Random Function in Python

The `random()` function generates a random float number between 0.0 to 1.0.

```python
from random import random, seed

# Optional: Setting a seed for reproducibility
seed(1)  
# Generate a random number
random_value = random()  
print(random_value)  
```

## Parameters
The `random()` function does not take any parameters.

## Usage Example
### Basic Usage
```python
# Generate twenty random numbers
for _ in range(20):
    print(random())
```

### Seed Function
The `seed(int)` function is used to initialize the random number generator.

```python
seed(1)  
# Random number generation after setting the seed
print(random())  
```

## Conclusion
The `random()` function in Python is a powerful tool for generating random numbers, especially in simulations and games. Always consider using `seed()` for reproducibility when needed.