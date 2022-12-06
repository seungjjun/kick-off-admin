import { render, screen } from '@testing-library/react';

import ManageBoard from '../components/ManageBoard';

const fetchBoard = jest.fn();
const setState = jest.fn();
const createBoard = jest.fn();
const deleteBoard = jest.fn();
const reset = jest.fn();

let boards = [];

let boardId = 0;

let newBoardName = '';

jest.mock('../hooks/useBoardStore', () => () => ({
  fetchBoard,
  setState,
  createBoard,
  deleteBoard,
  boards,
}));

jest.mock('../hooks/useBoardFormStore', () => () => ({
  reset,
  boardId,
  newBoardName,
}));

const context = describe;

describe('ManageBoardPage', () => {
  beforeEach(() => {
    boards = [
      {
        id: 1,
        boardName: {
          value: '전체 게시판',
        },
        parentId: null,
        deleted: false,
      },

      {
        id: 2,
        boardName: {
          value: 'Bundesliga',
        },
        parentId: null,
        deleted: false,
      },

    ];

    boardId = 1;

    newBoardName = '이강인';

    render(<ManageBoard />);
  });

  context('게시판 관리 페이지를 확인할 경우', () => {
    it('게시판 목록을 확인할 수 있다.', () => {
      screen.getByText('');
    });
  });
});
