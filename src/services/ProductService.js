import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products',
});

export default {
  getProduct(id) {
    return apiClient.get(`/${id}`);
  },
  getProducts() {
    return apiClient.get('/');
  },
};
