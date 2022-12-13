Feature('전체 멤버 조회 - 멤버를 관리하려는 사람이 전체 멤버의 활동 이력을 확인하고 등급 변경이나 강제 탈퇴하기 위해서 커뮤니티를 이용하기 위해 회원가입한 모든 사용자의 정보를 확인할 수 있다.');

Before(({ I }) => {
  I.setupDatabase();

  I.setupAccount();
});

Scenario('모든 회원을 올바르게 확인할 경우', ({ I }) => {
  // Given
  I.adminLogin();

  // When
  I.click('멤버 관리');

  // Then
  I.see('짱구');
  I.see('jjanggu');
});
