import React from 'react';
import { Route } from 'react-router-dom';
import SettingPage from 'pages/SettingPage';
import { SettingRoute } from './route';

const SettingRouter = (): JSX.Element => <Route path={SettingRoute.SETTING} element={<SettingPage />} />;

export default SettingRouter;
