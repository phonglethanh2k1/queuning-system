import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Button,
  TableContainer,
  Typography,
  Link,
  Box,
  TextField,
  InputAdornment,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/store";
import { Data, fetchData } from "redux/slices/levelNoSlices";
import {
  ConnectionStatusOption,
  OperationStatusOption,
  connectionStatus,
  operationStatus,
} from "types/device";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Link as RouterLink } from "react-router-dom";
import AutoComplete from "components/form/AutoComplete";
import SearchIcon from "@mui/icons-material/Search";
import { DeviceRoute } from "routers/device/route";
import BasicPagination from "./Pagination";
import DatePicker from "components/form/DatePicker";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const Tables = (): JSX.Element => {
  const [fromDate, setfromDate] = useState(new Date("10/10/2021"));
  const [toDate, setToDate] = useState(new Date());
  const [count, setCount] = useState<number>(0);
  const [selectedOperationStt, setSelectedOperationStt] = useState(
    operationStatus.ALL
  );
  const [selectedConnectionStt, setSelectedConnectionStt] = useState(
    connectionStatus.ALL
  );
  const handleOperationSttChange = (event: any, newValue: any) => {
    setSelectedOperationStt(newValue.id);
  };

  const handleConnectionSttChange = (event: any, newValue: any) => {
    setSelectedConnectionStt(newValue.id);
  };
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.levelNo.data);
  console.log(data)
  // const status = useSelector((state: RootState) => state.data.status);
  // const error = useSelector((state: RootState) => state.data.error);
  const renderOperationStt = (operationStt: operationStatus) => {
    if (operationStt === operationStatus.OFF) {
      return (
        <Button
          size="medium"
          variant="text"
          startIcon={<FiberManualRecordIcon color="error" />}
          sx={{ py: 1, px: 0 }}
        >
          Ngưng hoạt động
        </Button>
      );
    }

    return (
      <Button
        size="medium"
        variant="text"
        startIcon={<FiberManualRecordIcon color="success" />}
        sx={{ py: 1, px: 0 }}
      >
        Đã sử dụng
      </Button>
    );
  };
  const renderConnectionStt = (connectionStt: connectionStatus) => {
    if (connectionStt === connectionStatus.OFF) {
      return (
        <Button
          size="medium"
          variant="text"
          startIcon={<FiberManualRecordIcon color="error" />}
          sx={{ py: 1, px: 0 }}
        >
          Mất kết nối
        </Button>
      );
    }

    return (
      <Button
        size="medium"
        variant="text"
        startIcon={<FiberManualRecordIcon color="success" />}
        sx={{ py: 1, px: 0 }}
      >
        Kết nối
      </Button>
    );
  };
  // eslint-disable-next-line consistent-return
  const renderDetail = (detail: Data) => (
    <RouterLink
      to={`${DeviceRoute.DEVICE}/${detail.id}`}
      style={{ color: "#4277FF" }}
    >
      Chi tiết
    </RouterLink>
  );
  // eslint-disable-next-line consistent-return
  const renderUpdate = (detail: Data) => (
    <RouterLink
      to={`${DeviceRoute.UPDATE_DEVICE.replace(":id", detail.id)}`}
      style={{ color: "#4277FF" }}
    >
      Cập nhật
    </RouterLink>
  );
  useEffect(() => {
    dispatch(fetchData(selectedOperationStt, selectedConnectionStt, ));
  }, [dispatch, selectedOperationStt, selectedConnectionStt, count]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box >
            <Typography variant="body1">Tên dịch vụ</Typography>
            <AutoComplete
              onChange={handleOperationSttChange}
              sx={{
                ".MuiOutlinedInput-root": {
                  padding: "5px",
                },
              }}
              options={[
                {
                  id: 1,
                  label: 'Tất cả',
                },
                {
                  id: 2,
                  label: 'Khám sản - Phụ khoa',
                },
                {
                  id: 3,
                  label: 'Khám răng hàm mặt',
                },
                {
                  id: 4,
                  label: 'Khám tai mũi họng',
                },
              ]}
              getItemLabel={(item) => item.label}
              getItemValue={(item) => item.id}
              defaultValue={{
                id: 1,
                label: 'Tất cả',
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box>
            <Typography variant="body1">Tình trạng</Typography>
            <AutoComplete
              onChange={handleConnectionSttChange}
              sx={{
                ".MuiOutlinedInput-root": {
                  padding: "5px",
                },
              }}
              options={[
                {
                  id: 1,
                  label: 'Tất cả',
                },
                {
                  id: 2,
                  label: 'Đang chờ',
                },
                {
                  id: 3,
                  label: 'Đã sử dụng',
                },
                {
                  id: 4,
                  label: 'Bỏ qua',
                },
              ]}
              getItemLabel={(item) => item.label}
              getItemValue={(item) => item.id}
              defaultValue={{
                id: 1,
                label: 'Tất cả',
              }}
            />
        </Box>
        </Grid>
        <Grid item xs={2}>
          <Box>
            <Typography variant="body1">Nguồn cấp</Typography>
            <AutoComplete
              onChange={handleConnectionSttChange}
              sx={{
                ".MuiOutlinedInput-root": {
                  padding: "5px",
                },
              }}
              options={[
                {
                  id: 1,
                  label: 'Tất cả',
                },
                {
                  id: 2,
                  label: 'Kiosk',
                },
                {
                  id: 3,
                  label: 'Hệ thống',
                },
              ]}
              getItemLabel={(item) => item.label}
              getItemValue={(item) => item.id}
              defaultValue={{
                id: 1,
                label: 'Tất cả',
              }}
            />
        </Box>
        </Grid>
        <Grid item xs={2} display='flex' alignItems='center'>
          <Box>
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
          <Box mt={3} mr={-2}>
            <ArrowRightIcon />
          </Box>
          
        </Grid>
        <Grid item xs={2}>
          <Box  mt={2.8}>
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
            </Grid>
        <Grid item xs={2}>
          <Box>
          <Typography variant="body1">Từ khóa</Typography>
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
      </Grid>

      <TableContainer sx={{ mt: 3, borderRadius: 1 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="center">STT</TableCell>
              <TableCell align="center">Tên Khách hàng</TableCell>
              <TableCell align="left">Tên dịch vụ</TableCell>
              <TableCell align="left">Thời gian cấp</TableCell>
              <TableCell align="left">Hạn sử dụng</TableCell>
              <TableCell align="left">Trạng thái </TableCell>
              <TableCell align="left">Nguồn cấp</TableCell>
              <TableCell align="left" />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" align="center">
                  {row.stt}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {row.customerName}
                </TableCell>
                <TableCell align="left">{row.serviceName}</TableCell>
                <TableCell align="left">{row.timeLevel}</TableCell>
                <TableCell align="left">{row.expiry}</TableCell>
                <TableCell align="left">
                  {renderOperationStt(row.status)}
                </TableCell>
                <TableCell align="left">
                  {row.powerSupply}
                </TableCell>
                <TableCell align="left">{renderDetail(row)}</TableCell>
              </TableRow>
               
            ))}
          </TableBody>
        </Table>
          <BasicPagination  />
      </TableContainer>
    </>
  );
};
export default Tables;
