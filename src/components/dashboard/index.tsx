import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import Charts from './Chart';
import Rectangle from './Rectangle';

const Home = (): JSX.Element => (
  <Box sx={{ width: '70%' }}>
    <Typography variant="h3">Dashboard</Typography>
    <Typography variant="h3" py={4}>
      Biểu đồ cấp số
    </Typography>
    <Box>
      <Rectangle />
      <Charts />
    </Box>
  </Box>
);
export default Home;
