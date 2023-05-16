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
import CheckboxGroupField from "components/form/controller/CheckboxGroupField";

const validation = yup.object({});

type AddService = {
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
const AddService = (): JSX.Element => {
  const options = ["kiosk", "Display counter"];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resolver = useYupValidationResolver(validation);
  const methods = useForm<AddService>({
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
  const handleSubmit = async (values?: AddService) => {
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
          { label: "Dịch vụ" },
          { label: "Danh sách dịch vụ", to: "/service" },
          { label: "Thêm dịch vụ", to: "add-service" },
        ]}
      />
      <Box>
        <Typography variant="h3" mb={2}>
          Quản lý dịch vụ
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
          <Typography variant="h3" mb={2}>
            Thông tin dịch vụ
          </Typography>
          <FormProvider {...methods}>
            <Box
              component="form"
              noValidate
              onSubmit={methods.handleSubmit(handleSubmit)}
            >
              <Grid container mb={3} spacing={3}>
                <Grid item xs={12} display="flex" gap={3}>
                  <Grid container flexDirection="row">
                    <Grid item xs={12}>
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
                        label="Mã dịch vụ:"
                        placeholder="Nhập mã dịch vụ"
                      />
                    </Grid>
                    <Grid item xs={12}>
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
                        label="Tên dịch vụ:"
                        placeholder="Nhập tên dịch vụ"
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      sx={{
                        position: "relative",
                        ":after": {
                          position: "absolute",
                          content: '"*"',
                          color: "error.dark",
                          left: "55px",
                        },
                      }}
                    />
                    <TextField
                      sx={{
                        ".MuiOutlinedInput-input": {
                          pb: 11,
                        },
                      }}
                      name="typeofDevice"
                      label="Mô tả:"
                      placeholder="Mô tả thiết bị"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid container mb={3} spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h3" mb={2}>
                    Quy tắc cấp số
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <CheckboxGroupField
                        name="checkbox"
                        options={[
                          {
                            value: 1,
                            label: "Tăng tự động từ:",
                          },
                          {
                            value: 2,
                            label: "Prefix:",
                          },
                          {
                            value: 3,
                            label: "Surfix:",
                          },
                          {
                            value: 4,
                            label: "Reset mỗi ngày",
                          },
                        ]}
                        getItemLabel={(item) => item.label}
                        getItemValue={(item) => item.value}
                      />
                    </Box>
                    <Box>
                      <Box width="30%">
                        <TextField name="" />
                      </Box>
                      <Box width="30%" py={2}>
                        <TextField name="" />
                      </Box>
                      <Box width="30%">
                        <TextField name="" />
                      </Box>
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
export default AddService;
