import { apiInstance } from 'providers/axiosProvider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetcher = (url: string): Promise<any> => apiInstance.get(url).then((res) => res.data);

export default fetcher;
