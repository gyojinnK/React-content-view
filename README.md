<a name="readme-top"></a>

# React로 구현하는 콘텐츠 뷰
`차트` `Whook` `이벤트` `뉴스` `스토어` `충전소` View 제공
> 모든 데이터/이미지는 Mock 데이터를 사용합니다.

## 개요
![한터-코딩테스트-결과물](https://github.com/gyojinnK/hanteo-content-view/assets/97776614/63b8e1dd-b323-424f-ad26-3e161bdc22d3)
컴포넌트의 재사용성, 확장성을 고려한 `UI 컴포넌트` <br/>
유지보수성을 높이기위한 `List 레이아웃 단일 View` <br/>
애플리케이션 성능 개선을 위한 `무한 스크롤 기법` `Code Splitting`

## 기술 스택
|종류|스택|버전|
|-|-|:-:|
|프론트엔드 서비스|React|18.2.0|
|프로그래밍 언어|Typescript|5.2.2|
|빌드 툴|Vite|5.1.6|
|클라이언트 상태 관리|React Context API|-|
|서버 상태 관리(무한 스크롤링)|@tanstack - react Query|3.39.3|
|페이지 라우팅|React Router|6.22.3|

## 시작하기
`로컬 환경`에서 프로젝트를 실행하는 방법 입니다. <br/> 
로컬 복사본을 실행하시려면 다음의 간단한 `예제`를 참조하세요.
프로젝트를 로컬에 복사하고 npm package 라이브러리를 설치합니다.
```sh
git clone https://github.com/gyojinnK/hanteo-content-view.git
```
```sh
cd hanteo-content-view
```
```sh
npm install
# or
yarn
```

### 실행
프로젝트를 실행합니다.
```sh
npm run dev
# or
yarn dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 개발 방향성
### `재사용성` `확장성` - UI 컴포넌트

[각 UI 컴포넌트](https://github.com/gyojinnK/hanteo-content-view/tree/main/src/components/ui)는 재사용하여 스타일의 일관성과 개발 편의성을 제공합니다.

<br/>

### `유지보수성` - List 레이아웃 단일 View

https://github.com/gyojinnK/hanteo-content-view/blob/37338080bb7aef357576b7824d1e83198ae6c0ea/src/components/section/ListFrame.tsx#L13-L51

https://github.com/gyojinnK/hanteo-content-view/blob/37338080bb7aef357576b7824d1e83198ae6c0ea/src/vite-env.d.ts#L25-L33

확장을 고려한 `CardInfo` 타입을 이용하여 다른 페이지 컴포넌트에서도 사용할 수 있도록 개발합니다.

<br/>

### `성능 개선` - 무한 스크롤 기법, Code Splitting

https://github.com/gyojinnK/hanteo-content-view/blob/37338080bb7aef357576b7824d1e83198ae6c0ea/src/components/section/ListFrame.tsx#L53-L73
무한 스크롤 기법으로 다량의 데이터를 효율적으로 제공합니다.

https://github.com/gyojinnK/hanteo-content-view/blob/37338080bb7aef357576b7824d1e83198ae6c0ea/src/routes/Router.tsx#L7-L41
Lazy와 Suspense를 이용한 Code Splitting을 적용합니다.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
