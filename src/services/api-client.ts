import axios from 'axios';

const { VITE_API_KEY: API_KEY } = import.meta.env;

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: API_KEY
  }
});
