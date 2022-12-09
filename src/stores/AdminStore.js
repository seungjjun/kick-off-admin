import { adminApiService } from '../services/AdminApiService';

import Store from './Store';

export default class AdminStore extends Store {
  constructor() {
    super();

    this.admin = {};

    this.loginState = '';
    this.loginErrorMessge = '';
  }

  async login({ userId, password }) {
    try {
      const data = await adminApiService.login({ userId, password });

      this.name = data.name;

      return data.accessToken;
    } catch (e) {
      const { message } = e.response.data;

      this.changeLoginState('fail', { errorMessage: message });
      return '';
    }
  }

  async fetchAdmin() {
    const data = await adminApiService.fetchAdmin();

    this.admin = data;

    this.publish();
  }

  changeLoginState(state, { errorMessage = '' } = {}) {
    this.loginErrorMessge = errorMessage;
    this.loginState = state;
    this.publish();
  }

  get isLoginFail() {
    return this.loginState === 'fail';
  }
}

export const adminStore = new AdminStore();
