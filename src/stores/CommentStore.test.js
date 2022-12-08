/* eslint-disable react/jsx-filename-extension */

import CommentStore from './CommentStore';

const context = describe;

describe('CommentStore', () => {
  let commentStore;

  beforeEach(() => {
    commentStore = new CommentStore();
  });

  context('오늘 작성된 댓글을 불러온 경우', () => {
    it('댓글의 총 개수를 알 수 있다.', async () => {
      await commentStore.fetchTodayComment();

      const commentNumber = commentStore.todayWrittenCommentsNumber;

      expect(commentNumber).toBe(2);
    });
  });

  context('일주일간 작성된 댓글을 불러온 경우', () => {
    it('댓글의 총 개수를 알 수 있다.', async () => {
      await commentStore.fetchCommentsByDate();

      const commentsByDate = commentStore.commentsByDate.comments;

      expect(commentsByDate.commentsNumber).toBe(3);
      expect(commentsByDate.recommentsNumber).toBe(4);
    });
  });
});
