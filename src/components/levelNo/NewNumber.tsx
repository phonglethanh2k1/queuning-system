import { Box, Button, Grid, MenuItem, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import useYupValidationResolver from 'helpers/useYupValidationResolver';
import TextField from 'components/form/controller/TextField';
import { useDispatch } from 'react-redux';
import { addDeviceAsync } from 'redux/slices/dataSlice';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from 'components/breadcrumb/Breadcrumb';
import { LevelNoRoute } from 'routers/levelNo/route';

const validation = yup.object({});

type NewNumber = {
  printNumber: string;
};
const NewNumber = (): JSX.Element => {
  const options = ['Khám tim mạch', 'Khám sản - Phụ khoa', 'Khám răng hàm mặt', 'Khám tai mũi họng'];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resolver = useYupValidationResolver(validation);
  const methods = useForm<NewNumber>({
    resolver,
    defaultValues: {
      printNumber: '',
    },
  });
  const handleSubmit = async (values?: NewNumber) => {
    dispatch<any>(addDeviceAsync(values));
    // navigate(DeviceRoute.DEVICE);
  };
  const handleCancel = () => {
    methods.reset({
      printNumber: '',
    });
  };
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Cấp số', to: '' },
          { label: 'Danh sách cấp số', to: LevelNoRoute.LEVEL_NO },
          { label: 'Cấp số mới', to: LevelNoRoute.NEW_NUMBER_LV },
        ]}
      />
      <Box mt={1}>
        <Typography variant="h3" mb={2}>
          Quản lý cấp số
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
          <Typography variant="h2" mb={2} textAlign="center" sx={{ color: 'primary.main' }}>
            CẤP SỐ MỚI
          </Typography>
          <Typography variant="h4" mb={2} textAlign="center" textTransform="capitalize">
            Dịch vụ khách hàng lựa chọn
          </Typography>
          <FormProvider {...methods}>
            <Box component="form" noValidate onSubmit={methods.handleSubmit(handleSubmit)}>
              <Box width="40%" margin="auto">
                <TextField name="printNumber" placeholder="Chọn loại thiết bị" select>
                  {options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box textAlign="center" mt={3}>
                <Button variant="outlined" size="medium" onClick={handleCancel}>
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
                  In số
                </Button>
              </Box>
            </Box>
          </FormProvider>
        </Box>
      </Box>
    </>
  );
};
export default NewNumber;
