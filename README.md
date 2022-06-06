[![Netlify Status](https://api.netlify.com/api/v1/badges/2a97a2bc-666c-4f2f-9b4d-dc1327d30cac/deploy-status)](https://app.netlify.com/sites/kingflearn/deploys)

# 인프런 프로젝트

html과 css를 사용해서 인프런 클론 코딩 프로젝트를 진행했다.
사이트를 분석한 결과 성능, 접근성 관점에서 개선의 여지가 있는 점들을 발견해서
개선해야 하는 사항들을 중점적을 진행했다.

## 개발기간

- 2021.11.15 ~ 2021.11.19

## 팀원

1. 김효식 : 메인 컨텐츠 상단
2. 박시안 : 로그인, 강의 검색
3. 정다솔 : 메인 컨텐츠 하단, 푸터
4. 박상언 : 헤더, 메인 케러셀

## 기존 사이트 문제점

- 성능
  - 썸네일 이미지에 고화질 이미지 사용
  - png, jpeg 이미지 사용
  - 통일성 없는 이미지 lazy 로딩
  - gif로 비주얼 구현
- 웹 접근성 개선
  - 버튼의 색상 대비
  - 포커스 탭의 시각적 확인이 어려움
- 마크업 개선
  - 시맨틱 마크업 보다는 div위주로 사용됨
  - 한 문서내에 여러 h1 사용

## 개선사항

- 성능
  - 이미지 사이즈 축소
  - 이미지 확장자 변경 (webm)
  - 이미지 lazy 로딩
  - gif가 아닌 webm, mp4 확장자 사용
- 웹 접근성 개선
  - 색상 대비 완화
  - 포커스를 받은 요소에 대한 시각적 확인
  - 키보드로 네이게이션 운용 가능
- 마크업 개선
  - 시맨틱 마크업
  - 의미에 맞는 헤딩 태그 사용

## 역활 분담

메인 화면에서 섹션별로 나누어서 진행했으며,
진행하면서 서로 개선 사항에 대해 의견을 나누고 토의하며 진행했다.

## 코딩 컨벤션

- class 작성 방식: BEM

## 사용기술

- sass, postcss, webpack

## 결과

라이트 하우스 결과

기존
![](https://github.com/parksaneon/inflearn-project/blob/develop/src/images/md/20211119_091809.png)

개선 후
![](https://github.com/parksaneon/inflearn-project/blob/develop/src/images/md/20211119_091925.png)
