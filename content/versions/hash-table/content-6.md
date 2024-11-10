---
layout  : wiki
title   : 해시테이블 (Hash Table)
summary : 해시테이블에 대한 개념, 원리, 주의사항 및 구현 방법을 다룬 문서입니다.
date    : 2022-03-20 20:54:17 +0900
updated : 2023-10-05 12:00:00 +0900
tag     : 해시테이블, 데이터 구조, 알고리즘
 toc     : true
public  : true
parent  : [[algorithm]]
latex   : true 
---
* TOC
{:toc}

# 해시테이블 (Hash Table) 

## 기본 개념  
- 해시란 특정 키 값을 지정하여 해당 키 값을 기반으로 데이터를 저장하는 방식입니다. 주로 linked list 또는 배열을 사용하여 구현됩니다.
- 인덱싱 -> 해시 함수를 사용하는 것을 해싱(hashing)이라고 합니다.
- 해싱: 검색을 빠르게 수행하고 데이터를 저장하기 위해 사용됩니다.
    * 해싱은 최적의 검색이 필요한 분야에 활용됩니다.
    * 암호화 알고리즘에도 사용됩니다.

### 해시 함수 사용 시 주의사항  
  - 해시 함수 충돌을 최소화하는 것이 중요합니다.
  - 연산이 쉽고 빠르게 이루어져야 합니다.
  - 해시 값이 해시 테이블 전체에 고르게 분포되어야 합니다.
  - 사용하는 키의 모든 정보를 기반으로 해싱해야 합니다.
  - 해시 테이블의 사용 효율성을 높여야 합니다.


## 생일 문제  

- 365명 중 생일이 같은 경우는 365명 이상 모일 때 중복될 확률이 기하급수적으로 증가합니다.
이를 [[pigenhole-principle]]{비둘기집 원리}[^Pigenhole-principle]이라고 합니다.


## 로드 팩터[^Load-Factor]  
- 해시 테이블의 크기를 조정해야 할지는 `로드 팩터`에 따라 결정됩니다.
- 해시 함수가 잘 작동되는지는 효율성 측면에서도 나타납니다.  

## 해시 함수  

해싱에는 여러 알고리즘이 있으며, 데이터에 따라 각각 다른 효과를 나타냅니다.

- 정수형 해싱 기법  
    * 모듈로 연산을 이용한 나눗셈 방식 (Modulo-Division Method)  
    
    $ h(x) = z \ mod \ m $
      
  
## 충돌  
- 아무리 좋은 해시 함수라도 충돌(Collision)은 발생하게 됩니다.  

| key | hash function   | hash | check |
| :-:   | :-:               | :-------:    |:-:|
| a     | hashFunction(a) | 0    |  |
| b | hashFunction(b) | 1    |  |
| c | hashFunction(c) | 2 | crashed |
| d | hashFunction(d) | 2 | crashed |

## 개별 체이닝(Separate Chaining)  
- 충돌이 발생하면 링크드 리스트(linked list)를 사용하여 충돌한 내용을 순차적으로 관리합니다.  
- 전통적인 방법으로 보통 `해시 테이블`이라고 합니다.  

| key | hash function   | hash | linked list|
| :-:   | :-:               | :-------:    |:-:|
| a   | hashFunction(a) | 0    |  |
| b | hashFunction(b) | 1    |  |
| c | hashFunction(c) | 2 | (c,2) |
| d | hashFunction(d) | 2 | (c,2)->(d,2) |
  

## 오픈 어드레싱(Open Addressing)  
- 충돌 발생 시 빈 공간을 찾아 데이터를 저장하는 방식입니다.  
- 전체 슬롯의 개수 이상은 저장할 수 없습니다.  

| key | hash function   | hash      | index                      |
| :-: | :-:             | :-------: | :-:                        |
| a   | hashFunction(a) | 0         | 2                          |
| b   | hashFunction(b) | 1         | 5                          |
| c   | hashFunction(c) | 2         | 7                          |
| d   | hashFunction(d) | 2         | findNextEmptySlot(d) -> 17 |

## 언어별 해시 테이블 구현 방법  
- Python dictionary  
    * 해시 테이블로 구현된 파이썬의 자료형을 제시합니다 -> dictionary
    * Dictionary는 오픈 어드레싱 방식으로 구현됩니다.  

> 체이닝 시 malloc으로 메모리를 할당하는 오버헤드가 높아 오픈 어드레싱을 택했습니다.  
><br> > 연결 리스트 사용 시 추가 `메모리 할당`이 필요하며, 해당 할당작업은 상대적으로 `느리기 때문`입니다.  

* 연결 리스트는 80% 이상 차게 되면 급격한 성능 저하가 일어납니다.  
* 선형 탐사는 공간이 찰수록 탐사에 점점 더 오랜 시간이 걸립니다.
* 파이썬은 로드 팩터를 낮게 설정(0.66)하여 성능을 극대화합니다.


## 해시맵 디자인  
- 해시맵을 구현할 때 다음과 같은 메소드가 필요합니다.  
    * put(key, value): 키 값을 해시맵에 삽입하며, 이미 존재하는 키라면 업데이트합니다.  
    * get(key): 키에 해당하는 값을 조회하며, 만약 키가 존재하지 않으면 -1을 리턴합니다.  
    * remove(key): 키에 해당하는 키와 값을 해시맵에서 삭제합니다.  
  
  ```python
import collections

class ListNode:
    def __init__(self, key=None, value=None) -> None:
        self.key = key
        self.value = value
        self.next = None

class MyhashMap:
    # 초기화 
    def __init__(self):
        self.size = 1000
        self.table = collections.defaultdict(ListNode)
    
    # 삽입 
    def put(self, key: int, value: int) -> None:
        index = key % self.size
        # 인덱스에 노드가 없다면 삽입 후 종료
        if self.table[index].value is None:
            self.table[index] = ListNode(key, value)
            return

        # 인덱스에 노드가 존재하는 경우 연결 리스트 처리
        p = self.table[index]
        while p:
            if p.key == key:
                p.value = value
                return
            if p.next is None:
                break
            p = p.next
        p.next = ListNode(key, value)

    # 조회
    def get(self, key: int) -> int:
        index = key % self.size
        if self.table[index].value is None:
            return -1

        # 노드가 존재할 때 일치하는 키 탐색
        p = self.table[index]
        while p:
            if p.key == key:
                return p.value
            p = p.next
        return -1

    # 삭제
    def remove(self, key: int) -> None:
        index = key % self.size
        if self.table[index].value is None:
            return
        
        # 인덱스의 첫 번째 노드일 때 삭제 처리
        p = self.table[index]
        if p.key == key:
            self.table[index] = ListNode() if p.next is None else p.next
            return
        
        # 연결 리스트 노드 삭제
        prev = p
        while p:
            if p.key == key:
                prev.next = p.next
                return
            prev, p = p, p.next
```

# 참조  
이것이 코딩테스트다  

# 주석  
[^Pigenhole-principle]: n개 아이템을 m개 컨테이너에 넣을 때, n>m이라면 적어도 하나의 컨테이너에는 반드시 2개 이상의 아이템이 들어 있다는 원리를 의미합니다.  
[^Load-Factor]: 로드 팩터란 해시 테이블에 저장된 데이터 개수 n을 버킷의 개수 k로 나눈 값입니다.