import { cleanup, render, screen } from '@testing-library/react';

import DashBoardPage from './DashBoardPage';

const fetchTodayPosts = jest.fn();

const fetchTodaySignupNumber = jest.fn();

const fetchTodayComment = jest.fn();

const fetchPostsByDate = jest.fn();

const fetchCommentsByDate = jest.fn();

const fetchPosts = jest.fn();

const fetchUsers = jest.fn();

const fetchBoardRate = jest.fn();

const navigate = jest.fn();

const todayCreatedPostsNumber = 5;
const todaySignupUserNumber = 1;
const todayWrittenCommentsNumber = 10;

const boardRate = {};

const postsByDate = {};
const commentsByDate = {};

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

const accessToken = 'ACCESS.TOKEN';

jest.mock('usehooks-ts', () => ({
  useLocalStorage() {
    return accessToken;
  },
}));

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

jest.mock('../hooks/usePostStore', () => () => ({
  fetchPosts,
  fetchTodayPosts,
  fetchPostsByDate,
  todayCreatedPostsNumber,
  postsByDate,
}));

jest.mock('../hooks/useMemberStore', () => () => ({
  fetchTodaySignupNumber,
  todaySignupUserNumber,
  fetchUsers,
}));

jest.mock('../hooks/useCommentStore', () => () => ({
  fetchTodayComment,
  fetchCommentsByDate,
  todayWrittenCommentsNumber,
  commentsByDate,
}));

jest.mock('../hooks/useBoardStore', () => () => ({
  fetchBoardRate,
  boardRate,
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

      cleanup();
    });
  });
});
