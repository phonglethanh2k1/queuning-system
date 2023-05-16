import React from 'react';
import { Route } from 'react-router-dom';
import SignIn from 'pages/AuthPage/SignIn';
import { AuthRoute } from './route';

const AuthRouter = (): JSX.Element => <Route path={AuthRoute.SIGN_IN} element={<SignIn />} />;

export default AuthRouter;
