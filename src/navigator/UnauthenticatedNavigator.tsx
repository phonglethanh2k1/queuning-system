import * as React from 'react';
import { Route } from 'react-router-dom';
import { getCookie } from 'providers/cookieProvider';
import { COOKIE_ACCESS_TOKEN } from 'constants/cookie-keys';

import { RouteProps } from './types';
import BaseNavigator from './BaseNavigator';

export const UnauthenticatedNavigator = (props: RouteProps): JSX.Element => {
  if (getCookie(COOKIE_ACCESS_TOKEN)) {
    return <Route path="/" />;
  }

  return <BaseNavigator {...props} />;
};

export default UnauthenticatedNavigator;
