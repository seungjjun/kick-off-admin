/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState } from 'react';

import styled from 'styled-components';

import useBoardStore from '../hooks/useBoardStore';

const Container = styled.div`
  width: 100%;
  margin-top: 5em;
`;

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  padding-bottom: .5em;
  border-bottom: 1px solid #CCC;
`;

const Menu = styled.div`
  display: flex;
  margin-top: 2em;
`;

const MenuNavigation = styled.nav`
  width: 25%;
  font-weight: 500;
  p {
    cursor: pointer;
  }
`;

const MenuList = styled.ul`
  display: inline-flexbox;
  width: 100%;
  gap: 0.85em;

  div:first-child {
    width: 80%;
    border: 1px solid #CCC;
    padding: 1.2em 0 1em 1.4em
  }
`;

const PlusButtonBox = styled.div`
  width: 20%;
  display: flex;
  align-items: center;

  button {
    padding: 4em .4em;
    border: 1px solid #CCC; 
    background-color: #FFF;
    cursor: pointer;
  }
`;

const LeagueBoardName = styled.p`
  display: block;
  font-size: 1.25em;
  padding-top: 0.7em;
  font-weight: bold;
`;

const TeamBoardName = styled.span`
  display: block;
  margin-left: 0.3em;
  padding-top: 1em;

  color: ${(props) => (props.toggle ? '#CD2C2C' : '#000')};
`;

const PlayerBoardName = styled.span`
  display: block;
  margin-left: 1.5em;
  padding-top: 1em;

  color: ${(props) => (props.toggle ? '#CD2C2C' : '#000')};
`;

const ManagementMenu = styled.div`
  width: 75%;
  border: 1px solid #CCC;
  padding: 2em 0 0 1.2em;
`;

const SelectMenu = styled.span`
  font-size: 1.3em;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  margin-top: 1em;

  label {
    margin-right: 5em;
    align-self: center;
    font-weight: bold;
  }

  input {
    margin-right: 1.3em;
    padding: .3em 0;
    border: 1px solid #CCC;
  }

  button {
    margin-right: .5em;
    padding: .5em 1.2em;
    border: 1px solid #CCC;
    background-color: #FFF;
    cursor: pointer;
  }
`;

const CreatedMessage = styled.p`
  align-self: center;
`;

const Error = styled.p`
  color: #E51919;
  align-self: center;
`;

export default function ManageBoard({
  boards, boardFormStore, submit, boardDelete,
}) {
  const [isSelected, setIsSelected] = useState('');

  const boardStore = useBoardStore();

  const handleClickBoard = (boardId, boardName) => {
    boardFormStore.changeBoardId(boardId);
    boardFormStore.changeClickBoardName(boardName);

    setIsSelected(boardId);

    boardStore.setState();
  };

  const handleClickAddMenu = () => {
    boardFormStore.changeBoardName(boardFormStore.clickedBoardName);
  };

  const handleSubmit = (event) => {
    submit();

    setIsSelected('');

    event.preventDefault();
  };

  const handleClickDelete = () => {
    setIsSelected('');
    boardDelete();
  };

  if (Object.keys(boards).length === 0) {
    return (
      <p>로딩중...</p>
    );
  }

  return (
    <Container>
      <Title>게시판 관리</Title>
      <Menu>
        <MenuNavigation>
          <MenuList>
            <div>
              {boards.filter((board) => board.id !== 1).map((board) => (
                board.parentId === null ? (
                  <li key={board.id}>
                    <a>
                      <LeagueBoardName
                        onClick={() => handleClickBoard(board.id, board.boardName.value)}
                      >
                        {board.boardName.value}
                      </LeagueBoardName>
                    </a>
                    {boards.filter((board) => board.deleted === false).map((teamBoard) => (
                      teamBoard.parentId === board.id ? (
                        <p key={teamBoard.id}>
                          <TeamBoardName
                            toggle={isSelected === teamBoard.id}
                            onClick={() => handleClickBoard(
                              teamBoard.id,
                              teamBoard.boardName.value,
                            )}
                          >
                            ┖
                            {' '}
                            {teamBoard.boardName.value}
                          </TeamBoardName>
                          {boards.filter((board) => board.deleted === false).map((playerBoard) => (
                            playerBoard.parentId === teamBoard.id ? (
                              <PlayerBoardName
                                toggle={isSelected === playerBoard.id}
                                key={playerBoard.id}
                                onClick={() => handleClickBoard(
                                  playerBoard.id,
                                  playerBoard.boardName.value,
                                )}
                              >
                                ┖
                                {' '}
                                {playerBoard.boardName.value}
                              </PlayerBoardName>
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
            </div>
            <PlusButtonBox>
              <button type="button" onClick={handleClickAddMenu}>+</button>
            </PlusButtonBox>
          </MenuList>
        </MenuNavigation>
        <ManagementMenu>
          <SelectMenu>{boardFormStore.boardName}</SelectMenu>
          <Form onSubmit={handleSubmit}>
            <label htmlFor="input-menuName">메뉴명</label>
            <input
              id="input-menuName"
              type="text"
              name="board"
              value={boardFormStore.newBoardName}
              onChange={(e) => boardFormStore.changeNewBoardName(e.target.value)}
            />
            {boardFormStore.boardName ? (
              <>
                <button type="submit">추가</button>
                <button type="button" onClick={handleClickDelete}>삭제</button>
              </>
            ) : (
              null
            )}
            {boardStore.isSelectBoard ? (
              <Error>{boardStore.errorMessage}</Error>
            ) : boardStore.isExistentBoard ? (
              <Error>{boardStore.errorMessage}</Error>
            ) : boardStore.isBlank ? (
              <Error>{boardStore.errorMessage}</Error>
            ) : boardStore.isCreateSuccess ? (
              <CreatedMessage>{boardStore.successMessage}</CreatedMessage>
            ) : boardStore.isDeleteBoard ? (
              <Error>{boardStore.errorMessage}</Error>
            ) : null}
          </Form>
        </ManagementMenu>
      </Menu>
    </Container>
  );
}
