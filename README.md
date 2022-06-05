# 프리온보딩 프론트엔드 개인과제
## 배포
- https://wob-assignment-yu-in-jong.netlify.app
- ID: user1, admin
<br>

## 개발자 
- 유인종
<br>

## 설명
- 장난감 구매 사이트 구현
- `Unsplash` API를 사용하여 장난감 목록을 보여줍니다.

## 사용 기술
- React
- Typescript
- React-router-dom
- Sass
- Sass-loader
- Recoil
- reduxjs/toolkit
- Store
- Classnames
- Dayjs
- i18next
- lodash
- firebase
- react-slick
- slick-carousel
<br>

- Eslint
- Prettier
- Eslint-config-airbnb
- Eslint-config-prettier
<br>

## 기능
- 로그인
  - FireBase DB와 연동하여 해동 유저가 존재하면 로그인합니다.
  
- 회원가입
  - 입력한 회원 정보를 FireBase DB에 저장합니다.

- 스낵바 구현
  - 로그인과 회원 가입 입력 정보가 잘못된 경우
  - 혹은, 로그인에 실패한 경우 플로팅 메시지를 보여줍니다.

- 에러 메시지 
  - 로그인과 회원 가입 입력 정보가 잘못된 경우 입력창 하단에 에러 메시지를 보여줍니다.

- 배너 슬라이딩
  - react-slick을 사용하여 배너 슬라이딩을 구현했습니다.

- 다크 모드
  - 헤더에 토글 버튼을 두고 다크 모드를 ON/OFF 할 수 있습니다.
  
- 다국어 기능
  - 헤더에 드롭다운을 두고 영어와 한국어로 변경할 수 있습니다.
  
- 반응형 UI
  - 모바일 버전에 맞는 UI를 적용시켰습니다.
  
- 좋아요 기능
  - 아이템 리스트의 하트 아이콘을 클릭하면 DB에 저장합니다.
  - 저장된 아이템은 Likes 메뉴에서 리스트로 출력합니다.

- 검색 기능
  - 현재 API로 로드된 데이터들 중 검색어와 맞는 제목이나 소유자가 있으면 `SearchPage`에서 리스트로 보여줍니다.

<br>
