import { Box, Button, Grid, Typography } from '@mui/material';
import Breadcrumb from 'components/breadcrumb/Breadcrumb';
import React from 'react';
import { SettingRoute } from 'routers/setting/route';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import Tables from './Table';
const Account = (): JSX.Element => (
  <>
    <Breadcrumb
      items={[
        { label: 'Cài đặt hệ thống', to: '' },
        { label: 'Quản lý tài khoản', to: SettingRoute.ACCOUNT },
      ]}
    />
    <Box mt={1}>
      <Box>
        <Typography variant="h3" mb={2}>
          Danh sách tài khoản
        </Typography>
        <Grid container>
          <Grid item xs={11}>
            <Tables />
          </Grid>
          <Grid item xs={1} mt={12}>
            <Link to={SettingRoute.ADD_ACCOUNT}>
              <Button sx={{ ml: 6, flexDirection: 'column' }} variant="contained" size="medium" startIcon={<AddIcon />}>
                Thêm tài khoản
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </>
);
export default Account;
