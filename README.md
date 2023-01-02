# Toyz-Shop

## 배포

- 관리자 계정
  - ID: admin
  - PW: qwe123

- 일반 계정
  - ID: user1
  - PW: qwe123
<br>

- **[페이지 링크 (NextJS + MongoDB + Vercel)](https://toyz-shop-in3166.vercel.app/)**
- **[페이지 링크 (React + Firebase + Netlify)](https://toyz-shop.netlify.app/)**

<br>

## 개발자

- 유인종
<br>

## 설명

- 중고 장난감 거래 사이트 구현
- 회원가입을 통해 ~~Firebase DB~~ `MongoDB`에 회원 정보를 저장하고 로그인합니다.
- 로그인 후 ~~`Unsplash` API~~ `MongoDB`에 저장된 상품 게시글을 불러와 리스트로 보여줍니다.
- 사용자는 상품을 등록할 수 있습니다. (제목, 가격, 이미지, 설명)
- 특정 아이템 상단의 하트 아이콘을 눌러 좋아요 기능을 할 수 있으며 해당 값은 에 DB에 저장합니다.
- 사용자는 사용자 설정 페이지에서 사용자 정보를 수정할 수 있습니다.
- 관리자는 관리자 설정 페이지에서 회원을 탈퇴시킬 수 있습니다.
<br>

- 기존 프로젝트 <sub>(*React, firebase 등*)</sub>에서 `NextJS`, `MongoDB` 전환 및 리팩토링 작업 수행
- 테스트 코드 추가 진행 중 ...

<br>

![toyz](https://user-images.githubusercontent.com/45654988/210160158-c857a2c1-23a3-44bb-b525-cb83aebd8849.gif)

<br>

## Package 및 Tools

<details>
  <summary>
      <span style="cursor: pointer;">
        $\color{teal}\textsf{접기 / 펼치기}$
      </span>
  </summary>

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
- next-auth: Session/JWT 적용, 소셜 로그인 적용
- next-connect: `Express`처럼 미들웨어 형태로 코드 작성 가능
- formidable: 이미지 업로드
- actionlint
- aws-sdk: s3 upload image

</details>

<br>

- Eslint
- Prettier
- Eslint-config-airbnb
- Eslint-config-prettier
<br>

## 폴더 구조

<details>
  <summary>
      <span style="cursor: pointer;">
        $\color{teal}\textsf{접기 / 펼치기}$
      </span>
  </summary>

```
📦 
├─ .github
│  └─ workflows
│     └─ Deploy.yml
├─ components
│  ├─ AdminSettingTabs
│  │  ├─ BannerSetting
│  │  │  ├─ BannerList
│  │  │  └─ ProductTable
│  │  ├─ TradeChart
│  │  └─ UserList
│  │     └─ RemoveUserModal
│  ├─ Banner
│  ├─ BuyItemModal
│  ├─ ItemStatusModal
│  ├─ layout
│  │  ├─ ErrorFallback
│  │  ├─ Footer
│  │  ├─ Header
│  │  │  ├─ DarkMode
│  │  │  └─ UserMenu
│  │  └─ Sidebar
│  ├─ ProductFilter
│  ├─ ProductList
│  │  └─ ProductItem
│  ├─ SignInForm
│  ├─ SignUpForm
│  ├─ UploadProudctForm
│  └─ _shared
│     ├─ Card
│     ├─ Container
│     ├─ DropDown
│     ├─ index.tsx
│     ├─ InputText
│     ├─ Loading
│     ├─ Modal
│     ├─ ProtectedRoute
│     ├─ ScrollDetecor
│     ├─ SearchBar
│     └─ SnackBar
├─ hooks
│  ├─ state
│  └─ worker
├─ lib
│  ├─ controllers
│  ├─ models
│  ├─ dbConnect.ts
│  ├─ errorHandler.ts
│  └─ s3.ts
├─ middleware.ts
├─ pages
│  ├─ 404
│  ├─ api
│  │  ├─ auth
│  │  ├─ banners
│  │  ├─ history
│  │  ├─ products
│  │  │  └─ [productId].ts
│  │  └─ users
│  │     │  └─ [userId].ts
│  │     └─ [userId].ts
│  ├─ fail
│  ├─ likes
│  ├─ marketplace
│  ├─ mylist
│  ├─ product
│  │  └─ [itemId]
│  ├─ setting
│  │  ├─ admin
│  │  └─ user
│  ├─ signin
│  ├─ signup
│  ├─ success
├─ public
│  ├─ locales
│  │  ├─ en
│  │  └─ ko
│  ├─ manifest.json
│  ├─ svgs
│  └─ _redirects
├─ README.md
├─ scripts
├─ setupTests.ts
├─ stores
│  └─ reducer
├─ styles
│  ├─ base
│  ├─ constants
│  └─ mixins
├─ types
├─ utils
└─ __tests__
   └─ __mocks__
```

</details>

<br><br>

## 기능

## Pages

### 로그인

- MongoDB를 이용해 유저를 확인하고 로그인합니다.
  - ~~FireBase DB와 연동하여 해동 유저가 존재하면 로그인합니다.~~
  - 입력 값이 잘못된 경우 에러 메세지나 스낵바를 보여줍니다.

<br>

- `Next-auth` 라이브러리를 통한 소셜 로그인, JWT 적용
  - 소셜 로그인 시 회원 정보에 해당 이메일이 없으면 회원가입 페이지로 이동합니다.
  - ~~Local Storage에 저장하여 로그인을 유지합니다.~~
  
### 회원가입

- 입력한 회원 정보를 MongoDB에 저장합니다.
- **에러 메시지**
  - 로그인과 회원 가입 입력 `<input>` 정보가 잘못된 경우 입력창 하단에 에러 메시지 및 스낵바를 보여줍니다.

### 메인 페이지

- **배너 슬라이딩**
  - `react-slick`을 사용하여 배너 슬라이딩을 구현했습니다.

- **좋아요 기능**
  - `Card` 컴포넌트의 하트 아이콘을 클릭하면 DB에 저장합니다.
  - 저장된 아이템은 Likes 메뉴에서 리스트로 출력합니다.
  - 좋아요를 클릭하면 화면에 먼저 변경사항을 적용시키고 DB 정보를 수정합니다.
  - 해당 사용자 본인이 등록한 제품의 좋아요는 무시합니다.

- **무한 스크롤**
  - 메인 페이지에서 아래로 스크롤할 경우 다음 아이템 목록을 불러와 출력합니다.
  - `IntersectionObserver` API를 사용하였고 Custom Hook으로 분리하여 구현했습니다.

- **Loading**
  - 데이터를 불러올 때 로딩 스피너를 보여줍니다.

### 상품 등록 페이지

- 제목, 상품 이미지, 가격, 설명을 입력 후 등록
- `formidalble` 사용하여 이미지는 서버에 저장하고 나머지 정보는 DB에 저장
  - Vercel의 경우 서버에 저장할 수 없어 AWS의 `S3`에 저장하도록 수정

### Marketplace 페이지

- 검색 기능
  - 특정 검색어를 포함하는 제목을 가지고 있는 상품 목록을 보여줍니다.

- 필터 및 정렬 기능
  - 상품의 상태(판매중, 예약중 등)에 따른 필터 기능을 제공합니다.
  - 상품의 가격, 등록일 순의 정렬 기능을 제공합니다.

### 좋아요 페이지

- 사용자가 좋아요한 상품 목록을 보여 줍니다

### My List 페이지

- 사용자가 등록한 상품의 목록을 보여줍니다.

### 상품 Detail 페이지

- 해당 상품의 정보와 이미지를 보여줍니다.
- 해당 상품의 판매자일 경우 해당 게시글의 헤더에 수정과 삭제 버튼을 보여줍니다.
  - 수정 버튼 클릭 시 수정 페이지로 이동합니다.

- 구매 버튼 클릭 시 구매 모달이 나타납니다.
  - 구매 모달은 `portal`을 사용하여 구현
  - 백드롭을 클릭하면 목록이 닫힙니다.

- 구매 모달에서 구매를 다시 누르면 `가상 계좌`와 `카드` 목록이 나타나고 선택한 방법으로 구매를 진행 합니다.
  - `Toss Payment` 사용

### User Setting 페이지

- 회원 정보를 조회하고 수정할 수 있습니다.

### Admin Setting 페이지

- 탭 메뉴를 통해 유저 목록과 거래 차트를 볼 수 있습니다.

- **User List**
  - 관리자를 제외한 사용자들의 목록을 불러옵니다.
  - 탈퇴 버튼을 클릭하면 모달이 뜨고 모달의 삭제버튼을 다시 클릭하면 해당 사용자가 삭제됩니다.

- **Trading Chart**
  - `victory.js`와 더미 데이터를 통해 차트를 보여줍니다.

- **Banner Setting**
  - 배너 목록과 상품 목록을 보여줍니다.
    - 배너 목록은  `drag`하여 슬라이딩 할 수 있도록 하였습니다.

  - 상품 목록에서 배너를 추가하거나 제거할 수 있습니다.
  
<br>
<br>

### 스낵바

- 로그인과 회원 가입 등에서 `submit` 시 입력 정보나 결과가 잘못된 경우 스낵바를 보여줍니다.
- 스낵바는 일정 시간 후 사라집니다.

### 헤더

- **다크 모드**
  - 헤더에 토글 버튼을 두고 다크 모드를 'ON/OFF' 할 수 있습니다.
  
- **다국어 기능**
  - 헤더에 드롭다운을 두고 영어와 한국어로 변경할 수 있습니다.

- **검색 기능**
  - DB에 있는 데이터들 중 검색어와 맞는 제목이나 있으면 `SearchPage`에서 리스트로 보여줍니다.

### 반응형 UI

- 사용자 화면 크기에 따른 반응형 UI를 적용시켰습니다.

- 사이드바
  - 화면 크기 조정 시 일정 너비 이하로는 사이드바 숨기거나 엽니다.
  - 사이드바 버튼을 추가하여 사이드바를 열고 닫을 수 있습니다.
    - 처음 마운트 시 일정 너비(`768px`) 이하이면 사이드바를 숨김
    - 화면 리사이즈 시 일정 너비 이하가 되면 사이드바를 숨김 (`debounce` 적용)
    - 일정 너비(`600px`) 이하에서 사이드바 외부를 클릭하면 사이드바를 숨김

### Error Boundary

- `react-error-boundary`를 적용했습니다.
  - 메인 페이지에서 API 호출 등 오류가 발생하면 Error를 보여줍니다.
  - 에러 메세지와 새로고침 버튼을 제공합니다.

### Authentication Middleware

- 인증 미들웨어를 추가하여 특정 경로에 진입 시 권한이 필요합니다. (`/middleware.ts`)
  - 좋아요 페이지의 경우 로그인 여부
  - 상품 등록 페이지의 경우 로그인 여부
  - 설정 페이지의 경우 관리자이거나 일반 사용자 여부

**문제 해결 과정**

<details>
  <summary>
      <span style="cursor: pointer;">
        $\color{teal}\textsf{접기 / 펼치기}$
      </span>
  </summary>

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

</details>

<br><br><br>

### NextJS, MongoDB 적용

- NextJS를 사용해 SEO 최적화 및 SSR 적용
- 회원 정보와 상품 정보를 MongoDB에 저장합니다. (mongoose 사용)
- `next-auth`를 사용해 세션(JWT) 적용, 소셜 로그인 및 회원가입 추가

<br>

**Trouble Shooting (NextJS 전환 과정 중)**

<details>
  <summary>
      <span style="cursor: pointer;">
        $\color{teal}\textsf{접기 / 펼치기}$
      </span>
  </summary>
  
- `React` 프로젝트에서 `NextJS`로 프로젝트를 전환 시 고려할 사항이 여럿있었다.
  - 정말 이 페이지에 SSR이 필요한 지 생각해 볼 필요가 있다.
    - 상품 상세 페이지의 경우 가장 최근의 정보가 있어야 하기 때문에 SSR(`getServerSideProps`)을 사용했고 제품 목록의 경우 SSG(`getStaticProps` + `revalidate`)을 사용해 사전 렌더링하였다.

  - 장난감 쇼핑몰은 SEO가 적용되어야 하기 때문에 Next를 적용했다.
  - 기존의 CSR/SPA를 사용한 경우 사용자의 상호작용 반응 속도가 더 빨랐다.
    - 하지만, 대규모 프로젝트가 될 경우 초기 로딩 속도가 정말 느려질 수 있다.

<br>

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

- 이미지 파일 등록하기
  - `multer`을 사용해 이미지 파일을 서버에 저장한 경험이 있어 이번에도 사용했었다.
    - 하지만, TypeScript와 NextJS를 사용하면서 Next와 호환이 잘 안되는지 막히는 부분이 많았다.
    - 이전에 했던 동일한 로직을 적용해 봤는데 `storage`를 `multer`에 적용하고 `api`에서 불러오는 과정에서 계속해서 호출이 안됐었다.

  - `formidable` 라이브러리로 대체
    - 아주 간단하게 적용할 수 있었고 `NextJS`와 호환이 잘 되어 있다.
<br>

- Jest
  - `package.json`의 `test` 수정
  - `"test": "react-scripts test",` => `"test": "jest --watch",`

</details>

<br><br><br>

### Unit Test (Jest + React Testing Library)

- 로그인 페이지 유닛 테스트 적용
- 회원가입 페이지 유닛 테스트 적용

<br><br><br>

### CI/CD ~~(EC2, Codedeploy, gihub action)~~ => Vercel

- EC2, Codedeploy, gihub action를 사용한 배포
  - EC2 인스턴스 생성
  - S3 Bucket 생성
  - Codedeploy 생성
    - Codedeploy 로그 보기: `tail -F /var/log/aws/codedeploy-agent/codedeploy-agent.log`
  - github action - `./.github/workflow/deploy.yml` 작성
  - `./appspec.yml` 작성
  - `./deploy.sh`  스크립트 파일 작성
    - github에 푸시하면 ec2에 자동으로 업로드되는 것까지 확인
    - 문제: ec2이 free tier의 메모리 부족으로 `npm install` 시 프리징 현상 발생
<br>

- Vercel 배포
  - Vercel에 repository를 연결 후 `deploy.yml` 작성
  - `next.config.json`의 `swcMinify:false`로 수정: `true`이면 오류 발생
  - 현재 test 및 production 배포 생략

<br>

**Trouble Shooting (CI/CD)**

<details>
  <summary>
      <span style="cursor: pointer;">
        $\color{teal}\textsf{접기 / 펼치기}$
      </span>
  </summary>

### Build 에러

- 사용되는 컴포넌트는 `pages` 폴더 안에 있으면 안된다.
<br>

- `ECONNREFUSED` 오류
  - `getStaticPaths`, `getStaticProps`에서는 API를 호출하면 안된다!
    - Next는 빌드 시 `getServerSideProps`가 아닌 `getStaticProps`, `getStaticPaths`에서 정의한 모든 페이지를 탐지한다.
    - Next는 어떤 페이지를 빌드할지 결정하기 위해 `getStaticPaths`를 호출한다.
    - 그 후, 작성할 페이지를 결정 후 `getStaticProps`에서 데이터를 가져온다.

    - 이 때, 개발 서버(next dev)를 종료하고 배포 전 빌드를 시도할 가능성이 있는데 만약 API 호출이 있을 경우 서버에 액세스를 하려해서 오류가 발생한다.
  - API 호출 대신, 직접 DB에 쿼리를 수행할 수 있다. (DB 서버는 따로 있으므로)

  - `getServerSideProps`에서는 API를 호출해도 오류가 발생하지 않지만, 호출을 중복해서 하는 것이 되므로 성능상 저하가 발생한다.
<br>

- `self is not defined` 오류
  - 빌드 중 `global` 접근 코드가 존재해서 발생
<br><br>

### EC2, Codedeploy 에러

- ec2 log: `Missing credentials - please check if this instance was started with an IAM instance profile`
  - ec2에서 `Codedeploy Agent` 실행이 IAM role 설정보다 빨리 시작해 role을 가져오지 못함
  - 해결: 재실행해주기
    - `sudo service codedeploy-agent restart`
<br>

- ec2: `npm/pm2 command not found`
  - `su` 권리자 계정에서 설치해주기
  - global로 설치

      - - `next build` 시 `self is not defined` 오류
  - 빌드 중 `global` 접근 코드가 존재해서 발생
<br>

### Vercel 에러

- 로컬에서 `SignIn` 성공 시 `status:200`과 `ok:true`가 응답되는 반면, Vercel 배포 후 `status:302`가 응답되어 옴
  - 응답받는 `error` 속성이 `null` 일 경우 홈으로 리다이렉트하도록 수정

</details>

<br>
