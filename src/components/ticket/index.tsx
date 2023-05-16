import { Box, Typography } from '@mui/material';
import React from 'react';

import Tables from './Table';

const Ticket = (): JSX.Element => (
  <Box bgcolor="common.white" padding="16px" borderRadius="15px">
    <Typography variant="h2" mb="32px" fontWeight="blod">
      Danh sách vé
    </Typography>

    <Tables />
  </Box>
);
export default Ticket;
