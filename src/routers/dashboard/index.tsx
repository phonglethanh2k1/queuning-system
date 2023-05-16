import React from 'react';
import Dashboard from 'pages/DashboardPage';
import { Route } from 'react-router-dom';
import { DashboardRoute } from './route';

const DashboardRouter = (): JSX.Element => <Route path={DashboardRoute.HOME} element={<Dashboard />} />;

export default DashboardRouter;
