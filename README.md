개발 기간: 2024. 6. 10 ~ 21
(3인 프로젝트)

풀스택 LinkedIn 클론 코딩입니다!
직접 CRUD 기능을 구현하며 서버와 클라이언트의 동작 과정을 좀 더 이해하며 경험하기 위해 만든 프로젝트입니다.
웹 표준을 준수하며 CSS 사용에 익숙해지고, 컴포넌트를 효율적으로 나눔으로써 클린 코드 작성을 목표로 삼았습니다. 

## 사용한 기술 스택:
프론트엔드 - React.js, Redux Toolkit, CSS
백엔드 - Java, Spring Boot, MySQL 


## 주요 구현 기능:
- 일반 회원가입, 로그인/구글 로그인
- 게시글/댓글 조회, 생성, 수정, 삭제
- 일반/구글 사용자 프로필 조회 및 수정


## 기여 - 최정민
- **CTO 역할**을 맡아 팀 프로젝트의 방향 설정 및 역할 분배 주도
- **Front-end:**
    - **회원 가입 및 로그인** 페이지 UI/UX 구현, POST 요청 처리
    - 메인 페이지의 **게시글과 댓글 CRUD UI/UX** 구현
    - 전체 페이지의 레이아웃과 디자인 수정
- **Back-end:**
    - **일반 유저 로그인** 기능 구현 (토큰 생성 및 클라이언트 전달)
    - **게시글과 댓글 API** 구현


## 회고 - 최정민 
- 처음 자바를 사용하게 된 프로젝트로, Web, Service, Repository, DTO, Model 등을 관리하는 것이 쉽지 않음을 느꼈지만, RESTful API 구현으로 서버의 코드를 이해할 수 있는 경험이 되었습니다. 
- 전역 상태 관리를 위한 Redux Toolkit를 처음 사용하여, dispatch나 useSelector 사용법에 한층 가까워질 수 있었습니다.
- 새로 고침 후 상태 유지를 위해 Redux-Persist를 알게 되고 사용하는 경험이 되었습니다(하지만 localStorage의 데이터 저장은 정말 필요할 때만 사용해야 함을 인지하고 있습니다).
- 데이터를 서버로부터 받아 상태로 저장하고 컴포넌트로 코드를 짜는데 조금 더 능숙해졌습니다.


첫번째 화면
![firstpage](https://github.com/fs-1st-project/frontend/assets/103073389/0baa2d4c-c6eb-49a1-8810-ac139f396ce8)

회원 가입을 할 수 있는 페이지
![signup](https://github.com/fs-1st-project/frontend/assets/103073389/ac6c40ae-a716-4dd9-8878-f814d5e288bf)

회원 가입한 아이디와 패스워드로 로그인
![signin](https://github.com/fs-1st-project/frontend/assets/103073389/b6fbdbc5-e8d8-451f-bfdb-5628d529d51b)

로그인을 하고 나면 보이는 feed 
![feed](https://github.com/fs-1st-project/frontend/assets/103073389/9c4313cc-19fc-4cc2-8da9-578b4655bb35)

유저가 게시글을 작성할 수 있는 모달
![post](https://github.com/fs-1st-project/frontend/assets/103073389/53d73ef8-91bd-4040-b7f1-c5bd1526ee9a)

게시글 작성한 유저는 수정이나 삭제 가능
![postPopup](https://github.com/fs-1st-project/frontend/assets/103073389/d166403c-ebaf-4709-96e0-5f0f9bbbec8d)

유저는 다른 사람들의 댓글 조회, 내 댓글 생성, 수정, 삭제까지 가능
![comment](https://github.com/fs-1st-project/frontend/assets/103073389/2b8e0492-18b6-4f1d-ad6a-e063bfce9604)

각 유저의 프로필
![userProfile](https://github.com/fs-1st-project/frontend/assets/103073389/a330f400-fea3-46ed-9533-6a0d828b89f8)

유저 본인의 프로필 추가/수정
![updateProfile](https://github.com/fs-1st-project/frontend/assets/103073389/71a62b9e-0611-438d-8fdf-797f92d5d18e)

구글 로그인으로 로그인 가능
![google](https://github.com/fs-1st-project/frontend/assets/103073389/3435ee72-25d2-4aac-bd5a-093453ae434e)
