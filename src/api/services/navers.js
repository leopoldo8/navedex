import API from '../index';

class NaversService extends API {
  index() {
    return this.get('navers');
  }

  create(data) {
    return this.post('navers', data);
  }

  show(id) {
    return this.get(`navers/${id}`);
  }

  update(id, data) {
    return this.put(`navers/${id}`, data);
  }

  remove(id) {
    return this.delete(`navers/${id}`);
  }
}

export default new NaversService();
