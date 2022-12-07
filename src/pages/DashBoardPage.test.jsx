import { render, screen } from '@testing-library/react';

import DashBoardPage from './DashBoardPage';

const fetchTodayPosts = jest.fn();

const fetchTodaySignupNumber = jest.fn();

const fetchTodayComment = jest.fn();

const todayCreatedPostsNumber = 5;
const todaySignupUserNumber = 1;
const todayWrittenCommentsNumber = 10;

jest.mock('../hooks/usePostStore', () => () => ({
  fetchTodayPosts,
  todayCreatedPostsNumber,
}));

jest.mock('../hooks/useMemberStore', () => () => ({
  fetchTodaySignupNumber,
  todaySignupUserNumber,
}));

jest.mock('../hooks/useCommentStore', () => () => ({
  fetchTodayComment,
  todayWrittenCommentsNumber,
}));

const context = describe;

describe('DashBoard', () => {
  beforeEach(() => {
    render(<DashBoardPage />);
  });

  context('오늘 통계 자료를 확인할 때', () => {
    it('오늘 작성된 게시글 수를 확인할 수 있다.', () => {
      expect(fetchTodaySignupNumber).toBeCalled();

      screen.getByText('오늘 작성 게시글 수 5');
    });

    it('오늘 작성된 댓글 수를 확인할 수 있다.', () => {
      screen.getByText('오늘 작성 댓글 수 10');
    });

    it('오늘 가입한 멤버의 수를 확인할 수 있다.', () => {
      screen.getByText('오늘 가입 멤버 수 1');
    });
  });
});
