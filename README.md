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
- 회원가입을 통해 Firebase DB에 회원 정보를 저장하고 그에 맞게 로그인합니다.
- 로그인 후 `Unsplash` API를 사용하여 장난감 이미지를 불러와 리스트로 보여줍니다.
- 특정 아이템 상단의 하트 아이콘을 눌러 좋아요 기능을 할 수 있으며 해당 값은 Firebase의 DB에 저장합니다.

<br>

![Animation3](https://user-images.githubusercontent.com/45654988/172039569-797604df-af1c-466e-a1df-7e41475a4ffd.gif)


<br>

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


## 폴더 구조
```
├─assets
│  └─svgs
├─components
│  ├─Container
│  ├─DropDown
│  ├─InputText
│  └─SnackBar
├─hooks
│  ├─state
│  └─worker
├─routes
│  ├─ItemDetailPage
│  ├─LikesPage
│  │  └─LikesCard
│  ├─MainPage
│  │  ├─Banner
│  │  └─Card
│  ├─SearchPage
│  │  └─SearchCard
│  ├─SignInPage
│  ├─SignUpPage
│  └─_shared
│      ├─Footer
│      ├─Header
│      │  ├─GNB
│      │  │  └─DarkMode
│      │  └─SearchBar
│      ├─NotFound
│      ├─ProtectedRoute
│      └─Sidebar
├─services
├─states
├─styles
│  ├─base
│  ├─constants
│  └─mixins
├─types
└─utils
    └─locale
        ├─en
        └─ko
```
<br>

## 기능
### 로그인
  - FireBase DB와 연동하여 해동 유저가 존재하면 로그인합니다.
  
### 회원가입
  - 입력한 회원 정보를 FireBase DB에 저장합니다.

### 스낵바 구현
  - 로그인과 회원 가입 입력 정보가 잘못된 경우
  - 혹은, 로그인에 실패한 경우 플로팅 메시지를 보여줍니다.

### 에러 메시지
  - 로그인과 회원 가입 입력 정보가 잘못된 경우 입력창 하단에 에러 메시지를 보여줍니다.

### 배너 슬라이딩
  - react-slick을 사용하여 배너 슬라이딩을 구현했습니다.

### 다크 모드
  - 헤더에 토글 버튼을 두고 다크 모드를 ON/OFF 할 수 있습니다.
  
### 다국어 기능
  - 헤더에 드롭다운을 두고 영어와 한국어로 변경할 수 있습니다.
  
### 반응형 UI
  - 모바일 버전에 맞는 UI를 적용시켰습니다.

  
### 좋아요 기능
  - 아이템 리스트의 하트 아이콘을 클릭하면 DB에 저장합니다.
  - 저장된 아이템은 Likes 메뉴에서 리스트로 출력합니다.
  - 좋아요를 클릭하면 화면에 먼저 변경사항을 적용시키고 Firebase의 db

### 검색 기능
  - 현재 API로 로드된 데이터들 중 검색어와 맞는 제목이나 소유자가 있으면 `SearchPage`에서 리스트로 보여줍니다.

### 무한 스크롤
  - 메인 페이지에서 아래로 스크롤할 경우 다음 아이템 목록을 불러와 출력합니다.
  - `IntersectionObserver` API를 사용하였고 Custom Hook으로 분리하여 구현했습니다.

### Admin Page
- 유저 테이블
  - `useQeury`을 사용할 때 'qeury Funtion'안에서 `setState`를 해주면 해당 페이지에 다시 왔을 때 유저 목록을 불러오지 못했다.
  - 같은 키의 요청일 경우 `staleTime`이 지나지 않으면 해당 함수를 다시 실행하지 않고 캐싱된 결과를 반환해 준다.
    - 해결: 반환된 `data`를 `useEffect`를 사용하여 저장했다.

  - 삭제 시 다른 페이지를 갔다 되돌아 오면 삭제된 리스트가 뜨지 않는 문제가 발생했다.
    - 해결: key에 `users` state의 `length`를 추가했다.

<br>

## 느낀 점
- 로그인, 회원가입 부분을 파이어베이스의 데이터베이션을 사용했는데 react와 같이 써보는 것은 처음이라 헤매느라 시간을 너무 허비한 것 같습니다.

- 반응형 UI 구현 중, 화면 사이즈에 따라 사이드바 표시 여부를 결정해 줬었는데 헤더의 버튼을 클릭할 경우에도 사이드바를 열고 닫는 기능을 넣는데 어려움이 있었습니다.
  - `scss`의 스타일이 중복되어 제대로 작동하지 않았습니다.
  - 그래서, 사이드바 컴포넌트에서 `window`에 `resize` 함수를 걸어줘서 해결했습니다.

- 무한 스크롤을 구현하던 중 스크롤을 내려서 데이터를 가져올 때 호출이 너무 여러 번 가능 에러를 잡느라 어려웠습니다.
  - 부모 컴포넌트에서 `user` 데이터를 받아 오는데 `user`의 데이터가 없는 경우 다시 렌더링 되어 `if(!user) return null`을 추가했습니다. 

- 이번 개인과제를 하면서 아직도 코드를 분리하고 깔끔하게 효율적으로 짜는게 너무 어렵다고 느꼈습니다.
  - 다시 한참 멀었다고 또 한번 느끼면서 더 열심히 해야겠다고 생각했습니다.
  
