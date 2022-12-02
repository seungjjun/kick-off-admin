import { memberApiService } from '../services/MemberApiService';
import Store from './Store';

export default class MemberStore extends Store {
  constructor() {
    super();

    this.members = [];

    this.totalMembers = [];
  }

  async fetchUsers() {
    const data = await memberApiService.fetchUsers();

    this.members = data.members;

    this.publish();
  }

  async changeGrade(checkedUserId, grade) {
    await memberApiService.changeGrade(checkedUserId, grade);

    this.fetchUsers();

    this.publish();
  }

  makeUserArray() {
    this.totalMembers = [];

    for (let i = 0; i < this.members.users.length; i += 1) {
      this.totalMembers.push({
        user: this.members.users[i],
        postNumber: this.members.postNumbers[i],
        commentNumber: this.members.commentNumbers[i],
      });
    }
  }
}

export const memberStore = new MemberStore();
