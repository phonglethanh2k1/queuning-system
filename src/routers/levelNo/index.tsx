import LevelNoPage from 'pages/LevelNoPage';
import React from 'react';

import { Route } from 'react-router-dom';
import { LevelNoRoute } from './route';
import CreatePage from 'pages/LevelNoPage/CreatePage';
import DetailPage from 'pages/LevelNoPage/DetailPage';

const LevelNoRouter = (): JSX.Element => (
    <>
    <Route path={LevelNoRoute.NEW_NUMBER_LV} element={<CreatePage />} />
    <Route path={LevelNoRoute.DETAIL_LEVEL_NO} element={<DetailPage />} />
    <Route path={LevelNoRoute.LEVEL_NO} element={<LevelNoPage />}/>
    </>
);

export default LevelNoRouter;
