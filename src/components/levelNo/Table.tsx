import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, TableContainer, Typography, Box, TextField, InputAdornment, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';
import { Data, fetchData, fetchSearchLevelNo } from 'redux/slices/levelNoSlices';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Link } from 'react-router-dom';
import AutoComplete from 'components/form/AutoComplete';
import SearchIcon from '@mui/icons-material/Search';
import BasicPagination from './Pagination';
import DatePicker from 'components/form/DatePicker';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { LevelNoRoute } from 'routers/levelNo/route';
import { nameService, nameServiceOption, powerSupply, powerSupplyOption, status, statusOption } from 'types/levelNo';
const Tables = (): JSX.Element => {
  const [fromDate, setfromDate] = useState(new Date('10/10/2021'));

  const [toDate, setToDate] = useState(new Date());

  const [count, setCount] = useState<number>(0);

  const [selectedServiceName, setSelectedServiceName] = useState(nameService.ALL);

  const [selectedStatus, setSelectedStatus] = useState(status.ALL);

  const [selectedPowerSupply, setSelectedPowerSupply] = useState(powerSupply.ALL);

  const [searchTerm, setSearchTerm] = useState<any>('');

  const handleOnChange = (event: any) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
    dispatch(fetchSearchLevelNo(event.target.value));
  };
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
  const data = useSelector((state: RootState) => state.levelNo.data);
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
        <Button size="medium" variant="text" startIcon={<FiberManualRecordIcon color="error" />} sx={{ py: 1, px: 0 }}>
          Bỏ qua
        </Button>
      );
    }
    return (
      <Button size="medium" variant="text" startIcon={<FiberManualRecordIcon color="info" />} sx={{ py: 1, px: 0 }}>
        Đã sử dụng
      </Button>
    );
  };
  const renderDetail = (detail: Data) => {
    return (
      <Link to={`${LevelNoRoute.DETAIL_LEVEL_NO.replace(':id', detail.id)}`} style={{ color: '#4277FF' }}>
        Chi tiết
      </Link>
    );
  };
  useEffect(() => {
    dispatch(fetchData(selectedServiceName, selectedStatus, selectedPowerSupply, count));
  }, [dispatch, selectedServiceName, selectedStatus, selectedPowerSupply, count]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box>
            <Typography variant="body1">Tên dịch vụ</Typography>
            <AutoComplete
              onChange={handleServiceName}
              sx={{
                '.MuiOutlinedInput-root': {
                  padding: '5px',
                },
              }}
              options={[
                {
                  id: nameService.ALL,
                  label: nameServiceOption[nameService.ALL].label,
                },
                {
                  id: nameService.KHAM1,
                  label: nameServiceOption[nameService.KHAM1].label,
                },
                {
                  id: nameService.KHAM2,
                  label: nameServiceOption[nameService.KHAM2].label,
                },
                {
                  id: nameService.KHAM3,
                  label: nameServiceOption[nameService.KHAM3].label,
                },
              ]}
              getItemLabel={(item) => item.label}
              getItemValue={(item) => item.id}
              defaultValue={{
                id: nameService.ALL,
                label: nameServiceOption[nameService.ALL].label,
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box>
            <Typography variant="body1">Tình trạng</Typography>
            <AutoComplete
              onChange={handleStatus}
              sx={{
                '.MuiOutlinedInput-root': {
                  padding: '5px',
                },
              }}
              options={[
                {
                  id: status.ALL,
                  label: statusOption[status.ALL].label,
                },
                {
                  id: status.WAITING,
                  label: statusOption[status.WAITING].label,
                },
                {
                  id: status.USED,
                  label: statusOption[status.USED].label,
                },
                {
                  id: status.SKIP,
                  label: statusOption[status.SKIP].label,
                },
              ]}
              getItemLabel={(item) => item.label}
              getItemValue={(item) => item.id}
              defaultValue={{
                id: status.ALL,
                label: statusOption[status.ALL].label,
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box>
            <Typography variant="body1">Nguồn cấp</Typography>
            <AutoComplete
              onChange={handlePowerSupply}
              sx={{
                '.MuiOutlinedInput-root': {
                  padding: '5px',
                },
              }}
              options={[
                {
                  id: powerSupply.ALL,
                  label: powerSupplyOption[powerSupply.ALL].label,
                },
                {
                  id: powerSupply.KIOSK,
                  label: powerSupplyOption[powerSupply.KIOSK].label,
                },
                {
                  id: powerSupply.HETHONG,
                  label: powerSupplyOption[powerSupply.HETHONG].label,
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
        <Grid item xs={2} display="flex" alignItems="center">
          <Box>
            <Typography variant="body1">Chọn thời gian</Typography>
            <DatePicker
              value={fromDate}
              onChange={(newValue: any) => setfromDate(newValue)}
              sx={{
                '.MuiOutlinedInput-root': {
                  padding: '4px',
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
                '.MuiOutlinedInput-root': {
                  padding: '4px',
                },
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box>
            <Typography variant="body1">Từ khóa</Typography>
            <TextField
              value={searchTerm}
              onChange={handleOnChange}
              placeholder="Nhập từ khóa"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                '.MuiOutlinedInput-input': {
                  py: '12px',
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
                <TableCell align="left">{renderStatus(row.status)}</TableCell>
                <TableCell align="left">{row.powerSupply}</TableCell>
                <TableCell align="left">{renderDetail(row)}</TableCell>
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
