import React, { memo } from 'react';
import { Box } from '@mui/material';
import Ticket from 'components/ticket';

const TicketPage = memo(
  (): JSX.Element => (
    <Box>
      <Ticket />
    </Box>
  )
);
export default TicketPage;
