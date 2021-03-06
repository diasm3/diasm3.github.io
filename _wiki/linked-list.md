---
layout  : wiki
title   : 연결리스트 
summary : linked list 
date    : 2022-03-20 20:31:47 +0900
updated : 2022-03-28 17:30:20 +0900
tag     : linkedlist 
toc     : true
public  : true
parent  : [[algorithm]]
latex   : false
---
* TOC
{:toc}

# 연결리스트를 이해하자 
* 링크드 리스트는 정렬된 객체 모음이다.
* 그러면 일반적인 List 와 linked list 의 차이점은 무엇일까?
* list는elements를 메모리 블럭에 저장하고 
  linked list는자기 자신의 elements의 참조값을 저장한다

## 메인 컨셉 
먼저 linked list가 어떻게 생겼는지 보자
1. Data는 노드 안에 변수 값을 저장하고 있다
2. Next는 다음 노드의 참조값을 저장하고 있다. 
그림으로 표현하자면 

>![image](https://user-images.githubusercontent.com/56494905/160308041-a9beed32-9690-49b8-bdfa-0ad7b8c29fa2.png)

첫번째 노드는 head 라고 한다
head는 시작점을 알려주는 첫번째 단계이고 순차적 반복되며 다음 노드를 가르킨다
마지막 데이터에서는 None을 가리키면서 마지막 이라는 지점을 알려준다
>![image](https://user-images.githubusercontent.com/56494905/160308173-5abf3af7-cbab-4ab9-9dc5-16f073ab90d4.png)

## 실제로 적용해보기 
> 스택(stack) 큐(queue) 그래프(graph)


### 스택(stack) or 큐(Queues)


|      | 특징          |
|:-:||
| 스택 | 한쪽으로만 들어오고  나갈 수 있다        |
| 큐   | 한쪽으로만 들어오고 다른 쪽으로만 나간다 |
| 그래프 | 각 노드의 꼭지점에서 다음 노드를 가르킨다|

* 큐(queue)
> 큐와 스택은 입력 방법은 동일하지만 삭제 방법은 다르다
> 큐는 시작과 끝을 지정해 주고 끝을 항상 삭제 후 돌아온다

* collecitons 라는 라이브러리에 deque 함수를 쓰면 쉽게 큐를 구현할 수 있다


```python
from collecitons import deque

queue = deque()
queue


queue.append("1")
queue.append("2")
queue.append("3")
print(queue)

```

위 코드를 보면 제일 먼저 들어온 1이 제일 처음으로 나가야한다



```python

>>> queue.popleft()
'1'

>>> queue
deque(['2','3'])

>>> queue.popleft()
'2'

>>> queue
deque(['3'])

```
popleft() 함수를 사용하면 항상 head elemets의 값이 pop된다





* 스텍(stack)



### 구현해보기


* class 를 만들어 링크드 리스트 메소드를 만들어 
head 변수를 None으로 초기화한다 


* head 에 저장될 노드 class를 만들고 노드 안에는 data 와 다음 링크드 리스트를 가르킬 변수를 만든다


```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

    def __repr__(self):
        return self.data

class LinkedList:
    def __init__(self):
        self.head = None
    def __repr__(self):
        node = self.head
        nodes = []
        while node is not None:
            nodes.append(node.data)
            node = node.next
        nodes.append("None")
        return "->".join(nodes)
```



* Search 


```python
# node 가 None 일때까지 계속 반복해서 검색
# 그리고 다음 node도 그 다음의 node.next를 넣어서 계속 반복

def __iter__(self):
    node = self.head
    while node is not None:
        yield node
        node = node.next
```


* Insert 

```python
# 그냥 head에 넣으면 된다

def add_first(self, node):
    node.next = self.head
    self.head = node
```

* Inserting at the end

```python
# 첫번째 head 부분을 체크 한 후
# for 문으로  
def add_last(self, node):
    if self.head is None:
        self.head = node
        return
    for current_node in self:
        pass
    current_node.next = node
```




```python

class Node:
    def __init__(self,value, next=None):
        self.value = None
        self.next = None

class Queue:
    def __init__(self,value):
        self.front = None
        self.rear = None
        
        
    def push(self, value):
        # 첫번쨰 노드가없다면. 
        # 바로 노드를 연결 시킨다 
        if self.front is not None:
            self.front = Node(value, next=None)
        
        # 첫번째 노드가 있다면
        temp = self.front
        self.front.next = temp
        self.front = Node(value, next=None)
        
    def pop(self):
        if self.front is not None:
            return 0
            
        node = self.front 
        
        while node is Not None:
```



![image](https://user-images.githubusercontent.com/56494905/160309198-fe3d1c08-74b0-4518-ab21-007a0a359a6d.png)



* 스택(Stack)

![image](https://user-images.githubusercontent.com/56494905/160309232-b3bd639a-acf0-492b-92d7-6db2c546c421.png)


* 그래프(Graph)

![image](https://user-images.githubusercontent.com/56494905/160309407-75f23fdf-e5f9-40aa-9492-79e4feba5d58.png)
 



## 연습 


## 파이썬문법 모르는 부분 

## Ref
* [Link](https://www.tutorialspoint.com/python_data_structure/python_stack.htm)
* [Real python](https://realpython.com/linked-lists-python/)
