Feature('대시 보드 - 커뮤니티를 관리하려는 사람이 커뮤니티의 이용량을 파악하고 발전시키기 위해서 전체적인 이용량과 오늘, 일주일간 사용자들의 이용량을 확인할 수 있다.');

Before(({ I }) => {
  I.setupDatabase();

  I.setupAccount();
});

Scenario('전체 멤버수를 확인할 경우', async ({ I }) => {
  // Given
  // 멤버 두명을 세팅

  // When
  I.adminLogin();

  // Then
  I.see('전체 멤버 수');
  I.see('2명');
});

Scenario('전체 게시글 수를 확인할 경우', async ({ I }) => {
  // Given
  // 게시글 10개를 세팅

  // When
  I.adminLogin();

  // Then
  I.see('전체 게시글 수');
  I.see('10개');
});

Scenario('등업 승인 대기자 수를 확인할 경우', async ({ I }) => {
  // Given
  // 등업 신청 게시글을 1개 세팅

  // When
  I.adminLogin();

  // Then
  I.see('등업 승인 대기자 수');
  I.see('1명');
});

Scenario('오늘 가입 멤버 수를 확인할 경우', async ({ I }) => {
  // Given
  // 멤버 두명을 세팅(가입날짜 오늘을 기준으로)

  // When
  I.adminLogin();

  // Then
  I.see('오늘 가입 멤버 수 2');
});

Scenario('오늘 작성된 게시글의 수를 확인할 경우', async ({ I }) => {
  // Given
  // 게시글 10개를 세팅(작성날짜 오늘을 기준으로)

  // When
  I.adminLogin();

  // Then
  I.see('오늘 작성 게시글 수 10');
});

Scenario('오늘 작성된 댓글의 수를 확인할 경우', async ({ I }) => {
  // Given
  // 댓글 5개를 세팅(작성날짜 오늘을 기준으로)

  // When
  I.adminLogin();

  // Then
  I.see('오늘 작성 댓글 수 5');
});

Scenario('관리자 정보를 확인할 경우', async ({ I }) => {
  // Given

  // When
  I.adminLogin();

  // Then
  I.see('짱구님');
  I.see('jel1y');
});
