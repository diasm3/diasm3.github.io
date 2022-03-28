---
layout  : wiki
title   : jekyll blog 
summary : static homepage with markdown 
date    : 2022-03-28 12:10:49 +0900
updated : 2022-03-28 12:15:59 +0900
tag     : jekyll github io  
toc     : true
public  : true
parent  : [[vim]] 
latex   : false
---
* TOC
{:toc}

# jekyll static website 

## github pages setup


### repo 만들기
* 레포를 만들고 레포 이름을 `[githubID].github.io` 만든다
> 내 사이트는 `diasm3.github.io` 이다

* 이후 setting에서 pages를 활성화 해준다



## 로컬로 실행시 명령어

```bash
~ $ gem install bundler jekyll
~ $ jekyll new my-aweosome-stie
~ $ cd my-aweosome-stie
~/my-awesome-site $ bundle exec jekyll serve
```
