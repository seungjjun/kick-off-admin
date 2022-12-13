import { fireEvent, render, screen } from '@testing-library/react';

import SearchMember from './SearchMember';

const context = describe;

let user = {};

let members = {};

describe('SearchMember', () => {
  const rendering = () => {
    render(<SearchMember
      user={user}
      members={members}
    />);
  };

  context('멤버 검색 페이지를 확인할 때', () => {
    beforeEach(() => {
      rendering();
    });

    it('멤버 검색 페이지의 폼을 확인할 수 있다.', () => {
      screen.getByText('멤버 검색');
      screen.getByLabelText('닉네임');
      screen.getByText('검색');
    });
  });

  context('검색해서 사용자를 찾을 때', () => {
    beforeEach(() => {
      user = {
        user: {
          id: 1,
          name: '짱구',
          identification: 'jjanggu',
          grade: '프로',
        },
        postNumber: 5,
        commentNumber: 4,
      };

      members = {
        setMember: jest.fn(),
        searchMember: jest.fn(),
        isSearchFail: false,
        errorMessage: '',
      };

      rendering();
    });

    it('검색 함수가 불리는 것을 확인할 수 있다.', () => {
      fireEvent.change(screen.getByLabelText('닉네임'), {
        target: { value: '짱구' },
      });

      fireEvent.click(screen.getByText('검색'));

      expect(members.searchMember).toBeCalled();
    });

    it('검색한 사용자의 정보를 확인할 수 있다.', () => {
      screen.getByText('짱구(jjanggu)');
      screen.getByText('프로');
      screen.getByText('5');
      screen.getByText('4');
    });
  });

  context('검색한 사용자가 없을 때', () => {
    beforeEach(() => {
      user = {};

      members = {
        setMember: jest.fn(),
        searchMember: jest.fn(),
        member: '맹구',
        isSearchFail: true,
        errorMessage: '유저를 찾을 수 없습니다.',
      };

      rendering();
    });

    it('에러 메시지를 확인할 수 있다.', () => {
      screen.getByText('유저를 찾을 수 없습니다.');
    });
  });
});
