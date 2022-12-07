/* eslint-disable class-methods-use-this */
import axios from 'axios';

import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class PostApiService {
  async fetchMostHitPosts() {
    const url = `${baseUrl}/admin-most-hit-posts`;

    const { data } = await axios.get(url);

    return data;
  }

  async fetchTodayPosts() {
    const url = `${baseUrl}/admin-today-posts`;

    const { data } = await axios.get(url);

    return data;
  }

  async fetchPostsByDate() {
    const url = `${baseUrl}/admin-week-posts`;

    const { data } = await axios.get(url);

    return data;
  }
}

export const postApiService = new PostApiService();
