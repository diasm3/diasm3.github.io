---
layout  : wiki
title   : react에서 md파일 읽기 
summary : react, md, frontend 
date    : 2023-06-05 07:08:27 +0900
updated : 2023-06-05 07:13:02 +0900
tag     : react, md, frontend 
toc     : true
public  : true
parent  : [[React]] 
latex   : false
---
* TOC
{:toc}

# react에서 파일 읽기 
- 맨날 마음만 이렇게 저렇게 해볼까 하는데 막상 안한다. 다른 몇몇 분들은 위키를 예쁘게 커스터마이징 하셨던데 나도 한번 해볼까 싶다. 일단 첫번째 단계인 MD파일을 react에서 읽을 수 있나 확인해보았다.

- 주의해야 할 부분은 md파일을 읽을때 global.d.tsx 파일을 생성해주고 아래와 같이 해줘야한다.
```javascript
declare module "*.md"
```

```Javascript
import React from "react"
import logo from "./logo.svg"
import ReactMarkdown from "markdown-to-jsx"
import post from "./2022.md"
import "./App.css"

function App() {
  let [readable, setReadable] = React.useState({ md: "" })

  React.useEffect(() => {
    fetch(post)
      .then((res) => res.text())
      .then((md) => {
        setReadable({ md })
      })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <ReactMarkdown children={readable.md} />
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
  )
}

export default App
```
