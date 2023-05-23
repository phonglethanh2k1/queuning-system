import { Box, Button, Grid, Typography } from '@mui/material';
import Breadcrumb from 'components/breadcrumb/Breadcrumb';
import React from 'react';
import { SettingRoute } from 'routers/setting/route';
import AddIcon from '@mui/icons-material/Add';
import Tables from './Table';
import { Link } from 'react-router-dom';
const Role = (): JSX.Element => (
  <>
    <Breadcrumb
      items={[
        { label: 'Cài đặt hệ thống', to: '' },
        { label: 'Quản lý vai trò', to: SettingRoute.ROLE },
      ]}
    />
    <Box mt={1}>
      <Box>
        <Typography variant="h3" mb={2}>
          Danh sách vai trò
        </Typography>
        <Grid container>
          <Grid item xs={11}>
            <Tables />
          </Grid>
          <Grid item xs={1} mt={12}>
            <Link to={SettingRoute.ADD_ROLE}>
              <Button sx={{ ml: 6, flexDirection: 'column' }} variant="contained" size="medium" startIcon={<AddIcon />}>
                Thêm vai trò
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </>
);
export default Role;
