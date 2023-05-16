import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import useSiteConfig from 'services/site/useSiteConfig';
import theme from 'themes';

export interface Props {
  children: React.ReactNode;
  page: string;
}

const CustomizeThemeProvider = (props: Props): JSX.Element => {
  const { children, page } = props;
  const { data: config } = useSiteConfig(page);

  return (
    <ThemeProvider theme={theme(config)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
export default CustomizeThemeProvider;
