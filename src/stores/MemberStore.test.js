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

      const { users } = memberStore.members[0];

      expect(users.grade).toBe('세미프로');
      expect(users.name).toBe('훈이');
      expect(users.identification).toBe('jel1y');
    });

    it('작성한 게시글 수와 댓글 수를 확인할 수 있다', async () => {
      await memberStore.fetchUsers();

      const { postNumbers } = memberStore.members[0];
      const { commentNumbers } = memberStore.members[0];

      expect(postNumbers[0]).toBe(4);
      expect(commentNumbers[0]).toBe(6);
    });
  });
});
