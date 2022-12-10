import { fireEvent, render, screen } from '@testing-library/react';

import ManageBoard from './ManageBoard';

const submit = jest.fn();
const boardDelete = jest.fn();
const setState = jest.fn();

const changeBoardId = jest.fn();

let isBlank = false;
let isSelectBoard = false;
let isExistentBoard = false;
let isCreateSuccess = false;
let isDeleteBoard = false;
let errorMessage = '';
let successMessage = '';

let boardFormStore = {};

jest.mock('../hooks/useBoardStore', () => () => ({
  setState,
  isBlank,
  isSelectBoard,
  isExistentBoard,
  isCreateSuccess,
  isDeleteBoard,
  errorMessage,
  successMessage,
  changeBoardId,
}));

const context = describe;
describe('ManageBoard', () => {
  beforeEach(() => {
    const boards = [
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
          value: 'EPL',
        },
        parentId: null,
        deleted: false,
      },

      {
        id: 3,
        boardName: {
          value: 'LaLiga',
        },
        parentId: null,
        deleted: false,
      },

      {
        id: 4,
        boardName: {
          value: '토트넘',
        },
        parentId: 2,
        deleted: false,
      },
    ];

    boardFormStore = {
      changeBoardId: jest.fn(),
      changeBoardName: jest.fn(),
      changeNewBoardName: jest.fn(),
      changeClickBoardName: jest.fn(),
      boardName: '손흥민',
      newBoardName: '카타르 월드컵',
    };

    render(<ManageBoard
      boards={boards}
      boardFormStore={boardFormStore}
      submit={submit}
      boardDelete={boardDelete}
    />);
  });

  context('게시판을 관리할 경우', () => {
    isBlank = false;
    isSelectBoard = false;
    isExistentBoard = false;
    isCreateSuccess = true;
    isDeleteBoard = false;
    errorMessage = '';
    successMessage = '생성이 완료되었습니다.';

    it('전체 게시판 리스트를 확인할 수 있다.', () => {
      screen.getByText(/EPL/);
      screen.getByText(/토트넘/);
      screen.getByText(/LaLiga/);
    });
  });

  context('게시판을 추가할 경우', () => {
    it('게시판을 추가하는 함수가 호출되는 것을 확인할 수 있다.', () => {
      fireEvent.change(screen.getByLabelText('메뉴명'), {
        target: { value: '카타르 월드컵' },
      });

      fireEvent.click(screen.getByText('+'));

      fireEvent.click(screen.getByText('추가'));

      screen.getByText('생성이 완료되었습니다.');

      expect(submit).toBeCalled();
    });
  });

  context('게시판을 삭제할 경우', () => {
    it('게시판을 삭제하는 함수가 호출되는 것을 확인할 수 있다.', () => {
      fireEvent.click(screen.getByText('┖ 토트넘'));

      fireEvent.click(screen.getByText('+'));

      fireEvent.click(screen.getByText('삭제'));

      expect(boardDelete).toBeCalled();
    });
  });
});
