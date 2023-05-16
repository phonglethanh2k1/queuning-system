import * as React from 'react';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = (): JSX.Element => (
  <Box
    sx={{
      textAlign: 'center',
      margin: 16,
    }}
  >
    <CircularProgress color="primary" />
  </Box>
);

export default Spinner;
