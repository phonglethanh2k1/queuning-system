import LevelNoPage from 'pages/LevelNoPage';
import React from 'react';

import { Route } from 'react-router-dom';
import { LevelNoRoute } from './route';
import DetailPage from 'pages/LevelNoPage/DetailPage';
import NewNumberPage from 'pages/LevelNoPage/NewNumber';

const LevelNoRouter = (): JSX.Element => (
    <>
    <Route path={LevelNoRoute.NEW_NUMBER_LV} element={<NewNumberPage />} />
    <Route path={LevelNoRoute.DETAIL_LEVEL_NO} element={<DetailPage />} />
    <Route path={LevelNoRoute.LEVEL_NO} element={<LevelNoPage />}/>
    </>
);

export default LevelNoRouter;
