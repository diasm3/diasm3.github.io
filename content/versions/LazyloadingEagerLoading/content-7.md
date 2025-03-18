---
layout  : wiki
title   : 레이지 로딩과 이거 로딩에 대한 이해
summary : 레이지 로딩과 이거 로딩의 주요 차이점과 개념을 설명하고, 이를 실제 사례와 함께 비교합니다.
date    : 2022-04-24 20:03:08 +0900
updated : 2023-10-01 15:30:00 +0900
tag     : lazyloading, performance, web-development
toc     : true
public  : true
parent  : 
latex   : false
---
* TOC
{:toc}

# 1. 서론
웹 개발에서 성능 최적화는 매우 중요하다. 이 문서에서는 레이지 로딩(Lazy Loading)과 이거 로딩(Trigger Loading)의 개념과 차이점을 설명한다.

# 2. 레이지 로딩
레이지 로딩은 필요할 때만 데이터나 이미지와 같은 리소스를 로드하는 기술이다. 이는 페이지 로드 시간과 초기 자원 사용을 줄이는 데 기여한다.

## 2.1 장점
- 페이지 성능 개선
- 초기 로드 시간 단축

## 2.2 구현 예제
```javascript
// 이미지 레이지 로딩 예제
const lazyLoadImages = document.querySelectorAll('img[data-lazy]');
lazyLoadImages.forEach(img => {
    const imgSrc = img.dataset.lazy;
    const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                img.src = imgSrc;
                imgObserver.disconnect();
            }
        });
    });
    imgObserver.observe(img);
});
```

# 3. 이거 로딩
이거 로딩은 사용자가 특정 동작을 할 때 데이터를 로드하는 방식이다. 사용자가 페이지의 특정 부분에 접근했을 때, 필요한 리소스를 로드한다.

## 3.1 장점
- 동적 데이터 로딩으로 효율적인 사용자 경험 제공

## 3.2 구현 예제
```javascript
// 이거 로딩 예제
function loadMoreData() {
    fetch('/api/more-data')
        .then(response => response.json())
        .then(data => {
            // 데이터를 DOM에 추가하는 코드
        });
}
```

# 4. 차이점 비교
레이지 로딩과 이거 로딩의 주요 차이점은 로딩 시점에 있다. 레이지 로딩은 페이지 로드 시점에, 이거 로딩은 사용자의 행동에 반응하여 로드된다.

# 5. 실제 사용 사례
- **레이지 로딩 사용 사례**: 이미지가 많은 상품 목록 페이지
- **이거 로딩 사용 사례**: 무한 스크롤 기능이 있는 소셜 미디어 피드

# 6. 결론
두 기술 모두 페이지 성능과 사용자 경험을 개선하는 데 도움이 되며, 프로젝트에 따라 적절하게 조합하여 사용할 수 있다.