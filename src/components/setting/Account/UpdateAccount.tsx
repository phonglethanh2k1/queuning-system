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
import { Data, updateAccountAsync } from 'redux/slices/accountSlices';
import AutoCompleteField from 'components/form/controller/AutoCompleteField';
import { StatusOptions, Status, Role, RoleOptions } from 'types/account';

const validation = yup.object({});

type Props = {
  account: any;
};
const UpdateAccount = (props: Props): JSX.Element => {
  const { account } = props;
  const { id } = account;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resolver = useYupValidationResolver(validation);
  const methods = useForm<any>({
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
  const handleSubmit = async (values: Data) => {
    dispatch<any>(updateAccountAsync({ id, values }));
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
                  <Typography variant="body1" mb={1}>
                    Vai trò:
                  </Typography>
                  <AutoCompleteField
                    sx={{
                      '.MuiOutlinedInput-root': {
                        padding: '1px',
                      },
                    }}
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
                    getItemValue={(item) => item.id}
                    getItemLabel={(item) => item.label}
                    name="role"
                  />
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
                  <Typography variant="body1" mb={1}>
                    Tình trạng:
                  </Typography>
                  <AutoCompleteField
                    sx={{
                      '.MuiOutlinedInput-root': {
                        padding: '1px',
                      },
                    }}
                    options={[
                      {
                        id: Status.ALL,
                        label: StatusOptions[Status.ALL].label,
                      },
                      {
                        id: Status.ON,
                        label: StatusOptions[Status.ON].label,
                      },
                      {
                        id: Status.OFF,
                        label: StatusOptions[Status.OFF].label,
                      },
                    ]}
                    getItemValue={(item) => item.id}
                    getItemLabel={(item) => item.label}
                    name="status"
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
