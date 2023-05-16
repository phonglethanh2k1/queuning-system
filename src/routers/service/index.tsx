import ServicePage from "pages/ServicePage";
import React from "react";

import { Route } from "react-router-dom";
import { ServiceRoute } from "./route";
import CreatePage from "pages/ServicePage/CreatePage";
import DetailPage from "pages/ServicePage/DetailPage";
import UpdatePage from "pages/ServicePage/UpdatePage";

const ServiceRouter = (): JSX.Element => (
  <>
    <Route path={ServiceRoute.SERVICE} element={<ServicePage />} />
    <Route path={ServiceRoute.ADD_SERVICE} element={<CreatePage />} />
    <Route path={ServiceRoute.DETAIL_SERVICE} element={<DetailPage />} />
    <Route path={ServiceRoute.UPDATE_SERVICE} element={<UpdatePage />} />
  </>
);

export default ServiceRouter;
