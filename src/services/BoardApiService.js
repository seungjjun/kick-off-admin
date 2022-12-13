/* eslint-disable class-methods-use-this */
import axios from 'axios';

import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class BoardApiService {
  async fetchBoard() {
    const url = `${baseUrl}/boards`;

    const { data } = await axios.get(url);

    return data;
  }

  async fetchBoardRate() {
    const url = `${baseUrl}/admin-boards-rate`;

    const { data } = await axios.get(url);

    return data;
  }

  async createBoard(board) {
    const url = `${baseUrl}/admin-boards`;

    const data = await axios.post(url, {
      parentId: board.boardId,
      boardName: board.newBoardName,
    });

    return data;
  }

  async deleteBoard(boardId) {
    const url = `${baseUrl}/admin-boards/${boardId}`;

    await axios.delete(url);
  }
}

export const boardApiService = new BoardApiService();
