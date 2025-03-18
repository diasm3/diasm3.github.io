---
layout  : wiki
title   : React에서 Markdown 파일 읽기
summary : React 애플리케이션에서 Markdown 파일을 읽고 표시하는 방법에 대한 단계별 가이드입니다. 코드 예제와 함께 자세한 설명을 제공합니다.
date    : 2023-06-05 07:08:27 +0900
updated : 2023-06-05 07:13:02 +0900
tag     : react, markdown, frontend
toc     : true
public  : true
parent  : [[React]]
latex   : false
---

* TOC
{:toc}

# React에서 Markdown 파일 읽기

이 문서에서는 React 애플리케이션에서 Markdown 파일을 읽고 표시하는 방법을 설명합니다. Markdown 파일을 React에서 활용하면 동적인 컨텐츠를 쉽게 관리할 수 있습니다. 아래 단계에 따라 설정을 진행해보세요.

## 1. 환경 설정
먼저, Markdown 파일을 읽기 위해 global.d.ts 파일을 생성해야 합니다. 이 파일에서 다음과 같이 선언합니다:

```typescript
declare module "*.md";
```

## 2. React 컴포넌트 구현
다음으로, React 컴포넌트를 생성하여 Markdown 파일을 가져오고 표시합니다. 아래의 코드 예제를 참고하세요:

```javascript
import React from "react";
import logo from "./logo.svg";
import ReactMarkdown from "markdown-to-jsx";
import post from "./2022.md";
import "./App.css";

function App() {
  let [readable, setReadable] = React.useState({ md: "" });

  React.useEffect(() => {
    fetch(post)
      .then((res) => res.text())
      .then((md) => {
        setReadable({ md });
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <ReactMarkdown>{readable.md}</ReactMarkdown>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

## 3. 사용 예
이 구현 돕기 위한 한 예로, Markdown 파일이 다음과 같은 형식일 수 있습니다:

````markdown
# 제목

여기 Markdown 파일에 대한 내용을 추가합니다.

- 목록 항목 1
- 목록 항목 2
````

Markdown 파일을 사용하여 React 애플리케이션 내에서 텍스트와 스타일을 동적으로 변경할 수 있습니다.