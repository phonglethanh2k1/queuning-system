import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import EditIcon from "@mui/icons-material/Edit";
import { DeviceRoute } from "routers/device/route";
import Breadcrumb from "components/breadcrumb/Breadcrumb";

type Props = {
  device: any;
};

const Detail = (props: Props): JSX.Element => {
  const { device } = props;
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Thiết bị" },
          { label: "Danh sách thiết bị", to: "/device" },
          { label: "Chi tiết thiết bị", to: "/device" },
        ]}
      />
      <Grid container>
        <Typography variant="h3" mb={3}>
          Quản lý thiết bị
        </Typography>
        <Grid
          sx={{
            backgroundColor: "common.white",
            height: "604px",
            px: 3,
            py: 2,
            borderRadius: "16px",
          }}
          item
          xs={11}
        >
          <Typography variant="body2" fontWeight="700" mb={2}>
            Thông tin thiết bị
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={3}>
                  <Typography>Mã thiết bị: </Typography>
                  <Typography py={2}>Tên thiết bị:</Typography>
                  <Typography>Địa chỉ IP:</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography color="GrayText">{device.deviceCode}</Typography>
                  <Typography color="GrayText" py={2}>
                    {device.deviceName}
                  </Typography>
                  <Typography color="GrayText"> {device.addressIP}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={3}>
                  <Typography>Loại thiết bị:</Typography>
                  <Typography py={2}>Tên đăng nhập:</Typography>
                  <Typography>Mật khẩu:</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography color="GrayText">
                    {device.typeofDevice}
                  </Typography>
                  <Typography color="GrayText" py={2}>
                    {device.userName}
                  </Typography>
                  <Typography color="GrayText">{device.password}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography mt={2}>Dịch vụ sử dụng:</Typography>
            </Grid>
            <Typography mt={2} color="GrayText">
              {device.serviceUsed}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Link to={`${DeviceRoute.UPDATE_DEVICE.replace(":id", device.id)}`}>
            <Button
              sx={{ ml: 6, flexDirection: "column" }}
              variant="contained"
              size="medium"
              startIcon={<EditIcon sx={{ mb: 1 }} />}
            >
              Cập nhật thiết bị
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};
export default Detail;
