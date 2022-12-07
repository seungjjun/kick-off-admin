import { commentApiService } from '../services/CommentApiService';

import Store from './Store';

export default class CommentStore extends Store {
  constructor() {
    super();

    this.todayWrittenCommentsNumber = 0;

    this.commentsByDate = {};
  }

  async fetchTodayComment() {
    const data = await commentApiService.fetchTodayComment();

    this.todayWrittenCommentsNumber = data.commentsNumber;

    this.publish();
  }

  async fetchCommentsByDate() {
    const comments = await commentApiService.fetchCommentsByDate();

    this.commentsByDate = { comments };

    this.publish();
  }
}

export const commentStore = new CommentStore();
