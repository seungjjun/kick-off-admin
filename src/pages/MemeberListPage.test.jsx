import { render, screen } from '@testing-library/react';

import MemberListPage from './MemeberListPage';

const fetchUsers = jest.fn();

const makeUserArray = jest.fn();

const changeGrade = jest.fn();

let totalMembers = [];
jest.mock('../hooks/useMemberStore', () => () => ({
  fetchUsers,
  makeUserArray,
  changeGrade,
  totalMembers,
}));

describe('MemberListPage', () => {
  beforeEach(() => {
    totalMembers = [
      {
        user: {
          id: 1,
          name: '조규성',
          identification: 'gue sung',
          grade: '프로',
          profileImage: null,
        },

        postNumber: 3,
        commentNumber: 5,
      },
    ];

    render(<MemberListPage />);
  });

  it('멤버 목록을 확인할 수 있다.', () => {
    screen.getByText(/조규성/);
  });
});
