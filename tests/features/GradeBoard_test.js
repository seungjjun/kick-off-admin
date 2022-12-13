Feature('등업 신청 게시글 조회 - 등업 신청을 관리하려는 사람이 등업 신청을 수락 또는 거절하기 위해서 사용자가 신청한 등업 신청 게시글을 확인할 수 있다.');

Before(({ I }) => {
  I.setupDatabase();

  I.setupAccount();
});

Scenario('등업 신청 게시글을 성공적으로 조회한 경우', async ({ I }) => {
  // Given
  I.adminLogin();

  // When
  I.click('등업 신청 관리');

  // Then
  I.see('짱구');
  I.see('세미프로');
  I.see('프로');
  I.see('10');
});

Scenario('등업 신청 게시글을 수락한 경우', async ({ I }) => {
  // Given
  I.adminLogin();

  // When
  I.click('등업 신청 관리');

  I.click('수락');

  // Then
  I.dontSee('짱구');

  I.click('멤버 관리');

  I.see('세미프로');
});

Scenario('등업 신청 게시글을 거절한 경우', async ({ I }) => {
  // Given
  I.adminLogin();

  // When
  I.click('등업 신청 관리');

  I.click('거절');

  // Then
  I.dontSee('짱구');

  I.click('멤버 관리');

  I.see('아마추어');
});
