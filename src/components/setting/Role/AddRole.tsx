import { Box, Button, Grid, Typography } from '@mui/material';
import Breadcrumb from 'components/breadcrumb/Breadcrumb';
import CheckboxGroupField from 'components/form/controller/CheckboxGroupField';
import TextField from 'components/form/controller/TextField';
import useYupValidationResolver from 'helpers/useYupValidationResolver';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SettingRoute } from 'routers/setting/route';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { addRoleAsync } from 'redux/slices/roleSlices';
import Setting from '..';
import { useNavigate } from 'react-router-dom';
type AddRole = {
  roleName: string;
  descrip: string;
  numberOfUsers: string;
  checkboxA: number[];
  checkboxB: number[];
};
const validation = yup.object({});
const AddRole = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resolver = useYupValidationResolver(validation);
  const methods = useForm<AddRole>({
    resolver,
    defaultValues: {
      roleName: '',
      descrip: '',
      numberOfUsers: '6',
      checkboxA: [1],
      checkboxB: [1],
    },
  });
  const handleSubmit = async (values?: AddRole) => {
    console.log(values);
    dispatch<any>(addRoleAsync(values));
    navigate(SettingRoute.ROLE);
  };
  // const handleCheckboxChange = (newValue: any) => {
  //   if (newValue.includes(1)) {
  //     setCheckboxValues([1, 2, 3, 4]); // Nếu checkbox "Tất cả" được chọn, đánh dấu tất cả các checkbox khác
  //   } else {
  //     setCheckboxValues(newValue); // Ngược lại, lưu trạng thái của checkbox như bình thường
  //   }
  // };
  const handleCancel = () => {
    methods.reset({
      roleName: '',
      descrip: '',
      numberOfUsers: '',
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
          { label: 'Thêm vai trò', to: SettingRoute.ADD_ROLE },
        ]}
      />
      <Box mt={1}>
        <Box>
          <Typography variant="h3" mb={2}>
            Danh sách vai trò
          </Typography>
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  backgroundColor: 'common.white',
                  width: '100%',
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
                        Thêm
                      </Button>
                    </Box>
                  </Box>
                </FormProvider>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default AddRole;
