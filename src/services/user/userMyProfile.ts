import { endpoint } from 'constants/endpoint';
import { UserInfo } from 'types/user';
import useSWR, { SWRResponse } from 'swr';
import { getCookie } from 'providers/cookieProvider';
import { COOKIE_USER_ID } from 'constants/cookie-keys';

export type ResponseProps = {
  userInfo: UserInfo;
};

const useMyProfile = (): SWRResponse<ResponseProps> => {
  const { data, ...others } = useSWR<ResponseProps>(
    `${endpoint.USER_PROFILE}?targetUserId=${getCookie(COOKIE_USER_ID)}`
  );
  return {
    data,
    ...others,
  };
};

export default useMyProfile;
