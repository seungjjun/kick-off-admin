import { fireEvent, render, screen } from '@testing-library/react';

import ManageBoardPage from './ManageBoardPage';

const fetchBoard = jest.fn();
const setState = jest.fn();
const createBoard = jest.fn();
const deleteBoard = jest.fn();
const reset = jest.fn();

const changeNewBoardName = jest.fn();

let boards = [];

let boardId = 0;

let newBoardName = '';
let errorMessage = '';
let boardName = '';

jest.mock('../hooks/useBoardStore', () => () => ({
  fetchBoard,
  setState,
  createBoard,
  deleteBoard,
  boards,
  errorMessage,
  successMessage: '게시판이 생성되었습니다.',
  isBlank: false,
  isSelectBoard: false,
  isExistentBoard: false,
  isCreateSuccess: true,
}));

jest.mock('../hooks/useBoardFormStore', () => () => ({
  reset,
  boardId,
  newBoardName,
  changeNewBoardName,
  boardName,
}));

const context = describe;

describe('ManageBoardPage', () => {
  beforeEach(() => {
    boards = [
      {
        id: 2,
        boardName: {
          value: '전체 게시판',
        },
        parentId: null,
        deleted: false,
      },

      {
        id: 3,
        boardName: {
          value: 'Bundesliga',
        },
        parentId: null,
        deleted: false,
      },

    ];

    boardId = 1;

    newBoardName = '이강인';

    errorMessage = '이미 존재하는 게시판입니다.';

    boardName = '이강인';

    render(<ManageBoardPage />);
  });

  context('게시판 관리 페이지를 확인할 경우', () => {
    it('게시판 목록을 확인할 수 있다.', () => {
      screen.getByText('게시판 관리');

      screen.getByText('전체 게시판');
      screen.getByText('Bundesliga');
    });
  });

  context('게시판을 생성할 경우', () => {
    it('게시판 생성하는 함수가 호출되는 것을 확인할 수 있다.', () => {
      fireEvent.change(screen.getByLabelText('메뉴명'), {
        target: { value: 'LaLiga' },
      });

      fireEvent.click(screen.getByText('추가'));

      screen.getByText('게시판이 생성되었습니다.');

      expect(createBoard).toBeCalled();
    });
  });

  context('게시판을 삭제할 경우', () => {
    it('게시판 삭제하는 함수가 호출되는 것을 확인할 수 있다.', () => {
      fireEvent.click(screen.getByText('삭제'));

      expect(deleteBoard).toBeCalled();
    });
  });
});
