---
layout  : wiki
title   : Git Commit Template 설정하기
summary : Git Commit Template을 설정하는 방법에 대한 단계별 가이드입니다. 이 문서는 Git 커밋 메시지를 일관되게 작성하는 데 도움을 줍니다.
date    : 2022-05-02 16:15:51 +0900
updated : 2023-10-05 12:00:00 +0900
tag     : git, commit, template

# Git Commit Template 설정하기  

* TOC  
{:toc}

## 소개  
  
Git Commit Template을 설정하면 커밋 메시지를 일관되게 유지할 수 있습니다. 이는 팀 프로젝트에서 코드를 보다 효과적으로 관리하는 데 도움을 줄 수 있습니다.

## 단계  
1. 커밋 템플릿 파일 만들기  
   ```bash
   touch ~/.gitcommittemplate
   ```

2. 템플릿 내용 추가하기  
   ```text
   # 커밋 제목
   
   # 커밋 설명
   ```

3. Git 설정 변경하기  
   ```bash
   git config --global commit.template ~/.gitcommittemplate
   ```

4. 커밋 메시지 작성하기  
   이제 커밋을 할 때 템플릿이 자동으로 로드됩니다:
   ```bash
   git commit
   ```

## 예제  
다음은 커밋할 때 사용할 수 있는 템플릿 예제입니다:
```text
# 변경 사항 요약  

- 기능 추가
- 버그 수정  

# 더 많은 정보  

- 관련 이슈: #12345
```  

## 결론  
Git Commit Template은 팀의 커밋 메시지를 표준화하고, 코드 리뷰 및 버전 관리를 더 용이하게 해줍니다. 위 단계를 따라 설정하면, 프로젝트 전반에 걸쳐 일관된 커밋 메시지를 유지할 수 있습니다.  
