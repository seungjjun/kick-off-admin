/* eslint-disable class-methods-use-this */
import axios from 'axios';

import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class AdminApiService {
  constructor() {
    this.accessToken = '';
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  async register({
    name, identification, password,
  }) {
    const url = `${baseUrl}/admin`;

    await axios.post(url, {
      name, identification, password,
    });
  }

  async login({ userId, password }) {
    const url = `${baseUrl}/admin-session`;

    const { data } = await axios.post(url, {
      identification: userId,
      password,
    });

    return data;
  }

  async fetchAdmin() {
    const url = `${baseUrl}/admin`;

    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    return data;
  }
}

export const adminApiService = new AdminApiService();
