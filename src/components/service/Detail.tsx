import { Box, Button, Grid, InputAdornment, TableContainer, Typography } from "@mui/material";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import AutoComplete from "components/form/AutoComplete";
import TextField from "components/form/TextField";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DatePicker from "components/form/DatePicker";
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ServiceRoute } from "routers/service/route";
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
          { label: "Dịch vụ", to: "", },
          { label: "Danh sách dịch vụ", to: ServiceRoute.SERVICE, },
          { label: "Chi tiết", to: `${ServiceRoute.SERVICE}/${service.id}`},
        ]}
      />
      <Box mt={1}>
        <Typography variant="h3" mb={3}>
          Quản lý dịch vụ
        </Typography>
        <Grid container spacing={3}>
          <Grid 
            item
            xs={4}
          > 
            <Box sx={{
              backgroundColor: "common.white",
              borderRadius: 1.2,
              height: "606px",
              p: 2,
            }} >
            <Typography variant="h3" mb={1.2}>Thông tin dịch vụ</Typography>
            <Grid container>
              <Grid item xs={12} mb={1.2}>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Mã dịch vụ: </Typography>
                    <Typography py={2}>Tên dịch vụ: </Typography>
                    <Typography>Mô tả:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                      <Typography color="GrayText">{service.serviceCode}</Typography>
                    <Typography color="GrayText" py={2}>
                    {service.serviceName}
                    </Typography>
                    <Typography color="GrayText">
                        {service.descrip}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Typography variant="h3" mb={1.2}>Quy tắc cấp số</Typography>
            <Grid container>
              <Grid item xs={12}>
                <Grid container >
                  <Grid item xs={6}>
                    <Typography mb={3}>Tăng tự động: </Typography>
                    <Typography mb={3}>Prefix: </Typography>
                    <Typography>Reset mỗi ngày</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Box display="flex" alignItems="center" mt={-1} mb={1}>
                      <Box width="50%" >
                        <TextField value={service.increaseVerb}/>
                      </Box>
                      <Typography px={2}>đến</Typography>
                      <Box width="50%" >
                        <TextField value={service.to}/>
                      </Box>
                    </Box>
                    <Box width="50%" >
                      <TextField value={service.prefix}/>
                    </Box>
                    <Typography color="GrayText"></Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Typography color="GrayText">Ví dụ: 201-2001</Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={7}
           
          >
            <Box sx={{ backgroundColor: "common.white", borderRadius: 1.2, p: 2, }}>
              <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box width="23%" >
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
                <Box width="23%">
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
                <Box mt={4}>
                  <ArrowRightIcon />
                </Box>
                <Box width="23%" mt={2.7}>
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
                <Box width="23%" >
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
              </Box>
              <TableContainer sx={{ mt: 3, borderRadius: 1 }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Số thứ tự</TableCell>
                      <TableCell align="left">Trạng thái </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow >
                        <TableCell component="th" scope="row" align="center">
                        2010001
                        </TableCell>
                        <TableCell align="left">Đã hoàn thành</TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Link to={`${ServiceRoute.UPDATE_SERVICE.replace(":id", service.id)}`}>
              <Button
                sx={{ ml: 6, flexDirection: "column", }}
                variant="contained"
                size="medium"
                startIcon={<EditIcon  sx={{mb: 2, }}/>}
              >
                Cập nhật danh sách
              </Button>
            </Link>
            <Link to={ServiceRoute.SERVICE}>
              <Button
                sx={{ ml: 6, flexDirection: "column", }}
                variant="contained"
                size="medium"
                startIcon={<SettingsBackupRestoreIcon  sx={{mb: 2, }}/>}
              >
                Quay lại
              </Button>
              </Link>
              
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Detail;
