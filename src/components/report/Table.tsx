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
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/store";
import { Data, fetchData } from "redux/slices/reportSlices";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Link } from "react-router-dom";
import AutoComplete from "components/form/AutoComplete";
import DatePicker from "components/form/DatePicker";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { LevelNoRoute } from "routers/levelNo/route";
import {
  nameService,
  nameServiceOption,
  powerSupply,
  powerSupplyOption,
  status,
  statusOption,
} from "types/levelNo";
import BasicPagination from "./Pagination";
import AutoCompleteField from "components/form/controller/AutoCompleteField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
const Tables = (): JSX.Element => {
  const [fromDate, setfromDate] = useState(new Date("10/10/2021"));
  const [toDate, setToDate] = useState(new Date());
  const [count, setCount] = useState<number>(0);
  const [selectedServiceName, setSelectedServiceName] = useState(
    nameService.ALL
  );
  const [selectedStatus, setSelectedStatus] = useState(status.ALL);
  const [selectedPowerSupply, setSelectedPowerSupply] = useState(
    powerSupply.ALL
  );
  const handleServiceName = (event: any, newValue: any) => {
    setSelectedServiceName(newValue.id);
  };
  const handleStatus = (event: any, newValue: any) => {
    setSelectedStatus(newValue.id);
  };
  const handlePowerSupply = (event: any, newValue: any) => {
    setSelectedPowerSupply(newValue.id);
  };
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.report.data);
  // const status = useSelector((state: RootState) => state.data.status);
  // const error = useSelector((state: RootState) => state.data.error);
  const renderStatus = (status: number) => {
    if (status === 0) {
      return (
        <Button
          size="medium"
          variant="text"
          startIcon={<FiberManualRecordIcon color="secondary" />}
          sx={{ py: 1, px: 0 }}
        >
          Đang chờ
        </Button>
      );
    }

    if (status === -1) {
      return (
        <Button
          size="medium"
          variant="text"
          startIcon={<FiberManualRecordIcon color="error" />}
          sx={{ py: 1, px: 0 }}
        >
          Bỏ qua
        </Button>
      );
    }
    return (
      <Button
        size="medium"
        variant="text"
        startIcon={<FiberManualRecordIcon color="info" />}
        sx={{ py: 1, px: 0 }}
      >
        Đã sử dụng
      </Button>
    );
  };
  useEffect(() => {
    dispatch(
      fetchData(selectedServiceName, selectedStatus, selectedPowerSupply, count)
    );
  }, [
    dispatch,
    selectedServiceName,
    selectedStatus,
    selectedPowerSupply,
    count,
  ]);
  const options = ['Tất cả', 20012, 231231, 1231];
  const optionsCheck = [
    { value : 'Tất cả', Checkked: true},
    { value: 'Khám tim mạch', checked: false },
    { value: 'Khám mắt', checked: false },
    { value: 'Khám tổng quát', checked: false },
  ];
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2} display="flex" alignItems="center">
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
          <Box mt={2.8}>
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
      </Grid>

      <TableContainer sx={{ mt: 3, borderRadius: 1 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  STT
                  <FormControl sx={{ width: "70%" }}>
                    <Select
                      value=""
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      {options.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </TableCell>
              <TableCell align="left">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  Tên dịch vụ
                  <FormControl sx={{ width: "50%" }}>
                    <Select
                      value=""
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      {optionsCheck.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          <Checkbox checked={option.checked} />
                          {option.value}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </TableCell>
              <TableCell align="left">Thời gian cấp</TableCell>
              <TableCell align="left">Trạng thái </TableCell>
              <TableCell align="left">Nguồn cấp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" align="left">
                  {row.stt}
                </TableCell>
                <TableCell align="left">{row.serviceName}</TableCell>
                <TableCell align="left">{row.timeLevel}</TableCell>
                <TableCell align="left">{renderStatus(row.status)}</TableCell>
                <TableCell align="left">{row.powerSupply}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <BasicPagination />
      </TableContainer>
    </>
  );
};
export default Tables;
