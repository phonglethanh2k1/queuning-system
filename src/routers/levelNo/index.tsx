import LevelNoPage from 'pages/LevelNoPage';
import React from 'react';

import { Route } from 'react-router-dom';
import { LevelNoRoute } from './route';

const LevelNoRouter = (): JSX.Element => <Route path={LevelNoRoute.LEVEL_NO} element={<LevelNoPage />} />;

export default LevelNoRouter;
