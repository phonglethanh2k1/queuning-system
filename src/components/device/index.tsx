import AddIcon from '@mui/icons-material/Add';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import { DeviceRoute } from 'routers/device/route';
import Tables from './Table';

const Device = (): JSX.Element => (
  <Box>
    <Typography variant="h3" mb={2}>
      Danh Sách thiết bị
    </Typography>
    <Grid container>
      <Grid item xs={11} />
      <Grid item xs={11}>
        <Tables />
      </Grid>
      <Grid item xs={1} mt={3}>
        <Link to={DeviceRoute.ADD_DEVICE}>
          <Button sx={{ ml: 6, flexDirection: 'column' }} variant="contained" size="medium" startIcon={<AddIcon />}>
            Thêm thiết bị
          </Button>
        </Link>
      </Grid>
    </Grid>
  </Box>
);
export default Device;
