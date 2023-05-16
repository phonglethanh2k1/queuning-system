import React from 'react';

import { Box, Grid, Typography } from '@mui/material';

import { Outlet } from 'react-router-dom';

const MinimalLayout = (): JSX.Element => (
  <Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: 'common.white',
      }}
    >
      <Grid container m="auto">
        <Grid item xs={5} sx={{ backgroundColor: 'rgba(0,0,0,0.09)' }}>
          <Outlet />
        </Grid>
        <Grid item xs={7} m="auto">
          <Box
            component="img"
            src="/images/cms/group-341.png"
            sx={{
              position: 'relative',
              transform: 'translateX(30%)',
            }}
          />
          <Box sx={{ position: 'absolute', transform: 'translate(165%, -430%)' }}>
            <Typography variant="body2">Hệ Thống </Typography>
            <Typography variant="h2" textTransform="uppercase">
              Quản lý hệ thống
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

export default MinimalLayout;
