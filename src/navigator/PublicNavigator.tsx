import * as React from "react";
import BaseNavigator from "./BaseNavigator";
import { RouteProps } from "./types";

export const PublicNavigator = (props: RouteProps) => {
  return <BaseNavigator {...props} />;
};
