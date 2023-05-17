import { Box, Grid, InputAdornment, Typography } from "@mui/material";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import AutoComplete from "components/form/AutoComplete";
import TextField from "components/form/TextField";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DatePicker from "components/form/DatePicker";
type Props = {
  service: any;
};
const Detail = (props: Props): JSX.Element => {
  const { service } = props;
  const [fromDate, setfromDate] = useState(new Date("10/10/2021"));
  const [toDate, setToDate] = useState(new Date());

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Dịch vụ" },
          { label: "Danh sách dịch vụ", to: "/service" },
          { label: "chi tiết", to: "/service" },
        ]}
      />
      <Box>
        <Typography variant="h3" mb={3}>
          Quản lý dịch vụ
        </Typography>
        <Grid container>
          <Grid
            item
            xs={4}
            sx={{
              backgroundColor: "common.white",
              borderRadius: 1.2,
              height: "606px",
              p: 2,
            }}
          >
            <Typography variant="h3">Thông tin dịch vụ</Typography>
            <Grid container>
              <Grid item xs={8}>
                <Grid container>
                  <Grid item xs={4}>
                    <Typography>Mã dịch vụ: </Typography>
                    <Typography py={2}>Tên dịch vụ: </Typography>
                    <Typography>Mô tả:</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography color="GrayText">201</Typography>
                    <Typography color="GrayText" py={2}>
                      Khám tim mạch
                    </Typography>
                    <Typography color="GrayText">
                      Khám Chuyên các bệnh lý về tim
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Typography variant="h3">Quy tắc cấp số</Typography>
            <Grid container>
              <Grid item xs={8}>
                <Grid container>
                  <Grid item xs={4}>
                    <Typography>Tăng tự động: </Typography>
                    <Typography py={2}>Prefix: </Typography>
                    <Typography>Reset mỗi ngày</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Box display="flex" alignItems="center">
                      <Box width="50%">
                        <TextField />
                      </Box>
                      <Typography>đến</Typography>
                      <Box width="50%">
                        <TextField />
                      </Box>
                    </Box>
                    <Box width="50%">
                      <TextField />
                    </Box>
                    <Typography color="GrayText"></Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Typography color="GrayText">Ví dụ: 201-2001</Typography>
          </Grid>
          <Grid
            item
            xs={7}
            sx={{ backgroundColor: "common.white", p: 2, borderRadius: 1.2 }}
            display="flex"
            justifyContent="space-between"
          >
            <Box width="20%" mr={8}>
              <Typography variant="body1">Trạng thái</Typography>
              <AutoComplete
                sx={{
                  ".MuiOutlinedInput-root": {
                    padding: "5px",
                  },
                }}
                options={[
                  {
                    id: 1,
                    label: "Tất cả",
                  },
                  {
                    id: 2,
                    label: "Đã hoàn thành",
                  },
                  {
                    id: 3,
                    label: "Đã thực hiện",
                  },
                  {
                    id: 4,
                    label: "Vắng",
                  },
                ]}
                getItemLabel={(item) => item.label}
                getItemValue={(item) => item.id}
                defaultValue={{
                  id: 1,
                  label: "Tất cả",
                }}
              />
            </Box>
            <Box width="20%">
              <Typography variant="body1">Chọn thời gian</Typography>

              <DatePicker
                value={fromDate}
                onChange={(newValue: any) => setfromDate(newValue)}
                sx={{
                  ".MuiOutlinedInput-root": {
                    padding: "4px",
                  },
                }}
              />
            </Box>
            <Box mt={3}>
              <ArrowRightIcon />
            </Box>
            <Box width="20%" mt={2.7}>
              <DatePicker
                value={toDate}
                onChange={(newValue: any) => setToDate(newValue)}
                sx={{
                  ".MuiOutlinedInput-root": {
                    padding: "4px",
                  },
                }}
              />
            </Box>

            <Box width="20%" mr={8}>
              <Typography variant="body1">Từ khoá</Typography>
              <TextField
                placeholder="Nhập từ khóa"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  ".MuiOutlinedInput-input": {
                    py: "12px",
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={1}
            sx={{ backgroundColor: "common.white", p: 2, borderRadius: 1.2 }}
          >
            1
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Detail;
