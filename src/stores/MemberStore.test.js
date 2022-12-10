import MemberStore from './MemberStore';

const context = describe;

describe('MemberStore', () => {
  let memberStore;

  beforeEach(() => {
    memberStore = new MemberStore();
  });

  context('멤버 목록을 조회할 때', () => {
    it('모든 멤버의 정보를 확인할 수 있다.', async () => {
      await memberStore.fetchUsers();

      const { users } = memberStore.members;

      expect(users[0].grade).toBe('세미프로');
      expect(users[0].name).toBe('훈이');
      expect(users[0].identification).toBe('jel1y');
    });

    it('작성한 게시글 수와 댓글 수를 확인할 수 있다', async () => {
      await memberStore.fetchUsers();

      const { postNumbers } = memberStore.members;
      const { commentNumbers } = memberStore.members;

      expect(postNumbers[0]).toBe(4);
      expect(commentNumbers[0]).toBe(6);
    });
  });

  context('사용자를 검색할 때', () => {
    it('검색한 사용자의 정보를 확인할 수 있다', async () => {
      await memberStore.searchMember();

      const { user } = memberStore;

      expect(user.user.identification).toBe('jel1y');
      expect(user.user.name).toBe('훈이');
      expect(user.user.grade).toBe('프로');
    });
  });

  context('오늘 가입한 멤버의 수를 불러올 때', () => {
    it('몇명이 오늘 가입했는지 확인할 수 있다.', async () => {
      await memberStore.fetchTodaySignupNumber();

      const { todaySignupUserNumber } = memberStore;

      expect(todaySignupUserNumber).toBe(2);
    });
  });

  context('사용자의 등급을 변경할 때', () => {
    it('사용자의 등급을 변경하는 함수가 정상적으로 실행된것을 확인할 수 있다.', async () => {
      const checkedUserId = 1;
      const grade = '프로';

      await memberStore.changeGrade(checkedUserId, grade);
    });
  });

  context('사용자를 제거할 때', () => {
    it('사용자를 제거하는 함수가 정상적으로 실행된것을 확인할 수 있다.', async () => {
      const checkedUserId = 1;

      await memberStore.removeUser(checkedUserId);
    });
  });
});
