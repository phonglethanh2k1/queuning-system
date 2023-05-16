import axios from 'axios';
import { AuthRoute } from 'routers/auth/route';

// project imports

// ==============================|| INSTANCE ||============================== //

export const BASE_URL = 'https://app.staging.api.heureka-solutions.com/v1';

const getTokenFromStorage = (): null => null;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// ==============================|| INTERCEPTORS ||============================== //

instance.interceptors.request.use(
  (config) => {
    const token = getTokenFromStorage();

    if (token) {
      // config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.clear();

      if (window.location.pathname !== AuthRoute.SIGN_IN) {
        window.location.href = AuthRoute.SIGN_IN;
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
