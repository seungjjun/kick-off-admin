import Store from './Store';

export default class BoardFormStore extends Store {
  constructor() {
    super();

    this.boardId = 0;

    this.boardName = '';

    this.newBoardName = '';
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

  reset() {
    this.boardId = 0;
    this.boardName = '';
    this.newBoardName = '';

    this.publish();
  }
}

export const boardFormStore = new BoardFormStore();
