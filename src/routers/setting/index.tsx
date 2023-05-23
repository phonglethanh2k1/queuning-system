import React from 'react';
import { Route } from 'react-router-dom';
import SettingPage from 'pages/SettingPage';
import { SettingRoute } from './route';
import RolePage from 'pages/SettingPage/RolePage';
import AccountPage from 'pages/SettingPage/AccountPage';
import UserPage from 'pages/SettingPage/UserPage';
import AddRolePage from 'pages/SettingPage/RolePage/AddRole';

const SettingRouter = (): JSX.Element => (
  <>
    <Route path={SettingRoute.SETTING} element={<SettingPage />} />;
    <Route path={SettingRoute.ROLE} element={<RolePage />} />;
    <Route path={SettingRoute.ADD_ROLE} element={<AddRolePage />} />;
    <Route path={SettingRoute.ACCOUNT} element={<AccountPage />} />;
    <Route path={SettingRoute.USER} element={<UserPage />} />;
  </>
);

export default SettingRouter;
