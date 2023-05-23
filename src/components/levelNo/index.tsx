import AddIcon from '@mui/icons-material/Add';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import Tables from './Table';
import Breadcrumb from 'components/breadcrumb/Breadcrumb';
import { LevelNoRoute } from 'routers/levelNo/route';

const LevelNo = (): JSX.Element => (
  <>
    <Breadcrumb
      items={[
        { label: 'Cấp số', to: '' },
        { label: 'Danh sách cấp số', to: LevelNoRoute.LEVEL_NO },
      ]}
    />
    <Box mt={1}>
      <Typography variant="h3" mb={2}>
        Quản lý cấp số
      </Typography>
      <Grid container>
        <Grid item xs={11} />
        <Grid item xs={11}>
          <Tables />
        </Grid>
        <Grid item xs={1} mt={12}>
          <Link to={LevelNoRoute.NEW_NUMBER_LV}>
            <Button sx={{ ml: 6, flexDirection: 'column' }} variant="contained" size="medium" startIcon={<AddIcon />}>
              Cấp số mới
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  </>
);
export default LevelNo;
