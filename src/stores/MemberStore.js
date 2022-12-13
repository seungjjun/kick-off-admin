import { memberApiService } from '../services/MemberApiService';
import Store from './Store';

export default class MemberStore extends Store {
  constructor() {
    super();

    this.errorMessage = '';
    this.successMessage = '';

    this.members = [];
    this.totalMembers = [];

    this.user = {};

    this.usersNumber = 0;

    this.todaySignupUserNumber = 0;

    this.searchState = '';
    this.removeState = '';
  }

  async fetchUsers() {
    const data = await memberApiService.fetchUsers();

    this.members = data.members;

    this.usersNumber = data.members.users.length;

    this.publish();
  }

  async fetchTodaySignupNumber() {
    const data = await memberApiService.fetchTodaySignupNumber();

    this.todaySignupUserNumber = data.users.length;

    this.publish();
  }

  async changeGrade(checkedUserId, grade) {
    await memberApiService.changeGrade(checkedUserId, grade);

    this.fetchUsers();

    this.publish();
  }

  async removeUser(checkedUserId) {
    await memberApiService.removeUser(checkedUserId);

    this.changeRemoveState('success', { successMessage: '탈퇴 처리가 되었습니다.' });

    this.fetchUsers();

    this.publish();
  }

  async searchMember(member) {
    try {
      const data = await memberApiService.searchMember(member);

      this.user = data;

      this.changeSearchState('success');
    } catch (e) {
      const message = e.response.data;

      this.changeSearchState('fail', { errorMessage: message });
    }
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

  changeSearchState(state, { errorMessage = '' } = {}) {
    this.errorMessage = errorMessage;

    this.searchState = state;

    this.publish();
  }

  changeRemoveState(state, { successMessage = '' } = {}) {
    this.successMessage = successMessage;

    this.removeState = state;

    this.publish();
  }

  get isSearchFail() {
    return this.searchState === 'fail';
  }

  get isRemoveSuccess() {
    return this.removeState === 'success';
  }

  reset() {
    this.user = {};
    this.removeState = '';

    this.publish();
  }
}

export const memberStore = new MemberStore();
