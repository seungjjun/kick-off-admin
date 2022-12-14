import Store from './Store';

export default class BoardFormStore extends Store {
  constructor() {
    super();

    this.boardId = 0;

    this.boardName = '';

    this.newBoardName = '';

    this.clickedBoardName = '';
  }

  changeBoardId(boardId) {
    this.boardId = boardId;

    this.publish();
  }

  changeBoardName(boardName) {
    this.boardName = boardName;

    this.publish();
  }

  changeNewBoardName(newBoardName) {
    this.newBoardName = newBoardName;

    this.publish();
  }

  changeClickBoardName(clickedBoardName) {
    this.clickedBoardName = clickedBoardName;

    this.publish();
  }

  reset() {
    this.boardId = 0;
    this.boardName = '';
    this.newBoardName = '';
    this.clickedBoardName = '';

    this.publish();
  }
}

export const boardFormStore = new BoardFormStore();
