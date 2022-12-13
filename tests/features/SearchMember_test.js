Feature('멤버 검색 - 멤버를 관리하려는 사람이 회원 정보를 확인하고 강제 탈퇴 또는 등급 변경 하기 위해서 특정 사용자를 검색해서 찾을 수 있다.');

Before(({ I }) => {
  I.setupDatabase();

  I.adminLogin();
});

Scenario('존재하는 닉네임을 검색해서 사용자를 찾았을 경우', ({ I }) => {
  // Given
  I.click('멤버 관리');

  // When
  I.fillField('#input-memberId', '짱구');
  I.click('검색');

  // Then
  I.see('짱구');
});

Scenario('존재하지 않는 닉네임을 검색해서 사용자를 못 찾았을 경우', ({ I }) => {
  // Given
  I.click('멤버 관리');

  // When
  I.fillField('#input-memberId', '맹구');
  I.click('검색');

  // Then
  I.see('유저를 찾을 수 없습니다.');
});
