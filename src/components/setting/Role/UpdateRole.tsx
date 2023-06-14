import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import useYupValidationResolver from 'helpers/useYupValidationResolver';
import TextField from 'components/form/controller/TextField';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from 'components/breadcrumb/Breadcrumb';
import CheckboxGroupField from 'components/form/controller/CheckboxGroupField';
import { SettingRoute } from 'routers/setting/route';
import { Data, updateRoleAsync } from 'redux/slices/roleSlices';

const validation = yup.object({});

type Props = {
  role: any;
};
const UpdateRole = (props: Props): JSX.Element => {
  const { role } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resolver = useYupValidationResolver(validation);
  const methods = useForm<any>({
    resolver,
    defaultValues: {
      id: role.id,
      roleName: role.roleName,
      descrip: role.descrip,
      checkboxA: role.checkboxA,
      checkboxB: role.checkboxB,
    },
  });
  const { id } = role;
  const handleSubmit = async (values?: Data) => {
    console.log(values);
    dispatch<any>(updateRoleAsync({ id, values }));
    navigate(SettingRoute.ROLE);
  };
  const handleCancel = () => {
    methods.reset({
      id: '',
      roleName: '',
      descrip: '',
      checkboxA: [],
      checkboxB: [],
    });
  };
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Cài đặt hệ thống', to: '' },
          { label: 'Quản lý vai trò', to: SettingRoute.ROLE },
          { label: 'Cập nhật vai trò', to: `${SettingRoute.UPDATE_ROLE.replace(':id', role.id)}` },
        ]}
      />
      <Box mt={1}>
        <Typography variant="h3" mb={2}>
          Danh sách vai trò
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
          <Typography variant="h3" mb={2}>
            Thông tin vai trò
          </Typography>
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
                        left: '95px',
                      },
                    }}
                  />
                  <TextField name="roleName" label="Tên vai trò:" placeholder="Nhập tên vai trò" />

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
                  <TextField
                    sx={{
                      '.MuiOutlinedInput-input': {
                        pb: 11,
                      },
                    }}
                    name="descrip"
                    label="Mô tả:"
                    placeholder="Nhập mô tả"
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
                        left: '198px',
                      },
                    }}
                  />
                  <Typography mb={1.2}>Phân quyền chức năng:</Typography>
                  <Box sx={{ backgroundColor: 'error.light', borderRadius: 1, px: 3, py: 2 }}>
                    <Typography variant="h3"> Nhóm chức năng A</Typography>
                    <Box>
                      <CheckboxGroupField
                        name="checkboxA"
                        options={[
                          {
                            value: 1,
                            label: 'Tất cả',
                          },
                          {
                            value: 2,
                            label: 'Chức năng x',
                          },
                          {
                            value: 3,
                            label: 'Chức năng y',
                          },
                          {
                            value: 4,
                            label: 'Chức năng z',
                          },
                        ]}
                        getItemLabel={(item) => item.label}
                        getItemValue={(item) => item.value}
                      />
                    </Box>
                    <Box>
                      <Typography variant="h3"> Nhóm chức năng B</Typography>
                      <CheckboxGroupField
                        name="checkboxB"
                        options={[
                          {
                            value: 1,
                            label: 'Tất cả',
                          },
                          {
                            value: 2,
                            label: 'Chức năng x',
                          },
                          {
                            value: 3,
                            label: 'Chức năng y',
                          },
                          {
                            value: 4,
                            label: 'Chức năng z',
                          },
                        ]}
                        getItemLabel={(item) => item.label}
                        getItemValue={(item) => item.value}
                      />
                    </Box>
                  </Box>
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
                  size="large"
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
export default UpdateRole;
