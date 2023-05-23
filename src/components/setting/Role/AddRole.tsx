import { Box, Button, Grid, Typography } from '@mui/material';
import Breadcrumb from 'components/breadcrumb/Breadcrumb';
import CheckboxGroupField from 'components/form/controller/CheckboxGroupField';
import TextField from 'components/form/controller/TextField';
import useYupValidationResolver from 'helpers/useYupValidationResolver';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SettingRoute } from 'routers/setting/route';
import * as yup from 'yup';
const validation = yup.object({});
const AddRole = (): JSX.Element => {
  const resolver = useYupValidationResolver(validation);
  const methods = useForm<any>({
    resolver,
    defaultValues: {
      serviceCode: '',
      descrip: '',
      serviceName: '',
      increaseVerb: '',
      to: '',
      prefix: '',
      surfix: '',
      operationStt: 1,
      checkbox: [],
    },
  });
  const handleSubmit = async (values?: any) => {
    // dispatch<any>(addServiceAsync(values));
    // navigate(ServiceRoute.SERVICE);
  };
  const handleCancel = () => {
    methods.reset({
      serviceCode: '',
      descrip: '',
      serviceName: '',
      increaseVerb: '',
      to: '',
      prefix: '',
      surfix: '',
      checkbox: [1],
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
                      <Grid item xs={6} gap={3}>
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
                        <TextField name="serviceCode" label="Tên vai trò:" placeholder="Nhập tên vai trò" />

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
                          placeholder="Mô tả thiết bị"
                        />
                      </Grid>
                      <Grid item xs={6} gap={3}>
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
                        <Box>
                          <CheckboxGroupField
                            name="checkbox"
                            label="Phân quyền chức năng"
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
                            name="checkbox"
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
