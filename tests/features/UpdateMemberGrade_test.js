Feature('멤버 등급 변경 - 멤버의 등급을 관리하려는 사람이 활동이 없는 사용자의 등급을 내리거나 활동이 많은 시용자의 등급을 올리기 위해서 모든 사용자의 등급을 변경할 수 있다.');

Before(({ I }) => {
  I.setupDatabase();

  I.setupAccount();
});

Scenario('성공적으로 멤버의 등급을 변경한 경우', async ({ I }) => {
  // Given
  I.adminLogin();
  I.click('멤버 관리');

  I.see('아마추어');

  // When
  I.click('#check-user');

  I.selectOption('#select-grade', '세미프로');

  I.click('변경');

  // Then
  I.see('세미프로');
});
