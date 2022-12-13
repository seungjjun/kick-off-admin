Feature('게시판 생성 - 게시판을 관리하려는 사람이 기존에 존재하는 게시판중 새로운 게시판을 생성할 수 있다.');

Before(({ I }) => {
  I.setupDatabase();

  I.setupAccount();
});

Scenario('게시판을 성공적으로 생성한 경우', async ({ I }) => {
  // Given
  I.adminLogin();
  I.click('게시판 관리');

  // When
  I.click('EPL');
  I.click('+');

  I.fillField('메뉴명', '아스날');

  I.click('추가');

  // Then
  I.see('생성이 완료되었습니다.');
});
