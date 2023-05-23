import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import EditIcon from '@mui/icons-material/Edit';
import Breadcrumb from 'components/breadcrumb/Breadcrumb';
import { LevelNo, status } from 'types/levelNo';
import { LevelNoRoute } from 'routers/levelNo/route';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
type Props = {
  levelNo: LevelNo;
};

const Detail = (props: Props): JSX.Element => {
  const { levelNo } = props;
  const renderStatus = (status: number) => {
    if (status === 0) {
      return (
        <Button
          size="medium"
          variant="text"
          startIcon={<FiberManualRecordIcon color="secondary" />}
          sx={{ py: 0, px: 0 }}
        >
          Đang chờ
        </Button>
      );
    }

    if (status === -1) {
      return (
        <Button size="medium" variant="text" startIcon={<FiberManualRecordIcon color="error" />} sx={{ py: 0, px: 0 }}>
          Bỏ qua
        </Button>
      );
    }
    return (
      <Button size="medium" variant="text" startIcon={<FiberManualRecordIcon color="info" />} sx={{ py: 0, px: 0 }}>
        Đã sử dụng
      </Button>
    );
  };
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Cấp số', to: '' },
          { label: 'Danh sách cấp số', to: LevelNoRoute.LEVEL_NO },
          { label: 'Chi tiết', to: `${LevelNoRoute.LEVEL_NO}/${levelNo.id}` },
        ]}
      />
      <Grid container mt={1}>
        <Typography variant="h3" mb={3}>
          Quản lý cấp số
        </Typography>
        <Grid
          sx={{
            backgroundColor: 'common.white',
            height: '604px',
            px: 3,
            py: 2,
            borderRadius: '16px',
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
                  <Typography mb={1.2}>Họ tên: </Typography>
                  <Typography mb={1.2}>Tên dịch vụ:</Typography>
                  <Typography mb={1.2}>Số thứ tự:</Typography>
                  <Typography mb={1.2}>Thời gian cấp:</Typography>
                  <Typography>Hạn sử dụng:</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography color="GrayText" mb={1.2}>
                    {levelNo.customerName}
                  </Typography>
                  <Typography color="GrayText" mb={1.2}>
                    {levelNo.serviceName}
                  </Typography>
                  <Typography color="GrayText" mb={1.2}>
                    {' '}
                    {levelNo.stt}
                  </Typography>
                  <Typography color="GrayText" mb={1.2}>
                    {' '}
                    {levelNo.timeLevel}
                  </Typography>
                  <Typography color="GrayText"> {levelNo.expiry}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={3}>
                  <Typography mb={1.2}>Nguồn cấp:</Typography>
                  <Typography mb={1.2}>Trạng thái:</Typography>
                  <Typography mb={1.2}>Số điện thoại:</Typography>
                  <Typography>Địa chỉ Email:</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography color="GrayText" mb={1.2}>
                    {levelNo.powerSupply}
                  </Typography>
                  <Typography color="GrayText" mb={1.2}>
                    {renderStatus(levelNo.status)}
                  </Typography>
                  <Typography color="GrayText" mb={1.2}>
                    0948523623
                  </Typography>
                  <Typography color="GrayText">nguyendung@gmail.com</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Link to={`${LevelNoRoute.LEVEL_NO}`}>
            <Button
              sx={{ ml: 6, flexDirection: 'column' }}
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
