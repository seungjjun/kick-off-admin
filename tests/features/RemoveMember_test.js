Feature('멤버 강제 탈퇴 - 멤버를 관리하려는 사람이 커뮤니티 취지에 맞지 않는 활동을 하는 사람을 제지하기 위해서 사용자를 강제탈퇴 시킬 수 있다.');

Before(({ I }) => {
  I.setupDatabase();

  I.setupAccount();
});

Scenario('강제탈퇴 처리 성공한 경우', ({ I }) => {
  // Given
  I.adminLogin();
  I.click('멤버 관리');

  I.see('짱구');

  // When
  I.click('#check-user');
  I.click('강제 탈퇴');

  // Then
  I.see('탈퇴 처리가 되었습니다.');
});
