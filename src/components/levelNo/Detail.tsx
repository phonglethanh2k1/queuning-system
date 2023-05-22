import {  Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import EditIcon from "@mui/icons-material/Edit";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import { LevelNo } from "types/levelNo";
import { LevelNoRoute } from "routers/levelNo/route";

type Props = {
  levelNo: LevelNo;
};

const Detail = (props: Props): JSX.Element => {
  const { levelNo } = props;
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Cấp số", to: '' },
          { label: "Danh sách cấp số", to: LevelNoRoute.LEVEL_NO },
          { label: "Chi tiết", to: `${LevelNoRoute.LEVEL_NO}/${levelNo.id}`},
        ]}
      />
      <Grid container mt={1}>
        <Typography variant="h3" mb={3}>
          Quản lý cấp số
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
            Thông tin cấp số
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={3}>
                  <Typography>Họ tên: </Typography>
                  <Typography>Tên dịch vụ:</Typography>
                  <Typography>Số thứ tự:</Typography>
                  <Typography>Thời gian cấp:</Typography>
                  <Typography>Hạn sử dụng:</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography color="GrayText">{levelNo.customerName}</Typography>
                  <Typography color="GrayText" >
                    {levelNo.serviceName}
                  </Typography>
                  <Typography color="GrayText"> {levelNo.stt}</Typography>
                  <Typography color="GrayText"> {levelNo.timeLevel}</Typography>
                  <Typography color="GrayText"> {levelNo.expiry}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={3}>
                  <Typography>Nguồn cấp:</Typography>
                  <Typography>Trạng thái:</Typography>
                  <Typography>Số điện thoại:</Typography>
                  <Typography>Địa chỉ Email:</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography color="GrayText">
                    {levelNo.powerSupply}
                  </Typography>
                  <Typography color="GrayText" >
                    {levelNo.status}
                  </Typography>
                  {/* <Typography color="GrayText">{levelNo.phone}</Typography>
                  <Typography color="GrayText">{levelNo.phone}</Typography> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Link to={`${LevelNoRoute.LEVEL_NO}`}>
            <Button
              sx={{ ml: 6, flexDirection: "column" }}
              variant="contained"
              size="medium"
              startIcon={<EditIcon sx={{ mb: 1 }} />}
            >
              Quay lại
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};
export default Detail;
