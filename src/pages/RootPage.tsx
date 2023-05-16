import React from 'react';
import { Route } from 'react-router-dom';
import { DashboardRoute } from 'routers/dashboard/route';

const Root = (): JSX.Element => <Route path={DashboardRoute.HOME} />;

export default Root;
