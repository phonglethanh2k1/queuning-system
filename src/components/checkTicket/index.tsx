import InputAdornment from '@material-ui/core/InputAdornment';
import { Box, Button, Grid, Typography } from '@mui/material';
import TextField from 'components/form/TextField';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Icon } from 'components/icons';
import { CheckTicketStatus } from 'types/checkTicket';
import Tables from './Table';

import TicketFilter, { FilterFormType } from './TicketFilter';

const ChangeTicket = (): JSX.Element => {
  const [status, setStatus] = useState<CheckTicketStatus>(CheckTicketStatus.ALL);
  const getFilterValue = useCallback((values: FilterFormType) => {
    setStatus(values?.status);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Grid container spacing={1}>
      <Grid item xs={9.3}>
        <Box bgcolor="common.white" padding="16px" borderRadius="15px">
          <Typography variant="h2" mb="32px" fontWeight="blod">
            Đối soát vé
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <TextField
              placeholder="Tìm bằng số vé..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Icon name="search" />
                  </InputAdornment>
                ),
              }}
              sx={{ fontStyle: 'italic', width: '30%' }}
            />

            <Box>
              <Button variant="contained">Chốt đối soát</Button>
            </Box>
          </Box>
          <Tables filterStatus={status} />
        </Box>
      </Grid>
      <Grid item xs={2.7}>
        <Box sx={{ backgroundColor: 'common.white', borderRadius: '15px' }}>
          <TicketFilter handleFilter={getFilterValue} />
        </Box>
      </Grid>
    </Grid>
  );
};
export default ChangeTicket;
