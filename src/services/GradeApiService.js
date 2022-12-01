/* eslint-disable class-methods-use-this */
import axios from 'axios';

import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class GradeApiService {
  async fetchApplication() {
    const url = `${baseUrl}/posts`;

    const { data } = await axios.get(url);

    return data;
  }

  async updateGrade(postId, applicationGrade, name) {
    const url = `${baseUrl}/grade`;

    await axios.patch(url, {
      applicationPostId: postId,
      grade: applicationGrade,
      userName: name,
    });
  }

  async refuseUpdate(postId) {
    const url = `${baseUrl}/post`;

    await axios.delete(url, {
      data: {
        applicationPostId: postId,
      },
    });
  }
}

export const gradeApiService = new GradeApiService();
