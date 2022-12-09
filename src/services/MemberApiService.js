/* eslint-disable class-methods-use-this */
import axios from 'axios';

import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class MemberApiService {
  constructor() {
    this.accessToken = '';
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  async login({ userId, password }) {
    const url = `${baseUrl}/admin-session`;

    const { data } = await axios.post(url, {
      identification: userId,
      password,
    });

    return data;
  }

  async fetchUsers() {
    const url = `${baseUrl}/admin-users`;

    const { data } = await axios.get(url);

    return data;
  }

  async fetchTodaySignupNumber() {
    const url = `${baseUrl}/admin-today-signup-users`;

    const { data } = await axios.get(url);

    return data;
  }

  async changeGrade(checkedUserId, grade) {
    const url = `${baseUrl}/admin-users`;

    axios.patch(url, {
      usersId: checkedUserId,
      grade,
    });
  }

  async removeUser(checkedUserId) {
    const url = `${baseUrl}/admin-users`;

    axios.delete(url, {
      data: {
        usersId: checkedUserId,
      },
    });
  }

  async searchMember(member) {
    const url = `${baseUrl}/admin-user`;

    const { data } = await axios.get(url, {
      params: {
        userName: member,
      },
    });

    return data;
  }
}

export const memberApiService = new MemberApiService();
