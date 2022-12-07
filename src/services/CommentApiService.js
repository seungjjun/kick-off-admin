/* eslint-disable class-methods-use-this */
import axios from 'axios';

import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class CommentApiService {
  async fetchTodayComment() {
    const url = `${baseUrl}/admin-today-comments`;

    const { data } = await axios.get(url);

    return data;
  }

  async fetchCommentsByDate() {
    const url = `${baseUrl}/admin-week-comments`;

    const { data } = await axios.get(url);

    return data;
  }
}

export const commentApiService = new CommentApiService();
