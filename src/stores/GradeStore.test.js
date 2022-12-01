import GradeStore from './GradeStore';

const context = describe;

describe('GradeStore', () => {
  let gradeStore;

  beforeEach(() => {
    gradeStore = new GradeStore();
  });

  context('신청 게시글을 불러올 때', () => {
    it('신청자의 정보를 확인할 수 있다.', async () => {
      await gradeStore.fetchApplication();

      const { applicationPosts } = gradeStore;

      expect(applicationPosts[0].reason).toBe('테스트');

      expect(applicationPosts[0].applicant.name).toBe('김민재');
      expect(applicationPosts[0].applicant.currentGrade).toBe('아마추어');
      expect(applicationPosts[0].applicant.applicationGrade).toBe('세미프로');

      expect(applicationPosts[0].creationNumber.commentNumber).toBe(4);
      expect(applicationPosts[0].creationNumber.postNumber).toBe(1);
    });
  });
});
