import { fireEvent, render, screen } from '@testing-library/react';

import GradeBoard from './GradeBoard';

const acceptance = jest.fn();
const refusal = jest.fn();

const context = describe;

describe('GradeBoard', () => {
  beforeEach(() => {
    const applicationPosts = [
      {
        id: 1,

        reason: '테스트',

        applicant: {
          name: '황희찬',
          applicationGrade: '프로',
          currentGrade: '세미프로',
        },

        creationNumber: {
          postNumber: 4,
          commentNumber: 8,
        },
      },
    ];
    render(<GradeBoard
      applicationPosts={applicationPosts}
      acceptance={acceptance}
      refusal={refusal}
    />);
  });

  context('등급 게시판을 확인할 경우', () => {
    it('테이블의 헤더를 확인할 수 있다.', () => {
      screen.getByText('신청자');
      screen.getByText('신청등급');
      screen.getByText('현재등급');
      screen.getByText('게시글수');
      screen.getByText('댓글 수');
      screen.getByText('신청사유');
    });

    it('등업 신청 게시글들을 확인할 수 있다.', () => {
      screen.getByText('황희찬');
      screen.getByText('프로');
      screen.getByText('세미프로');
      screen.getByText('4');
      screen.getByText('8');
      screen.getByText('테스트');
    });
  });

  context('수락 버튼을 클릭할 경우', () => {
    it('등급을 변경하는 함수가 실행되는것을 확인할 수 있다.', () => {
      fireEvent.click(screen.getByText('수락'));

      expect(acceptance).toBeCalled();
    });
  });

  context('거절 버튼을 클릭할 경우', () => {
    it('등급 신청을 거절하는 함수가 실행되는것을 확인할 수 있다.', () => {
      fireEvent.click(screen.getByText('거절'));

      expect(refusal).toBeCalled();
    });
  });
});
