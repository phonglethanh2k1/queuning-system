import { Box, Button, Grid, MenuItem, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import useYupValidationResolver from 'helpers/useYupValidationResolver';
import TextField from 'components/form/controller/TextField';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from 'components/breadcrumb/Breadcrumb';
import { SettingRoute } from 'routers/setting/route';
import { addAccountAsync } from 'redux/slices/accountSlices';
import { Role, RoleOptions, Status, StatusOptions } from 'types/account';
import AutoCompleteField from 'components/form/controller/AutoCompleteField';

const validation = yup.object({});

const options = [
  { id: 1, label: 'Kế toán' },
  { id: 2, label: 'Quản lý' },
  { id: 3, label: 'Admin' },
];
type AddAccount = {
  fullName: string;
  userName: string;
  phoneNumber: string;
  password: string;
  email: string;
  retypePassword: string;
  role?: { id: string; label: string } | undefined;
  status: { id: number; label: string };
};
const AddAccount = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resolver = useYupValidationResolver(validation);
  const methods = useForm<AddAccount>({
    resolver,
    defaultValues: {
      fullName: '',
      userName: '',
      phoneNumber: '',
      password: '',
      email: '',
      retypePassword: '',
      role: { id: Role.ACCOUNTANT, label: RoleOptions[Role.ACCOUNTANT].label },
      status: { id: Status.ALL, label: StatusOptions[Status.ALL].label },
    },
  });
  const handleSubmit = async (values?: AddAccount) => {
    console.log(values);
    dispatch<any>(addAccountAsync(values));
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
    });
  };
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Cài đặt hệ thống', to: '' },
          { label: 'Quản lý tài khoản', to: SettingRoute.ACCOUNT },
          { label: 'Thêm tài khoản', to: SettingRoute.ADD_ACCOUNT },
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
                    mb={1}
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
                  >
                    Vai trò:
                  </Typography>
                  <AutoCompleteField
                    sx={{
                      '.MuiOutlinedInput-root': {
                        padding: '2px',
                      },
                    }}
                    name="role"
                    options={[
                      {
                        id: Role.ACCOUNTANT,
                        label: RoleOptions[Role.ACCOUNTANT].label,
                      },
                      {
                        id: Role.MANAGE,
                        label: RoleOptions[Role.MANAGE].label,
                      },
                      {
                        id: Role.ADMIN,
                        label: RoleOptions[Role.ADMIN].label,
                      },
                    ]}
                    getItemLabel={(item) => item.label}
                    getItemValue={(item) => item.id}
                    defaultValue={{
                      id: Role.ACCOUNTANT,
                      label: RoleOptions[Role.ACCOUNTANT].label,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    mb={1}
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
                  >
                    Tình trạng:
                  </Typography>
                  <AutoCompleteField
                    sx={{
                      '.MuiOutlinedInput-root': {
                        padding: '2px',
                      },
                    }}
                    name="status"
                    options={[
                      {
                        id: Status.ALL,
                        label: StatusOptions[Status.ALL].label,
                      },
                      {
                        id: Status.HOATDONG,
                        label: StatusOptions[Status.HOATDONG].label,
                      },
                      {
                        id: Status.NGUNGHOATDONG,
                        label: StatusOptions[Status.NGUNGHOATDONG].label,
                      },
                    ]}
                    getItemLabel={(item) => item.label}
                    getItemValue={(item) => item.id}
                    defaultValue={{
                      id: Status.ALL,
                      label: StatusOptions[Status.ALL].label,
                    }}
                  />
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
                  Thêm tài khoản
                </Button>
              </Box>
            </Box>
          </FormProvider>
        </Box>
      </Box>
    </>
  );
};
export default AddAccount;
