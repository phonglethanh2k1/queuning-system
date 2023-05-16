import React from 'react';
import { Route } from 'react-router-dom';
import TicketPage from 'pages/Ticket';
import { ManageRoute } from './route';

const ManageRouter = (): JSX.Element => <Route path={ManageRoute.MANAGE} element={<TicketPage />} />;

export default ManageRouter;
