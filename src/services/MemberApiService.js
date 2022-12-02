/* eslint-disable class-methods-use-this */
import axios from 'axios';

import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class MemberApiService {
  async fetchUsers() {
    const url = `${baseUrl}/admin-users`;

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
}

export const memberApiService = new MemberApiService();
