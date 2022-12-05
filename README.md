# Toyz-Shop

## 배포

- [페이지 링크](https://toyz-shop.netlify.app/)
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

- 기존 프로젝트에 `NextJS`, `MongoDB` 추가 및 리팩토링 작업 수행

<br>

![Animation3](https://user-images.githubusercontent.com/45654988/172039569-797604df-af1c-466e-a1df-7e41475a4ffd.gif)

<br>

## 사용 기술

- React
- Typescript
- next
- next-i18next
- i18next
- Sass
- Sass-loader
- Recoil
- reduxjs/toolkit
- Store
- Classnames
- Dayjs
- lodash
- react-slick
- slick-carousel
- victory
- react-error-boundary
- react-testing-library
- msw
- redux-mock-store
- jest-plugin-context
- @svgr/webpack
- mongodb
- @types/mongoose(스키마)
- @types/uuid
- @types/bcrpt
- next-auth

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
│  ├─Card
│  ├─Container
│  ├─DropDown
│  ├─InputText
│  ├─Modal
│  └─SnackBar
├─hooks
│  ├─state
│  └─worker
├─routes
│  ├─ItemDetailPage
│  │  └─BuyItemModal
│  ├─LikesPage
│  ├─MainPage
│  │  └─Banner
│  ├─SearchPage
│  ├─SettingPage
│  │  ├─AdminSetting
│  │  │  └─TabMenu
│  │  │      ├─TradeChart
│  │  │      └─UserList
│  │  │          └─RemoveUserModal
│  │  └─UserSetting
│  ├─SignInPage
│  ├─SignUpPage
│  └─_shared
│      ├─ErrorFallback
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

<br><br>

## 기능

### 로그인

- ~~FireBase DB와 연동하여 해동 유저가 존재하면 로그인합니다.~~
- MongoDB를 이용해 유저를 확인하고 로그인합니다.
- Local Storage에 저장하여 로그인을 유지합니다.
  
### 회원가입

- 입력한 회원 정보를 MongoDB에 저장합니다.
- **에러 메시지**
  - 로그인과 회원 가입 입력 정보가 잘못된 경우 입력창 하단에 에러 메시지를 보여줍니다.
<br>

### 스낵바

- 로그인과 회원 가입 등에서 `submit` 시 입력 정보나 결과가 잘못된 경우 스낵바를 보여줍니다.
- 스낵바는 일정 시간 후 사라집니다.

<br>

### 메인 페이지

- **배너 슬라이딩**
  - `react-slick`을 사용하여 배너 슬라이딩을 구현했습니다.

- **좋아요 기능**
  - `Card` 컴포넌트의 하트 아이콘을 클릭하면 DB에 저장합니다.
  - 저장된 아이템은 Likes 메뉴에서 리스트로 출력합니다.
  - 좋아요를 클릭하면 화면에 먼저 변경사항을 적용시키고 Firebase의 db를 수정합니다.

- **무한 스크롤**
  - 메인 페이지에서 아래로 스크롤할 경우 다음 아이템 목록을 불러와 출력합니다.
  - `IntersectionObserver` API를 사용하였고 Custom Hook으로 분리하여 구현했습니다.

<br>

### 헤더

- **다크 모드**
  - 헤더에 토글 버튼을 두고 다크 모드를 'ON/OFF' 할 수 있습니다.
  
- **다국어 기능**
  - 헤더에 드롭다운을 두고 영어와 한국어로 변경할 수 있습니다.

- **검색 기능**
  - 현재 API로 로드된 데이터들 중 검색어와 맞는 제목이나 소유자가 있으면 `SearchPage`에서 리스트로 보여줍니다.

- **Loading**
  - 데이터를 불러올 때 로딩 스피너를 보여줍니다.

<br>

### User Setting Page

- 회원 정보를 조회하고 수정할 수 있습니다.

### Admin Setting Page

- 탭 메뉴를 통해 유저 목록과 거래 차트를 볼 수 있습니다.

- **User List**
  - 관리자를 제외한 사용자들의 목록을 불러옵니다.
  - 탈퇴 버튼을 클릭하면 모달이 뜨고 모달의 삭제버튼을 다시 클릭하면 해당 사용자가 삭제됩니다.

- **Trading Chart**
  - `victory.js`와 더미 데이터를 통해 차트를 보여줍니다.
<br>

### 반응형 UI

- 모바일 버전에 맞는 반응형 UI를 적용시켰습니다.
<br>

### Error Boundary

- `react-error-boundary`를 적용했습니다.
  - 메인 페이지에서 API 호출에 오류가 발생하면 Error를 보여줍니다.
  - 에러 메세지와 새로고침 버튼을 제공합니다.

<br><br>

## Trouble Shooting (NextJS 전환 과정 중)

- NextJS로 전환하면서 `Duplicate atom key` 오류 발생
  - 빌드 과정에서 atome `state`가 재선언되면서 문제 발생
  - `@types/uuid`를 이용해 난수로 키를 선언
<br>

- React에서 SVG 파일을 컴포넌트 형식으로 불러왔었는데 NextJS에서 불가능했다.
  - `@svgr/webpack` 설치: SVG를 HTML에 내장할 수 있는 React 구성 요소로 변환
  - `next.config.js`에 웹팩 rule 추가

  ```js
  const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      })
      return config
    },
  }
  ```

<br>

- 다크 모드 설정하기
  - 문제: 원래 로컬 스토리지의 다크모드 설정 여부를 가져와 `classname`을 변경해 페이지에 적용해줬는데 NextJS에선 `classname does not match` 오류 발생
    - 서버에서 보내준 페이지와 클라이언트의 페이지가 다름
  - 페이지 만들기 전에 로컬 스토리지를 탐색해 컴포넌트에 사용 여부를 넘겨주었다.

    ```JS
    // pages/_app.tsx`
    const themeCheck = useCallback(() => {
      if (
        localStore.get('toyz.theme') === 'dark' ||
        (!('toyz.theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        localStore.set('toyz.theme', 'dark')
        setDarkMode(true)
      } else {
        localStore.set('toyz.theme', 'light')
        setDarkMode(false)
      }
    }, [])

    useEffect(() => {
      themeCheck()
    }, [themeCheck])

    return (
      // ...
      <Header lang={locale} isDark={darkMode} />
      //...
    )
    ```

<br>

- 다국어 설정
  - 문제: React 컴포넌트에서 추가한 i18next에 작동하지 않음
  - `next-i18next` 설치 후 `next.config.js`에 `i18n` 추가하기

  ```js
  // ...
    i18n: {
      defaultLocale: 'ko',
      locales: ['ko', 'en'],
      localeDetection: false,
    },
  ```

  - `_app.tsx`에서 컴포넌트를 `appWithTranslation`로 감싸준다.

  ```js
  import { appWithTranslation } from 'next-i18next'
  // ...
  export default appWithTranslation(MyApp)
  ```

  - 페이지 마다 `locale` 정보를 넘겨준다.

  ```js
  // ...
  export const getServerSideProps = async ({ locale, locales }: { locale: string; locales: string[] }) => {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
        locales,
      },
    }
  }
  ```

<br>

- `Layout` 스타일: 사이드바와 메인 Content를 `flex`로 설정했는데 Content의 너비가 사이드바 너비만큼 overflow 된다.
  - Contetnt (`Layout.moudels.scss`의 `.app`)에 `min-width:0` 추가
  - 디폴트 `min-width`의 값은 `0`이지만, flex items의 경우 `auto`이다.
  - `min-width`는 다른 `width`보다 우선한다.
  - 그래서, 블록 요소가 원하는 것보다 많은 공간을 차지하게 된다.
    - 암시적으로 설정된 `auto` 너비보다 줄어들면 이를 막고 수축하지 않는다.
<br>

- `redux` 사용하기
  - NextJS를 사용하면 리덕스 스토어가 여러 개가 생길 수 있다.
  - 서버에서 생성된 스토어의 상태를 클라이언트와 합쳐줘야 한다. (Hydrate)
  - `next-redux-wrapper` 설치
  - 스토어 생성 함수 정의 및 `wrapper` 생성

  ```js
  // stores/intex.ts
  // 1. 스토어를 생성하는 makeStore 함수를 정의
  const makeStore = () => {
    const store = configureStore({
      reducer: rootReducer, // combined reducer
    })
    return store
  }
  // 2. next-redux-wrapper에서 제공하는 createWrapper정의
  export const wrapper = createWrapper(makeStore)

  // pages/_app.tsx
  const MyApp: NextPage<AppProps> = ({ Component, ...rest }: AppProps) => {
    const { store, props } = wrapper.useWrappedStore(rest)
    // ...
    reutrn (
      <Provider store={store}>
        // ...
      </Provider>
    )
  }
  ```

- `catch`로 받은 error `throw` 하기

```js
catch (error) {
  if (typeof error === 'string') {
    throw new Error(error)
  } else if (error instanceof Error) {
    throw error
  }
}
```

<br>

## Trouble Shooting (Test)

-

<br>
<br>

### 느낀 점 및 문제점

- 반응형 UI 구현 중, 화면 사이즈에 따라 사이드바 표시 여부를 결정해줬는데 헤더의 사이드바 버튼을 클릭할 경우에도 사이드바를 열고 닫는 기능을 넣는데 어려움이 있었다.
  - `scss`의 스타일이 중복되어 제대로 작동하지 않았다.
  - 그래서, 사이드바 컴포넌트에서 `window`에 `resize` 함수를 걸어줘서 해결했다.
<br>

- 무한 스크롤을 구현하던 중 스크롤을 내려서 데이터를 가져올 때 호출이 너무 여러 번 가는 경우가 존재했다.
  - 부모 컴포넌트에서 `user` 데이터를 받아 오는데 `user`의 데이터가 없는 경우 다시 렌더링 되어 `if(!user) return null`을 추가했다.
<br>

- 관리자 설정 페이지에서 `useQeury`을 사용할 때 'qeury Funtion'안에서 `setState`를 해주면 해당 페이지에 다시 왔을 때 유저 목록을 불러오지 못하는 오류가 발생했다.
  - 같은 키의 요청일 경우 `staleTime`이 지나지 않으면 해당 함수를 다시 실행하지 않고 캐싱된 결과를 반환해준다.
    - 해결: 반환된 `data`를 `useEffect`를 사용하여 저장했다.

  - 삭제 시 다른 페이지를 갔다 되돌아 오면 삭제된 리스트가 뜨지 않는 문제가 발생했다.
    - 해결: key에 `users` state의 `length`를 추가했다.
<br>
