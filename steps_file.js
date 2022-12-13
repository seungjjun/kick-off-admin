/* eslint-disable no-undef */
const backdoorBaseUrl = 'http://localhost:8000/admin-backdoor';

module.exports = () => actor({
  setupDatabase() {
    this.amOnPage(`${backdoorBaseUrl}/setup-database`);
  },

  setupAccount() {
    this.amOnPage(`${backdoorBaseUrl}/setup-account`);
  },

  adminLogin() {
    this.amOnPage('/');

    this.fillField('#input-userId', 'jel1y');
    this.fillField('#input-password', 'Qwe1234!');
    this.click('[type=submit]');
  },
});
