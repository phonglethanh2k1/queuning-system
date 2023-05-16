import axiosInstance from './axios-instance';

const fetcher = (url: string): Promise<unknown> => axiosInstance.get(url).then((res) => res.data);

export default fetcher;
