import ServicePage from 'pages/ServicePage';
import React from 'react';

import { Route } from 'react-router-dom';
import { ServiceRoute } from './route';

const ServiceRouter = (): JSX.Element => <Route path={ServiceRoute.SERVICE} element={<ServicePage />} />;

export default ServiceRouter;
