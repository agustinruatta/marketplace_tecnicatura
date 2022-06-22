import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products',
});

export default {
  getProduct() {
    return apiClient.get('/1');
  },
  getProducts() {
    return apiClient.get('/');
  },
};
