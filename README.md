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
      <h3>User Register Page</h3>
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
      <div>
      <h3>Book Register Page</h3>
      <img src='https://user-images.githubusercontent.com/79782666/198791862-19455c32-0390-4731-9227-c399a9c2cdf7.png' width='550px' height='250'/>
      <p>책 제목과 작가, 출판사, 평점, 현재 책 읽은 상태, 시작 날짜와 끝 날짜, 소감문 작성</p>
      <ul>
        <li>책 표지 검색</li>
        <ul>
          <li>책 제목으로 책 정보 검색</li>
          <li>책 정보 클릭 시 책 표지와 제목, 작가, 출판사 자동 기입</li>
          <li>책 제목과 작가, 출판사는 직접 작성 및 수정 가능</li>
          <li>책 표지는 직접 첨부 불가</li>
        </ul>
        <br/>
        <li>평점</li>
        <ul>
          <li>별 클릭 하여 평점 작성</li>
          <li>기본값은 5</li>
        </ul>
        <br/>
        <li>현재 책 읽은 상태</li>
        <ul>
          <li>읽기 완료, 읽는 중, 읽을 예정 중 1개 선택 가능</li>
          <li>기본값은 읽기 완료</li>
        </ul>
        <br/>
        <li>시작 날짜와 끝 날짜</li>
        <ul>
          <li>시작 날짜와 끝 날짜 input 클릭 시 달력 노출</li>
          <li>달력 속 날짜 선택 또는 직접 작성 가능</li>
          <li>기본값은 등록 당일 날짜</li>
        </ul>
        <br/>
        <li>소감문</li>
        <ul>
          <li>길이 제한 없음</li>
        </ul>
        <br/>
        <li>저장 버튼 클릭 시 등록 후 나만의 책장(Book Page)으로 이동</li>
      </ul>
    </div>
    <div>
      <h3>Book Detail Page</h3>
      <img src='https://user-images.githubusercontent.com/79782666/198796308-d77cd142-6d24-4b4b-aa5e-6c890afa02df.png' width='550px' height='250'/>
      <ul>
        <li>책 정보 노출</li>
        <ul>
          <li>책 제목과 표지, 작가, 출판사, 평점, 현재 책 읽은 상태, 시작 날짜와 끝 날짜, 소감문 노출</li>
        </ul>
        <br/>
        <li>수정 버튼 클릭 시 수정 페이지로 이동</li>
        <br/>
        <li>삭제 버튼 클릭 시 확인메세지 노출 후 데이터 삭제, 나만의 책장(Book Page)으로 이동</li>
      </ul>
    </div>
    <div>
      <h3>Book Edit Page</h3>
      <img src='https://user-images.githubusercontent.com/79782666/198801300-9fd08b34-912d-4f92-a43b-aefbf599a175.png' width='550px' height='250'/>
      <ul>
        <li>책 정보 수정</li>
        <ul>
          <li>책 제목과 작가, 출판사, 평점, 현재 책 읽은 상태, 시작 날짜와 끝 날짜, 소감문 수정</li>
          <li>책 표지는 수정 불가</li>
        </ul>
        <br/>
        <li>저장 버튼 클릭 시 등록 후 나만의 책장(Book Page)으로 이동</li>
        <br/>
      </ul>
    </div>
  <h2>나만의 티켓(MoviePage)</h2>
    <img src='https://user-images.githubusercontent.com/79782666/198804140-4b2a4fd8-b911-44fb-adf8-6d1a42bb0b33.png' width='550px' height='250'/>
  <p>영화 소감문 관리 페이지</p>
  <ul>
    <li>노트</li>
    <ul>
      <li>등록된 영화 각각 노트 안 티켓 이미지로 생성</li>
      <li>개별 티켓 클릭시 해당 영화 소감문 상세 페이지로 이동</li>
      <li>노트 1권 당 10매의 티켓</li>
      <li>티켓 색상은 렌더링 시 랜덤으로 지정(빨강, 노랑, 초록, 파랑, 보라)</li>
    </ul>
    <br/>
    <li>등록</li>
    <ul>
      <li>등록 버튼 클릭 시 영화 등록 페이지로 이동</li>
    </ul>
    <br/>
    <li>영화 목록</li>
    <ul>
      <li>등록된 영화 이미지 블록 목록</li>
      <li>각 행마다 영화 5편 나열</li>
      <li>개별 영화 이미지 클릭시 해당 영화 소감문 상세 페이지로 이동</li>
    </ul>
  </ul>
  <div>
      <h3>Movie Register Page</h3>
      <img src='https://user-images.githubusercontent.com/79782666/198808997-4b76bc5f-7b31-4ee4-817d-b4c149332cd4.png' width='550px' height='250'/>
      <p>영화 제목과 감독, 평점, 관람 날짜, 소감문, 출연진 작성</p>
      <ul>
        <li>영화 이미지 검색(origin regispository에서 복구 예정)</li>
        <ul>
          <li>이미지 검색으로 영화 이미지 찾기</li>
          <li>영화 이미지는 직접 첨부 불가</li>
        </ul>
        <br/>
        <li>제목과 감독, 출연진</li>
        <ul>
          <li>제목 미작성 시 미등록</li>
        </ul>
        <br/>
        <li>평점</li>
        <ul>
          <li>별 클릭 하여 평점 작성</li>
          <li>기본값은 5</li>
        </ul>
        <br/>
        <li>관람 날짜</li>
        <ul>
          <li>관람 날짜 input 클릭 시 달력 노출</li>
          <li>달력 속 날짜 선택 또는 직접 작성 가능</li>
          <li>기본값은 등록 당일 날짜</li>
        </ul>
        <br/>
        <li>소감문</li>
        <ul>
          <li>길이 제한 없음</li>
        </ul>
        <br/>
        <li>저장 버튼 클릭 시 등록 후 나만의 티켓(Movie Page)으로 이동</li>
      </ul>
    </div>
    <div>
      <h3>Movie Detail Page</h3>
      <img src='https://user-images.githubusercontent.com/79782666/198812109-9c532fef-7e8d-4141-98d7-2a97a2fbea6a.png' width='550px' height='250'/>
      <ul>
        <li>영화 정보 노출</li>
        <ul>
          <li>영화 제목과 감독, 평점, 관람 날짜, 소감문, 출연진 노출</li>
        </ul>
        <br/>
        <li>수정 버튼 클릭 시 수정 페이지로 이동</li>
        <br/>
        <li>삭제 버튼 클릭 시 확인메세지 노출 후 데이터 삭제, 나만의 티켓(Movie Page)으로 이동</li>
      </ul>
    </div>
    <div>
      <h3>Movie Edit Page</h3>
      <img src='https://user-images.githubusercontent.com/79782666/198812417-bff5cd5a-a932-4bdd-9485-bbc1ac50cf3d.png' width='550px' height='250'/>
      <ul>
        <li>영화 정보 수정</li>
        <ul>
          <li>영화 제목과 감독, 평점, 관람 날짜, 소감문, 출연진 수정</li>
          <li>영화 이미지는 수정 불가</li>
        </ul>
        <br/>
        <li>저장 버튼 클릭 시 등록 후 나만의 티켓(Movie Page)으로 이동</li>
        <br/>
      </ul>
    </div>
    <div>
      <h2>수정 및 보완점</h2>
      <ul>
        <li>랜딩 페이지</li>
        <ul>
          <li>사람 div 클릭 시 책 및 영화 등록 페이지 이동 기능 구현</li>
        </ul>
        <br/>
        <li>영화 등록 페이지</li>
        <ul>
          <li>영화 이미지 검색 기능 복구</li>
          <li>영화 정보 검색 기능 통한 정보 자동 기입 구현</li>
        </ul>
      </ul>
    </div>
</div>
