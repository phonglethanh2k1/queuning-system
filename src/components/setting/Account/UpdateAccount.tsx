import { Box, Button, Grid, MenuItem, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import useYupValidationResolver from 'helpers/useYupValidationResolver';
import TextField from 'components/form/controller/TextField';
import { useDispatch } from 'react-redux';
import { addDeviceAsync } from 'redux/slices/dataSlice';
import { useNavigate } from 'react-router-dom';
import { connectionStatus, operationStatus } from 'types/device';
import { DeviceRoute } from 'routers/device/route';
import Breadcrumb from 'components/breadcrumb/Breadcrumb';
import { SettingRoute } from 'routers/setting/route';
import { addAccountAsync, updateAccountAsync } from 'redux/slices/accountSlices';

const validation = yup.object({});

type UpdateAccount = {
  fullName: string;
  userName: string;
  phoneNumber: string;
  password: string;
  email: string;
  retypePassword: string;
  role?: string;
  status: any;
};

type Props = {
  account: any;
};
const UpdateAccount = (props: Props): JSX.Element => {
  const { account } = props;
  const options = ['Tất cả', 'Ngưng hoạt động', 'hoạt động'];
  const optionsRole = ['Kế toán', 'Quản lý', 'Admin'];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resolver = useYupValidationResolver(validation);
  const methods = useForm<UpdateAccount>({
    resolver,
    defaultValues: {
      fullName: account.fullName,
      userName: account.userName,
      phoneNumber: account.phoneNumber,
      password: account.password,
      email: account.email,
      retypePassword: account.retypePassword,
      role: account.role,
      status: account.status,
    },
  });
  const handleSubmit = async (values?: any) => {
    console.log(values);
    dispatch<any>(updateAccountAsync(values));
    navigate(SettingRoute.ACCOUNT);
  };
  const handleCancel = () => {
    methods.reset({
      fullName: '',
      userName: '',
      phoneNumber: '',
      password: '',
      email: '',
      retypePassword: '',
      role: '',
      status: '',
    });
  };
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Cài đặt hệ thống', to: '' },
          { label: 'Quản lý tài khoản', to: SettingRoute.ACCOUNT },
          { label: 'Cập nhật tài khoản', to: `${SettingRoute.UPDATE_ACCOUNT.replace(':id', account.id)}` },
        ]}
      />
      <Box mt={1}>
        <Typography variant="h3" mb={2}>
          Quản lý tài khoản
        </Typography>
        <Box
          sx={{
            backgroundColor: 'common.white',
            width: '90%',
            px: 3,
            py: 4,
            borderRadius: '16px',
          }}
        >
          <FormProvider {...methods}>
            <Box component="form" noValidate onSubmit={methods.handleSubmit(handleSubmit)}>
              <Grid container mb={3} spacing={3}>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      position: 'relative',
                      ':after': {
                        position: 'absolute',
                        content: '"*"',
                        color: 'error.dark',
                        left: '65px',
                      },
                    }}
                  />
                  <TextField name="fullName" label="Họ tên:" placeholder="Nhập họ tên" />
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      position: 'relative',
                      ':after': {
                        position: 'absolute',
                        content: '"*"',
                        color: 'error.dark',
                        left: '130px',
                      },
                    }}
                  />
                  <TextField name="userName" label="Tên đăng nhập:" placeholder="Nhập tên đăng nhập" />
                </Grid>
              </Grid>
              <Grid container mb={3} spacing={3}>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      position: 'relative',
                      ':after': {
                        position: 'absolute',
                        content: '"*"',
                        color: 'error.dark',
                        left: '115px',
                      },
                    }}
                  />
                  <TextField name="phoneNumber" label="Số điện thoại:" placeholder="Nhập số điện thoại" />
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      position: 'relative',
                      ':after': {
                        position: 'absolute',
                        content: '"*"',
                        color: 'error.dark',
                        left: '90px',
                      },
                    }}
                  />
                  <TextField name="password" label="Mật khẩu:" placeholder="Nhập mật khẩu" type="password" />
                </Grid>
              </Grid>
              <Grid container mb={3} spacing={3}>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      position: 'relative',
                      ':after': {
                        position: 'absolute',
                        content: '"*"',
                        color: 'error.dark',
                        left: '55px',
                      },
                    }}
                  />
                  <TextField name="email" label="Email:" placeholder="Nhập email" />
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      position: 'relative',
                      ':after': {
                        position: 'absolute',
                        content: '"*"',
                        color: 'error.dark',
                        left: '160px',
                      },
                    }}
                  />
                  <TextField name="retypePassword" label="Nhập lại mật khẩu:" type="password" />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      position: 'relative',
                      ':after': {
                        position: 'absolute',
                        content: '"*"',
                        color: 'error.dark',
                        left: '60px',
                      },
                    }}
                  />
                  <TextField name="role" label="Vai trò:" select>
                    {optionsRole.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      position: 'relative',
                      ':after': {
                        position: 'absolute',
                        content: '"*"',
                        color: 'error.dark',
                        left: '95px',
                      },
                    }}
                  />
                  <TextField name="status" label="Tình trạng:" select>
                    {options.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
              <Typography
                variant="h6"
                fontStyle="italic"
                padding="10px"
                fontWeight="300"
                sx={{
                  position: 'relative',
                  ':before': {
                    position: 'absolute',
                    content: '"*"',
                    color: 'error.dark',
                    left: '0',
                  },
                }}
              >
                là trường thông tin bắt buộc
              </Typography>
              <Box textAlign="center" mt={3}>
                <Button variant="outlined" size="large" onClick={handleCancel}>
                  Hủy bỏ
                </Button>

                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    ml: 4,
                  }}
                  type="submit"
                >
                  Cập nhật
                </Button>
              </Box>
            </Box>
          </FormProvider>
        </Box>
      </Box>
    </>
  );
};
export default UpdateAccount;
