import { createTheme, ThemeOptions } from '@mui/material/styles';

// project imports
import colors from './colors';
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import { IThemeOption } from './types';
import themeTypography from './typography';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const theme = (config?: any): ThemeOptions => {
  const themeOption: IThemeOption = {
    colors: config?.colors || colors,
  };

  const themeOptions: ThemeOptions = {
    direction: 'ltr',
    palette: themePalette(themeOption),
    shape: {
      borderRadius: 10,
    },
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '16px',
        '@media (min-width: 600px)': {
          minHeight: '48px',
        },
      },
    },
    typography: themeTypography(themeOption),
  };

  const themes = createTheme(themeOptions);
  themes.components = componentStyleOverrides(themeOption);

  return themes;
};

export default theme;
