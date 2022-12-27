import { adminApiService } from '../services/AdminApiService';

import Store from './Store';

export default class AdminStore extends Store {
  constructor() {
    super();

    this.admin = {};

    this.loginState = '';
    this.loginErrorMessge = '';

    this.adminErrorMessge = '';
    this.adminState = '';
  }

  async register({
    name, identification, password,
  }) {
    await adminApiService.register({
      name, identification, password,
    });

    this.publish();
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
    try {
      const data = await adminApiService.fetchAdmin();

      this.admin = data;
    } catch (e) {
      const { message } = e.response.data;

      this.changeAdminState('notAdmin', { errorMessage: message });
    }
  }

  changeLoginState(state, { errorMessage = '' } = {}) {
    this.loginErrorMessge = errorMessage;
    this.loginState = state;
    this.publish();
  }

  changeAdminState(state, { errorMessage = '' } = {}) {
    this.adminErrorMessge = errorMessage;
    this.adminState = state;
    this.publish();
  }

  get isAdmin() {
    return this.adminState === 'notAdmin';
  }

  setAdminState() {
    this.adminState = '';
  }

  get isLoginFail() {
    return this.loginState === 'fail';
  }
}

export const adminStore = new AdminStore();
