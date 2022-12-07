import { fireEvent, render, screen } from '@testing-library/react';

import GradeBoardPage from './GradeBoardPage';

const fetchApplication = jest.fn();
const updateGrade = jest.fn();

let applicationPosts = [];

jest.mock('../hooks/useGradeStore', () => () => ({
  fetchApplication,
  updateGrade,
  applicationPosts,
}));

const context = describe;

describe('GradeBoardPage', () => {
  applicationPosts = [
    {
      id: 1,

      reason: '테스트',

      state: 'processing',

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

  beforeEach(() => {
    render(<GradeBoardPage />);
  });

  context('등업 게시판에 접속했을 떄', () => {
    it('신청 게시글을 불러오는 함수가 호출되는것을 확인할 수 있다.', () => {
      expect(fetchApplication).toBeCalled();
    });
  });

  context('수락 버튼을 클릭했을 때', () => {
    it('신청자의 등급을 변경시크는 함수가 호출되는것을 확인할 수 있다.', () => {
      fireEvent.click(screen.getByText('수락'));

      expect(updateGrade).toBeCalled();
    });
  });
});
