import { endpoint } from 'constants/endpoint';
import { UserInfo } from 'types/user';
import useSWR, { SWRResponse } from 'swr';

export type ResponseProps = {
  userInfo: UserInfo;
};

const useUserProfile = (userId: string): SWRResponse<ResponseProps, unknown> => {
  const { data, ...others } = useSWR<ResponseProps>(`${endpoint.USER_PROFILE}?targetUserId=${userId}`);
  return {
    data,
    ...others,
  };
};

export default useUserProfile;
