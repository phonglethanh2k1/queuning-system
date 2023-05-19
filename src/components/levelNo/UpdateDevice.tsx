import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import useYupValidationResolver from "helpers/useYupValidationResolver";
import TextField from "components/form/controller/TextField";
import { Data, updateDeviceAsync } from "redux/slices/dataSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { DeviceRoute } from "routers/device/route";
import CloseIcon from "@mui/icons-material/Close";
import Breadcrumb from "components/breadcrumb/Breadcrumb";

const validation = yup.object({});

type Props = {
  device: any;
};
const styles = {
  button: {
    flex: 1,
    margin: "0 4px",
  },
  input: {
    width: "100%",
  },
};
const UpdateDevice = (props: Props): JSX.Element => {
  const { device } = props;
  const options = ["kiosk", "Display counter"];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resolver = useYupValidationResolver(validation);
  const methods = useForm<any>({
    resolver,
    defaultValues: {
      id: device.id,
      deviceCode: device.deviceCode,
      typeofDevice: device.typeofDevice,
      deviceName: device.deviceName,
      userName: device.userName,
      addressIP: device.addressIP,
      serviceUsed: "",
      password: device.password,
    },
  });
  const { id } = device;
  const handleSubmit = async (values?: Data) => {
    dispatch<any>(updateDeviceAsync({ id, values }));
    navigate(DeviceRoute.DEVICE);
  };
  const handleCancel = () => {
    methods.reset({
      id: "",
      deviceCode: "",
      typeofDevice: "",
      deviceName: "",
      userName: "",
      addressIP: "",
      serviceUsed: "",
      password: "",
    });
  };
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Thiết bị", to: '' },
          { label: "Danh sách thiết bị", to: DeviceRoute.DEVICE },
          { label: "Cập nhật thiết bị", to: `${DeviceRoute.UPDATE_DEVICE.replace(":id", device.id)}` },
        ]}
      />
      <Box mt={1}>
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
                  InputProps={{
                    startAdornment: (
                      <Grid container spacing={1}>
                        <Grid item xs={2}>
                          <IconButton>Button 1</IconButton>
                        </Grid>
                        <Grid item xs={2}>
                          <IconButton>Button 2</IconButton>
                        </Grid>
                        <Grid item xs={2}>
                          <IconButton>Button 3</IconButton>
                        </Grid>
                        <Grid item xs={2}>
                          <IconButton>Button 4</IconButton>
                        </Grid>
                        <Grid item xs={2}>
                          <IconButton>Button 5</IconButton>
                        </Grid>
                        <Grid item xs={2}>
                          <IconButton>Button 6</IconButton>
                        </Grid>
                      </Grid>
                    ),
                  }}
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
                  size="large"
                  sx={{
                    backgroundColor: "primary.main",
                    color: "white",
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
export default UpdateDevice;
