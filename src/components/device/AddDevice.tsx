import { Box, Button, Grid, MenuItem, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import useYupValidationResolver from "helpers/useYupValidationResolver";
import TextField from "components/form/controller/TextField";
import { useDispatch } from "react-redux";
import { addDeviceAsync } from "redux/slices/dataSlice";
import { useNavigate } from "react-router-dom";
import { connectionStatus, operationStatus } from "types/device";
import { DeviceRoute } from "routers/device/route";
import Breadcrumb from "components/breadcrumb/Breadcrumb";

const validation = yup.object({});

type AddDevice = {
  deviceCode: string;
  typeofDevice: string;
  deviceName: string;
  userName: string;
  addressIP: string;
  password: string;
  serviceUsed?: string;
  operationStt?: operationStatus;
  connectionStt?: connectionStatus;
};
const AddDevice = (): JSX.Element => {
  const options = ["kiosk", "Display counter"];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resolver = useYupValidationResolver(validation);
  const methods = useForm<AddDevice>({
    resolver,
    defaultValues: {
      deviceCode: "",
      typeofDevice: "",
      deviceName: "",
      userName: "",
      addressIP: "",
      password: "",
      serviceUsed: "",
      operationStt: 1,
      connectionStt: 1,
    },
  });
  const handleSubmit = async (values?: AddDevice) => {
    dispatch<any>(addDeviceAsync(values));
    navigate(DeviceRoute.DEVICE);
  };
  const handleCancel = () => {
    methods.reset({
      deviceCode: "",
      typeofDevice: "",
      deviceName: "",
      userName: "",
      addressIP: "",
      password: "",
      serviceUsed: "",
    });
  };
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Thiết bị" },
          { label: "Danh sách thiết bị", to: "/device" },
          { label: "Thêm Thiết bị", to: "/add-device" },
        ]}
      />
      <Box>
        <Typography variant="h3" mb={2}>
          Quản lý thiết bị
        </Typography>
        <Box
          sx={{
            backgroundColor: "common.white",
            width: "90%",
            px: 3,
            py: 4,
            borderRadius: "16px",
          }}
        >
          <FormProvider {...methods}>
            <Box
              component="form"
              noValidate
              onSubmit={methods.handleSubmit(handleSubmit)}
            >
              <Grid container mb={3} spacing={3}>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      position: "relative",
                      ":after": {
                        position: "absolute",
                        content: '"*"',
                        color: "error.dark",
                        left: "95px",
                      },
                    }}
                  />
                  <TextField
                    name="deviceCode"
                    label="Mã thiết bị:"
                    placeholder="Nhập mã thiết bị"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      position: "relative",
                      ":after": {
                        position: "absolute",
                        content: '"*"',
                        color: "error.dark",
                        left: "105px",
                      },
                    }}
                  />
                  <TextField
                    name="typeofDevice"
                    label="Loại thiết bị:"
                    placeholder="Chọn loại thiết bị"
                    select
                  >
                    {options.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
              <Grid container mb={3} spacing={3}>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      position: "relative",
                      ":after": {
                        position: "absolute",
                        content: '"*"',
                        color: "error.dark",
                        left: "100px",
                      },
                    }}
                  />
                  <TextField
                    name="deviceName"
                    label="Tên thiết bị:"
                    placeholder="Nhập tên thiết bị"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      position: "relative",
                      ":after": {
                        position: "absolute",
                        content: '"*"',
                        color: "error.dark",
                        left: "130px",
                      },
                    }}
                  />
                  <TextField
                    name="userName"
                    label="Tên đăng nhập:"
                    placeholder="Nhập tài khoản"
                  />
                </Grid>
              </Grid>
              <Grid container mb={3} spacing={3}>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      position: "relative",
                      ":after": {
                        position: "absolute",
                        content: '"*"',
                        color: "error.dark",
                        left: "90px",
                      },
                    }}
                  />
                  <TextField
                    name="addressIP"
                    label="Địa chỉ IP:"
                    placeholder="Nhập địa chỉ IP"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      position: "relative",
                      ":after": {
                        position: "absolute",
                        content: '"*"',
                        color: "error.dark",
                        left: "90px",
                      },
                    }}
                  />
                  <TextField
                    name="password"
                    label="Mật khẩu:"
                    placeholder="Nhập mật khẩu"
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} mb={3}>
                <TextField
                  name="serviceUsed"
                  label="Dịch vụ sử dụng:"
                  placeholder="Nhập dịch vụ sử dụng"
                />
              </Grid>

              <Typography
                variant="h6"
                fontStyle="italic"
                padding="10px"
                fontWeight="300"
                sx={{
                  position: "relative",
                  ":before": {
                    position: "absolute",
                    content: '"*"',
                    color: "error.dark",
                    left: "0",
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
                    backgroundColor: "primary.main",
                    color: "white",
                    ml: 4,
                  }}
                  type="submit"
                >
                  Thêm thiết bị
                </Button>
              </Box>
            </Box>
          </FormProvider>
        </Box>
      </Box>
    </>
  );
};
export default AddDevice;
