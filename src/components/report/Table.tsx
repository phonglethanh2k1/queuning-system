import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, TableContainer, Typography, Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';
import { Data, fetchData } from 'redux/slices/reportSlices';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DatePicker from 'components/form/DatePicker';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { nameService, nameServiceOption, powerSupply, powerSupplyOption, status, statusOption } from 'types/report';
import BasicPagination from './Pagination';
import AutoComplete from 'components/form/AutoComplete';
const Tables = (): JSX.Element => {
  const [fromDate, setfromDate] = useState(new Date('10/10/2021'));
  const [toDate, setToDate] = useState(new Date());
  const [count, setCount] = useState<number>(0);
  const [selectedServiceName, setSelectedServiceName] = useState(nameService.ALL);
  const [selectedStatus, setSelectedStatus] = useState(status.ALL);
  const [selectedPowerSupply, setSelectedPowerSupply] = useState(powerSupply.ALL);
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
  useEffect(() => {
    dispatch(fetchData(selectedServiceName, selectedStatus, selectedPowerSupply, count));
  }, [dispatch, selectedServiceName, selectedStatus, selectedPowerSupply, count]);
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
      </Grid>

      <TableContainer sx={{ mt: 3, borderRadius: 1 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  STT
                  <Box width="70%">
                    <AutoComplete
                      sx={{
                        '.MuiOutlinedInput-root': {
                          padding: 0,
                        },
                      }}
                      options={[
                        {
                          id: 1,
                          label: 'Tất cả',
                        },
                        {
                          id: 2,
                          label: '2040001',
                        },
                        {
                          id: 3,
                          label: '2060001',
                        },
                        {
                          id: 4,
                          label: '2050002',
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
                </Box>
              </TableCell>
              <TableCell align="left">
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  Tên dịch vụ
                  <Box width="50%">
                    <AutoComplete
                      onChange={handleServiceName}
                      sx={{
                        '.MuiOutlinedInput-root': {
                          padding: 0,
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
                </Box>
              </TableCell>
              <TableCell align="left">
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  Thời gian cấp
                  <Box width="50%">
                    <AutoComplete
                      onChange={handlePowerSupply}
                      sx={{
                        '.MuiOutlinedInput-root': {
                          padding: 0,
                        },
                      }}
                      options={[
                        {
                          id: powerSupply.ALL,
                          label: powerSupplyOption[powerSupply.ALL].label,
                        },
                        {
                          id: 2,
                          label: '07:10  01/10/2021',
                        },
                        {
                          id: 3,
                          label: '07:15  01/10/2021',
                        },
                        {
                          id: 4,
                          label: '07:28  01/10/2021',
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
                </Box>
              </TableCell>
              <TableCell align="left">
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  Tình trạng
                  <Box width="50%">
                    <AutoComplete
                      onChange={handleStatus}
                      sx={{
                        '.MuiOutlinedInput-root': {
                          padding: 0,
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
                </Box>
              </TableCell>
              <TableCell align="left">
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  Nguồn cấp
                  <Box width="50%">
                    <AutoComplete
                      onChange={handlePowerSupply}
                      sx={{
                        '.MuiOutlinedInput-root': {
                          padding: 0,
                        },
                      }}
                      options={[
                        {
                          id: powerSupply.ALL,
                          label: powerSupplyOption[powerSupply.ALL].label,
                        },
                        {
                          id: powerSupply.HETHONG,
                          label: powerSupplyOption[powerSupply.HETHONG].label,
                        },
                        {
                          id: powerSupply.KIOSK,
                          label: powerSupplyOption[powerSupply.KIOSK].label,
                        },
                      ]}
                      getItemLabel={(item) => item.label}
                      getItemValue={(item) => item.id}
                      defaultValue={{
                        id: powerSupply.ALL,
                        label: powerSupplyOption[powerSupply.ALL].label,
                      }}
                    />
                  </Box>
                </Box>
              </TableCell>
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
