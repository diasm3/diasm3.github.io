---
layout  : wiki
title   : 해시테이블 
summary : 자료구조 
date    : 2022-03-20 20:54:17 +0900
updated : 2022-04-05 05:48:37 +0900
tag     : 해시테이블,  
toc     : true
public  : true
parent  : [[algorithm]]
latex   : true 
---
* TOC
{:toc}

# 해시테이블 (hash table) 

## 기본개념 
- 해시는 어떤 키값을 지정해서 그 키값을 가지고 찾아 linkedlist 또는 배열로 넣는 방식이다
- indexing -> 해시 함수를 이용하는 것을 hasing 이라고 한다
- hasing : 검색을 빠르게 저장하고 검색하기 위해 사용
    * hasing 은 최적의 검색이 필요한 분야에 사용됨
    * 암호화 알고리즘에 사용 한다


- 해시 함수 사용시 주의해야 할점 
    * 해시 함수 값 충돌의 최소화
    * 쉽고 빠른 연산
    * 해시 테이블 전체에 해시 값이 균일하게 분포
    * 사용할 키의 모든 정보를 이용하여 해싱 
    * 해시 테이블 사용 효율이 높을 것

## 생일 문제 

365명중생일이 같을 경우는 365명 이상 모일경우에 중복될 확율은 기하 급수적으로 늘어난다.
이를 [[pigenhole-principle]]{비둘기집 원리}[^Pigenhole-principle] 라고한다


## 로드 펙터[^Load-Factor]
* 해시 테이블의 크기를 조정해야 할지는 `로드 펙터`에 따라 달렸다
* 해시 함수가 잘 작동되는가 효율성 측면에으로도 나타낸다 


## 해쉬 함수
해싱에는 여러 알고리즘이 있는데 데이터에 따라 각각 다른 효과를 나타낸다

- 정수형 해싱 기법
    * 모듈로 연산을 이용한 나눗셈 방식(Modulo-Division Method)
    
    $$ h(x) = z\ mod\ m $$
    
    
    
## 충돌
* 아무리 좋은 해시 함수라도 충돌(Collision)은 발생하게 된다.

| key | hash function   | hash |check |
| :-:   | :-:               | :-------:    |:-:|
| a     | hashFucntion(a) | 0    ||
| b | hashFucntion(b) | 1    ||
| c | hashFucntion(c) | 2 | crashed |
| d | hashFucntion(d) | 2 | crashed |

## 개별 체이닝(Sepraret Chaining)
* 충돌이 일어나면 링크드리스트로(linkedlist)로 충돌한 내용을 순차적으로 관리한다
* 전통적인 방법으로 보통 `해시 테이블`이라고 한다

| key | hash function   | hash | linked list|
| :-:   | :-:               | :-------:    |:-:|
| a   | hashFucntion(a) | 0    ||
| b | hashFucntion(b) | 1    ||
| c | hashFucntion(c) | 2 | (c,2)        |
| d | hashFucntion(d) | 2 | (c,2)->(d,2) |


 

## 오픈 어드레싱(Open Addressing)
* 충돌 발생시 빈공간을 찾아 나서는 방식이다
* 전체 슬롯의 개수 이상은 저장할 수 없다


| key | hash function   | hash      | index                      |
| :-: | :-:             | :-------: | :-:                        |
| a   | hashFucntion(a) | 0         | 2                          |
| b   | hashFucntion(b) | 1         | 5                          |
| c   | hashFucntion(c) | 2         | 7                          |
| d   | hashFucntion(d) | 2         | findNextEmptySlot(d) -> 17 |

## 언어별 해시 테이블 구현 방식
- Python dictionary
    * 해시테이블로 구현된 파이썬의 자료형을 제시 -> dictionary
    * Dictionary -> 오픈 어드레싱 방식으로 구현

>체이닝 시 malloc으로 메모리를 할당하는 오버헤드가 높아 오픈 어드레싱을 택했다
><br>> 연결리스트 사용시 추가 `메모리 할당`이 필요하고 할당 작업은 상대적으로 `느리기 때문`이다

* 연결리스트는 80%이상 차게 되면 급격한 성능 저하가 일어난다
* 선형 탐사는 공간이 찰수록 탐사에 점점 더 오랜 시간이 걸린다
* 파이썬은 로드 팩터를 낮게 잡아(0.66)  성능을 극대화 시킨다


## 해시맵 디자인
- 해시맵 구현시 아래와 같은 method가 필요하다
    * put(key, value) : 키 값을 해시맵에 삽입한다. 이미 존재하는 키면 업데이트한다
    * get(key) : 키에 해당하는 값을 조회한다. 만약 키가 존재하지 안흔다면 -1을 리턴한다
    * remove(key) : 키에 해당하는 키, 값을 해시맵에서 삭제한다
    
    
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
        self.size =1000
        self.table = collections.defaultdict(ListNode)

    
    #삽입 
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
            if p.key ==key:
                return p.value
            p = p.next
        return -1

    # 삭제
    def remove(self, key: int) -> None:
        index = key % self.size
        if self.table[index].value is None:
            return
        
        #인덱스의 첫 번쨰 노드일 때 삭제 처리
        p = self.table[index]
        if p.key == key:
            self.table[index] = ListNode() if p.next is None else p.next
            return
        
        #연결 리스트 노드 삭제
        prev = p
        while p:
            if p.key == key:
                prev.next = p.next
                return
            prev, p = p, p.next
```

# ref
이것이 코딩테스트다
   

# 주석
[^Pigenhole-principle]: n개 아이템을 m개 컨테이너에 넣을때, n>m이라면 적어도 하나의 컨테이너에는 반드시 2개 이상의 아이템이 들어 있다는 원리를 말한다
[^Load-Factor]: 로든 팩터란 해시 테이블에 저장된 데이터 개수 n을 버킷의 개수 k로 나눈것이다
