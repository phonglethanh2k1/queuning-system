/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios, { AxiosInstance } from 'axios';
import { COOKIE_ACCESS_TOKEN } from 'constants/cookie-keys';
import { getCookie } from './cookieProvider';

const AUTHEN_TOKEN = 'Token';

export function initApiClient(baseURL: string): AxiosInstance {
  const axiosInstance = Axios.create({
    baseURL,
    timeout: 60 * 1000,
    headers: {
      'Content-Type': 'application/json',
      Appkey: process.env.REACT_APP_APP_KEY || '',
    },
    transformRequest: (data, headers: any) => {
      const accessToken = getCookie(COOKIE_ACCESS_TOKEN);

      if (accessToken) {
        // eslint-disable-next-line no-param-reassign
        headers[AUTHEN_TOKEN] = `${accessToken}`;
      }

      return JSON.stringify(data);
    },
  });

  axiosInstance.interceptors.response.use(
    (response: any) => response.data,
    async (error) => Promise.reject(error.response?.data || error)
  );

  return axiosInstance;
}

export const apiInstance = initApiClient(process.env.REACT_APP_API_RESOURCE_SERVER || '');
