import { postApiService } from '../services/PostApiService';

import Store from './Store';

export default class PostStore extends Store {
  constructor() {
    super();

    this.mostHitPosts = [];
    this.users = [];

    this.postsByDate = {};

    this.todayCreatedPostsNumber = 0;
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
    const posts = await postApiService.fetchPostsByDate();

    this.postsByDate = { posts };

    this.publish();
  }
}

export const postStore = new PostStore();
