import * as React from "react";
import { Route } from "react-router-dom";
import { RouteProps } from "./types";

export const BaseNavigator = (props: RouteProps) => {
  return <Route path={props.path} element={props.element} />;
};

export default BaseNavigator;
