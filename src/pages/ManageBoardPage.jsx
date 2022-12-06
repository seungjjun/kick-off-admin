import { useEffect } from 'react';

import ManageBoard from '../components/ManageBoard';

import useBoardStore from '../hooks/useBoardStore';

import useBoardFormStore from '../hooks/useBoardFormStore';

export default function ManageBoardPage() {
  const boardStore = useBoardStore();

  const boardFormStore = useBoardFormStore();

  useEffect(() => {
    boardStore.fetchBoard();
    boardStore.setState();
  }, []);

  const submit = () => {
    const { boardId, newBoardName } = boardFormStore;

    const board = { boardId, newBoardName };

    boardStore.createBoard(board);

    boardFormStore.reset();
  };

  const boardDelete = () => {
    const { boardId } = boardFormStore;

    const board = { boardId };

    boardStore.deleteBoard(board);
  };

  const { boards } = boardStore;

  const createBoard = {
    errorMessage: boardStore.errorMessage,
    successMessage: boardStore.successMessage,
    isBlank: boardStore.isBlank,
    isSelectBoard: boardStore.isSelectBoard,
    isExistentBoard: boardStore.isExistentBoard,
    isCreateSuccess: boardStore.isCreateSuccess,
  };

  return (
    <ManageBoard
      boards={boards}
      boardFormStore={boardFormStore}
      submit={submit}
      createBoard={createBoard}
      boardDelete={boardDelete}
    />
  );
}
