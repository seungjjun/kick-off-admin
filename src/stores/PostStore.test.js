import PostStore from './PostStore';

const context = describe;

describe('PostStore', () => {
  let postStore;

  beforeEach(() => {
    postStore = new PostStore();
  });

  context('조회수가 가장 높은 게시글을 불러올때', () => {
    it('게시글의 정보를 확인할 수 있다.', async () => {
      await postStore.fetchMostHitPosts();

      const { mostHitPosts } = postStore;

      expect(mostHitPosts[0].postInformation.title).toBe('조회수 제일 높은 게시글');
      expect(mostHitPosts[0].createdAt).toBe('2022-12-01');
      expect(mostHitPosts[0].hit).toBe(400);
    });
  });

  context('하루간 작성된 게시글을 불러올때', () => {
    it('게시글의 개수를 확인할 수 있다.', async () => {
      await postStore.fetchTodayPosts();

      const { todayCreatedPostsNumber } = postStore;

      expect(todayCreatedPostsNumber).toBe(2);
    });
  });

  context('하루간 작성된 게시글을 불러올때', () => {
    it('게시글의 개수를 확인할 수 있다.', async () => {
      await postStore.fetchTodayPosts();

      const { todayCreatedPostsNumber } = postStore;

      expect(todayCreatedPostsNumber).toBe(2);
    });
  });

  context('일주일간 작성된 게시글을 불러올때', () => {
    it('게시글의 개수를 확인할 수 있다.', async () => {
      await postStore.fetchPostsByDate();

      const { postsByDate } = postStore;

      // expect(postsByDate).toBe(2);
    });
  });
});
