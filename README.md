<div>
  <h1>책과 꽃나무</h1>
  <p>영화 책 소감문 저장, 관리 애플리케이션</p>
  <br/>
</div>

<div>
  <h2>Landing Page(로그인 전)</h2>
  <img src='https://user-images.githubusercontent.com/79782666/198754825-9055fe26-04c8-4a8c-922d-b7b592c2e3c9.png' width='550px' height='250'/>
  <p>우측 상단 'log in' 버튼 클릭 시 로그인 기능, 'register' 버튼 클릭 시 회원가입 기능 사용 가능</p>
  <div style={{display: 'flex' flexDirection: 'row'}}>
    <div>
      <h3>Register Page</h3>
      <img src='https://user-images.githubusercontent.com/79782666/198757159-99195788-41d1-4b05-b0d1-169bfaa77813.png' width='550px' height='250'/>
      <ul>
        <li>이메일, 이름, 비밀번호 입력 후 회원 가입</li>
        <ul>
          <li>이미 존재하는 이메일로 회원가입 시 중복 이메일 사용 불가 알림 노출</li>
          <li>비밀번호 5자리 이상 입력</li>
          <li>비밀번호 불일치 시 회원가입 불가</li>
        </ul>
        <br/>
        <li>비밀번호 일치 여부 확인 기능</li>
      </ul>
    </div>
    <div>
      <h3>Login Page</h3>
      <img src='https://user-images.githubusercontent.com/79782666/198755699-6195cd78-982c-45f6-a274-1eb74f1bd0a6.png' width='550px' height='250'/>
      <ul>
        <li>이메일, 비밀번호 입력 후 로그인</li>
        <ul>
          <li>등록되지 않은 이메일 입력 시 이메일 미등록 알림 노출</li>
          <li>비밀번호 불일치 시 비밀번호 불일치 알림 노출</li>
        </ul>
      </ul>
    </div>
  </div>
  <h2>Landing Page(로그인 후)</h2>
    <img src='https://user-images.githubusercontent.com/79782666/198763408-6e3b9f3f-5e4e-4e42-8b22-424507be7105.png' width='550px' height='250'/>
  <p>등록된 책과 영화 소감문 각각 나무 위 꽃 이미지로 생성</p>
  <ul>
    <li>나무</li>
    <ul>
      <li>책은 흰색 꽃으로 생성하며 개별 꽃 클릭 시 해당 책 소감문 상세 페이지로 이동</li>
      <li>영화는 분홍색 꽃으로 생성하며 개별 꽃 클릭 시 해당 영화 소감문 상세 페이지로 이동</li>
      <li>1개의 꽃 생성될 때마다 2개의 나뭇잎 생성</li>
      <li>책 5권 당 1개의 사과 생성</li>
      <li>영화 5편 당 1개의 사과 생성</li>
      <li>꽃과 사과, 나뭇잎의 위치는 렌더링 시 랜덤으로 지정</li>
    </ul>
    <br/>
    <li>우측 상단 로그아웃 버튼 클릭 시 로그아웃 기능 </li>
  </ul>
  <h2>나만의 책장(BookPage)</h2>
    <img src='https://user-images.githubusercontent.com/79782666/198770218-08174341-d566-4512-abf4-f8d29658444f.png' width='550px' height='250'/>
  <p>책 소감문 관리 페이지</p>
  <ul>
    <li>책장</li>
    <ul>
      <li>등록된 책 각각 책장 안 책 블록으로 생성</li>
      <li>개별 책 클릭시 해당 책 소감문 상세 페이지로 이동</li>
      <li>책장 1채 당 20권의 책</li>
      <li>책 높이와 색상은 렌더링 시 랜덤으로 지정</li>
    </ul>
    <br/>
    <li>등록</li>
    <ul>
      <li>등록 버튼 클릭 시 책 등록 페이지로 이동</li>
    </ul>
    <br/>
    <li>책 목록</li>
    <ul>
      <li>등록된 책 이미지 블록 목록</li>
      <li>각 행마다 책 5권 나열</li>
      <li>개별 책 이미지 클릭시 해당 책 소감문 상세 페이지로 이동</li>
    </ul>
  </ul>


</div>
