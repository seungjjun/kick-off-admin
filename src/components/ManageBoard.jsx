/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

export default function ManageBoard({
  boards, boardFormStore, submit, createBoard, boardDelete,
}) {
  const handleClickBoard = (boardId, boardName) => {
    boardFormStore.changeBoardId(boardId);
    boardFormStore.changeBoardName(boardName);
  };

  const handleSubmit = (event) => {
    submit();

    event.preventDefault();
  };

  const handleClickDelete = () => {
    boardDelete();
  };

  if (Object.keys(boards).length === 0) {
    return (
      <p>로딩중...</p>
    );
  }

  return (
    <div>
      <h2>게시판 관리</h2>
      <nav>
        <ul>
          {boards.filter((board) => board.id !== 1).map((board) => (
            board.parentId === null ? (
              <li key={board.id}>
                <p
                  onClick={() => handleClickBoard(board.id, board.boardName.value)}
                >
                  {board.boardName.value}
                </p>
                {boards.filter((board) => board.deleted === false).map((teamBoard) => (
                  teamBoard.parentId === board.id ? (
                    <p key={teamBoard.id}>
                      <span onClick={() => handleClickBoard(
                        teamBoard.id,
                        teamBoard.boardName.value,
                      )}
                      >
                        {teamBoard.boardName.value}
                      </span>
                      {boards.filter((board) => board.deleted === false).map((playerBoard) => (
                        playerBoard.parentId === teamBoard.id ? (
                          <span
                            key={playerBoard.id}
                            onClick={() => handleClickBoard(
                              playerBoard.id,
                              playerBoard.boardName.value,
                            )}
                          >
                            {playerBoard.boardName.value}
                          </span>
                        ) : null
                      ))}
                    </p>
                  ) : (
                    null
                  )
                ))}
              </li>
            ) : null
          ))}
        </ul>
      </nav>
      <div>
        <span>{boardFormStore.boardName}</span>
        <form onSubmit={handleSubmit}>
          <label htmlFor="input-menuName">메뉴명</label>
          <input
            id="input-menuName"
            type="text"
            name="board"
            value={boardFormStore.newBoardName}
            onChange={(e) => boardFormStore.changeNewBoardName(e.target.value)}
          />
          <button type="submit">추가</button>
          {createBoard.isSelectBoard ? (
            createBoard.errorMessage
          ) : createBoard.isExistentBoard ? (
            createBoard.errorMessage
          ) : createBoard.isBlank ? (
            createBoard.errorMessage
          ) : createBoard.isCreateSuccess ? (
            createBoard.successMessage
          ) : null}
        </form>
        <div>
          <button type="button" onClick={handleClickDelete}>삭제</button>
        </div>
      </div>
    </div>
  );
}
