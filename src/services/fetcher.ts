import { apiInstance } from 'providers/axiosProvider';

const fetcher = (url: string): Promise<any> => apiInstance.get(url).then((res) => res.data);

export default fetcher;
