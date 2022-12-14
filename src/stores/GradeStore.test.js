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

  context('현재 등업 신청 승인을 기다리는 게시글을 불러올 때', () => {
    it('대기중엔 등업 신청 게시글의 수를 확인할 수 있다.', async () => {
      await gradeStore.fetchProcessingApplication();

      const { processingApplications } = gradeStore;

      expect(processingApplications.data).toBe(3);
    });
  });

  context('사용자가 신청한 등업신청글을 수락해서 등급을 변경할 때', () => {
    it('사용자의 등급을 변경하는 함수가 정상적으로 실행된것을 확인할 수 있다.', async () => {
      const postId = 1;
      const applicationGrade = '프로';
      const name = '짱구';

      await gradeStore.updateGrade(postId, applicationGrade, name);
    });
  });

  context('사용자가 신청한 등업신청글을 거절할 때', () => {
    it('등업 신청을 거절하는 함수가 정상적으로 실행된것을 확인할 수 있다.', async () => {
      const postId = '1';

      await gradeStore.refuseUpdate(postId);
    });
  });
});
