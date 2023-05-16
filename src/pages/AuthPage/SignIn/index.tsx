import React, { FC } from 'react';

import useConfigSignIn from 'services/auth/signIn/useConfig';
import SignInForm from './SignInForm';

const SignIn: FC = () => {
  const { data } = useConfigSignIn();

  return <SignInForm data={{ login: data.login }} />;
};

export default SignIn;
