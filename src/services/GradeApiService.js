/* eslint-disable class-methods-use-this */
import axios from 'axios';

import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class GradeApiService {
  async fetchApplication() {
    const url = `${baseUrl}/admin-posts`;

    const { data } = await axios.get(url);

    return data;
  }

  async fetchProcessingApplication() {
    const url = `${baseUrl}/admin-processing-posts`;

    const { data } = await axios.get(url);

    return data;
  }

  async updateGrade(postId, applicationGrade, name) {
    const url = `${baseUrl}/admin-grade`;

    await axios.patch(url, {
      applicationPostId: postId,
      grade: applicationGrade,
      userName: name,
    });
  }

  async refuseUpdate(postId) {
    const url = `${baseUrl}/admin-post`;

    await axios.delete(url, {
      data: {
        applicationPostId: postId,
      },
    });
  }
}

export const gradeApiService = new GradeApiService();
