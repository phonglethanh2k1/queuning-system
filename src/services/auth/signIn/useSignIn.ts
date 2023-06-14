/* eslint-disable no-empty-pattern */
import { COOKIE_ACCESS_TOKEN } from 'constants/cookie-keys';
import { setCookie } from 'providers/cookieProvider';
import { useCallback, useState } from 'react';

export type RequestProps = {
  step: string;
  values: object;
};

export type ResponseProps = {
  accessToken(arg0: string, accessToken: any): unknown;
  data: {
    token: string;
  };
  code: number;
  message: string;
};

export function signIn({}: RequestProps): Promise<ResponseProps> {
  return new Promise((res) => {
    res({
      code: 200,
      data: {
        token: 'token',
      },
      accessToken: (arg0: string, accessToken: any) => {},
      message: 'Đăng nhập thành công!',
    });
  });
}

const useSignIn = (): { mutate(request: RequestProps): Promise<ResponseProps>; loading: boolean } => {
  const [loading, setLoading] = useState(false);

  const mutate = useCallback((request: RequestProps) => {
    setLoading(true);
    return signIn(request)
      .then((data) => {
        if (data?.data?.token) {
          setCookie(COOKIE_ACCESS_TOKEN, data.data.token);
        }

        return data;
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    mutate,
    loading,
  };
};

export default useSignIn;
