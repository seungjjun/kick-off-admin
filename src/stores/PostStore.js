import { postApiService } from '../services/PostApiService';

import Store from './Store';

export default class PostStore extends Store {
  constructor() {
    super();

    this.mostHitPosts = [];
    this.users = [];

    this.postsByDate = {};

    this.totalPostNumber = 0;
    this.todayCreatedPostsNumber = 0;

    this.adminErrorMessge = '';
    this.adminState = '';
  }

  async fetchPosts() {
    const data = await postApiService.fetchPosts();

    this.totalPostNumber = data;

    this.publish();
  }

  async fetchMostHitPosts() {
    const data = await postApiService.fetchMostHitPosts();

    this.mostHitPosts = data.posts;

    this.users = data.users;

    this.publish();
  }

  async fetchTodayPosts() {
    const data = await postApiService.fetchTodayPosts();

    this.todayCreatedPostsNumber = data.posts.length;

    this.publish();
  }

  async fetchPostsByDate() {
    try {
      const posts = await postApiService.fetchPostsByDate();

      this.postsByDate = { posts };
    } catch (e) {
      const { message } = e.response.data;

      this.changeAdminState('notAdmin', { errorMessage: message });
    }
  }

  changeAdminState(state, { errorMessage = '' } = {}) {
    this.adminErrorMessge = errorMessage;
    this.adminState = state;
    this.publish();
  }

  get isAdmin() {
    return this.adminState === 'notAdmin';
  }
}

export const postStore = new PostStore();
