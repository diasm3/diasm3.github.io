---
layout  : wiki
title   : 리눅스에서 locale 설정 방법
summary : 리눅스 환경에서 언어 및 지역 설정을 통해 사용자에게 맞는 언어 인터페이스를 구성하는 방법에 대한 자세한 설명입니다.
date    : 2022-03-31T08:40:21+09:00
updated : 2023-10-02T10:30:00+09:00
tag     : linux, locale, 설정
 toc     : true
public  : true
parent  : [[Linux]] 
latex   : false
---

* TOC  
{:toc}

# 리눅스에서 locale 설정 방법

리눅스 시스템에서 locale 설정은 사용자의 언어 환경과 지역 설정을 맞춤형으로 구성하기 위해 매우 중요합니다. 이 문서에서는 언어와 지역 설정을 변경하는 방법에 대해 설명합니다.

## 1. locale 확인하기

먼저 현재 시스템의 locale 설정을 확인하려면 다음 명령어를 입력합니다:

```bash
locale
```

## 2. locale 설정 변경하기  

locale 설정은 `locale` 명령어와 `/etc/locale.gen` 파일을 사용하여 변경할 수 있습니다.

### 2.1 locale.gen 파일 편집하기

다음 명령어로 locale.gen 파일을 열어주십시오:

```bash
sudo nano /etc/locale.gen
```

필요한 locale을 주석 해제하고 저장한 뒤, 다음 명령어를 통해 locale을 생성합니다:

```bash
sudo locale-gen
```

### 2.2 언어 환경 변수 설정하기  

환경 변수를 설정하여 locale을 활성화합니다. 예를 들어 한국어로 설정하기 위해 다음을 추가합니다:

```bash
export LANG=ko_KR.UTF-8
export LANGUAGE=ko_KR:ko
export LC_ALL=ko_KR.UTF-8
```

## 3. locale 적용하기

변경된 locale 설정을 적용하려면 터미널을 재시작하거나 다음 명령어를 실행합니다:

```bash
source ~/.bashrc
```

## 4. locale가 잘 적용되었는지 확인하기  

다시 한 번 locale 명령어로 확인합니다:

```bash
locale
```

## 5. 참고 자료
- [Ubuntu Locale 설정하기](https://beomi.github.io/2017/07/10/Ubuntu-Locale-to-ko_KR/)  

문서의 변경 사항을 적용한 후, 로케일이 제대로 적용되었는지 확인하세요.