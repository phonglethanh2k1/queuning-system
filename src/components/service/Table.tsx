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
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/store";
import { Data, fetchData } from "redux/slices/serviceSlice";
import { OperationStatusOption, operationStatus } from "types/service";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Link as RouterLink } from "react-router-dom";
import AutoComplete from "components/form/AutoComplete";
import SearchIcon from "@mui/icons-material/Search";
import { DeviceRoute } from "routers/device/route";
import DatePicker from "components/form/DatePicker";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const Tables = (): JSX.Element => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.service.data);
  const [selectedOperationStt, setSelectedOperationStt] = useState(
    operationStatus.ALL
  );
  const [fromDate, setfromDate] = useState(new Date("10/10/2021"));
  const [toDate, setToDate] = useState(new Date());
  const handleOperationSttChange = (event: any, newValue: any) => {
    setSelectedOperationStt(newValue.id);
  };

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
        Hoạt động
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
    dispatch(fetchData(selectedOperationStt));
  }, [dispatch, selectedOperationStt]);

  return (
    <>
      <Box display="flex">
        <Box flexGrow={1} display="flex" alignItems="center">
          <Box width="20%" mr={8}>
            <Typography variant="body1">Trạng thái hoạt động</Typography>
            <AutoComplete
              onChange={handleOperationSttChange}
              sx={{
                ".MuiOutlinedInput-root": {
                  padding: "5px",
                },
              }}
              options={[
                {
                  id: operationStatus.ALL,
                  label: OperationStatusOption[operationStatus.ALL].label,
                },
                {
                  id: operationStatus.ON,
                  label: OperationStatusOption[operationStatus.ON].label,
                },
                {
                  id: operationStatus.OFF,
                  label: OperationStatusOption[operationStatus.OFF].label,
                },
              ]}
              getItemLabel={(item) => item.label}
              getItemValue={(item) => item.id}
              defaultValue={{
                id: operationStatus.ALL,
                label: OperationStatusOption[operationStatus.ALL].label,
              }}
            />
          </Box>
          <Box width="10%">
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
          <Box width="10%" mt={2.5}>
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
        </Box>
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
      </Box>

      <TableContainer sx={{ mt: 3, borderRadius: 1 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Mã dịch vụ</TableCell>
              <TableCell align="left">Tên dịch vụ </TableCell>
              <TableCell align="left">Mô tả</TableCell>
              <TableCell align="left">Trạng thái hoạt động</TableCell>
              <TableCell align="left" />
              <TableCell align="left" />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" align="center">
                  {row.serviceCode}
                </TableCell>
                <TableCell align="left">{row.serviceName}</TableCell>
                <TableCell align="left">{row.descrip}</TableCell>
                <TableCell align="left">
                  {renderOperationStt(row.operationStt)}
                </TableCell>

                <TableCell align="left">{renderDetail(row)}</TableCell>
                <TableCell align="left">{renderUpdate(row)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default Tables;
