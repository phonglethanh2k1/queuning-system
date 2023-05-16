/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

import { PaletteOptions } from '@mui/material';
import { IThemeOption } from './types';

export default function themePalette(theme: IThemeOption): PaletteOptions {
  return {
    mode: 'light',
    primary: {
      light: theme.colors?.primaryLight,
      main: theme.colors?.primaryMain,
      dark: theme.colors?.primaryDark,
      contrastText: theme.colors?.primaryContractText,
    },
    secondary: {
      light: theme.colors?.secondaryLight,
      main: theme.colors?.secondaryMain,
      dark: theme.colors?.secondaryDark,
      contrastText: theme.colors?.secondaryContractText,
    },
    error: {
      light: theme.colors?.errorLight,
      main: theme.colors?.errorMain,
      dark: theme.colors?.errorDark,
      contrastText: theme.colors?.errorContractText,
    },
    warning: {
      light: theme.colors?.warningLight,
      main: theme.colors?.warningMain,
      dark: theme.colors?.warningDark,
      contrastText: theme.colors?.warningContractText,
    },
    success: {
      light: theme.colors?.successLight,
      main: theme.colors?.successMain,
      dark: theme.colors?.successDark,
      contrastText: theme.colors?.successContractText,
    },
    info: {
      main: theme.colors?.infoMain,
      light: theme.colors?.infoLight,
      dark: theme.colors?.infoDark,
      contrastText: theme.colors?.infoContractText,
    },
    grey: {
      50: theme.colors?.grey50,
      100: theme.colors?.grey100,
      200: theme.colors?.grey200,
      300: theme.colors?.grey300,
      400: theme.colors?.grey400,
      500: theme.colors.grey500,
      600: theme.colors.grey600,
      700: theme.colors.grey700,
      800: theme.colors.grey800,
      900: theme.colors.grey900,
    },
    text: {
      primary: theme.colors.textPrimary,
      secondary: theme.colors.textSecondary,
      disabled: theme.colors.textDisabled,
    },
    background: {
      // paper: theme.colors.backgroundDefault,
      default: theme.colors.backgroundDefault,
    },
    common: {
      black: theme.colors?.black,
      white: theme.colors.white,
    },
    divider: theme.colors.divider,
  };
}
