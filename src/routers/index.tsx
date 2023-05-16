import MainLayout from 'layout/MainLayout';
import MinimalLayout from 'layout/MinimalLayout';
import AuthenticatedNavigator from 'navigator/AuthenticatedNavigator';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutHome from 'layout/LayoutHome';
import AuthRoute from './auth';
import DashboardRouter from './dashboard';

import { PATH_APP, PATH_AUTH, PATH_DASHBOARD } from './path';
import SettingRouter from './setting';
import ManageRouter from './manage';
import ExchangeRouter from './exchange';
import DeviceRouter from './device';
import ServiceRouter from './service';
import LevelNoRouter from './levelNo';
import ReportRouter from './report';

const Routers = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={PATH_APP}
        element={
          <AuthenticatedNavigator>
            <MainLayout />
          </AuthenticatedNavigator>
        }
      >
        {SettingRouter()}
        {ManageRouter()}
        {ExchangeRouter()}
        {DeviceRouter()}
        {ServiceRouter()}
        {LevelNoRouter()}
        {ReportRouter()}
      </Route>
      <Route path={PATH_DASHBOARD} element={<LayoutHome />}>
        {DashboardRouter()}
      </Route>
      <Route path={PATH_AUTH} element={<MinimalLayout />}>
        {AuthRoute()}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Routers;
