---
title:  "Anaconda 명령어"
excerpt: "Anaconda Command"

# categories: 
#   - 
tags: 
  - 아나콘다
last_modified_at: 2021-04-05 #T08:06:00-05:00
---

### 가상환경 생성
=> conda create -n 가상환경이름 python=버전

### 가상환경 리스트 확인
=> conda env list

### 가상환경 활성화
=> conda activate 가상환경이름

### 가상환경 비활성화
=> conda deactivate 가상환경이름

### 가상환경 삭제
=> conda env remove -n 가상환경이름

### 파이썬 버전 확인
=> python --version

### 주피터 노트북 설치
=> pip install jupyter notebook
(* ipykernel 설치 => pip install ipykernel)

### kernel 연결
=> python -m ipykernel install --user --name 가상환경이름 --display-name "주피터에 표시할 이름"

### 커널 삭제
=> jupyter kernelspec uninstall "주피터에 표시된 이름"

### 주피터 실행
=> jupyter notebook

### 파이썬 쉘 실행
=> ipython

### 파이썬 실행
=> python