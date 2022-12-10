import BoardStore from './BoardStore';

const context = describe;

describe('BoardStore', () => {
  let boardStore;

  beforeEach(() => {
    boardStore = new BoardStore();
  });

  context('전체 게시판을 불러올 경우', () => {
    it('게시판 리스트를 확인할 수 있다', async () => {
      await boardStore.fetchBoard();

      const boards = boardStore.boards.board;

      expect(boards[0].boardName.value).toBe('전체 게시판');
      expect(boards[1].boardName.value).toBe('EPL');
      expect(boards[2].boardName.value).toBe('LaLiga');
      expect(boards[3].boardName.value).toBe('토트넘');
    });
  });

  context('각각의 게시판별로 게시글의 개수를 불러올 때', () => {
    it('게시판별로 게시글이 작성된 개수를 알 수 있다.', async () => {
      await boardStore.fetchBoardRate();

      const { boardRate } = boardStore;

      expect(boardRate.eplBoardValue).toBe(3);
      expect(boardRate.laligaBoardValue).toBe(3);
      expect(boardRate.serieaBoardValue).toBe(2);
      expect(boardRate.bundesligaBoardValue).toBe(1);
    });
  });

  context('게시판을 선태갛지 않고 게시판을 생성할 경우', () => {
    it('게시판 생성 상태를 변경하고 에러메시지를 확인할 수 있다.', async () => {
      const board = { boardId: '0', newBoardName: '손흥민' };

      await boardStore.createBoard(board);

      expect(boardStore.isSelectBoard).toBeTruthy();
      expect(boardStore.errorMessage).toBe('게시판을 생성할 수 없습니다. 다시 한번 확인해주세요.');
    });

    context('게시판 이름을 입력하지 않고 생성할 경우', () => {
      it('게시판 생성 상태를 변경하고 에러메시지를 확인할 수 있다.', async () => {
        const board = { boardId: '0', newBoardName: '' };

        await boardStore.createBoard(board);

        expect(boardStore.isBlank).toBeTruthy();
        expect(boardStore.errorMessage).toBe('게시판 이름을 입력해주세요');
      });
    });

    context('게시판을 성공적으로 생성할 경우', () => {
      it('게시판의 생성 상태가 성공 상태이다.', async () => {
        const board = { boardId: '2', newBoardName: '손흥민' };

        await boardStore.createBoard(board);

        expect(boardStore.createBoardState).toBe('success');

        expect(boardStore.isBlank).toBeFalsy();
        expect(boardStore.isSelectBoard).toBeFalsy();
        expect(boardStore.isExistentBoard).toBeFalsy();
      });
    });

    context('특정 게시판을 삭제할 경우', () => {
      it('게시판을 삭제하는 함수가 정상적으로 실행되는것을 확인할 수 있다.', async () => {
        const board = { boardId: '1' };

        await boardStore.deleteBoard(board);
      });
    });
  });
});
