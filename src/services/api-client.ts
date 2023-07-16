import axios from 'axios';

const { VITE_API_KEY: API_KEY } = import.meta.env;

/**
 * An axios instance is called with inbuilt create() method by passing
 * - baseUrl
 * - params
 *
 * Here, params are important for passing API keys for headers by default
 */
export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: API_KEY,
  },
});
