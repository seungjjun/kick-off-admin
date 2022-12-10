import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';

import DashBoard from './DashBoard';

const context = describe;

const navigate = jest.fn();
const setAccessToken = jest.fn();

let admin = {};

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

jest.mock('../hooks/useAdminStore', () => () => ({
  admin,
}));

jest.mock('../hooks/useMemberStore', () => () => ({
  usersNumber: 15,
}));

jest.mock('../hooks/useGradeStore', () => () => ({
  processingApplications: 2,
}));

describe('DashBoard', () => {
  beforeEach(() => {
    admin = {
      profileImage: 'url',
      name: '벤투',
      identification: 'jel1y',
    };

    const statistics = {
      todayCreatedPostsNumber: 5,
      todaySignupUserNumber: 2,
      todayWrittenCommentsNumber: 12,
    };

    const boardRate = {
      bundesligaBoardValue: 1,
      eplBoardValue: 3,
      laligaBoardValue: 3,
      serieaBoardValue: 2,
    };

    render(<DashBoard
      statistics={statistics}
      boardRate={boardRate}
      navigate={navigate}
      setAccessToken={setAccessToken}
    />);
  });

  context('관리 홈 화면에 들어왔을 때', () => {
    it('어드민의 이름과 아이디를 확인할 수 있다', () => {
      screen.getByText('벤투님');
      screen.getByText('jel1y');

      cleanup();
    });

    it('전체 멤버수를 확인할 수 있다.', () => {
      screen.getByText('전체 멤버 수');
      screen.getByText(/15명/);

      cleanup();
    });

    it('등업 승인 대기자수를 확인할 수 있다.', () => {
      screen.getByText('등업 승인 대기자 수');
      screen.getByText(/2명/);

      cleanup();
    });
  });

  context('로그아웃 버튼을 클릭했을 떄', () => {
    it('accessToken이 초기화되고 홈 화면으로 이동하는 것을 확인할 수 있다.', () => {
      fireEvent.click(screen.getByTestId('logout'));

      expect(navigate).toBeCalledWith('/');
      expect(setAccessToken).toBeCalled();

      cleanup();
    });
  });

  context('게시글 통계자료를 확인할 때', () => {
    it('오늘 작성된 게시글 수를 확인할 수 있다.', () => {
      screen.getByText('오늘 작성 게시글 수 5');

      cleanup();
    });

    it('오늘 작성된 댓글 수를 확인할 수 있다.', () => {
      screen.getByText('오늘 작성 댓글 수 12');

      cleanup();
    });

    it('오늘 가입한 멤버의 수를 확인할 수 있다.', () => {
      screen.getByText('오늘 가입 멤버 수 2');

      cleanup();
    });
  });
});
