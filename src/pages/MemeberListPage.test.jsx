import { render, screen } from '@testing-library/react';

import MemberListPage from './MemeberListPage';

const fetchUsers = jest.fn();

const makeUserArray = jest.fn();

const changeGrade = jest.fn();

const removeUser = jest.fn();

const searchMember = jest.fn();

let totalMembers = [];

let errorMessage = '';
let isSearchFail = '';
let user = {};

jest.mock('../hooks/useMemberStore', () => () => ({
  fetchUsers,
  makeUserArray,
  changeGrade,
  removeUser,
  totalMembers,
  searchMember,
  errorMessage,
  isSearchFail,
  user,
}));

const context = describe;

describe('MemberListPage', () => {
  beforeEach(() => {
    errorMessage = '유저를 찾을 수 없습니다.';

    isSearchFail = true;

    user = {
    };

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

  context('사용자를 못찾았을 경우', () => {
    it('에러 메시지를 확인할 수 있다.', () => {
      screen.getByText('유저를 찾을 수 없습니다.');
    });
  });
});
