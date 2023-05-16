import ReportPage from 'pages/ReportPage';
import React from 'react';

import { Route } from 'react-router-dom';
import { ReportRoute } from './route';

const ReportRouter = (): JSX.Element => <Route path={ReportRoute.REPORT} element={<ReportPage />} />;

export default ReportRouter;
