import { Theme as MUITheme } from '@mui/material';
import colors from './colors';

export interface IThemeOption {
  colors: AppColor;
}

export type AppColor = typeof colors;

export interface AppTheme extends MUITheme {
  colors: AppColor;
}
