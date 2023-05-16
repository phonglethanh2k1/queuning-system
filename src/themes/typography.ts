/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { IThemeOption } from './types';

export default function themeTypography(theme: IThemeOption): TypographyOptions {
  return {
    fontFamily: 'Montserrat',
    h6: {
      fontWeight: 600,
      color: theme.colors.textPrimary,
      fontSize: '1rem',
    },
    h5: {
      fontSize: '0.875rem',
      color: theme.colors.textPrimary,
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.25rem',
      color: theme.colors.textPrimary,
      fontFamily: 'Montserrat',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.5rem',
      color: theme.colors.textMain,
      fontFamily: 'Montserrat',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      color: theme.colors.black,
      fontFamily: 'Montserrat',
      fontWeight: 600,
    },
    h1: {
      fontSize: '2.5rem',
      color: theme.colors.textPrimary,
      fontFamily: 'Montserrat',
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: theme.colors.textPrimary,
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: theme.colors.textSecondary,
    },
    caption: {
      fontSize: '0.75rem',
      color: theme.colors.textPrimary,
      fontWeight: 400,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      fontFamily: 'Montserrat',
      color: theme.colors.textPrimary,
      lineHeight: '1.334em',
    },
    body2: {
      letterSpacing: '0em',
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: '1.5em',
      fontFamily: 'Montserrat',
      color: theme.colors.textMain,
    },
    button: {},
  };
}
