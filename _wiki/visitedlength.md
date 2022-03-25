---
layout  : wiki
title   : 방문 길이 49994번 
summary :  
date    : 2022-03-24 21:22:52 +0900
updated : 2022-03-24 21:42:19 +0900
tag     : algorithm  
toc     : true
public  : true
parent  : [[programmers]] 
latex   : false
---
* TOC
{:toc}

# 문제풀이 
>2022-03-24 21:37:09 풀었던 문제이다.
* 올바른 방향으로 진행은 했다.
* 결과값을 카운팅하는 부분에서 막혔다.
* 처음에는 2차원 배열로 같은 방향으로 진행되는 부분을 없애려고 했으나 SET사용이 어려웠다.
* 일반 배열의 SET은 그냥 사용하면 되었는데 2차원 배열의 SET은 좀 어려웠다
* 해결방법은 문자열로 4자리 수로 변경 앞에 2자리는 기존 좌표 나머지 좌표는 다음 좌표
* 예제) 5554 -> (5,5) 에서 (5,4) 로 Y축 -1 만큼 이동
* [5554, 5444, ...]  이것을 SET으로 돌리면 같은 값은 없어진다. 
* 그런데 간과 한게 양방향으로 같을 경우를 생각을 못했다....

## 문제풀이 
> 기존에 갔던 길은 카운터를 안하는게 중요한 문제이다


```python

def solution(dirs):
    #좌표값을 설정한다 위 아래 좌우로 이동시 X축과 Y축을 정의한다
    moving = {
        "L" : (-1, 0), #왼쪽으로 한 칸 가기
        "R" : (1, 0,   #오른쪽으로 한 칸 가기
        "U" : (0, 1),  #위로 한칸 가기
        "D" : (0, -1), #아래로 한칸 가기
    }
    
    
    group = [] 
    cnt = 1 
    x, y = 5, 5
    a, b = 0, 0
    
    for i in dirs:
        x += moving[i][0]
        x += moving[i][1]
        
        
        




```

* 조건

* 이동한 경로를 몇번째에 이동했는지 ㅎ


##


## 문제링크
* [방문길이](https://programmers.co.kr/learn/courses/30/lessons/49994)