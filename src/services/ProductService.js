import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/agustinruatta/fake_json_server_db',
});

export default {
  getProduct() {
    return apiClient.get('/products/1');
  },
};
