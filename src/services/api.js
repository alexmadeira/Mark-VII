import axios from 'axios';

const api = axios.create({
  baseURL: 'http://data.alexmadeira.com.br',
});

export default api;
