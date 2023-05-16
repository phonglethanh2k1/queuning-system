import React from 'react';
import { Route } from 'react-router-dom';
import ChangeTicket from 'components/checkTicket';
import { ExchangeRoute } from './route';

const ExchangeRouter = (): JSX.Element => <Route path={ExchangeRoute.EXCHANGE} element={<ChangeTicket />} />;

export default ExchangeRouter;
