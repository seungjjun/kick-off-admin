import { boardApiService } from '../services/BoardApiService';

import Store from './Store';

export default class BoardStore extends Store {
  constructor() {
    super();

    this.boards = {};

    this.boardRate = {};

    this.errorMessage = '';
    this.successMessage = '';

    this.createBoardState = '';
  }

  async fetchBoard() {
    const data = await boardApiService.fetchBoard();

    this.boards = data.board;

    this.publish();
  }

  async fetchBoardRate() {
    const rate = await boardApiService.fetchBoardRate();

    this.boardRate = rate;

    this.publish();
  }

  async createBoard(board) {
    try {
      if (board.newBoardName === '') {
        this.changeCreateBoardState('blank', { errorMessage: '게시판 이름을 입력해주세요' });
        return;
      }

      const { data } = await boardApiService.createBoard(board);

      this.changeBoardState('success', { successMessage: data });

      this.fetchBoard();
    } catch (e) {
      const { message } = e.response.data;

      if (message === '게시판을 생성할 수 없습니다. 다시 한번 확인해주세요.') {
        this.changeCreateBoardState('notSelect', { errorMessage: message });
      }

      if (message === '이미 존재하는 게시판입니다.') {
        this.changeCreateBoardState('exisiting', { errorMessage: message });
      }
    }
  }

  async deleteBoard(board) {
    await boardApiService.deleteBoard(board.boardId);

    this.fetchBoard();

    this.publish();
  }

  changeCreateBoardState(state, { errorMessage = '' } = {}) {
    this.errorMessage = errorMessage;
    this.createBoardState = state;
    this.publish();
  }

  changeBoardState(state, { successMessage = '' } = {}) {
    this.successMessage = successMessage;
    this.createBoardState = state;
    this.publish();
  }

  get isBlank() {
    return this.createBoardState === 'blank';
  }

  get isSelectBoard() {
    return this.createBoardState === 'notSelect';
  }

  get isExistentBoard() {
    return this.createBoardState === 'exisiting';
  }

  get isCreateSuccess() {
    return this.createBoardState === 'success';
  }

  setState() {
    this.createBoardState = '';
    this.publish();
  }
}

export const boardStore = new BoardStore();
