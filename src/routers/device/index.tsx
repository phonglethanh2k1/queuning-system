import DevicePage from 'pages/DevicePage';
import React from 'react';

import { Route } from 'react-router-dom';
import CreatePage from 'pages/DevicePage/CreatePage';
import DetailPage from 'pages/DevicePage/DetailPage';
import UpdatePage from 'pages/DevicePage/UpdatePage';
import { DeviceRoute } from './route';
import BasicPagination from 'components/device/Pagination';

const DeviceRouter = (): JSX.Element => (
  <>
    <Route path={DeviceRoute.DEVICE} element={<DevicePage />} />
    <Route path={DeviceRoute.ADD_DEVICE} element={<CreatePage />} />
    <Route path={DeviceRoute.DETAIL_DEVICE} element={<DetailPage />} />
    <Route path={DeviceRoute.UPDATE_DEVICE} element={<UpdatePage />} />
    <Route path={DeviceRoute.DEVICE_PAGING} element={<DevicePage />} />
  </>
);

export default DeviceRouter;
