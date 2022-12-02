import { fireEvent, render, screen } from '@testing-library/react';

import MemberList from './MemberList';

const changeGrade = jest.fn();

const userAllCheck = jest.fn();

const context = describe;

describe('MemberList', () => {
  beforeEach(() => {
    const totalMembers = [
      {
        user: {
          id: 1,
          name: '손흥민',
          identification: 'son7',
          grade: '월드클래스',
          profileImage: null,
        },

        postNumber: 3,
        commentNumber: 5,
      },
    ];
    const selectUser = {
      checkUsers: [1, 2],
      setCheckUsers: jest.fn(),
      isChecked: jest.fn(),
      grade: '',
      setGrade: jest.fn(),
    };

    render(<MemberList
      totalMembers={totalMembers}
      selectUser={selectUser}
      changeGrade={changeGrade}
      userAllCheck={userAllCheck}
    />);
  });

  context('전체 멤버를 확인할 경우', () => {
    it('멤버 검색 창을 확인할 수 있다.', () => {
      screen.getByText('전체 멤버 관리');

      screen.getByText('멤버 검색');
      screen.getByText('검색');
    });

    it('전체 멤버 수를 확인할 수 있다.', () => {
      screen.getByText('카페 멤버 수');
    });

    it('멤버 목록을 확인할 수 있다.', () => {
      screen.getByText('닉네임 (아이디)');
      screen.getByText(/손흥민/);
      screen.getByText(/(son7)/);

      screen.getByText('등급');
      screen.getAllByText('월드클래스');

      screen.getAllByText('게시글 수');
      screen.getAllByText('3');

      screen.getAllByText('댓글 수');
      screen.getAllByText('5');
    });

    it('멤버 선택 창을 확인할 수 있다.', () => {
      screen.getByText('전체선택');

      screen.getByText('변경');
      screen.getByText('강제 탈퇴');
    });
  });

  context('멤버 등급을 변경할 경우', () => {
    it('등급을 변경하는 함수가 불리는 것을 확인할 수 있다.', () => {
      fireEvent.click(screen.getByText('전체선택'));

      fireEvent.click(screen.getByText('세미프로'));

      fireEvent.click(screen.getByText('변경'));

      expect(changeGrade).toBeCalledWith([1, 2]);
    });
  });
});
