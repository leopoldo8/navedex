import API from '../index';

class AuthService extends API {
  login(data) {
    return this.post('users/login', data);
  }
}

export default new AuthService();
