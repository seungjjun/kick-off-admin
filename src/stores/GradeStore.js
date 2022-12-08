import { gradeApiService } from '../services/GradeApiService';

import Store from './Store';

export default class GradeStore extends Store {
  constructor() {
    super();

    this.applicationPosts = [];

    this.processingApplications = 0;
  }

  async fetchApplication() {
    const data = await gradeApiService.fetchApplication();

    this.applicationPosts = data.applicationPosts;

    this.publish();
  }

  async fetchProcessingApplication() {
    const data = await gradeApiService.fetchProcessingApplication();

    this.processingApplications = data;

    this.publish();
  }

  async updateGrade(postId, applicationGrade, name) {
    await gradeApiService.updateGrade(postId, applicationGrade, name);

    this.publish();
  }

  async refuseUpdate(postId) {
    await gradeApiService.refuseUpdate(postId);

    this.publish();
  }
}

export const gradeStore = new GradeStore();
